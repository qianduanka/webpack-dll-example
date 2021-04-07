# 前端咖

## 运行
1、npm run dll    // 生成manifest.json文件
2、npm run start  // 运行项目
3、npm run build  // 打包项目

## webpack.dll.config.js说明
将第三方公共包，如：react、react-dom、react-router-dom，通过webpack.DllPlugin生成到public目录里面。

/public/
	lib.js
	lib.js.LICENSE.txt
	manifest.json

## webpack.base.config.js说明
打包时，将/public/目录中资源文件拷贝到/dist/目录中。

## 关注前端咖公众号
关注前端咖，定期发放福利哦！我在这里等你~~~