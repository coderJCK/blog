## 高度塌陷

```js
父元素高度自适应，子元素浮动时产生。
// 方法：
- 给父元素设置固定高度（违背高度自适应原则）
- 在浮动元素后添加一个空的div，并设置清除浮动（兼容性强，不利于优化）
- 给父元素设置overflow：hidden；开启BFC环境
- 利用：：after
```

## 上边距共用

```js
子元素设置上边距时父元素会跟随其子元素。
// 方法:
在父元素中使用padding-top进行代替
```

## 外边距合并

```css
两个元素间的上下外边距合并现象，其距离为两个值中的最大值。
```

## 行内块元素间有间隔

```css
1.把两个元素放置一行;
2.设置font-size：0px；hend
```
