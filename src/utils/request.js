import { Toast } from 'antd-mobile';
import axios from 'axios';

const domain = 'http://localhost:3333';

// 对于接口请求前的参数做转换，主要是添加统一的 domain
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// 对返回的结果做拦截，主要有两部分：数据转换，错误处理
axios.interceptors.response.use((response) => response.data, () => {
  Toast.show('服务调用失败');
});

// get 获取服务器资源
export const get = (url) => axios.get(url);

// post 新增一个资源
export const post = (url, params) => axios.post(url, params);

// put 更新一个资源
export const put = (url, params) => axios.put(url, params);

// delete 删除一个资源
export const del = (url) => axios.delete(url);
