/*! For license information please see 1.2261a2a6.chunk.js.LICENSE.txt */
(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[1],{176:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,r=s(1),o=(n=r)&&"object"===typeof n&&"default"in n?n.default:n,t=new(s(541)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),u=t.getOS(),c=t.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,i){for(var s=0;s<i.length;s++){var n=i[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function v(){return(v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function g(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,n)}return s}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,i){return(x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="mobile",O="tablet",S="smarttv",N="console",C="wearable",A=void 0,P="Chrome",T="Firefox",V="Opera",F="Yandex",M="Safari",_="Internet Explorer",j="Edge",B="Chromium",L="IE",W="Mobile Safari",z="MIUI Browser",I="iOS",R="Android",q="Windows Phone",U="Windows",D="Mac OS",G={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},H=function(e,i,s,n){return function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?g(s,!0).forEach((function(i){h(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(s).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(s.name),osVersion:w(s.version),ua:w(n)})},Z=function(e){switch(e){case k:return{isMobile:!0};case O:return{isTablet:!0};case S:return{isSmartTV:!0};case N:return{isConsole:!0};case C:return{isWearable:!0};case A:return{isBrowser:!0};default:return G}}(l.type);var $=function(){return"string"===typeof c&&-1!==c.indexOf("Edg/")},X=function(){return a.name===j},Y=function(){return b("iPad")},J=l.type===S,K=l.type===N,Q=l.type===C,ee=a.name===W||Y(),ie=a.name===B,se=function(){switch(l.type){case k:case O:return!0;default:return!1}}()||Y(),ne=l.type===k,re=l.type===O||Y(),oe=l.type===A,te=u.name===R,ae=u.name===q,le=u.name===I||Y(),de=a.name===P,ue=a.name===T,ce=a.name===M||a.name===W,we=a.name===V,me=a.name===_||a.name===L,be=w(u.version),fe=w(u.name),pe=w(a.version),he=w(a.major),ve=w(a.name),ge=w(l.vendor),ye=w(l.model),xe=w(d.name),Ee=w(d.version),ke=w(c),Oe=X()||$(),Se=a.name===F,Ne=w(l.type,"browser"),Ce=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),Ae=Y(),Pe=b("iPhone"),Te=b("iPod"),Ve=function(){var e=m(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Fe=$(),Me=X()&&!$(),_e=u.name===U,je=u.name===D,Be=a.name===z;i.AndroidView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return te?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.BrowserView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return oe?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.ConsoleView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return K?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.CustomView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return e.condition?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.IEView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return me?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.IOSView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return le?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return ne?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.MobileView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return se?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.SmartTVView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return J?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.TabletView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return re?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.WearableView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return Q?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,t=e.style;return ae?i?o.createElement(r.Fragment,null,s):o.createElement("div",{className:n,style:t},s):null},i.browserName=ve,i.browserVersion=he,i.deviceDetect=function(){var e=Z.isBrowser,i=Z.isMobile,s=Z.isTablet,n=Z.isSmartTV,r=Z.isConsole,o=Z.isWearable;return e?function(e,i,s,n,r){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(s.name),engineVersion:w(s.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(e,a,d,u,c):n?function(e,i,s,n){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(n)}}(n,d,u,c):r?function(e,i,s,n){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(n)}}(r,d,u,c):i||s?H(Z,l,u,c):o?function(e,i,s,n){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(n)}}(o,d,u,c):void 0},i.deviceType=Ne,i.engineName=xe,i.engineVersion=Ee,i.fullBrowserVersion=pe,i.getUA=ke,i.isAndroid=te,i.isBrowser=oe,i.isChrome=de,i.isChromium=ie,i.isConsole=K,i.isEdge=Oe,i.isEdgeChromium=Fe,i.isElectron=Ve,i.isFirefox=ue,i.isIE=me,i.isIOS=le,i.isIOS13=Ce,i.isIPad13=Ae,i.isIPhone13=Pe,i.isIPod13=Te,i.isLegacyEdge=Me,i.isMIUI=Be,i.isMacOs=je,i.isMobile=se,i.isMobileOnly=ne,i.isMobileSafari=ee,i.isOpera=we,i.isSafari=ce,i.isSmartTV=J,i.isTablet=re,i.isWearable=Q,i.isWinPhone=ae,i.isWindows=_e,i.isYandex=Se,i.mobileModel=ye,i.mobileVendor=ge,i.osName=fe,i.osVersion=be,i.withOrientationChange=function(e){return function(i){function s(e){var i,n,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,s),n=this,(i=!(r=y(s).call(this,e))||"object"!==typeof r&&"function"!==typeof r?E(n):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(E(i)),i.onOrientationChange=i.onOrientationChange.bind(E(i)),i.onPageLoad=i.onPageLoad.bind(E(i)),i.state={isLandscape:!1,isPortrait:!1},i}var n,r,t;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&x(e,i)}(s,i),n=s,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&se&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,v({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&p(n.prototype,r),t&&p(n,t),s}(o.Component)}},541:function(e,i,s){var n;!function(r,o){"use strict";var t="model",a="name",l="type",d="vendor",u="version",c="mobile",w="tablet",m="smarttv",b={extend:function(e,i){var s={};for(var n in e)i[n]&&i[n].length%2===0?s[n]=i[n].concat(e[n]):s[n]=e[n];return s},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),"undefined"===typeof i?e:e.substring(0,255)}},f={rgx:function(e,i){for(var s,n,r,o,t,a,l=0;l<i.length&&!t;){var d=i[l],u=i[l+1];for(s=n=0;s<d.length&&!t;)if(t=d[s++].exec(e))for(r=0;r<u.length;r++)a=t[++n],"object"===typeof(o=u[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,i){for(var s in i)if("object"===typeof i[s]&&i[s].length>0){for(var n=0;n<i[s].length;n++)if(b.has(i[s][n],e))return"?"===s?void 0:s}else if(b.has(i[s],e))return"?"===s?void 0:s;return e}},p={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[u,[a,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[u,[a,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[a,u],[/opios[\/\s]+([\w\.]+)/i],[u,[a,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[u,[a,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[a,u],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[u,[a,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[u,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[u,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[u,[a,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[u,[a,"IE"]],[/yabrowser\/([\w\.]+)/i],[u,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure Browser"],u],[/focus\/([\w\.]+)/i],[u,[a,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[u,[a,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[u,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[u,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[u,[a,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 Browser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[a],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[a,u],[/\bgsa\/([\w\.]+)\s.*safari\//i],[u,[a,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,"Chrome WebView"],u],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[u,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,f.str,p.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[u,[a,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[t,[d,"Samsung"],[l,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[t,[d,"Samsung"],[l,c]],[/\((ip(?:hone|od)[\s\w]*);/i],[t,[d,"Apple"],[l,c]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[t,[d,"Apple"],[l,w]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[t,[d,"Huawei"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[t,[d,"Huawei"],[l,c]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[t,/_/g," "],[d,"Xiaomi"],[l,c]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[t,/_/g," "],[d,"Xiaomi"],[l,w]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[t,[d,"OPPO"],[l,c]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[t,[d,"Vivo"],[l,c]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[t,[d,"Realme"],[l,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[t,[d,"Motorola"],[l,c]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[d,"Motorola"],[l,w]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[t,[d,"LG"],[l,w]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[t,[d,"LG"],[l,c]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[t,[d,"Lenovo"],[l,w]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[t,/_/g," "],[d,"Nokia"],[l,c]],[/droid.+;\s(pixel\sc)[\s)]/i],[t,[d,"Google"],[l,w]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[t,[d,"Google"],[l,c]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[d,"Sony"],[l,c]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[t,"Xperia Tablet"],[d,"Sony"],[l,w]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[t,[d,"OnePlus"],[l,c]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[t,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[t,"Fire Phone"],[d,"Amazon"],[l,c]],[/\((playbook);[\w\s\),;-]+(rim)/i],[t,d,[l,w]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[t,[d,"BlackBerry"],[l,c]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[t,[d,"ASUS"],[l,w]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[t,[d,"ASUS"],[l,c]],[/(nexus\s9)/i],[t,[d,"HTC"],[l,w]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[t,/_/g," "],[l,c]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[t,[d,"Acer"],[l,w]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[t,[d,"Meizu"],[l,c]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,t,[l,c]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[d,t,[l,w]],[/\s(surface\sduo)\s/i],[t,[d,"Microsoft"],[l,w]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[t,[d,"Fairphone"],[l,c]],[/\s(u304aa)\sbuild/i],[t,[d,"AT&T"],[l,c]],[/sie-(\w*)/i],[t,[d,"Siemens"],[l,c]],[/[;\/]\s?(rct\w+)\sbuild/i],[t,[d,"RCA"],[l,w]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[t,[d,"Dell"],[l,w]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[t,[d,"Verizon"],[l,w]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[t,[d,"Barnes & Noble"],[l,w]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[t,[d,"NuVision"],[l,w]],[/;\s(k88)\sbuild/i],[t,[d,"ZTE"],[l,w]],[/;\s(nx\d{3}j)\sbuild/i],[t,[d,"ZTE"],[l,c]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[t,[d,"Swiss"],[l,c]],[/[;\/]\s?(zur\d{3})\sbuild/i],[t,[d,"Swiss"],[l,w]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[t,[d,"Zeki"],[l,w]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[d,"Dragon Touch"],t,[l,w]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[t,[d,"Insignia"],[l,w]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[t,[d,"NextBook"],[l,w]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[d,"Voice"],t,[l,c]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[d,"LvTel"],t,[l,c]],[/;\s(ph-1)\s/i],[t,[d,"Essential"],[l,c]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[t,[d,"Envizen"],[l,w]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[t,[d,"MachSpeed"],[l,w]],[/[;\/]\s?tu_(1491)\sbuild/i],[t,[d,"Rotor"],[l,w]],[/(shield[\w\s]+)\sbuild/i],[t,[d,"Nvidia"],[l,w]],[/(sprint)\s(\w+)/i],[d,t,[l,c]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[d,"Microsoft"],[l,c]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[t,[d,"Zebra"],[l,w]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[t,[d,"Zebra"],[l,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[d,t,[l,"console"]],[/droid.+;\s(shield)\sbuild/i],[t,[d,"Nvidia"],[l,"console"]],[/(playstation\s[345portablevi]+)/i],[t,[d,"Sony"],[l,"console"]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[t,[d,"Microsoft"],[l,"console"]],[/smart-tv.+(samsung)/i],[d,[l,m]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[d,"Samsung"],[l,m]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[d,"LG"],[l,m]],[/(apple)\s?tv/i],[d,[t,"Apple TV"],[l,m]],[/crkey/i],[[t,"Chromecast"],[d,"Google"],[l,m]],[/droid.+aft([\w])(\sbuild\/|\))/i],[t,[d,"Amazon"],[l,m]],[/\(dtv[\);].+(aquos)/i],[t,[d,"Sharp"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,b.trim],[t,b.trim],[l,m]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[l,m]],[/((pebble))app\/[\d\.]+\s/i],[d,t,[l,"wearable"]],[/droid.+;\s(glass)\s\d/i],[t,[d,"Google"],[l,"wearable"]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[t,[d,"Zebra"],[l,"wearable"]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[d,[l,"embedded"]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[t,[l,c]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[t,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,b.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[d,"Generic"]],[/(phone)/i],[[l,c]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[a,[u,f.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,f.str,p.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[a,u],[/\(bb(10);/i],[u,[a,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[u,[a,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[u,[a,"webOS"]],[/crkey\/([\d\.]+)/i],[u,[a,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[a,u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},v=function e(i,s){if("object"===typeof i&&(s=i,i=void 0),!(this instanceof e))return new e(i,s).getResult();var n=i||("undefined"!==typeof r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?b.extend(h,s):h;return this.getBrowser=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,o.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return f.rgx.call(e,n,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return f.rgx.call(e,n,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n="string"===typeof e&&e.length>255?b.trim(e,255):e,this},this.setUA(n),this};v.VERSION="0.7.28",v.BROWSER={NAME:a,MAJOR:"major",VERSION:u},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:t,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:c,SMARTTV:m,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:u},v.OS={NAME:a,VERSION:u},"undefined"!==typeof i?("undefined"!==typeof e&&e.exports&&(i=e.exports=v),i.UAParser=v):void 0===(n=function(){return v}.call(i,s,i,e))||(e.exports=n);var g="undefined"!==typeof r&&(r.jQuery||r.Zepto);if(g&&!g.ua){var y=new v;g.ua=y.getResult(),g.ua.get=function(){return y.getUA()},g.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var s in i)g.ua[s]=i[s]}}}("object"===typeof window?window:this)}}]);
//# sourceMappingURL=1.2261a2a6.chunk.js.map