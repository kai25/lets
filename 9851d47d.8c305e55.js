(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(133)),c={id:"basic_usage",title:"Basic usage"},i={id:"basic_usage",title:"Basic usage",description:"We will start with a simple example here. More advanced usage you will find in the [Advanced section](advanced_usage.md).",source:"@site/docs/basic_usage.md",permalink:"/docs/basic_usage",editUrl:"https://github.com/lets-cli/lets/edit/master/docs/docs/basic_usage.md",sidebar:"someSidebar",previous:{title:"Shell completion",permalink:"/docs/completion"},next:{title:"Advanced usage",permalink:"/docs/advanced_usage"}},l=[{value:"Create config",id:"create-config",children:[]},{value:"Write first command",id:"write-first-command",children:[]},{value:"Run first command",id:"run-first-command",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We will start with a simple example here. More advanced usage you will find in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced_usage"}),"Advanced section"),"."),Object(o.b)("p",null,"Assume you have a ",Object(o.b)("inlineCode",{parentName:"p"},"node.js")," project."),Object(o.b)("h3",{id:"create-config"},"Create config"),Object(o.b)("p",null,"Go to your project repo and create ",Object(o.b)("inlineCode",{parentName:"p"},"lets.yaml"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"touch lets.yaml"))),Object(o.b)("p",null,"Now add ",Object(o.b)("inlineCode",{parentName:"p"},".lets")," to ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),". ",Object(o.b)("inlineCode",{parentName:"p"},".lets")," is a lets directory where it stores some internal metadata. You do not need to commit this directory."),Object(o.b)("h3",{id:"write-first-command"},"Write first command"),Object(o.b)("p",null,"First of all you want to be able to run your project."),Object(o.b)("p",null,"You have your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," with all dependencies and scripts in it."),Object(o.b)("p",null,"Lets create first command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"shell: bash\n\ncommands:\n  run:\n    description: Run nodejs server\n    cmd: npm run server\n")),Object(o.b)("p",null,"That's it. You've just created your first ",Object(o.b)("inlineCode",{parentName:"p"},"lets")," command."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"lets")," in terminal to see all available commands."),Object(o.b)("h3",{id:"run-first-command"},"Run first command"),Object(o.b)("p",null,"Now you can use this command to start your server."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"lets run"))))}u.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);