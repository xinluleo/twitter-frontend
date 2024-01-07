# Twitter-frontend
一个仿 twitter 的前端项目，基于 react 实现

## 如何启动
npm start

## 如何访问
http://localhost:3000/

## 发送接口
request: get post put patch delete
service: const getUser = (params) => get('/user', params).then((res) => {
  return res;
});

## 后端的一个 web 服务
- 使用的是 json-server

## Twitter 的前端页面模板
/doc 目录下

## React 五步法
- 第一步： 将设计好的 UI 划分为组件层级
- 第二步： 用 React 创建一个静态版本

## style 技术选择
- scss 写简单的嵌套 -> css
- css module 不用关心命名空间，不会出现会被覆盖的