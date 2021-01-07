# 三角形

> [三角形生成器](http://css-tricks.neatbang.com/createTriangle/)；[三角箭头](https://www.dute.org/css-arrow)

纯 `css` 画三角形与 `border` 属性相关

## 上三角

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-bottom: 100px solid #3498db;
border-width: 0 100px 100px 100px;
```
<style>
  .sj4 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-bottom: 100px solid #3498db;
    border-width: 0 100px 100px 100px;
  }
</style>
<div class="sj4"></div>

## 下三角

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-top: 100px solid #e74c3c;
border-width: 100px 100px 0 100px;
```
<style>
  .sj5 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-top: 100px solid #e74c3c;
    border-width: 100px 100px 0 100px;
  }
</style>
<div class="sj5"></div>

## 左三角

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-right: 100px solid #2ecc71;
border-width: 100px 100px 100px 0;
```
<style>
  .sj6 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-right: 100px solid #2ecc71;
    border-width: 100px 100px 100px 0;
  }
</style>
<div class="sj6"></div>

## 右三角

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-left: 100px solid #f1c40f;
border-width: 100px 0 100px 100px;
```
<style>
  .sj7 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-left: 100px solid #f1c40f;
    border-width: 100px 0 100px 100px;
  }
</style>
<div class="sj7"></div>

## 怎么设置？

### 设置四边 border 的属性

```css
width: 100px;
height: 100px;
border-top: 100px solid #e74c3c;
border-right: 100px solid #2ecc71;
border-bottom: 100px solid #3498db;
border-left: 100px solid #f1c40f;
```
<style>
  .sj {
    width: 100px;
    height: 100px;
    border-top: 100px solid #e74c3c;
    border-right: 100px solid #2ecc71;
    border-bottom: 100px solid #3498db;
    border-left: 100px solid #f1c40f;
    box-sizing: content-box;
  }
</style>
<div class="sj"></div>

### 设置 width 和 height 为 0

```css
width: 0;
height: 0;
border-top: 100px solid #e74c3c;
border-right: 100px solid #2ecc71;
border-bottom: 100px solid #3498db;
border-left: 100px solid #f1c40f;
```
<style>
  .sj1 {
    width: 0;
    height: 0;
    border-top: 100px solid #e74c3c;
    border-right: 100px solid #2ecc71;
    border-bottom: 100px solid #3498db;
    border-left: 100px solid #f1c40f;
  }
</style>
<div class="sj1"></div>

### 设置区域三个 border 颜色为透明

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-top: 100px solid #e74c3c;
```
<style>
  .sj2 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-top: 100px solid #e74c3c;
  }
</style>
<div class="sj2"></div>

虽然当前显示为三角形，但实际占用的空间还是矩形

### 设置对立面 width 为 0

```css
width: 0;
height: 0;
border: 100px solid transparent;
border-top: 100px solid #e74c3c;
border-width:100px 100px 0 100px;
```
<style>
  .sj3 {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-top: 100px solid #e74c3c;
    border-width: 100px 100px 0 100px;
  }
</style>
<div class="sj3"></div>

## 总结

可以看到三角形方向是与 `border` 属性 `top` `bottom` `left` `right` 方向相反的