export const renderOwnerText = `<div
  style="
    width: 550px;
    height: auto;
    border-radius: 5px;
    margin: 0 auto;
    border: 1px solid #ffb0b0;
    box-shadow: 0px 0px 20px #888888;
    position: relative;
  "
>
  <div
    style="
      background-image: url(https://i.loli.net/2019/05/16/5cdd1404696b226188.jpg);
      width: 550px;
      height: 250px;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 5px 5px 0px 0px;
    "
  ></div>
  <div
    style="
      background-color: white;
      line-height: 180%;
      padding: 0 15px 12px;
      width: 520px;
      margin: 10px auto;
      color: #555555;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 12px;
      margin-bottom: 0px;
    "
  >
    <h2
      style="
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        font-weight: normal;
        padding: 13px 0 10px 8px;
      "
    >
      <span style="color: #12addb; font-weight: bold;">&gt; </span>您的文章<a
        style="text-decoration: none; color: #12addb;"
        href="<%= link %>"
        target="_blank"
        >《<%= title %>》</a
      >有了新的回复耶~
    </h2>
    <div style="padding: 0 12px 0 12px; margin-top: 18px;">
      <p>
        时间：<span style="border-bottom: 1px dashed #ccc;" t="5" times=" 20:42"
          ><%= time %></span
        >
      </p>
      <p><strong><%= author %></strong>&nbsp;给您的评论：</p>
      <p
        style="
          background-color: #f5f5f5;
          border: 0px solid #ddd;
          padding: 10px 15px;
          margin: 18px 0;
        "
      >
        <%= text %>
      </p>
      <p>其他信息：</p>
      <p
        style="
          background-color: #f5f5f5;
          border: 0px solid #ddd;
          padding: 10px 15px;
          margin: 18px 0;
        "
      >
        IP：<%= ip %><br />邮箱：<a href="mailto:<%= mail %>"><%= mail %></a>
      </p>
    </div>
  </div>
  <a
    style="
      text-decoration: none;
      color: rgb(255, 255, 255);
      width: 40%;
      text-align: center;
      background-color: rgb(255, 114, 114);
      height: 40px;
      line-height: 40px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      display: block;
      margin: auto;
    "
    href="<%= link %>"
    target="_blank"
    >查看回复的完整內容</a
  >
  <div
    style="
      color: #8c8c8c;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 10px;
      width: 100%;
      text-align: center;
    "
  >
    <p style="text-align: center; font-size: 10px;"><%= new Date().getFullYear() %> Copyright <%= master %></p>
  </div>
</div>
`
