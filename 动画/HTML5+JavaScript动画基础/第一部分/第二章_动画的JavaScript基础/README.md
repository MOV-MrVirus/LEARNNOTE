# 第二章 动画的JavaScript基础

> * 动画基础
> * HTML5简介
> * 用代码实现动画
> * 用代码实现动画
> * JavaScript对象
> * 用户交互

## 2.1 动画基础
&emsp;&emsp;回顾第一张的内容
* 动画由帧组成，每一帧在表现运动的假象上有细微差别；
* 逐帧动画包含每一帧的图像或图像描述；
* 动态动画包含一幅图片的起始描述以及后续每一帧图像的变化规则。

## 2.2 HTML5简介
&emsp;&emsp;本书将创建可通过Web浏览器查看HTML5文件。
HTML5是最新一代HTML(Hyper Text Markup Language 超文本标记语言)。

### 2.2.1 对canvas的支持
&emsp;&emsp;万一某个Web浏览器不支持canvas元素，在HTML文件中，
开发者仍可以在canvas标签中提供如下备用内容。
```html
<canvas width="400": height="400">
	<p>This browser does not support the<code>canvas</code> element.</p>
</canvas>
```
&emsp;&emsp;该警告消息仅在浏览器无法识别canvas标签时才会显示。
还可以使用JavaScript代码。
```js
if (document.createElement('canvas').getContext)
{
	console.log("Success! The canvas element is supported.");
}
```

### 2.2.2 性能
&emsp;&emsp;编程图形一直并且在可预见的将来也是一项计算量很大的操作。
原因很简单，你能做的越多，你想要做的也越多，同时对系统的性能要求也越高。
	
### 2.2.6 调试
&emsp;&emsp;编写代码的一个最重要的方面就是调试代码。

## 2.3用代码实现动画

### 2.2.3 动画循环
&emsp;&emsp;为了实现动画，需要为每一帧执行以下操作：
> (1)执行该帧索要调用道德代码;
> (2)将所有对象会知道canvas上;
> (3)重复这一过程渲染下一帧。

JavaScript定时器并不是为实现动画设计的。

## 2.4 JavaScript对象
&emsp;&emsp;由于本书采用JavaScript编写示例，因此你需要了解该语言的
一些重要概念以便于理解示例代码。JavaScript中最重要的东西就是对象和
函数（一种特殊的对象）。

### 2.4.1 基础对象
```js
var objB = {
name: "My Object B",
hello: function (person){
	console.log("Hello, " + person);
	}
}
```

这里创建一个新对象objB，它包含两个属性，一个包含字符串的name属性以及
一个保存函数的hello属性。在JavaScript中的函数也是对象。
向浏览器调试控制条输出一条消息：

```
> objB.hello("Gentle Reader");
Hello, Gentle Reader
```

### 2.4.2 创建一类新对象
&emsp;&emsp;可以声明对象使其包含所需的属性，创建多个包含相同属性
定义的对象,可以使用构造函数。构造函数是一种特别的函数，他会根据
分配它的属性创建函数与普通函数，约定构造函数的名称首字母大写：

```js
function MyObject(person){
	this.name = person;
	this.say = function(){
		console.log("It's " + this.name);
	};
}
```

&emsp;&emsp;在构造函数中用于添加属性的特殊对象this该对象将作为
构造函数的返回值。在构造函数中声明的任何变量如果没有关联到this对象，
则不乏在构造函数外直接访问。

### 2.4.3 原型
&emsp;&emsp;使用构造函数创建对象实例是在基于累的语言中的习惯做法。
事实上，当你查看JavaScript文件中对垒的介绍时，你会发现他通常所指的
就是构造函数。不过该术语有时候会让人忽略了JavaScript实际上是基于
原型的语言。

## 2.5 用户交互









