/*
 * @Author: Innei
 * @Date: 2020-04-30 12:21:51
 * @LastEditTime: 2020-07-12 14:18:04
 * @LastEditors: Innei
 * @FilePath: /mx-server/src/shared/links/links.service.ts
 * @Coding with Love
 */

import { Link, LinkState, LinkType } from '@libs/db/models/link.model'
import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model'
import { ConfigsService } from '../../common/global/configs/configs.service'
import { Mailer } from '../../plugins/mailer'
import { BaseService } from '../base/base.service'
import { merge } from 'lodash'
import { AdminEventsGateway } from '../../gateway/admin/events.gateway'
import { EventTypes } from '../../gateway/events.types'

@Injectable()
export class LinksService extends BaseService<Link> {
  constructor(
    @InjectModel(Link) private readonly model: ReturnModelType<typeof Link>,
    private readonly configs: ConfigsService,
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
    private readonly adminGateway: AdminEventsGateway,
  ) {
    super(model)
  }
  async applyForLink(model: Link) {
    try {
      const doc = await this.createNew({
        ...model,
        type: LinkType.Friend,
        state: LinkState.Audit,
      })

      Promise.resolve(this.adminGateway.broadcase(EventTypes.LINK_APPLY, doc))
    } catch {
      throw new UnprocessableEntityException('请不要重复申请友链哦')
    }
  }

  async sendEmail(authorName: string, model: Link) {
    const enable = this.configs.get('mailOptions').enable
    if (!enable || process.env.NODE_ENV === 'development') {
      console.log(`来自 ${authorName} 的友链请求:
        站点标题: ${model.name}
        站点网站: ${model.url}
        站点描述: ${model.description}`)
      return
    }

    const master = await this.userModel.findOne()
    const mailerOptions = merge(
      {
        options: {
          name: this.configs.get('seo').title,
        },
      },
      {
        ...this.configs.get('mailOptions'),
      },
    )

    await new Mailer(
      mailerOptions.user,
      mailerOptions.pass,
      mailerOptions.options,
    ).sendLinkApplyEmail({
      authorName,
      model,
      to: master.mail,
    })
  }

  async getCount() {
    return {
      audit: await this.model.countDocuments({ state: LinkState.Audit }),
      friends: await this.model.countDocuments({
        type: LinkType.Friend,
        state: LinkState.Pass,
      }),
      collection: await this.model.countDocuments({
        type: LinkType.Collection,
      }),
    }
  }
}
