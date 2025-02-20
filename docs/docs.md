---
title: 文档 - 最后更新日期 2025/02/20
createTime: 2025/02/19 02:16:33
permalink: /docs/
---
## 简介
- KouriChat 是一个基于大型语言模型（LLM）的情感陪伴程序，能够接入微信，提供更真实的情感交互体验。它解决了传统人机对话程序一问一答的死板效果，提供沉浸式角色扮演、智能断句和多轮对话支持。
- 推荐使用DeepSeek V3 模型。<br>
##  部署推荐
- 通过[夸克网盘](https://pan.quark.cn/s/c55dd13218ea)下载项目，推荐转存，第一时间获得更新，我也会有收益
- 推荐使用Windows Servers服务器挂机，[雨云服务器五折券](https://www.rainyun.com/MzE0MTU=_)
- [项目直属公益API（推荐）](https://api.kourichat.com/)（注册送20刀，签到送1-5刀）
- [获取DeepSeek API Key](https://cloud.siliconflow.cn/i/aQXU6eC5)（免费15元额度）

## 项目声明
**法律与伦理准则**  
▸ 本项目仅供技术研究与学习交流  
▸ 禁止用于任何违法或违反道德的场景  
▸ 生成内容不代表开发者立场<br>
**使用须知**  
▸ 角色版权归属原始创作者  
▸ 使用者需对自身行为负全责  
▸ 未成年人应在监护下使用
## 项目结构
```txt
Kourichat/
├── data/                           # 数据存储目录
├── logs/                           # 日志目录
├── src/                            # 源代码主目录
│   ├── autoupdate/                 # 自动更新相关
│   │   └── updater.py              # 更新器实现
│   │
│   ├── config/                     # 配置文件目录
│   │   ├── config.json             # JSON配置文件
│   │   ├── settings.py             # 设置模块
│   │   └── __init__.py             # 配置初始化
│   │
│   ├── handlers/                   # 处理器目录
│   │   ├── emoji.py                # 表情处理
│   │   ├── image.py                # 图片处理
│   │   ├── memory.py               # 内存处理
│   │   ├── message.py              # 消息处理
│   │   └── voice.py                # 语音处理
│   │
│   ├── services/                   # 服务层目录
│   │   ├── ai/                     # AI服务目录
│   │   └── database.py             # 数据库服务
│   │
│   ├── utils/                      # 工具函数目录
│   │   ├── cleanup.py              # 清理工具
│   │   └── logger.py               # 日志工具
│   │
│   ├── webui/                      # Web界面相关
│   │   ├── background_image/       # 背景图片目录
│   │   ├── routes/                 # 路由目录
│   │   └── templates/              # 模板目录
│   │       ├── config.html         # 配置页面
│   │       └── config_item.html    # 配置项模板
│   │
│   ├── main.py                     # 核心业务逻辑
│   └── __init__.py                 # 包初始化文件
│
├── .git/                           # Git版本控制目录
├── .gitignore                      # Git忽略配置
├── LICENSE                         # 开源许可证
├── MileStone.md                    # 项目里程碑
├── README.md                       # 中文说明文档
├── README_EN.md                    # 英文说明文档
├── SponsorList.md                  # 赞助者名单
├── Thanks.md                       # 致谢文档
├── run.bat                         # Windows启动脚本
├── requirements.txt                # 依赖包列表
├── run.py                          # 主程序入口
├── run_config_web.py               # Web配置界面入口
├── test.py                         # 测试文件
└── version.json                    # 版本信息配置
```
## 功能全景
### 已实现
- 微信无缝接入 & 多用户支持
- 沉浸式角色扮演（支持群聊）
- 智能对话分段 & 情感化表情包
- 图像生成 & 图片识别（Kimi集成）
- 语音消息 & 持久记忆存储
- 自动更新 & 可视化WebUI
### 开发中
- 智能定时任务系统
- 记忆整理优化（8B小模型）
- 分布式负载均衡
- 数学公式渲染引擎
- OneBot协议兼容
- [参与开发计划](https://jq.qq.com/?_wv=1027&k=5z4Q0i7o)
## 快速启动
### 环境准备
1. **Python 3.11**
2. **备用设备**：安卓手机/模拟器（微信电脑端登录必须有一个移动设备同时登录，因此不能使用您的主要设备。）
3. **微信小号**：能登录PC版即可
4. **API密钥**：查阅文档开头
5. **最好有一台Windows Servers服务器用于挂机**：[雨云服务器五折券](https://www.rainyun.com/MzE0MTU=_)
### 半自动配置（推荐小白）
#### 半自动部署流程
运行半自动化部署程序：
```bash
run.bat
```
如果出现错误，请查阅常见问题。
### 手动配置（推荐经验丰富人群）
#### 手动部署流程
```bash
# 克隆仓库
git clone https://github.com/KouriChat/KouriChat.git
# 更新pip
python.exe -m pip install --upgrade pip
# 安装依赖
pip install -r requirements.txt
#调整配置文件
python run_config_web.py
# 启动程序 或 使用WebUI启动 (在此之前，请启动微信！不然会提示未找到窗口句柄...）
python run.py
```
如果出现错误，请查阅常见问题。
## 基本配置
### 设置管理密码
首次打开程序，会提示用户设置管理员密码。此后如果再内网环境下打开WebUI，不会再次要求密码。
### 配置监听列表
配置需要和Bot对话的用户的微信名称（不要写备注），群聊名称。右侧的加号和叉号可以增减监听列表。
### 配置模型
在下拉列表选择要使用的模型。目前内置以下模型可供选择：
- Kouri V3（推荐，项目直属公益API）
- Kouri R1
- 硅基流动免费版V3
- 硅基流动免费版R1
- 硅基流动付费版V3（推荐）
- 硅基流动付费版R1
- DeepSeek官方V3
- DeepSeek官方R1
### 配置API
将您的Api key输入到DeepSeek API密钥内。<br>
这些步骤完成后，程序应该就可以正常运行了。
## 高级配置
### 设置回复最大token数
取值范围为50-5000。数值越小Ai回复的字数越少，反之亦然。推荐数值为2000。
### 设置温度
取值范围为0.0-1.7。数值越小Ai回复越理智，反之亦然。推荐数值为1.5。<br>
数值越小越贴近Prompt，稳定性越强，但也会越死板。<br>
数值过大可能会产生模型幻觉，导致乱码等问题。<br>
### 图像识别API key配置
如果需要图像识别能力，需要配置此项。<br>
注册Moonshot平台后，将Api key填写到这里。
### 图像识别API BaseURL配置
一般情况下保持默认即可。
### 图像识别API 温度配置
取值范围为0.0-1.0。数值越小Ai回复越理智，反之亦然。推荐数值为0.7。<br>
数值越小越贴近Prompt，稳定性越强，但也会越死板。<br>
数值过大可能会产生模型幻觉，导致乱码等问题。<br>
### 图像生成模型
默认为deepseek-ai/Janus-Pro-7B。一般情况下不需要修改。
### 临时图片目录
默认为data/image/temp。一般情况下不需要修改。
### 自动消息配置
用于Ai主动向用户发起对话时的提示词。一般情况下不需要修改。
### 最小倒计时时间
用于Ai主动向用户发起对话时间的最小间隔。一般情况下不需要修改。
### 最大倒计时时间
用于Ai主动向用户发起对话时间的最大间隔。一般情况下不需要修改。
### 安静时间开始
免打扰时间起始。此时间后Ai不会主动向用户发起对话。一般情况下不需要修改。
### 安静时间结束
免打扰时间结束。此时间后Ai恢复主动向用户发起对话。一般情况下不需要修改。
### 语音服务API地址
如果需要语音消息能力，需要配置此项.<br>
请配置您本地TTS服务的地址。
### 语音文件目录
请配置您本地语音文件的缓存目录。默认值是data/voice。一般情况下不需要修改。
### 最大的上下文轮数
上下文轮数越大，聊天体验越好，但token消耗也会越大。默认值是15。一般情况下不需要修改。
### 角色选择
这里展示了您所有的可用角色可供选择。如果需要增/删角色，请操作data/avatars下的目录。详情请查阅角色广场-导入角色。<br>
## 启动
回到WebUI首页，启动Ai。或使用命令：
```bash
python run.py
```
## 角色广场
角色广场是社区创作者分享角色卡的地点。但请注意，无论是使用角色卡还是创作角色卡，请务必仔细阅读[创作规范](https://avatars.kourichat.com/#/rules)。
### 浏览角色
在[档案馆](https://avatars.kourichat.com/#/archive)，可以看到所有可使用的角色。您可以搜索或按照分类查找角色。
### 获取角色
在[档案馆](https://avatars.kourichat.com/#/archive)点选您心仪角色的缩略图，即可进入角色详情界面。点击下载文档，即可下载该角色的prompt。关于如何导入角色到KouriChat，请查阅导入角色板块。
### 上传角色
在[档案馆](https://avatars.kourichat.com/#/archive)左侧有[新建角色](https://avatars.kourichat.com/#/archive/create)和上传角色。[新建角色](https://avatars.kourichat.com/#/archive/create)可以让您在线创作，但我们更推荐在本地写好后使用上传角色直接上传，以免进度丢失。如果您需要给角色上传表情包，请切换到高级模式。注意表情包要符合要求的格式，详情请参考[创作规范](https://avatars.kourichat.com/#/rules)。
### 导入角色
下载好角色后，请在KouriChat/data/avatars下新建一个角色目录，然后将角色的prompt文件放进去，重命名为avatar.md。如果有表情包，还需创建一个emojis目录，详情请参考[创作规范](https://avatars.kourichat.com/#/rules)和官方角色卡格式。
## 赞助
您的赞助将用于公益API平台、公益服务器平台、域名及服务器续费、社区建设、用户回馈、赞助用户回馈等多方面。您的赞助可以使项目走的更远，感谢您的支持！<br>
后续将推出多种赞助用户回馈计划，敬请期待。<br>
赞助任意金额即可参与计划并加入赞助QQ群：953908612
![qrcode.jpg](imgs/qrcode.jpg)
## 常见问题
Coming Soon...