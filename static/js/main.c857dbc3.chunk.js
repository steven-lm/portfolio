(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{139:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},159:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"lightTheme",(function(){return Y})),n.d(i,"darkTheme",(function(){return Z}));var r=n(1),o=n(0),a=n.n(o),s=n(17),c=n.n(s),h=(n(76),n(29));n(77),n.p,n(78);var l=function(){!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};window.requestAnimationFrame=t}();for(var t=document.getElementById("background");"bgCanvas"!==t.lastElementChild.id;)t.removeChild(t.lastElementChild);for(var e=["one","two","three","four"],n=0;n<e.length;n++){var i=document.createElement("div");i.className="bird-container bird-container--".concat(e[n]);var r=document.createElement("div");r.className="bird bird--".concat(e[n]),i.appendChild(r),t.appendChild(i)}var o=document.getElementById("bgCanvas"),a=o.getContext("2d"),s=window.innerWidth,c=window.innerHeight;function h(e){e=e||{},this.terrain=document.createElement("canvas"),this.terCtx=this.terrain.getContext("2d"),this.scrollDelay=e.scrollDelay||90,this.lastScroll=(new Date).getTime(),this.terrain.classList.add("day-canvas"),this.terrain.width=s,this.terrain.height=c,this.fillStyle=e.fillStyle||"#C69FA5",this.mHeight=e.mHeight||c,this.points=[];var n=e.displacement||140,i=Math.pow(2,Math.ceil(Math.log(s)/Math.log(2)));this.points[0]=this.mHeight,this.points[i]=this.points[0];for(var r=1;r<i;r*=2){for(var o=i/r/2;o<i;o+=i/r)this.points[o]=(this.points[o-i/r/2]+this.points[o+i/r/2])/2+Math.floor(Math.random()*-n+n);n*=.6}t.appendChild(this.terrain)}c<400&&(c=400),o.width=s,o.height=c,h.prototype.update=function(){this.terCtx.clearRect(0,0,s,c),this.terCtx.fillStyle=this.fillStyle,(new Date).getTime()>this.lastScroll+this.scrollDelay&&(this.lastScroll=(new Date).getTime(),this.points.push(this.points.shift())),this.terCtx.beginPath();for(var t=0;t<=s;t++)0===t?this.terCtx.moveTo(0,this.points[0]):void 0!==this.points[t]&&this.terCtx.lineTo(t,this.points[t]);this.terCtx.lineTo(s,this.terrain.height),this.terCtx.lineTo(0,this.terrain.height),this.terCtx.lineTo(0,this.points[0]),this.terCtx.fill()};var l=[];l.push(new h({mHeight:c/2-120})),l.push(new h({displacement:120,scrollDelay:50,fillStyle:"#8B6E9D",mHeight:c/2-60})),l.push(new h({displacement:190,scrollDelay:30,fillStyle:"#494E7F",mHeight:c/2})),l.push(new h({displacement:250,scrollDelay:20,fillStyle:"#272744",mHeight:c/1.9})),function t(){var e=a.createLinearGradient(0,0,0,170);e.addColorStop(0,"#F3D4AB"),e.addColorStop(1,"#F3D4AB"),a.fillStyle=e,a.fillRect(0,0,s,c),a.fillStyle="#ffffff",a.strokeStyle="#ffffff";for(var n=l.length;n--;)l[n].update();requestAnimationFrame(t)}()};n(79);var d=function(){!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};window.requestAnimationFrame=t}();for(var t=document.getElementById("background");"bgCanvas"!==t.lastElementChild.id;)t.removeChild(t.lastElementChild);var e=document.getElementById("bgCanvas"),n=e.getContext("2d"),i=window.innerWidth,r=window.innerHeight;function o(e){e=e||{},this.terrain=document.createElement("canvas"),this.terCtx=this.terrain.getContext("2d"),this.scrollDelay=e.scrollDelay||90,this.lastScroll=(new Date).getTime(),this.terrain.classList.add("night-canvas"),this.terrain.width=i,this.terrain.height=r,this.fillStyle=e.fillStyle||"#191D4C",this.mHeight=e.mHeight||r,this.points=[];var n=e.displacement||140,o=Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)));this.points[0]=this.mHeight,this.points[o]=this.points[0];for(var a=1;a<o;a*=2){for(var s=o/a/2;s<o;s+=o/a)this.points[s]=(this.points[s-o/a/2]+this.points[s+o/a/2])/2+Math.floor(Math.random()*-n+n);n*=.6}t.appendChild(this.terrain)}function a(t){this.size=2*Math.random(),this.speed=.05*Math.random(),this.x=t.x,this.y=t.y}function s(){this.reset()}r<400&&(r=400),e.width=i,e.height=r,o.prototype.update=function(){this.terCtx.clearRect(0,0,i,r),this.terCtx.fillStyle=this.fillStyle,(new Date).getTime()>this.lastScroll+this.scrollDelay&&(this.lastScroll=(new Date).getTime(),this.points.push(this.points.shift())),this.terCtx.beginPath();for(var t=0;t<=i;t++)0===t?this.terCtx.moveTo(0,this.points[0]):void 0!==this.points[t]&&this.terCtx.lineTo(t,this.points[t]);this.terCtx.lineTo(i,this.terrain.height),this.terCtx.lineTo(0,this.terrain.height),this.terCtx.lineTo(0,this.points[0]),this.terCtx.fill()},n.fillStyle="#05004c",n.fillRect(0,0,i,r),a.prototype.reset=function(){this.size=2*Math.random(),this.speed=.05*Math.random(),this.x=i,this.y=Math.random()*r},a.prototype.update=function(){this.x-=this.speed,this.x<0?this.reset():n.fillRect(this.x,this.y,this.size,this.size)},s.prototype.reset=function(){this.x=Math.random()*i,this.y=0,this.len=80*Math.random()+10,this.speed=10*Math.random()+6,this.size=1*Math.random()+.1,this.waitTime=(new Date).getTime()+3e3*Math.random()+500,this.active=!1},s.prototype.update=function(){this.active?(this.x-=this.speed,this.y+=this.speed,this.x<0||this.y>=r?this.reset():(n.lineWidth=this.size,n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x+this.len,this.y-this.len),n.stroke())):this.waitTime<(new Date).getTime()&&(this.active=!0)};for(var c=[],h=0;h<r;h++)c.push(new a({x:Math.random()*i,y:Math.random()*r}));c.push(new s),c.push(new s),c.push(new o({mHeight:r/2-120})),c.push(new o({displacement:120,scrollDelay:50,fillStyle:"rgb(17,20,40)",mHeight:r/2-60})),c.push(new o({displacement:100,scrollDelay:20,fillStyle:"rgb(10,10,5)",mHeight:r/2})),function t(){n.fillStyle="#110E19",n.fillRect(0,0,i,r),n.fillStyle="#ffffff",n.strokeStyle="#ffffff";for(var e=c.length;e--;)c[e].update();requestAnimationFrame(t)}()},u=n(69),f=n.n(u),m=n(3),p=n(65),g=n.n(p),b=n(2);n(139);function x(){var t=Object(m.a)(['\n  font-size: 1.2rem;\n  margin: 0px 5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  cursor: pointer;\n\n  display: inline-block;\n  padding: 15px 20px;\n  position: relative;\n\n  &:hover {\n    border-bottom\n  }\n\n  &:hover:after { \n    width: 100%; \n    left: 0; \n  }\n\n  &:after {    \n    background: none repeat scroll 0 0 transparent;\n    bottom: 0;\n    content: "";\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: #fff;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n  }\n\n  @media (max-width: ',"",") {\n    background: ",";\n  }\n\n"]);return x=function(){return t},t}function j(){var t=Object(m.a)(["\n  display: flex;\n  @media (max-width: ","",") {\n    flex-direction: column;\n    margin-bottom: 30px;\n}\n"]);return j=function(){return t},t}function v(){var t=Object(m.a)(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 4px;\n  background-color: ",";\n  height: fit-content;\n  width: fit-content;\n  border-radius: 35%;\n"]);return v=function(){return t},t}function w(){var t=Object(m.a)(["\n  padding: 25px;\n  justify-content: space-between;\n  align-items: center;\n  display:flex;\n  width: 50%;\n\n  \n  @media (max-width: 1300px) {\n    width: 70%;\n  }\n\n  @media (max-width: ","",") {\n      flex-direction: column;\n  }\n"]);return w=function(){return t},t}function y(){var t=Object(m.a)(["\n  margin-top: 40px;\n  padding: 30px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n\n  button {\n    border: none;\n    background-color: transparent;\n  }\n\n  .hamburger--squeeze {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .menu-text {\n    margin-left: 12px;\n    font-weight: 700;\n    font-size: 1.4rem;\n  }\n\n"]);return y=function(){return t},t}function k(){var t=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n\n  @media (max-width: ","",") {\n    display: none;\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    background-color: ",";\n  }\n"]);return k=function(){return t},t}function O(){var t=Object(m.a)(["\n  color: ",";\n  height: fit-content;\n  width: fit-content;\n"]);return O=function(){return t},t}var C="950",T=b.c.header(O(),(function(t){return t.dark?"white":"black"})),S=b.c.div(k(),C,"px",(function(t){return t.dark?t.theme.darkTheme.header:t.theme.lightTheme.header})),E=b.c.div(y()),M=b.c.div(w(),C,"px"),D=b.c.div(v(),(function(t){return t.dark?t.theme.darkTheme.header:t.theme.lightTheme.header})),F=b.c.nav(j(),C,"px"),A=b.c.div(x(),C,"px",(function(t){return t.dark?"white":"black"})),z=function(t){var e=t.theme,n=t.changeTheme,i=(t.scroll,Object(o.useState)(!1)),a=Object(h.a)(i,2),s=a[0],c=a[1];return Object(o.useEffect)((function(){window.screen.width<C&&c(!0)}),[]),Object(r.jsxs)(T,{dark:"dark"===e,children:[s&&Object(r.jsx)(E,{children:Object(r.jsxs)("button",{class:"hamburger--squeeze",type:"button",onClick:function(){var t=document.getElementsByClassName("hamburger--squeeze")[0],e=document.getElementById("menu-items");t.classList.contains("is-active")?(t.classList.remove("is-active"),e.style.display="none"):(t.classList.add("is-active"),e.style.display="flex")},children:[Object(r.jsx)("span",{class:"hamburger-box",children:Object(r.jsx)("span",{class:"hamburger-inner"})}),Object(r.jsx)("span",{class:"menu-text",children:"MENU"})]})}),Object(r.jsx)(S,{id:"menu-items",dark:"dark"===e,children:Object(r.jsxs)(M,{children:[Object(r.jsxs)(F,{children:[Object(r.jsx)(A,{children:"About"}),Object(r.jsx)(A,{children:"Projects"}),Object(r.jsx)(A,{children:"Skills"}),Object(r.jsx)(A,{children:"Contact"})]}),Object(r.jsx)(D,{dark:"dark"===e,children:Object(r.jsx)(g.a,{onChange:function(){n()},checked:"dark"===e,size:60})})]})})]})};z.defaultProps={theme:"light",changeTheme:null,scroll:null};var B=z;function H(){var t=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  "]);return H=function(){return t},t}function q(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n  background-color: ",";\n\n  ","\n"]);return q=function(){return t},t}var R=b.c.div(q(),(function(t){return t.theme.lightTheme.darkerBackground}),(function(t){return t.dark&&Object(b.b)(H(),(function(t){return t.theme.darkTheme.background}))})),L=function(t){var e=t.theme;return console.log(e),Object(r.jsx)(R,{dark:"dark"===e,children:"About"})};n(144);function P(){var t=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  "]);return P=function(){return t},t}function N(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n  background-color: ",";\n\n  ","\n"]);return N=function(){return t},t}var I=b.c.div(N(),(function(t){return t.theme.lightTheme.background}),(function(t){return t.dark&&Object(b.b)(P(),(function(t){return t.theme.darkTheme.darkerBackground}))})),W=function(t){var e=t.theme;return Object(r.jsx)(I,{dark:"dark"===e,children:"Projects"})};n(145);function J(){var t=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  "]);return J=function(){return t},t}function G(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 800px;\n  background-color: ",";\n\n  ","\n"]);return G=function(){return t},t}var U=b.c.div(G(),(function(t){return t.theme.lightTheme.darkerBackground}),(function(t){return t.dark&&Object(b.b)(J(),(function(t){return t.theme.darkTheme.background}))})),K=function(t){var e=t.theme;return Object(r.jsx)(U,{dark:"dark"===e,children:"Tech"})},Q=n(22);var V=function(){var t=n(22).scroller,e=Object(o.useState)("light"),i=Object(h.a)(e,2),a=i[0],s=i[1];return window.onbeforeunload=function(){window.scrollTo(0,0)},Object(o.useEffect)((function(){window.addEventListener("resize",(function(){window.location.reload()}))}),[]),Object(o.useEffect)((function(){"light"===a?l():d()}),[a]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{id:"background",children:Object(r.jsx)("canvas",{id:"bgCanvas"})}),Object(r.jsx)(B,{theme:a,changeTheme:function(){console.log("changing mode"),s("light"===a?"dark":"light")}}),Object(r.jsxs)("div",{className:"info-container",children:[Object(r.jsx)("div",{className:"info-name",children:"Hello"}),Object(r.jsx)("div",{className:"expand-down",onClick:function(){var e;e="About",console.log("scrolling to ".concat(e)),t.scrollTo(e,{duration:1100,smooth:!0,offset:0})},children:Object(r.jsx)(f.a,{fontSize:"large"})})]}),Object(r.jsx)(Q.Element,{name:"About",children:Object(r.jsx)(L,{theme:a})}),Object(r.jsx)(Q.Element,{name:"Projects",children:Object(r.jsx)(W,{theme:a})}),Object(r.jsx)(Q.Element,{name:"Tech",children:Object(r.jsx)(K,{theme:a})})]})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),o(t),a(t)}))},Y={background:"white",darkerBackground:"#f0f0f0",header:"#ffeecb"},Z={background:"#1F1F1F",darkerBackground:"#111111",header:"#2f3249"};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b.a,{theme:i,children:Object(r.jsx)(V,{})})}),document.getElementById("root")),X()},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){}},[[159,1,2]]]);
//# sourceMappingURL=main.c857dbc3.chunk.js.map