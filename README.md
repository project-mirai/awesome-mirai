# awesome-mirai

本仓库用于收集 mirai 相关社区应用，例如基于 mirai 的 bot，mirai-console 的插件以及使用了其他语言 SDK 的项目

如果您有这类项目，欢迎提交 Pull request 将您的项目添加到这里(注意，本仓库仅接受开源项目的仓库地址, 如 `https://github.com/him188/mirai-console-example-plugin`)

**注意：如果你的项目引用了Mirai相关内容，请遵守开源协议并将你的项目开源许可证设置为`AGPL-3.0`**

## mirai-console 插件
- [him188/mirai-console-example-plugin (Kotlin DSL)](https://github.com/him188/mirai-console-example-plugin) mirai-console 示例插件 (Kotlin DSL)
- [Karlatemp/mirai-console-example-plugin (Groovy DSL)](https://github.com/Karlatemp/mirai-console-example-plugin) mirai-console 示例插件 (Groovy DSL)
- [project-mirai/MAPluginTemplate](https://github.com/project-mirai/MAPluginTemplate) mirai-console 插件模板，同时支持MiraiAndroid和Jvm
- [project-mirai/chat-command](https://github.com/project-mirai/chat-command) 聊天环境执行命令支持
- [mzdluo123/MiraiForward](https://github.com/mzdluo123/MiraiForward) 多群消息转发插件
- [Pai2Chen/mirai-console-addition](https://github.com/Pai2Chen/mirai-console-addition) console功能增强插件，提供方便的自动登录功能
- [yyuueexxiinngg/cqhttp-mirai](https://github.com/yyuueexxiinngg/cqhttp-mirai) 为基于onebot标准 (原cqhttp协议)提供mirai接入支持的插件
- [Karlatemp/LuckPerms-Mirai](https://github.com/Karlatemp/LuckPerms-Mirai) 封装了 LuckPerms 的 Mirai-Console 平台版本, 提供基本API方便对接 Mirai-Console
- [45gfg9/mirai-release-watcher-plugin](https://github.com/45gfg9/mirai-release-watcher-plugin) GitHub Release 监视插件
- [Samarium150/mirai-console-lolicon](https://github.com/Samarium150/mirai-console-lolicon) 基于Mirai-console 2.0的插件，在私聊/群聊内根据关键词发送图片
- [khjxiaogu/MiraiSongPlugin](https://github.com/khjxiaogu/MiraiSongPlugin) 基于Mirai-console的点歌姬插件，支持国内主要音乐平台，可以搜索歌曲关键词并以各种方式分享。  
- [ShrBox/ACGH](https://github.com/ShrBox/ACGH) 极其简单的在群内发送随机二次元图片的插件  
- [ShrBox/MCMotd](https://github.com/ShrBox/MCMotd) 极其简单的在群内查询Minecraft基岩版服务器Motd的插件  
- [ShrBox/GroupAdministrator](https://github.com/ShrBox/GroupAdministrator) 简易的群管理插件 包含加群自动审核/检测消息关键词撤回并禁言  
- [DazeCake/Mirai-BDXwebsocket](https://github.com/DazeCake/Mirai-BDXwebsocket) 通过websocket链接Bedrockx实现qq联动远控 
- [khjxiaogu/MiraiPluginTemplate](https://github.com/khjxiaogu/MiraiPluginTemplate)为Eclipse IDE和maven2设计的mirai-console插件模板工程，可以快速生成插件。
- [Karlatemp/mirai-websocket-api](https://github.com/Karlatemp/mirai-websocket-api) WebSocket API
- [project-mirai/mirai-api-http](https://github.com/project-mirai/mirai-api-http) Http API
- [ssttkkl/MiraiBangumiPlugin](https://github.com/ssttkkl/MiraiBangumiPlugin) 用于番剧更新播报的mirai插件（目前仅支持b站番剧）
- [Eiriksgata/mirai-rulateday-dice](https://github.com/Eiriksgata/mirai-rulateday-dice) 使用Java + Maven 开发的TRPG骰子插件模板。此模板集合了大部分的 mirai-console 插件所需要的配置项，开发者也可以直接使用该模板进行开发。
- [KonnyakuCamp/SuperCourseTimetableBot](https://github.com/KonnyakuCamp/SuperCourseTimetableBot) 超级课程表课程提醒插件，提供上课提醒，适配不同使用超级课程表的大学，简易的交互式用户操作。
- [Itsusinn/MessageForward](https://github.com/Itsusinn/message-forward/tree/main/message-source/mirai-source) 支持不同IM平台的消息转发，如Minecraft,QQ,Discord

## 基于 mirai 框架的应用
- [kenvix/ComplexBot](https://github.com/kenvix/ComplexBot) 集成广告拦截/消息监视与统计/迎新/验证码识别/算卦等功能的复合机器人
- [Coloryr/ColorMirai](https://github.com/Coloryr/ColorMirai) 基于Mirai的机器人框架
- [HHeyJ/Mirai-Robot](https://github.com/HHeyJ/Mirai-Robot) Mirai + SpringBoot + Mybatis; 关键词回复/闪照收集/图片生成/贴吧爬虫收集播报
- [WhiteMagic2014/WMagicBotR](https://github.com/WhiteMagic2014/WMagicBotR) Mirai + SpringBoot + Mybatis + SqLite; 基于Mirai 使用 java开发的 bot框架，在消息事件下封装了指令/权限指令 方便调用
- [mzdluo123/TimeTableBot](https://github.com/mzdluo123/TimeTableBot) 适用于大学的课程表查询bot，提供上课提醒，课表查询等功能，已适配方正单点登录系统和教务系统
- [xiaoxu97/mirai-plus](https://github.com/xiaoxu97/mirai-plus) 基于mirai进行二次开发，完全兼容spring、springboot，通过注解驱动开发
- [Liangbai2333/LRobot](https://github.com/Liangbai2333/LRobot) 基于Java、ASM、URLClassLoader与一套注解系统实现的插件加载框架，并在此基础上封装了监听系统，指令系统，配置文件及一系列集成消息(音乐等)功能
- [MikuNyanya/RabbitBot_RE](https://github.com/MikuNyanya/RabbitBot_RE) 使用 java 语言 mirai + spring + maven + quartz开发的机器人；接入了新浪微博、pixiv、Saucenao
- [farewell12345/FAQ-Bot-QQ](https://github.com/farewell12345/FAQ-Bot-QQ) mirai+MariaDB+Ktorm的Q群问答机器人，封装了指令/权限路由，囊括了群内随机抽签/游戏群组/图片发送/迎新功能

## 基于其他语言sdk的应用
- [mzdluo123/MineSweeper](https://github.com/mzdluo123/MineSweeper) 基于python和mirai的扫雷小游戏机器人
- [farewell12345/FAQ-In-QQ](https://github.com/farewell12345/FAQ-In-QQ) 基于python和mirai的Q群问答机器人
- [YunYouJun/el-bot](https://github.com/YunYouJun/el-bot) 基于 [mirai-ts](https://github.com/YunYouJun/mirai-ts)，使用 TS/JS 编写，可配置、可自定义插件的机器人框架
- [ac682/arcbot](https://github.com/ac682/arcbot) 基于 [Hyperai](https://github.com/theGravityLab/ProjHyperai) 的基础机器人插件, 提供权限/货币/库存/手册/等可二次开发功能
- [ssttkkl/PixivBot](https://github.com/ssttkkl/PixivBot) 基于[GraiaProject/Application](https://github.com/GraiaProject/Application)的看Pixiv涩图的机器人。支持查看pixiv榜单，查看指定id插画，随机抽选指定关键字插画，随机抽选书签插画，随机抽选指定画师插画功能。
- [lanyi/qwq](https://github.com/BSG-75/qwq) 基于 [mirai-ts](https://github.com/YunYouJun/mirai-ts) 的简陋版多群消息转发机器人
- [SAGIRI-kawaii/sagiri-bot](https://github.com/SAGIRI-kawaii/sagiri-bot) 基于[GraiaProject/Application](https://github.com/GraiaProject/Application)的多功能机器人。支持自定义多种类图库分割，以图搜图，以图搜番，微博、知乎、github热搜的获取，番剧/steam游戏信息查询、点歌，摸头gif生成，996公司查询，生成二维码，电子书搜索，磁力链搜索，群聊天记录按频率生成词云，智能回复（多种状态）等多种功能
- [Mirai-js](https://github.com/drinkal/Mirai-js) 基于 [mirai-api-http](https://github.com/project-mirai/mirai-api-http) 运行在 node.js 平台下的 Mirai 机器人框架。

## 其他优秀项目

- [Lua Script Center](https://gitee.com/ooooonly/lua-mirai-project/tree/master/ScriptCenter) 基于[only52607/lua-mirai ](https://github.com/only52607/lua-mirai) 的脚本中心仓库
- [NoneBot](https://github.com/nonebot/nonebot2) 跨平台 Python 机器人框架 (QQ，钉钉，...)
- [smallshen/MiraiBotCommandBuilder](https://github.com/smallshen/MiraiBotCommandBuilder) 支持 Kotlin DSL 写QQ机器人指令
- [lmcl](https://github.com/lc6a/lmcl) 接管mcl的启动来实现插件热加载
- [TxCaptchaHelper](https://github.com/mzdluo123/TxCaptchaHelper) 滑动验证助手，帮助mirai获得滑动验证的ticket
- [mzdluo123/silk4j](https://github.com/mzdluo123/silk4j) silk语音编码器的Java接口，可用于配合mirai发送语音消息
- [rxrw/mirai-docker-start](https://github.com/rxrw/mirai-docker-starter) 基于docker的 `mirai-console` + `mirai-http-api` 的一键启动封装。配合`docker-compose`使用最佳
- [EpicMoMiraiG](https://www.github.com/liaosunny123/epicmomiraig)封装'mirai-console'+'mirai-http-api'的mirai一键启动器和辅助管理器。
- [mirai-spring-boot-starter](https://github.com/mzdluo123/mirai-spring-boot-starter) mirai的springboot starter
