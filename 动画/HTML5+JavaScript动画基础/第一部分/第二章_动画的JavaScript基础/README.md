## 第二章

> * 动画基础
> * HTML5简介
> * 用代码实现动画
> * 用代码实现动画
> * JavaScript对象
> * 用户交互

### 2.1 动画基础
回顾第一张的内容
* 动画由帧组成，每一帧在表现运动的假象上有细微差别；
* 逐帧动画包含每一帧的图像或图像描述；
* 动态动画包含一幅图片的起始描述以及后续每一帧图像的变化规则。
### 2.2 HTML5简介
	本书将创建可通过Web浏览器查看HTML5文件。
HTML5是最新一代HTML(Hyper Text Markup Language 超文本标记语言)。
### 2.2.1 对canvas的支持
	万一某个Web浏览器不支持canvas元素，在HTML文件中，
开发者仍可以在canvas标签中提供如下备用内容。
```html
<canvas width="400": height="400">
	<p>This browser does not support the<code>canvas</code> element.</p>
</canvas>
```
该警告消息仅在浏览器无法识别canvas标签时才会显示。
还可以使用JavaScript代码。
```js
if (document.createElement('canvas').getContext)
{
	console.log("Success! The canvas element is supported.");
}
```

### 2.2.2 性能
	编程图形一直并且在可预见的将来也是一项计算量很大的操作。
原因很简单，你能做的越多，你想要做的也越多，同时对系统的性能要求也越高。
	











