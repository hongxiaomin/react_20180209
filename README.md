# React多页面应用1（webpack开发环境搭建，包括Babel、热更新等）

开发环境：Window 8,node v8.9.1,npm 5.5.1,Webstorm 2017.2.2

##### 1.新建项目
##### 2.初始化工程
    npm init -y

##### 3.安装相关依赖
    npm  i -S react react-dom
    npm i -D webpack webpack-dev-server webpack-merge babel-cli babel-preset-env babel-preset-react babel-preset-react-hmre babel-loader opn
-S 意思是保存到package.json dependencies 字段
-D 意思是保存到 package.json devDependencies 字段
    
##### 4.建立工程目录
    react_20180209
    --app  主目录
     --component  react组件目录
      --index  首页目录
    --public  公共目录 主要放js css img
     --js 公共js文件
    --build  webpack打包输出目录
    --config  打包配置目录
     --webpack  webpack配置目录
    --entryBuild  webpack 打包入口文件目录

##### 5.新建页面
    首页：index.jsx
    存放在 app->component->index 目录下
    
    建立index.html
    存放在 根目录下->build 下
    
    商城页：index.jsx
    存放在app->component->shop目录下
    
    建立shop.html
    存放在 根目录下->build下
    
##### 6.建立webpack入口文件
    entryBuild->index.js
    
##### 7.配置webpack
    基础配置：
    config->webpack->webpack.base.conf.js
    
    文件路径配置
    config->webpack->webpack.file.conf.js
    
    开发配置
    config->webpack->webpack.dev.conf.js
    
##### 8.配置babel
    根目录下 .babelrc
    
##### 9.配置npm命令
    在根目录下 package.json里配置 scripts字段
     "dev":"webpack-dev-server --devtool eval --progress --colors --profile --config config/webpack/webpack.dev.conf.js"
 
 
##### 10.执行 npm run dev
    会自动打开浏览器 http://localhost:8050/
    随便修改下保存，浏览器会自动热更新
    
    
# React多页面应用2（处理CSS及图片，引入postCSS，及图片处理等）

##### 1.添加postCSS支持
    npm i -D precss postcss-loader postcss-cssnext style-loader css-loader

##### 2.配置postcss
    根目录下 postcss.config.js
    
##### 3.配置webpack开发配置
    config->webpack->webpack.dev.conf.js
    新加了如下配置代码
    {
       test:/\.(css|pcss)$/,
       loader:'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
       exclude:/node_modules/
    }
    
##### 4.新建index.pcss文件
    app->public->css目录下

##### 5.react组件 引入index.pcss文件
    现在工程就支持postCSS了
    
##### 6.图片的处理  
    原则上本地图片建议都放在背景里
    添加依赖
    npm i -D file-loader

##### 7.修改webpack配置文件
    config ->webpack -> webpack.dev.conf.js
    新添加了如下配置代码
    {
       test:/\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
       loader:'file-loader?name=[name].[ext]&outputPath='+webpackFile.resource+'/'
    } 
    
##### 8.插入图片
    修改index.pcss
    app->public->css目录下
    
      