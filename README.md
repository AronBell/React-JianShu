笔记:
npm i -g create-react-app
create-react-app my-app
cd my-app
npm start

css文件一旦引入一个文件后在全局文件中都生效，(多组件css相互冲),使用第三方模块,组件自己样式只对自己文件生效
npm i --save styled-components
reset.css 去除浏览器默认样式
box-sizing:防止高度被撑开

定义数据，数据改变页面跟踪改变，减少操作DOM

添加搜索框操作动画:
npm i react-transition-group --save

管理数据：
npm i --save redux
npm i --save reatc-redux
reatc-redux  
纯函数:给定固定输入有固定输出
<Provider/>组件，Provider内所有组件都可使用store数据(Provider将store内数据都提供给Header组件)
connect 将header与store之间建立连接

index.js   项目入口
App.js  根组件

import { createGlobalStyle } from 'styled-components';injectGlobal被废除
pc端项目，reset.css


redux-devtools-extension composeEnhancers(compose函数)插件 ---->  调试redux状态

reducer代码过多数据不可维护--->数据管理拆分,combineReducers数据组合，引入总reducer内

component发送action请求

reducer接收到的原始state不能进行修改

immutable.js--->不可改变对象


无状态组件:组件只含有单纯render函数,需不断传递参数,维护易出错
搜索框内容制造input第一次聚焦时发送请求，获取数据后再次请求直接用之前请求的数据
redux-thunk:异步操作放在aaction中处理,action与store之间