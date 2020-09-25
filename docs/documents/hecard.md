# 贺卡效果

<style>
.card-contant {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  background: #353b48;
}
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  color: #fff;
  background:#c23616;
  transform-style: preserve-3d;
  transform: perspective(900px) rotateX(45deg) rotateY(-5deg);
}
.card::before,
.card::after,
.hook {
  position: absolute;
  width: 50%;
  height: 100%;
  background: #e84118;
  transition: 1s;
  box-sizing: border-box;
}
.card::before {
  content: "中秋";
  left: 0;
  top: 0;
  padding-right: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform-origin: left top;
  border-right: 3px solid #c23616;
  backface-visibility: hidden;
  z-index: 1;
}
.card::after {
  content: "快乐";
  right: 0;
  top: 0;
  padding-left: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform-origin: right top;
  border-left: 3px solid #c23616;
  backface-visibility: hidden;
}

.card:hover::before {
  transform: rotateY(-145deg);
}
.card:hover::after {
  transform: rotateY(145deg);
}
.card:hover .hook:nth-of-type(1) {
  transform: rotateY(-145deg);
}
.card:hover .hook:nth-of-type(2) {
  transform: rotateY(145deg);
}

.card .hook:nth-of-type(1) {
  left: 0;
  top: 0;
  transform-origin: left top;
}
.card .hook:nth-of-type(2) {
  right: 0;
  top: 0;
  transform-origin: right top;
}
</style>

<div class="card-contant">
  <div class="card">
    imondo.cn
    <p class="hook"></p>
    <p class="hook"></p>
  </div>
</div>


直接上代码


```html
<div class="card-contant">
  <div class="card">
    imondo.cn
    <p class="hook"></p>
    <p class="hook"></p>
  </div>
</div>
```

```css
.card-contant {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  background: #353b48;
}
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  color: #fff;
  background:#c23616;
  transform-style: preserve-3d;
  transform: perspective(900px) rotateX(45deg) rotateY(-5deg);
}
.card::before,
.card::after,
.hook {
  position: absolute;
  width: 50%;
  height: 100%;
  background: #e84118;
  transition: 1s;
  box-sizing: border-box;
}
.card::before {
  content: "中秋";
  left: 0;
  top: 0;
  padding-right: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform-origin: left top;
  border-right: 3px solid #c23616;
  backface-visibility: hidden;
  z-index: 1;
}
.card::after {
  content: "快乐";
  right: 0;
  top: 0;
  padding-left: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform-origin: right top;
  border-left: 3px solid #c23616;
  backface-visibility: hidden;
}

.card:hover::before {
  transform: rotateY(-145deg);
}
.card:hover::after {
  transform: rotateY(145deg);
}
.card:hover .hook:nth-of-type(1) {
  transform: rotateY(-145deg);
}
.card:hover .hook:nth-of-type(2) {
  transform: rotateY(145deg);
}

.card .hook:nth-of-type(1) {
  left: 0;
  top: 0;
  transform-origin: left top;
}
.card .hook:nth-of-type(2) {
  right: 0;
  top: 0;
  transform-origin: right top;
}
```
