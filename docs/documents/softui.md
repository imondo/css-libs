# 新拟态 UI

英文名 Neumorphism，简称 “Soft UI”。是一种图形样式，通过 css 来模拟真实的物体

## 基本实现

<style>
  html {
  /* 定义变量 */
  --bgColor: #ff5353;

  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 40vw;
  height: 40vh;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor);
}

.card {
  width: 30vh;
  height: 30vh;
  margin: 5vh;
  background-color: var(--bgColor);
  border-radius: 30px;
}

/* 主要部分 */
.left {
    /* 设置外阴影 */
  box-shadow: var(--blackShadow),
              var(--whiteShadow);
}

.right {
    /* 设置内阴影 */
  box-shadow: inset var(--blackShadow),
              inset var(--whiteShadow);
}
</style>
<div class="container">
  <div class="card left"></div>
  <div class="card right"></div>
</div>


```html
  <div class="card left"></div>
  <div class="card right"></div>
```
```css
html {
    /* 定义变量 */
    --bgColor: #ff5353;

    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 40vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor);
}

.card {
    width: 30vh;
    height: 30vh;
    margin: 5vh;
    background-color: var(--bgColor);
    border-radius: 30px;
}

/* 主要部分 */
.left {
    /* 设置外阴影 */
    box-shadow: var(--blackShadow),
                var(--whiteShadow);
}

.right {
    /* 设置内阴影 */
    box-shadow: inset var(--blackShadow),
                inset var(--whiteShadow);
}
```

## 中级实现

<style>
html {
    /* 定义变量 */
    --bgColor: #ff5353;

    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);

    --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);
    --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
    display: flex;
    margin: 0;
    padding: 0;
    width: 40vw;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background-color: var(--bgColor);
}

.card {
  width: 30vh;
  height: 30vh;
  margin: 5vh;
  background-color: var(--bgColor);
  border-radius: 30px;
}

/* 主要部分 */
.left1 {
  box-shadow: inset var(--blackShadow2),
              inset var(--whiteShadow2);
}

.right1 {
  box-shadow: var(--blackShadow2),
              var(--whiteShadow2);
}
</style>
<div class="container">
  <div class="card left1"></div>
  <div class="card right1"></div>
</div>

```html
<div class="container">
  <div class="card left1"></div>
  <div class="card right1"></div>
</div>
```

```css
html {
    /* 定义变量 */
    --bgColor: #ff5353;

    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);

    --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);
    --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
    display: flex;
    margin: 0;
    padding: 0;
    width: 40vw;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background-color: var(--bgColor);
}

.card {
    width: 30vh;
    height: 30vh;
    margin: 5vh;
    background-color: var(--bgColor);
    border-radius: 30px;
}

/* 主要部分 */
.left {
    box-shadow: inset var(--blackShadow2),
                inset var(--whiteShadow2);
}

.right {
    box-shadow: var(--blackShadow2),
                var(--whiteShadow2);
}
```

## 高级实现

<style>
html {
  /* 定义变量 */
  --bgColor: #ff5353;

  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);

  --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);
  --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 40vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor);
}

.card1 {
  width: 15vh;
  height: 15vh;
  background-color: var(--bgColor);
  border-radius: 10px;
  box-sizing: content-box;
}

/* 主要部分 */
.left3 {
  box-shadow: inset var(--blackShadow),
              inset var(--whiteShadow);
}

.right3 {
  box-shadow: var(--blackShadow),
              var(--whiteShadow);
  padding: 5px;
}

.left4 {
  box-shadow: inset var(--blackShadow2),
              inset var(--whiteShadow2);
}

.right4 {
  box-shadow: var(--blackShadow),
              var(--whiteShadow);
  padding: 5px;
  margin: 5vh;
}  
</style>

<div class="container">
  <div class="card1 right3">
      <div class="card1 left3"></div>
  </div>
  <div class="card1 right4">
      <div class="card1 left4"></div>
  </div>
</div>

```html
<div class="container">
  <div class="card right3">
      <div class="card left3"></div>
  </div>
  <div class="card right4">
      <div class="card left4"></div>
  </div>
</div>
```
```css
html {
  /* 定义变量 */
  --bgColor: #ff5353;

  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);
  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);

  --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);
  --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);
}

/* 设置一些页面的布局样式 */
.container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 40vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor);
}

.card1 {
  width: 15vh;
  height: 15vh;
  background-color: var(--bgColor);
  border-radius: 10px;
  box-sizing: content-box;
}

/* 主要部分 */
.left3 {
  box-shadow: inset var(--blackShadow),
              inset var(--whiteShadow);
}

.right3 {
  box-shadow: var(--blackShadow),
              var(--whiteShadow);
  padding: 5px;
}

.left4 {
  box-shadow: inset var(--blackShadow2),
              inset var(--whiteShadow2);
}

.right4 {
  box-shadow: var(--blackShadow),
              var(--whiteShadow);
  padding: 5px;
  margin: 5vh;
}
```