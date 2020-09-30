# loading

常见的 loading 加载效果


<!-- 学习强国 loading -->
<style>
  .loading1 {
    width: 0;
    height: 0;
    border: 5px #e74c3c solid;
    border-radius: 50%;
    background: transparent;
    animation: move-loading1 1s infinite;
  }
  @keyframes move-loading1 {
    50% {
      transform: scale(2);
      width: 10px;
      height: 10px;
    }
    100% {
      opacity: 0;
      border-width: 2px;
    }
  }
</style>
<div class="container">
  <div class="loading1"></div>
</div>

<!--  -->
<style>
.container {
  position: relative;
  width: 30vh;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
.loader:before, .loader:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}
@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
</style>

<div class="container">
  <div class="loader"></div>
</div>

<!--  -->
<style>
.loader1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -25px;
}
.loader-block {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  opacity: 0;
  width: 10px;
  height: 10px;
  background: #2980b9;
  animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;
}
.loader-block:nth-child(1) {
  transform: translate(0, 0);
  animation-delay: 0.065s;
}

.loader-block:nth-child(2) {
  transform: translate(10px, 0);
  animation-delay: 0.13s;
}

.loader-block:nth-child(3) {
  transform: translate(20px, 0);
  animation-delay: 0.195s;
}

.loader-block:nth-child(4) {
  transform: translate(0, 10px);
  animation-delay: 0.325s;
}

.loader-block:nth-child(5) {
  transform: translate(10px, 10px);
  animation-delay: 0.13s;
}

.loader-block:nth-child(6) {
  transform: translate(20px, 10px);
  animation-delay: 0.455s;
}

.loader-block:nth-child(7) {
  transform: translate(0, 20px);
  animation-delay: 0.39s;
}

.loader-block:nth-child(8) {
  transform: translate(10px, 20px);
  animation-delay: 0.26s;
}

.loader-block:nth-child(9) {
  transform: translate(20px, 20px);
}

@-webkit-keyframes pulse {
  from,
  40% {
    background: #e74c3c;
  }
  to {
    background: #3498db;
  }
}
@-webkit-keyframes show {
  from, 40% {
    opacity: 0;
  }
  41%, to {
    opacity: 1;
  }
}
@keyframes pulse {
  from,
  40% {
    background: #e74c3c;
  }
  to {
    background: #3498db;
  }
}
@keyframes show {
  from, 40% {
    opacity: 0;
  }
  41%, to {
    opacity: 1;
  }
}
</style>
<div class="container">
  <div class="loader1">
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
    <span class="loader-block"></span>
  </div>
</div>

<!--  -->
<style>
.loader2 {
  width: 50px;
  height: 51px;
  border: 8px solid;
  border-top-color: hsl(154,100%,31%);
  border-left-color: hsl(216,87%,52%);
  border-bottom-color: hsl(8,66%,50%);
  border-right-color: hsl(42,100%,51%);
  border-radius: 50%;
  transform: rotate(45deg);
  margin: 30px auto;
}
.loader2 .p {
  display: inline-block;
  width: 57px;
  height: 57px;
  background: linear-gradient(90deg, hsla(212,67%,36%,0) 0%,
                                         hsla(207,69%,51%,0) 76%,
                                         hsla(0,0%,100%,1) 85%,
                                         hsla(0,0%,100%,1) 100%);
  background-origin: border-box;
  border: 6px solid transparent;
  border-radius: 50%;
  box-shadow: inset -999px 0 0 #fff;
  transform: translate(-8px, 55px);
  animation: loading 1s linear infinite;
}

@keyframes loading {
    0% { transform: translate(-11px, -11px) rotate(0deg); }
  100% { transform: translate(-11px, -11px) rotate(360deg); }
}
</style>
<div class="container">
  <div class="loader2">
    <span class="p"></span>
  </div>
</div>

<!--  -->

<style>
.loader3 {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: #e67e22;
  display: block;
  margin: 10px auto;
  /* position: absolute; */
  left: 50%;
  animation: spin 2s ease infinite;
}
.loader3:before, .loader3:after {
  content: '';
  display: block;
  position: absolute;
  height: inherit;
  width: inherit;
  background: inherit;
  border-radius: inherit;
  animation: spin 2s ease infinite;
}
.loader3:before {
  left: -30px;
}
.loader3:after {
  left: 30px;
}
@keyframes spin {
  0% {
    top: 0;
    transform: rotate(0deg);
  }
  50% {
    top: -30px;
    transform: rotate(-180deg);
  }
  100% {
    top: 0;
    transform: rotate(-360deg);
  }
}
</style>
<div class="container">
  <div class="loader3"></div>
</div>