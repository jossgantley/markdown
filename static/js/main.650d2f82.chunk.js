(this.webpackJsonpmarkdown=this.webpackJsonpmarkdown||[]).push([[0],{13:function(e,n,t){e.exports=t(22)},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(10),i=t.n(r),c=(t(18),t(12)),l=Object(o.createContext)(),s=function(e){var n=Object(o.useState)(""),t=Object(c.a)(n,2),r=t[0],i=t[1];return a.a.createElement("div",null,a.a.createElement(l.Provider,{value:{text:r,setText:i}},e.children))},m=function(){var e=Object(o.useContext)(l).setText;return a.a.createElement("div",null,a.a.createElement("textarea",{id:"editor",onChange:function(n){e(n.target.value)}}))},u=t(11),d=t.n(u),v=function(){var e=Object(o.useContext)(l),n=e.setText,t=e.text,r='# Welcome\n\n ## This is not a sub-heading\n\n**This is bold**\n\nHere is some code: `<div></div>`\n\nHere is some multi-line code: \n```\nrandomFunction = () =>{\n    console.log("This is cool");\n}\n```\nHere is a link: [example link]("https://example.io")\n\nHere is an unordered list:\n\n- item 1\n- item 2\n- item 3\n\nHere is an ordered list:\n\n1. item 1\n2. item 2\n3. item 3\n\nHere is a \n> block quote\n\nHere is an embedded image\n\n![React Logo](https://goo.gl/Umyytc)\n';Object(o.useEffect)((function(){document.getElementById("editor").value=r,n(r)}),[r,n]);return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:d()(t)},id:"preview"})};var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null,a.a.createElement(m,null),a.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.650d2f82.chunk.js.map