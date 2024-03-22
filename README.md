# uniapp+uviewPlus+vue3+ts+pinia+echarts+vite 开发基础模板

使用 uniapp + vue3 + ts + pinia + vite + echarts 开发的基础模板，支持小程序，手机 APP，拿来即可使用，不要删除 yarn.lock 文件，否则会启动报错，这个可能和 pinia 的版本有关，所以不要随意修改。安卓模拟器推荐使用 mumu 模拟器，然后不会配置的可以看我的文章教程：<http://t.csdnimg.cn/sGjLM>

## main 分支

使用 uniapp + vue3 + ts + pinia + vite 开发基础模板，没有特殊的功能，只是集成了开发环境，开箱即用。
效果图：![](https://img-blog.csdnimg.cn/492c7069ba5045c69017f668045af320.png)

## custom-bar 分支

在 main 分支的基础上，集成了自定义 tabbar 的效果，有凸出 bar 的效果，可以流畅使用。  
效果图：![](https://img-blog.csdnimg.cn/0c08188da57d4a139b898b21cf720152.png)

## vue3-echart 分支

在 main 分支的基础上，集成了 echarts，可以快速使用 echarts。开箱即用，非常方便。  
效果图：![](https://img-blog.csdnimg.cn/a2a689bb13ca45c8b6f1bc96d83b86b2.png)

## vue3-vant 分支
在main的基础上，集成了vant框架，特别适合移动端开发的UI框架。
vant官网地址：https://github.com/youzan/vant

## 手机 APP 显示

在安卓手机模拟器上显示的效果，如果想要IOS苹果的效果，需要mac电脑调试，所以这里就不展示了
![](https://img-blog.csdnimg.cn/e1b07b6a67e741fa977b6dbe56f98a23.png)

# 拉取代码

```
git clone git@github.com:Sjj1024/uniapp-vue3.git
```

# 使用 yarn 安装依赖

```
yarn
```

一定要使用 yarm，否则 yarn.lock 就没用了，那你的启动依然会报错。  
然后执行相应平台的启动命令即可。
我的开发 node 版本是：16.20.2，如果环境异常使用 nvm 切换到这个版本尝试一下。
