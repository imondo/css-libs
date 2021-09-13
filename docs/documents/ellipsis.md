# 省略号

## 单行省略

定义 `text-overflow: ellipsis;`

<style>
  .container {
    box-sizing: content-box;
    box-shadow: 0 0 5px #c6cbd1;
    padding: 5px;
    border-radius: 5px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .line {
    display: inline-block;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<div class="line mb-10 container">举杯邀明月，对影成三人。举杯邀明月，对影成三人</div>

```html
<style>
  .line {
    display: inline-block;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<div class="line">举杯邀明月，对影成三人</div>
```

## 多行省略

<style>
  .multi-line {
    display: -webkit-box;
    width: 100px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
<div class="multi-line mb-10 container">花间一壶酒，独酌无相亲。举杯邀明月，对影成三人</div>

```html
<style>
  .multi-line {
    display: -webkit-box;
    width: 100px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
<div class="multi-line">花间一壶酒，独酌无相亲。举杯邀明月，对影成三人</div>
```

## 兼容性

由于 `display: -webkit-box;` 多行文本的存在兼容性，在一些移动端或者老的浏览器上并没有效果，采用其他方式来实现

<style>
  [line-clamp='1'] {
    max-height: 1.5em;
  }
  [line-clamp='2'] {
    max-height: 3em;
  }
  [line-clamp='3'] {
    max-height: 4.5em;
  }
  [line-clamp='4'] {
    max-height: 5.9em;
  }
  .wrap {
    width: 200px;
    display: flex;
  }
  .text {
    position: relative;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    transition: 0.25s max-height;
  }
  .text::before {
    content: '';
    float: right;
    width: 0;
    height: 100%;
    margin-bottom: -21px;
  }
  .text::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
  }
  .btn {
    position: relative;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    border-radius: 4px;
    line-height: 1.5;
    margin-left: 16px;
    color: #0876e4;
    /*关键样式*/
    float: right;
    clear: both;
  }
  .btn::before {
    content: '...';
    position: absolute;
    left: -2px;
    color: #333;
    transform: translateX(-100%);
  }
  .exp {
    display: none;
  }
  .exp:checked + .text {
    max-height: none;
  }
  .btn::after {
    content: '展开'; /*采用content生成*/
  }
  .exp:checked + .text .btn::after {
    content: '收起';
  }
  .exp:checked + .text .btn::before {
    visibility: hidden; /*在展开状态下隐藏省略号*/
  }
  .exp:checked + .text::after {
    visibility: hidden;
  }
</style>


<div class="wrap container mb-10">
  <input type="checkbox" id="exp" class="exp" />
  <div class="text" line-clamp="4">
    <label class="btn" for="exp"></label>
    花间一壶酒，独酌无相亲。
    举杯邀明月，对影成三人。
    月既不解饮，影徒随我身。
    暂伴月将影，行乐须及春。
    我歌月徘徊，我舞影零乱。
    醒时同交欢，醉后各分散。
    永结无情游，相期邈云汉。
  </div>
</div>

```html
<style>
  [line-clamp='1'] {
    max-height: 1.5em;
  }
  [line-clamp='2'] {
    max-height: 3em;
  }
  [line-clamp='3'] {
    max-height: 4.5em;
  }
  [line-clamp='4'] {
    max-height: 5.9em;
  }
  .wrap {
    width: 200px;
    display: flex;
  }
  .text {
    position: relative;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    transition: 0.25s max-height;
  }
  .text::before {
    content: '';
    float: right;
    width: 0;
    height: 100%;
    margin-bottom: -21px;
  }
  .text::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
  }
  .btn {
    position: relative;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    border-radius: 4px;
    line-height: 1.5;
    margin-left: 16px;
    color: #0876e4;
    /*关键样式*/
    float: right;
    clear: both;
  }
  .btn::before {
    content: '...';
    position: absolute;
    left: -2px;
    color: #333;
    transform: translateX(-100%);
  }
  .exp {
    display: none;
  }
  .exp:checked + .text {
    max-height: none;
  }
  .btn::after {
    content: '展开'; /*采用content生成*/
  }
  .exp:checked + .text .btn::after {
    content: '收起';
  }
  .exp:checked + .text .btn::before {
    visibility: hidden; /*在展开状态下隐藏省略号*/
  }
  .exp:checked + .text::after {
    visibility: hidden;
  }
</style>

<div class="wrap">
  <input type="checkbox" id="exp" class="exp" />
  <div class="text" line-clamp="4">
    <label class="btn" for="exp"></label>
    花间一壶酒，独酌无相亲。
    举杯邀明月，对影成三人。
    月既不解饮，影徒随我身。
    暂伴月将影，行乐须及春。
    我歌月徘徊，我舞影零乱。
    醒时同交欢，醉后各分散。
    永结无情游，相期邈云汉。
  </div>
</div>
```