/*
 * @Author: kongjinghcao
 * @Date: 2023-11-09 16:57:04
 * @Last Modified by: kongjinghcao
 * @Last Modified time: 2025-02-25 14:42:09
 * @Description: 工具函数-模块化
 */
// api/store/router等都可以使用

// 示例
// const files = require.context('./apis', false, /\.js$/); // require(路径，是否递归，正则)
// initModules(files); 

/**
 * @description 文件自动导入 
 * @param {*} req 文件 
 * @param {*} type 
 * @returns 
 */
export function initModules(req, type = 'js') {
  // 模块名称列表
  const fileNames = req
    .keys()
    .map((item) => item.split('/').slice(-1)[0])
    .map((item) => item.split(`.${type}`)[0]);
  // 模块文件列表
  const files = req.keys().map(req);
  // 添加模块
  const modules = {};
  fileNames.forEach((item, index) => {
    modules[item] = files[index].default;
  });
  return modules;
}
