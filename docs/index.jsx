---
banner:
  name: 'CSS Libs'
  desc: 'CSS 效果采集库'
  btns: 
    - { name: '开 始', href: './documents/center.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/one-pupil/css-libs' }
features: 
  - { name: '记录', desc: '记录工作中使用，碰到过的 css 效果' }
  - { name: '收集', desc: '收集博客中看到的各种牛逼的 css 特效' }
  - { name: '查阅', desc: '通过记录与收集，方便以后能够随时查阅' }
  - { name: '学习', desc: '对 css 有更多深入的探索' }

footer:
  copyRight:
    name: 'Mondo'
    href: 'https://imondo.cn/'
  links:
    Git仓库:
      - { name: 'Github', href: 'https://github.com/one-pupil/css-libs' }
      - { name: 'Github Issue', href: 'https://github.com/one-pupil/css-libs/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />