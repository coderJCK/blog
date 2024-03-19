## pc端问题

### button
因为button的type属性默认值为submit,如果此时button放在form表单中，点击button会触发提交事件，会导致当前页面刷新。
### react-util-universal
1.12.1版本会有CDN资源引入，容易导致生产问题bug;
[解决方案](https://blog.csdn.net/kjc513/article/details/136804848?spm=1001.2014.3001.5502)

## 移动端问题

### 兼容性问题
- ?.不支持ios13及其以下版本
- const 不支持ios9及其以下版本
- 微信自带浏览器不支持下载文件，小程序可以使用openDocument下载 [解决方案](https://blog.csdn.net/kjc513/article/details/135509287?spm=1001.2014.3001.5502)

### sessionStorage
IOS夸克浏览器跳转三方链接后返回sessionStorage数据丢失
**场景**: 在调用第三方人脸识别后返回，token数据丢失了导致无法进行后续操作
**解决方案**: 使用localStorage替代

### android软键盘 => 定位元素变动
android软键盘弹起后，高度会缩小，定位的元素的位置会发生变动
软键盘弹起时，页面整体高度会缩小，会导致定位相关的元素也发生相应的变动。
**解决方案**：根据具体情况处理

### ios软键盘不复原问题
iphone xs 13.3键盘收起后页面不复原
firefox浏览器 软键盘收起，页面不复原问题
**解决方案**：blur事件中执行window.scroll(0, 0)

### ios软键盘不收起
ios部分机型输入框输入一定长度后去除该输入框，但此时软键盘没有被收起
**解决方案**：document.activeElement.blur(); // 手动收起键盘

### 浏览器底部遮挡问题
**场景**：当页面上半部分固定死，下半部分需要设置滚动条时
问题：因为高度难以确定，所以在不同浏览器中可能高度不统一，且容易被底部工具栏遮挡
**解决方案**：获取页面总高度 - 上半部分固定高度
```javascript
// 获取页面总高度
const allHeight = document.documentElement.clientHeight || document.body.clientHeight;
// 减去上部分高度，剩下的为下部分高度
const height = allHeight - 100;
```