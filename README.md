# 克隆社交软件

这是一个 nuxt 练手项目，参考教程[Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma | FULL COURSE](https://www.youtube.com/watch?v=_cM4j9_LfQk)，并在练习的过程中按自己需要选择技术栈

## 技术栈

-   Nuxt
-   TypeScript
-   UnoCSS(替换教程中的 TailwindCSS)
-   Prisma

## 日志

### 23.12.16

> 构建左侧导航栏![23.12.16进度](https://s2.loli.net/2023/12/17/MhKiafRYUE2xy7v.png)

开始项目的第一天，看到这个教程挺久了，一直想做来练手，学习以下完整的开发流程，于是就开始了。
选择使用 UnoCSS 是因为看到 [antfu](https://antfu.me/)的直播，被其流程的 coding 过程吸引了，就找机会练习一套 Vue“全家桶”项目。

### 23.12.17

> 构建右侧导航栏、主界面，服务端 Api（注册和登录），使用 Prisma 作为 ORM 连接 Vercel 数据库![23.12.17进度](https://s2.loli.net/2023/12/17/dUg15lh2zGKMxXi.png)

写着发现教程中的很多地方都有能够优化的地方，就一边写一遍看着改了。特别是原教程用的 js 写，现在用 TS 重写一遍要处理挺多兼容性问题的，但是比较方便的一点就是可以把类型定义在 share 目录中，类似 monorepo 的写法。根据[vercel 官方教程](https://vercel.com/guides/nextjs-prisma-postgres)引入的 Prisma，真的挺好用，还有类型支持。
