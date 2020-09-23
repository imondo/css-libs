# 移动端 1px

虽然这个 `1px` 需求其实是有点扯淡的 😜；因为视网膜屏本就是 `1px`由多个 `dip` 显示，纠结这个其实没什么含义。IOS 端其实是已经支持了 `0.5px` 方案，所以这里其实是中 hook 写法，以应付所谓的**像素级还原**

<style>
.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {
  position: relative;
}

/*线条颜色*/
.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {
  background-color: #e74c3c;
}

/*底边边框一像素*/
.hairline-bottom::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0;
}

/*上边边框一像素*/
.hairline-top::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0;
}

/*左边边框一像素*/
.hairline-left::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  transform-origin: 0 0;
}

/*右边边框1像素*/
.hairline-right::after {
  content: "";
  box-sizing: hairline-box;
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  transform-origin: 0 0;
}

/*边框一像素*/
.hairline::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #e74c3c;
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .hairline-bottom::after, .hairline-top::after {
    transform: scaleY(0.5);
  }

  .hairline-left::after, .hairline-right::after {
    transform: scaleX(0.5);
  }

  .hairline::after {
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}

/*设备像素比*/
@media (-webkit-min-device-pixel-ratio: 3)  {
  .hairline-bottom::after, .hairline-top::after {
    transform: scaleY(0.333);
  }

  .hairline-left::after, .hairline-right::after {
    transform: scaleX(0.333);
  }

  .hairline::after {
    width: 300%;
    height: 300%;
    transform: scale(0.333);
    transform-origin: 0 0;
  }
}
.sj3 {
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  line-height: 150px;
  font-size: 14px;
}
</style>
<div class="sj3 hairline">这是 1px 吗</div>
<div class="sj3 hairline-left">这是 左边 1px 吗</div>
<div class="sj3 hairline-right">这是 右边 1px 吗</div>
<div class="sj3 hairline-top">这是 上边 1px 吗</div>
<div class="sj3 hairline-bottom">这是 下边 1px 吗</div>

**可能需要移动模式下才能看出区别**

## 伪类缩放

直接上代码

```css
.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {
  position: relative;
}

/*线条颜色*/
.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {
  background-color: #e74c3c;
}

/*底边边框一像素*/
.hairline-bottom::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0;
}

/*上边边框一像素*/
.hairline-top::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0;
}

/*左边边框一像素*/
.hairline-left::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  transform-origin: 0 0;
}

/*右边边框1像素*/
.hairline-right::after {
  content: "";
  box-sizing: hairline-box;
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  transform-origin: 0 0;
}

/*边框一像素*/
.hairline::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #e74c3c;
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .hairline-bottom::after, .hairline-top::after {
    transform: scaleY(0.5);
  }

  .hairline-left::after, .hairline-right::after {
    transform: scaleX(0.5);
  }

  .hairline::after {
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}

/*设备像素比*/
@media (-webkit-min-device-pixel-ratio: 3)  {
  .hairline-bottom::after, .hairline-top::after {
    transform: scaleY(0.333);
  }

  .hairline-left::after, .hairline-right::after {
    transform: scaleX(0.333);
  }

  .hairline::after {
    width: 300%;
    height: 300%;
    transform: scale(0.333);
    transform-origin: 0 0;
  }
}
```

其实还有其他解决方案，不过其他的方案兼容性可能是个大问题，如果该方案还不能解决问题，就只能使用 `border-image` 添图片解决

```css
.border-image-1px {
  border-width: 0 0 1px 0;
  border-image: url(linenew.png) 0 0 2 0 stretch;
}
```
