# 常见布局

## 垂直居中

这里的垂直居中只针对**未知高度元素**居中，解决方案只是作者常用方案之一。

### 绝对定位和 translate
<style>
  .mb-10 {
    margin-bottom: 10px;
  }
  .parent {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid;
  }
  .parent .child {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
    background-color: blueviolet;
    color: #fff;
  }
</style>
<div class="parent mb-10">
  <div class="child">imondo.cn</div>
</div>

```html
<style>
  .parent {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid;
  }
  .parent .child {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
    background-color: blueviolet;
    color: #fff;
  }
</style>
<div class="parent">
  <div class="child">imondo.cn</div>
</div>
```

### flex 布局

这应该是现代浏览器最佳方案

<style>
  .parent-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 1px solid;
  }
  .parent-1 .child {
    padding: 30px;
    background-color: blueviolet;
    color: #fff;
  }
</style>
<div class="parent-1 mb-10">
  <div class="child">imondo.cn</div>
</div>

```html
<style>
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 1px solid;
  }
  .parent .child {
    padding: 30px;
    background-color: blueviolet;
    color: #fff;
  }
</style>
<div class="parent">
  <div class="child">imondo.cn</div>
</div>
```

## 底部页脚

一般我们是使用 `calc` 计算 `main` 高度，这种对于固定的 `footer` 而言还是可以解决问题

<style>
  .container-1 {
    width: 500px;
    height: 500px;
    border: 1px solid;
    text-align: center;
    color: #fff;
  }
  .container-1 header {
    height: 50px;
    background-color: #3498db;
  }
  .container-1 main {
    min-height: calc(500px - 50px - 40px);
    background-color: #95a5a6;
  }
  .container-1 footer {
    height: 40px;
    padding: 15px 0;
    background-color: #1abc9c;
    box-sizing: border-box;
  }
</style>
<div class="container-1 mb-10">
  <header>header</header>
  <main>main</main>
  <footer>footer</footer>
</div>

具体代码：

```html

  <style>
    .container {
      border: 1px solid;
      text-align: center;
      color: #fff;
    }
    .container header {
      height: 50px;
      background-color: #3498db;
    }
    .container main {
      min-height: calc(100vh - 50px - 40px);
      background-color: #95a5a6;
    }
    .container footer {
      box-sizing: border-box;
      height: 40px;
      padding: 15px 0;
      background-color: #1abc9c;
    }
  </style>
  <div class="container">
    <header>header</header>
    <main>main</main>
    <footer>footer</footer>
  </div>
```

又要拿出我们的 Flex 布局

  <style>
    .container-2 {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 500px;
      border: 1px solid;
      text-align: center;
      color: #fff;
    }
    .container-2 header {
      padding: 15px 0;
      background-color: #3498db;
    }
    .container-2 main {
      flex: 1;
      background-color: #95a5a6;
    }
    .container-2 footer {
      padding: 15px 0;
      background-color: #1abc9c;
    }
  </style>
  <div class="container-2 mb-10">
    <header>header</header>
    <main>main</main>
    <footer>footer</footer>
  </div>

```html
  <style>
    .container {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 500px;
      border: 1px solid;
      text-align: center;
      color: #fff;
    }
    .container header {
      padding: 15px 0;
      background-color: #3498db;
    }
    .container main {
      flex: 1;
      background-color: #95a5a6;
    }
    .container footer {
      padding: 15px 0;
      background-color: #1abc9c;
    }
  </style>
  <div class="container">
    <header>header</header>
    <main>main</main>
    <footer>footer</footer>
  </div>
```