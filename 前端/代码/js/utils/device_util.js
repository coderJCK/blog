/*
 * @Author: kongjinghcao
 * @Date: 2023-11-10 16:35:39
 * @Last Modified by: kongjinghcao
 * @Last Modified time: 2025-02-25 14:43:12
 * @Description: 设备工具函数
 */

export const ANDROID_DEVICE = 0;
export const IOS_DEVICE = 1;
/**
 * 与原生网页交互，尝试通知当前流程结束，关闭网页
 * @param {String} redirecturl
 * @return {Boolean} 是否跳转成功
 */

export function tryReturnToNative(redirecturl) {
  if (deviceType() === ANDROID_DEVICE) {
    if (window.android && window.android.finishWebView) {
      window.android.finishWebView(redirecturl || '');
      return true;
    }
    return false;
  }
  if (deviceType() === IOS_DEVICE) {
    if (NativeObject) {
      NativeObject.finishWebView(redirecturl || '');
      return true;
    }
    return false;
  }
  return false;
}

/**
 * 判断设备类型
 * @return {int} 设备类型
 */
export function deviceType() {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isAndroid) {
    return ANDROID_DEVICE;
  } else if (isIOS) {
    return IOS_DEVICE;
  }
}
