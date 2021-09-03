# filter

> MDN: [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

一些使用函数

```css
/* 使用单个滤镜 （如果传入的参数是百分数，那么也可以传入对应的小数：40% --> 0.4）*/
filter: blur(5px);
filter: brightness(40%);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* 使用多个滤镜 */
filter: contrast(175%) brightness(3%);

/* 不使用任何滤镜 */
filter: none;

```

## 电影效果

<style>
  .filter-1 {
    position: relative;
    width: 500px;
    height: 358px;
  }
  .filter-1 .pic {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(https://picsum.photos/400/400?random=1) no-repeat;
    background-size: cover;
    animation: fade-way 4.8s linear forwards;
  }
  .filter-1 .text {
    position: absolute;
    line-height: 55px;
    color: #fff;
    font-size: 36px;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: show 4.8s cubic-bezier(0.74, -0.1, 0.86, 0.83) forwards;
  }
  /* 背景图明暗度动画 */
  @keyframes fade-way { 
    30% {
      filter: brightness(1)
    }
    100% {
      filter: brightness(0);
    }
  }
  @keyframes show {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<div class="filter-1 container">
  <div class="pic"></div>
  <div class="text">
    <p>imondo.cn</p>
  </div>
</div>

```html
<style>
  .filter-1 {
    position: relative;
    width: 500px;
    height: 358px;
  }
  .filter-1 .pic {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(https://picsum.photos/400/400?random=1) no-repeat;
    background-size: cover;
    animation: fade-way 4.8s linear forwards;
  }
  .filter-1 .text {
    position: absolute;
    line-height: 55px;
    color: #fff;
    font-size: 36px;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: show 4.8s cubic-bezier(0.74, -0.1, 0.86, 0.83) forwards;
  }
  /* 背景图明暗度动画 */
  @keyframes fade-way { 
    30% {
      filter: brightness(1)
    }
    100% {
      filter: brightness(0);
    }
  }
  @keyframes show {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<div class="filter-1 container">
  <div class="pic"></div>
  <div class="text">
    <p>imondo.cn</p>
  </div>
</div>
```

## 模糊效果
<style>
  .cards {
    display: flex;
  }
  .card {
    position: relative;
    z-index: 1;
    padding: 10px 20px;
    margin: 0 10px;
    width: 200px;
    height: 280px;
    border-radius: 20px;
    list-style: none;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
  }
  .card:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
    filter: blur(0px) opacity(1);
    transition: filter 200ms linear, transform 200ms linear;
    background-image: url(https://picsum.photos/400/400?random=1);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card-1::before {
    background-image: url(https://picsum.photos/400/400?random=2);
  }
  .card-2::before {
    background-image: url(https://picsum.photos/400/400?random=3);
  }
  .cards:hover > .card:not(:hover):before {
    filter: blur(5px) opacity(0.8) brightness(0.8);
  }
  .card:hover:before {
    filter: saturate(1.2);
    transform: scale(1.05);
  }
</style>
<ul class="cards">
  <li class="card">
    <p class="title">选项一</p>
    <p class="content">我是选项一</p>
  </li>
  <li class="card card-1">
    <p class="title">选项二</p>
    <p class="content">我是选项二</p>
  </li>
  <li class="card card-2">
    <p class="title">选项三</p>
    <p class="content">我是选项三</p>
  </li>
</ul>

```html
<style>
  .cards {
    display: flex;
  }
  .card {
    position: relative;
    z-index: 1;
    padding: 10px 20px;
    margin: 0 10px;
    width: 200px;
    height: 280px;
    border-radius: 20px;
    list-style: none;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
  }
  .card:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
    filter: blur(0px) opacity(1);
    transition: filter 200ms linear, transform 200ms linear;
    background-image: url(https://picsum.photos/400/400?random=1);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card-1::before {
    background-image: url(https://picsum.photos/400/400?random=2);
  }
  .card-2::before {
    background-image: url(https://picsum.photos/400/400?random=3);
  }
  .cards:hover > .card:not(:hover):before {
    filter: blur(5px) opacity(0.8) brightness(0.8);
  }
  .card:hover:before {
    filter: saturate(1.2);
    transform: scale(1.05);
  }
</style>
<ul class="cards">
  <li class="card">
    <p class="title">选项一</p>
    <p class="content">我是选项一</p>
  </li>
  <li class="card card-1">
    <p class="title">选项二</p>
    <p class="content">我是选项二</p>
  </li>
  <li class="card card-2">
    <p class="title">选项三</p>
    <p class="content">我是选项三</p>
  </li>
</ul>
```

## 褪色效果

<style>
  .filter-img {
    width: 200px;
    height: 280px;
    border: 3px solid #fff;
    box-shadow: 0 10px 50px #5f2f1182;
    filter: sepia(30%) saturate(40%) hue-rotate(5deg);
    transition: transform 1s;
  }
  .filter-img:hover {
    filter: none;
    transform: scale(1.2) translateX(10px);
    z-index: 1;
  }
</style>

<img class="filter-img" src="https://picsum.photos/400/400?random=4" alt="">

```html
<style>
  .filter-img {
    width: 200px;
    height: 280px;
    border: 3px solid #fff;
    box-shadow: 0 10px 50px #5f2f1182;
    filter: sepia(30%) saturate(40%) hue-rotate(5deg);
    transition: transform 1s;
  }
  .filter-img:hover {
    filter: none;
    transform: scale(1.2) translateX(10px);
    z-index: 1;
  }
</style>

<img class="filter-img" src="https://picsum.photos/400/400?random=4" alt="">
```

## 灰度效果

怎样让网站变成灰色？在 html 元素上加上 `filter: grayscale(100%)` 即可。

## 融合效果

<style>
  .filter-2 {
    margin: 50px auto;
    height: 140px;
    width: 400px;
    background: #fff; /* 给融合元素的父元素设置背景色 */
    display: flex;
    align-items: center;
    justify-content: center;
    filter: contrast(30); /* 给融合元素的父元素设置contrast */
  }
  .filter-2 .circle {
    border-radius: 50%;
    position: absolute;
    filter: blur(10px); /* 给融合元素设置blur */
  }
  .filter-2 .circle-1 {
    height: 90px;
    width: 90px;
    background: #03a9f4;
    transform: translate(-50px);
    animation: 2s moving linear infinite alternate-reverse;
  }
  .filter-2 .circle-2 {
    height: 60px;
    width: 60px;
    background: #0000ff;
    transform: translate(50px);
    animation: 2s moving linear infinite alternate;
  }
  @keyframes moving {
    /* //两个元素的移动 */
    0% {
      transform: translate(50px);
    }
    100% {
      transform: translate(-50px);
    }
  }
</style>
<div class="filter-2 container">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>

```html
<style>
  .filter-2 {
    margin: 50px auto;
    height: 140px;
    width: 400px;
    background: #fff; /* 给融合元素的父元素设置背景色 */
    display: flex;
    align-items: center;
    justify-content: center;
    filter: contrast(30); /* 给融合元素的父元素设置contrast */
  }
  .filter-2 .circle {
    border-radius: 50%;
    position: absolute;
    filter: blur(10px); /* 给融合元素设置blur */
  }
  .filter-2 .circle-1 {
    height: 90px;
    width: 90px;
    background: #03a9f4;
    transform: translate(-50px);
    animation: 2s moving linear infinite alternate-reverse;
  }
  .filter-2 .circle-2 {
    height: 60px;
    width: 60px;
    background: #0000ff;
    transform: translate(50px);
    animation: 2s moving linear infinite alternate;
  }
  @keyframes moving {
    /* //两个元素的移动 */
    0% {
      transform: translate(50px);
    }
    100% {
      transform: translate(-50px);
    }
  }
</style>
<div class="filter-2 container">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
```

**实现融合效果的技术要点**: 

- `contrast` 滤镜应用在融合元素的父元素（.container）上，且**父元素必须设置 `background`**。

- `blur` 滤镜应用在融合元素（.circle）上。

`blur` 设置图像的模糊程度，`contrast` 设置图像的对比度。当两者像上面那样组合时，就会产生神奇的融合效果，你可以像使用公式一样使用这种写法

### 加载动画

<style>
  .container-1 {
    margin: 10px auto;
    height: 140px;
    width: 300px;
    background: #fff; /* 父元素设置背景色 */
    display: flex;
    align-items: center;
    filter: contrast(30); /* 父元素设置contrast */
  }
  .container-1 .circle {
    height: 50px;
    width: 60px;
    background: #1aa7ff;
    border-radius: 50%;
    position: absolute;
    filter: blur(20px); /* 子元素设置blur */
    transform: scale(0.1);
    transform-origin: left top;
  }
  .container-1 .circle {
    animation: move 4s cubic-bezier(0.44, 0.79, 0.83, 0.96) infinite;
  }
  .container-1 .circle:nth-child(2) {
    animation-delay: 0.4s;
  }
  .container-1 .circle:nth-child(3) {
    animation-delay: 0.8s;
  }
  .container-1 .circle:nth-child(4) {
    animation-delay: 1.2s;
  }
  .container-1.circle:nth-child(5) {
    animation-delay: 1.6s;
  }
  @keyframes move {
    /* 子元素的位移和尺寸动画 */
    0% {
      transform: translateX(10px) scale(0.3);
    }
    45% {
      transform: translateX(135px) scale(0.8);
    }
    85% {
      transform: translateX(270px) scale(0.1);
    }
  }
</style>
<div class="container-1">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>

```html
    <style>
      .container {
        margin: 10px auto;
        height: 140px;
        width: 300px;
        background: #fff; /* 父元素设置背景色 */
        display: flex;
        align-items: center;
        filter: contrast(30); /* 父元素设置contrast */
      }
      .circle {
        height: 50px;
        width: 60px;
        background: #1aa7ff;
        border-radius: 50%;
        position: absolute;
        filter: blur(20px); /* 子元素设置blur */
        transform: scale(0.1);
        transform-origin: left top;
      }
      .circle {
        animation: move 4s cubic-bezier(0.44, 0.79, 0.83, 0.96) infinite;
      }
      .circle:nth-child(2) {
        animation-delay: 0.4s;
      }
      .circle:nth-child(3) {
        animation-delay: 0.8s;
      }
      .circle:nth-child(4) {
        animation-delay: 1.2s;
      }
      .circle:nth-child(5) {
        animation-delay: 1.6s;
      }
      @keyframes move {
        /* 子元素的位移和尺寸动画 */
        0% {
          transform: translateX(10px) scale(0.3);
        }
        45% {
          transform: translateX(135px) scale(0.8);
        }
        85% {
          transform: translateX(270px) scale(0.1);
        }
      }
    </style>
    <div class="container">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
```

### 酷炫的文字出场

<style>
  .container-0 {
    margin-top: 50px;
    text-align: center;
    background-color: #000;
    filter: contrast(30);
  }
  .container-0 .text {
    font-size: 100px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    letter-spacing: -40px;
    color: #fff;
    animation: move-letter 4s linear forwards; /*forwards当动画完成后，保持最后一帧的状态 */
  }
  @keyframes move-letter {
    0% {
      opacity: 0;
      letter-spacing: -40px;
      filter: blur(10px);
    }
    25% {
      opacity: 1;
    }
    50% {
      filter: blur(5px);
    }
    100% {
      letter-spacing: 20px;
      filter: blur(2px);
    }
  }
</style>
<div class="container-0">
  <span class="text">imondo.cn</span>
</div>

```html
<style>
  .container-1 {
    margin-top: 50px;
    text-align: center;
    background-color: #000;
    filter: contrast(30);
  }
  .container-1 .text {
    font-size: 100px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    letter-spacing: -40px;
    color: #fff;
    animation: move-letter 4s linear forwards; /*forwards当动画完成后，保持最后一帧的状态 */
  }
  @keyframes move-letter {
    0% {
      opacity: 0;
      letter-spacing: -40px;
      filter: blur(10px);
    }
    25% {
      opacity: 1;
    }
    50% {
      filter: blur(5px);
    }
    100% {
      letter-spacing: 20px;
      filter: blur(2px);
    }
  }
</style>
<div class="container-1">
  <span class="text">imondo.cn</span>
</div>
```

## 水波纹效果

<style>
  .container-3 {
    height: 520px;
    width: 400px;
    display: flex;
    clip-path: inset(10px);
    flex-direction: column;
  }
  .container-3 img {
    height: 50%;
    width: 100%;
  }
  .container-3 .reflect {
    transform: translateY(-2px) scaleY(-1);
    /**对模拟倒影的元素应用svg filter**/ 
    /**url 中对应的是上面svg filter 的id **/
    filter: url(#displacement-wave-filter);
  }
</style>
<div class="container-3">
  <img src="../images/yue.jpg" />
  <img src="../images/yue.jpg" class="reflect" />
</div>

<!--定义svg滤镜，这里使用的是feTurbulence滤镜-->
<svg width="0" height="0">
  <filter id="displacement-wave-filter">
    <!--baseFrequency设置0.01 0.09两个值，代表x轴和y轴的噪声频率-->
    <feTurbulence baseFrequency="0.01 0.09">
      <!--这是svg动画的定义方式，通过动画不断改变baseFrequency的值，从而形成波动效果-->
      <animate
        attributeName="baseFrequency"
        dur="20s"
        keyTimes="0;0.5;1"
        values="0.01 0.09;0.02 0.13;0.01 0.09"
        repeatCount="indefinite"
      ></animate>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="10" />
  </filter>
</svg>


`filter` 还可以通过 `URL` 链接到 `SVG` 滤镜元素，`SVG`滤镜元素 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter)。

水波纹效果就是基于 `SVG` 的 `feTurbulence` 滤镜实现的，原理参考了 说说SVG的 [feTurbulence滤镜](https://zhuanlan.zhihu.com/p/366438535) 和 SVG [feTurbulence滤镜](https://www.zhangxinxu.com/wordpress/2020/10/svg-feturbulence/)深入介绍。

> feTurbulence 滤镜借助 Perlin 噪声算法模拟自然界真实事物那样的随机样式。它接收下面5个属性：
> - baseFrequency 表示噪声的基本频率参数，频率越高，噪声越密集。
> - numOctaves 就表示倍频的数量，倍频的数量越多，噪声看起来越自然。
> - seed 属性表示 feTurbulence 滤镜效果中伪随机数生成的起始值，不同数量的 seed 不会改变噪声的频率和密度，改变的是噪声的形状和位置。
> - stitchTiles 定义了 Perlin 噪声在边框处的行为表现。
> - type 属性值有 fractalNoise 和 turbulence，模拟随机样式使用 turbulence。

```html
<style>
  .container-3 {
    height: 520px;
    width: 400px;
    display: flex;
    clip-path: inset(10px);
    flex-direction: column;
  }
  .container-3 img {
    height: 50%;
    width: 100%;
  }
  .container-3 .reflect {
    transform: translateY(-2px) scaleY(-1);
    /**对模拟倒影的元素应用svg filter**/ 
    /**url 中对应的是上面svg filter 的id **/
    filter: url(#displacement-wave-filter);
  }
</style>
<div class="container-3">
  <img src="../images/yue.jpg" />
  <img src="../images/yue.jpg" class="reflect" />
</div>

<!--定义svg滤镜，这里使用的是feTurbulence滤镜-->
<svg width="0" height="0">
  <filter id="displacement-wave-filter">
    <!--baseFrequency设置0.01 0.09两个值，代表x轴和y轴的噪声频率-->
    <feTurbulence baseFrequency="0.01 0.09">
      <!--这是svg动画的定义方式，通过动画不断改变baseFrequency的值，从而形成波动效果-->
      <animate
        attributeName="baseFrequency"
        dur="20s"
        keyTimes="0;0.5;1"
        values="0.01 0.09;0.02 0.13;0.01 0.09"
        repeatCount="indefinite"
      ></animate>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="10" />
  </filter>
</svg>

```

## 抖动效果

<style>
  .shaky {
    font-size: 60px;
    filter: url(#displacement-text-filter); /**url中对应的是上面svg filter的id**/
  }
</style>
<div>
  <p class="shaky">imondo.cn</p>
</div>
<svg width="0" height="0">
  <filter id="displacement-text-filter">
    <!--定义feTurbulence滤镜-->
    <feTurbulence baseFrequency="0.02" seed="0">
      <!--这是svg动画的定义方式，通过动画不断改变seed的值，形成抖动效果-->
      <animate
        attributeName="seed"
        dur="1s"
        keyTimes="0;0.5;1"
        values="1;2;3"
        repeatCount="indefinite"
      ></animate>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="10" />
  </filter>
</svg>

```html
    <style>
      .shaky {
        font-size: 60px;
        filter: url(#displacement-text-filter); /**url中对应的是上面svg filter的id**/
      }
    </style>
    <div>
      <p class="shaky">imondo.cn</p>
    </div>
    <svg width="0" height="0">
      <filter id="displacement-text-filter">
        <!--定义feTurbulence滤镜-->
        <feTurbulence baseFrequency="0.02" seed="0">
          <!--这是svg动画的定义方式，通过动画不断改变seed的值，形成抖动效果-->
          <animate
            attributeName="seed"
            dur="1s"
            keyTimes="0;0.5;1"
            values="1;2;3"
            repeatCount="indefinite"
          ></animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="10" />
      </filter>
    </svg>
```

**参考**

- [巧用CSS filter，让你的网站更加酷炫！](https://juejin.cn/post/7002829486806794276#heading-6)