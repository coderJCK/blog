


/**
 * 解析多层级的JSON格式
 * @param {String} data
*/

function parseJSON(data) {
  function isJson(str) {
    if (typeof str != 'string') return false;
    if (str.search('{') < 0) return false;
    // 方式1: 正则判断
    // return /^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
    //   replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    //   replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
    // 方式2: 解析判断
    try {
        JSON.parse(str);
    } catch(e) {
        return false;
    }
    return true;
  }
  console.log(isJson(data))
  if (isJson(data)) {
    const obj = JSON.parse(data);
    let result = {};
    for (const k in obj) {
      result[k] = parseJSON(obj[k]);
    }
    return result;
  } else {
    return data;
  }
}