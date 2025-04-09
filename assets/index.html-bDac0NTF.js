import{_ as n,e as a,f as i,o as e}from"./app-BnT--k9P.js";const l={};function p(c,s){return e(),a("div",null,s[0]||(s[0]=[i(`<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Kourichat/</span></span>
<span class="line"><span>├── data/                           # 数据存储目录</span></span>
<span class="line"><span>├── logs/                           # 日志目录</span></span>
<span class="line"><span>├── src/                            # 源代码主目录</span></span>
<span class="line"><span>│   ├── autoupdate/                 # 自动更新相关</span></span>
<span class="line"><span>│   │   └── updater.py              # 更新器实现</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── config/                     # 配置文件目录</span></span>
<span class="line"><span>│   │   ├── config.json             # JSON配置文件</span></span>
<span class="line"><span>│   │   ├── settings.py             # 设置模块</span></span>
<span class="line"><span>│   │   └── __init__.py             # 配置初始化</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── handlers/                   # 处理器目录</span></span>
<span class="line"><span>│   │   ├── emoji.py                # 表情处理</span></span>
<span class="line"><span>│   │   ├── image.py                # 图片处理</span></span>
<span class="line"><span>│   │   ├── memory.py               # 内存处理</span></span>
<span class="line"><span>│   │   ├── message.py              # 消息处理</span></span>
<span class="line"><span>│   │   └── voice.py                # 语音处理</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── services/                   # 服务层目录</span></span>
<span class="line"><span>│   │   ├── ai/                     # AI服务目录</span></span>
<span class="line"><span>│   │   └── database.py             # 数据库服务</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── utils/                      # 工具函数目录</span></span>
<span class="line"><span>│   │   ├── cleanup.py              # 清理工具</span></span>
<span class="line"><span>│   │   └── logger.py               # 日志工具</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── webui/                      # Web界面相关</span></span>
<span class="line"><span>│   │   ├── background_image/       # 背景图片目录</span></span>
<span class="line"><span>│   │   ├── routes/                 # 路由目录</span></span>
<span class="line"><span>│   │   └── templates/              # 模板目录</span></span>
<span class="line"><span>│   │       ├── config.html         # 配置页面</span></span>
<span class="line"><span>│   │       └── config_item.html    # 配置项模板</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── main.py                     # 核心业务逻辑</span></span>
<span class="line"><span>│   └── __init__.py                 # 包初始化文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .git/                           # Git版本控制目录</span></span>
<span class="line"><span>├── .gitignore                      # Git忽略配置</span></span>
<span class="line"><span>├── LICENSE                         # 开源许可证</span></span>
<span class="line"><span>├── MileStone.md                    # 项目里程碑</span></span>
<span class="line"><span>├── README.md                       # 中文说明文档</span></span>
<span class="line"><span>├── README_EN.md                    # 英文说明文档</span></span>
<span class="line"><span>├── SponsorList.md                  # 赞助者名单</span></span>
<span class="line"><span>├── Thanks.md                       # 致谢文档</span></span>
<span class="line"><span>├── run.bat                         # Windows启动脚本</span></span>
<span class="line"><span>├── requirements.txt                # 依赖包列表</span></span>
<span class="line"><span>├── run.py                          # 主程序入口</span></span>
<span class="line"><span>├── run_config_web.py               # Web配置界面入口</span></span>
<span class="line"><span>├── test.py                         # 测试文件</span></span>
<span class="line"><span>└── version.json                    # 版本信息配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const v=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/documents/structure/","title":"项目结构","lang":"zh-CN","frontmatter":{"title":"项目结构","createTime":"2025/02/19 02:16:33","permalink":"/documents/structure/"},"headers":[],"readingTime":{"minutes":0.92,"words":277},"git":{"updatedTime":1740555010000,"contributors":[{"name":"Tsukumi","username":"Tsukumi","email":"eddiking233@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Tsukumi?v=4","url":"https://github.com/Tsukumi"}]},"filePathRelative":"documents/6.structure.md"}');export{v as comp,r as data};
