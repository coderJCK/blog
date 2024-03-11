/*
 * @Author: kongjinghcao
 * @Date: 2023-11-10 16:35:39
 * @Last Modified by: kongjinghcao
 * @Last Modified time: 2023-12-05 11:36:07
 * @Description: 工具函数
 */

// 拼接图片base64
export function getImageSrc(imageBase64) {
  return `data:image/png;base64,${imageBase64}`;
}

/**
 * base64文件下载
 * @param {*} base64Data
 * @param {*} fileName
 * @param {*} type
 */
export async function base64DownloadFile(base64Data, fileName, type) {
  const blob = base64ToBlob(base64Data, type)
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  const evt = document.createEvent('MouseEvents')
  evt.initEvent('click', false, false)
  link.dispatchEvent(evt)
  document.body.removeChild(link)
}


/**
 * 获取图片宽高
 * @param {*} imageBase64
 * @param {*} 图片宽/高
 * @return {Blob}
 */
export function getImageWH(imageBase64, { width, height } = {}) {
  const image = new Image();
  image.src = getImageSrc(imageBase64);
  document.body.appendChild(image);
  image.style.opacity = '0';
  if (width) {
    image.style.width = `${width}px`;
  }
  if (height) {
    image.style.width = `${height}px`;
  }
  const imageWidth = image.clientWidth;
  const imageHeight = image.clientHeight;
  image.remove();
  return { imageWidth, imageHeight };
}

/**
 * base64转blob
 * @param {*} base64Data
 * @param {*} type 文件类型
 * @return {Blob}
 */
export function base64ToBlob(base64Data, type) {
  const bytes = window.atob(base64Data.split(',')[1])
  const array = []
  for (let i = 0; i < bytes.length; i++) {
    array.push(bytes.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], { type: type })
}

/**
 * base64转file
 * @param {*} base64Data
 * @param {*} fileName 文件名称
 * @param {*} type 文件类型
 * @return {File}
 */
export function base64ToFile(base64Data, fileName, type) {
  const bytes = window.atob(base64Data.split(',')[1])
  const array = []
  for (let i = 0; i < bytes.length; i++) {
    array.push(bytes.charCodeAt(i))
  }
  const theBlob = new Blob([new Uint8Array(array)], { type: type })
  theBlob.lastModifiedDate = new Date()
  return new File([theBlob], fileName, { type: type })
}

/**
 * 将Blob转换为file
 * @param {*} theBlob blob文件流
 * @param {*} fileName 文件名
 * @param {*} type 文件类型
 * @return {File}
 */
export function blobToFile(theBlob, fileName, type) {
  theBlob.lastModifiedDate = new Date()
  return new File([theBlob], fileName, { type: type })
}