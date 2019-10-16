<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
















/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
}

#app {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1305190_vyt2u93pykq.eot?t=1563544007367");
  /* IE9 */
  src: url("//at.alicdn.com/t/font_1305190_vyt2u93pykq.eot?t=1563544007367#iefix") format("embedded-opentype"),
  /* IE6-IE8 */
  url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASUAAsAAAAACRAAAARFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFTIRUATYCJAMQCwoABCAFhG0HSBvGB1GULUqb7Edh3FiXuDiVdhvY863srYxiYI2H/7/3c59776/Vphaq2pcPDQ31NI9GQ908IAHJineBt99+WmCj8nxZVhFsCv1B7nr9kHv5Kbmh01NqQm7CbTCPTHum6rMHoN2c5shJanbPCT/of46ZLp8PLL/N5pIRtKa9AY6idUDdGBcgO9A7Ybxh7OIybhNoW9RVvlrfP5VaCm1RIN4Er0qtmFIpwYWmpJ6zs4iPaprpffqOD+7fx38H0SKpZdrK66eVLU1/pV/L+bVa49ZGYPWnB7OPjH0lhXiRa7xT9YP7qtpSfM2JkqauT/Q1MPwFVYXZaxE28b88QpaIOk3YRdijUOZXMikEv4bMPNEyVEoYXeY30cdPYg9gp7q6BHn362rvYmdoomtqrqdrqKs7v+c58/Kl1dirCIypk/st0JGIU/tM5cHKl++pVx9o/IlVPpateUmdVBiEU65gN3mfJZQteu54yb3uSDP5EguhiPr3u6P0CT1T+/r6aGgKUf/w5dOuIhpg+u957Rtb3s/ZPDcYzRRCqC0ic4aZHvCondm3WEdRJoCgzsmjWPN7OpJFP4ExM7UPrOk1rWXbv/YA5SCnU6R9Zmt622uOefWKliJo5gKuKc6fXjsjTZmtgXSIAJ9MZWi3FBG8TliqC6q2Dy7X884fCjE8qKkbstDYVtVNse7Eqvb2aooatrfDqoBvZ721Ym8fFGFLVS7WrVnva5aaa5D97kGS24/dySLfZ/z00PHtnSaa1384R7XZpMaM6sH5UEcdwWPv7idqWr6oktTO1+YFqu03PHnN6cD2B8Bh/ppXqjaOqq9V52wcXqnpNlsH1bnYD7R1tOOKxa0hKysupM5o60TFeO9Y7h6uLr6/pFEPJkg1U2ago41YTkxKZJNuTG2wLV0fbGgUrXf1igtZiVZnJYLivs7TiWoNw2K74sHEGg3gCpzSK4rfEKy4sIlsJMUFJIdp4Uc0Ev7b8rxNU7+Hs+FCkbq+g5WDrYOO9iWZTNLQC7AKsAnQpfeBQgDVhvw/rwCAPEA+/Ftm+ZoHHCsNYn9p6lyuuh/s1ztuVrVWbpHf8cpZtVn/BqtmRZE5mqoUkWsyFVfx4OX7E9q6lQpax/76EM9qpxOaZiEkDQuQNa0jC3YfajqOoK7pFNr2bPZ3TLCqKC3s+gIQhr4h6fsG2dAPsmB/oWbuH+qGUYW2m5ic2LEZoXPJqAQt6BsEQ7kzNNLxMh/Qn1LFUY6Lf0EuggdG/WEyssEcuY81xdmPRRw4pgzW4D5MU4LIdEQj/YNInAwGLu+b+oayUsclhhSBLKDdgMAgOWfXFp3U7z9A3klK4ZKyEvULxApheDDSN6yB3AjzWmXn8kjhzBsTwgEOIxmwBnqU6kECYv60I2SIvkMLfzQxQNVcXWF/fHF2hdugTTuzRIocJWrabzFo6hmKt9YuxqFnlTXSgWvISyUAAAA=") format("woff2"),
  url("//at.alicdn.com/t/font_1305190_vyt2u93pykq.woff?t=1563544007367") format("woff"),
  url("//at.alicdn.com/t/font_1305190_vyt2u93pykq.ttf?t=1563544007367") format("truetype"),
  /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url("//at.alicdn.com/t/font_1305190_vyt2u93pykq.svg?t=1563544007367#iconfont") format("svg");
  /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-weibo-copy:before {
  content: "\e602";
}

.icon-telegram:before {
  content: "\e620";
}

.icon-weixin:before {
  content: "\e610";
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
