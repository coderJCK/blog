/*
 * @Author: kongjinghcao
 * @Date: 2023-09-12 14:26:21
 * @Last Modified by: kongjinghcao
 * @Last Modified time: 2023-12-05 11:46:02
 * @Description: 自定义指令封装
 */
import Vue from 'vue';

const files = require.context('./modules', false, /.+\.js$/);
files.keys().forEach((fileName) => {
  const directiveConfig = files(fileName); // 获取指令函数
  const directiveName = fileName // 获取指令名
    .replace(/^\.\//, '') // 去除开头的'./'
    .replace(/\.\w+$/, ''); // 去除文件扩展名
  Vue.directive(directiveName, directiveConfig.default || directiveConfig);
});
