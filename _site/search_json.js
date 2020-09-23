window.ydoc_plugin_search_json = {
  "效果": [
    {
      "title": "三角形",
      "content": "纯 css 画三角形与 border 属性相关",
      "url": "\\documents\\triangle.html",
      "children": [
        {
          "title": "上三角",
          "url": "\\documents\\triangle.html#上三角",
          "content": "上三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-bottom: 100px solid #3498db;\nborder-width: 0 100px 100px 100px;\n  .sj4 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-bottom: 100px solid #3498db;\n    border-width: 0 100px 100px 100px;\n  }\n"
        },
        {
          "title": "下三角",
          "url": "\\documents\\triangle.html#下三角",
          "content": "下三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\nborder-width: 100px 100px 0 100px;\n  .sj5 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n    border-width: 100px 100px 0 100px;\n  }\n"
        },
        {
          "title": "左三角",
          "url": "\\documents\\triangle.html#左三角",
          "content": "左三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-right: 100px solid #2ecc71;\nborder-width: 100px 100px 100px 0;\n  .sj6 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-right: 100px solid #2ecc71;\n    border-width: 100px 100px 100px 0;\n  }\n"
        },
        {
          "title": "右三角",
          "url": "\\documents\\triangle.html#右三角",
          "content": "右三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-left: 100px solid #f1c40f;\nborder-width: 100px 0 100px 100px;\n  .sj7 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-left: 100px solid #f1c40f;\n    border-width: 100px 0 100px 100px;\n  }\n"
        },
        {
          "title": "怎么设置？",
          "url": "\\documents\\triangle.html#怎么设置？",
          "content": "怎么设置？"
        },
        {
          "title": "设置四边 border 的属性",
          "url": "\\documents\\triangle.html#怎么设置？-设置四边-border-的属性",
          "content": "设置四边 border 的属性width: 100px;height: 100px;\nborder-top: 100px solid #e74c3c;\nborder-right: 100px solid #2ecc71;\nborder-bottom: 100px solid #3498db;\nborder-left: 100px solid #f1c40f;\n  .sj {\n    width: 100px;\n    height: 100px;\n    border-top: 100px solid #e74c3c;\n    border-right: 100px solid #2ecc71;\n    border-bottom: 100px solid #3498db;\n    border-left: 100px solid #f1c40f;\n    box-sizing: content-box;\n  }\n"
        },
        {
          "title": "设置 width 和 height 为 0",
          "url": "\\documents\\triangle.html#怎么设置？-设置-width-和-height-为-0",
          "content": "设置 width 和 height 为 0width: 0;height: 0;\nborder-top: 100px solid #e74c3c;\nborder-right: 100px solid #2ecc71;\nborder-bottom: 100px solid #3498db;\nborder-left: 100px solid #f1c40f;\n  .sj1 {\n    width: 0;\n    height: 0;\n    border-top: 100px solid #e74c3c;\n    border-right: 100px solid #2ecc71;\n    border-bottom: 100px solid #3498db;\n    border-left: 100px solid #f1c40f;\n  }\n"
        },
        {
          "title": "设置区域三个 border 颜色为透明",
          "url": "\\documents\\triangle.html#怎么设置？-设置区域三个-border-颜色为透明",
          "content": "设置区域三个 border 颜色为透明width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\n  .sj2 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n  }\n虽然当前显示为三角形，但实际占用的空间还是矩形"
        },
        {
          "title": "设置对立面 width 为 0",
          "url": "\\documents\\triangle.html#怎么设置？-设置对立面-width-为-0",
          "content": "设置对立面 width 为 0width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\nborder-width:100px 100px 0 100px;\n  .sj3 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n    border-width: 100px 100px 0 100px;\n  }\n"
        },
        {
          "title": "总结",
          "url": "\\documents\\triangle.html#总结",
          "content": "总结可以看到三角形方向是与 border 属性 top bottom left right 方向相反的"
        }
      ]
    },
    {
      "title": "移动端 1px",
      "content": "虽然这个 1px 需求其实是有点扯淡的 😜；因为视网膜屏本就是 1px由多个 dip 显示，纠结这个其实没什么含义。IOS 端其实是已经支持了 0.5px 方案，所以这里其实是中 hook 写法，以应付所谓的像素级还原.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {\n  position: relative;\n}\n\n/*线条颜色*/\n.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {\n  background-color: #e74c3c;\n}\n\n/*底边边框一像素*/\n.hairline-bottom::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*上边边框一像素*/\n.hairline-top::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*左边边框一像素*/\n.hairline-left::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*右边边框1像素*/\n.hairline-right::after {\n  content: \"\";\n  box-sizing: hairline-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*边框一像素*/\n.hairline::after {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e74c3c;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.5);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.5);\n  }\n\n  .hairline::after {\n    width: 200%;\n    height: 200%;\n    transform: scale(0.5);\n    transform-origin: 0 0;\n  }\n}\n\n/*设备像素比*/\n@media (-webkit-min-device-pixel-ratio: 3)  {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.333);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.333);\n  }\n\n  .hairline::after {\n    width: 300%;\n    height: 300%;\n    transform: scale(0.333);\n    transform-origin: 0 0;\n  }\n}\n.sj3 {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  padding: 10px;\n  text-align: center;\n  line-height: 150px;\n  font-size: 14px;\n}\n这是 1px 吗这是 左边 1px 吗这是 右边 1px 吗这是 上边 1px 吗这是 下边 1px 吗可能需要移动模式下才能看出区别",
      "url": "\\documents\\onepx.html",
      "children": [
        {
          "title": "伪类缩放",
          "url": "\\documents\\onepx.html#伪类缩放",
          "content": "伪类缩放直接上代码.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {  position: relative;\n}\n\n/*线条颜色*/\n.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {\n  background-color: #e74c3c;\n}\n\n/*底边边框一像素*/\n.hairline-bottom::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*上边边框一像素*/\n.hairline-top::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*左边边框一像素*/\n.hairline-left::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*右边边框1像素*/\n.hairline-right::after {\n  content: \"\";\n  box-sizing: hairline-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*边框一像素*/\n.hairline::after {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e74c3c;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.5);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.5);\n  }\n\n  .hairline::after {\n    width: 200%;\n    height: 200%;\n    transform: scale(0.5);\n    transform-origin: 0 0;\n  }\n}\n\n/*设备像素比*/\n@media (-webkit-min-device-pixel-ratio: 3)  {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.333);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.333);\n  }\n\n  .hairline::after {\n    width: 300%;\n    height: 300%;\n    transform: scale(0.333);\n    transform-origin: 0 0;\n  }\n}\n其实还有其他解决方案，不过其他的方案兼容性可能是个大问题，如果该方案还不能解决问题，就只能使用 border-image 添图片解决.border-image-1px {  border-width: 0 0 1px 0;\n  border-image: url(linenew.png) 0 0 2 0 stretch;\n}\n"
        }
      ]
    }
  ]
}