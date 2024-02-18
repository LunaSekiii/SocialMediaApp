# 克隆社交软件

这是一个 nuxt 练手项目，参考教程[Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma | FULL COURSE](https://www.youtube.com/watch?v=_cM4j9_LfQk)，并在练习的过程中按自己需要选择技术栈

## 技术栈

-   Nuxt
-   TypeScript
-   UnoCSS(替换教程中的 TailwindCSS)
-   Prisma
-   PostgreSql(替换 MongoDB)

## 日志

### 23.12.16

> 构建左侧导航栏![23.12.16进度](https://s2.loli.net/2023/12/17/MhKiafRYUE2xy7v.png)

开始项目的第一天，看到这个教程挺久了，一直想做来练手，学习以下完整的开发流程，于是就开始了。
选择使用 UnoCSS 是因为看到 [antfu](https://antfu.me/)的直播，被其流程的 coding 过程吸引了，就找机会练习一套 Vue“全家桶”项目。

### 23.12.17

> 构建右侧导航栏、主界面，服务端 Api（注册和登录），使用 Prisma 作为 ORM 连接 Vercel 数据库![23.12.17进度](https://s2.loli.net/2023/12/17/dUg15lh2zGKMxXi.png)

写着发现教程中的很多地方都有能够优化的地方，就一边写一遍看着改了。特别是原教程用的 js 写，现在用 TS 重写一遍要处理挺多兼容性问题的，但是比较方便的一点就是可以把类型定义在 share 目录中，类似 monorepo 的写法。根据[vercel 官方教程](https://vercel.com/guides/nextjs-prisma-postgres)引入的 Prisma，真的挺好用，还有类型支持。

### 24.01.24

> 完成用户权限验证部分![24.01.24进度](https://s2.loli.net/2024/01/24/QRCIsTHkxvi5OP7.png)

发现 unocss 有以下问题：

1. 不是显式给定的样式（比如使用变量赋值给 class）显示异常，需要首次显式给定样式初始化才能正常使用
2. 属性化的样式不能包含 '!' important 修饰符，会导致客户端渲染异常
3. 属性化样式和 vue 的属性规范 lint 冲突，可通过配置修复

其次，和教程的思路并不是很合拍：

1. 教程使用 js，我使用 ts 浮现的过程中会遇到一些类型错误，需要统一定义一遍类型
2. 教程会发生方法、变量调用错误的现象（后面会发现并修复），体验不太好
3. 教程的思路是先使用方法后定义，对我而言有点难受

导致 Auth 部分听得云里雾里的，大概是做出来了，后面看点 OAuth2.0 补充一下。

登录页面和基础功能也实现了。

### 24.02.18

> 完成推文的后台增、查功能![24.02.18进度](https://s2.loli.net/2024/02/18/PyDE7OAtKuVFnBg.png)

项目的类型有点混乱，后面再调整，断断续续写了一段时间，先 push 一下。

教程使用的 human-time 没有 ts 类型支持，使用 moment 代替。
