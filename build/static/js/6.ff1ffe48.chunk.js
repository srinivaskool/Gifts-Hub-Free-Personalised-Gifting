/*! For license information please see 6.ff1ffe48.chunk.js.LICENSE.txt */
(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[6],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1),o=t(111);function i(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){Object(o.a)(e,t),Object(o.a)(n,t)}}),[e,n])}},102:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,"a",(function(){return r}))},107:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function i(e){var n=r.useRef(e);return o((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},111:function(e,n,t){"use strict";function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,"a",(function(){return r}))},117:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===i)for(var a in r)t.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(102);function o(e){return Object(r.a)(e).defaultView||window}},128:function(e,n,t){"use strict";function r(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,"a",(function(){return r}))},129:function(e,n,t){"use strict";function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))}t.d(n,"a",(function(){return r}))},131:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"a",(function(){return r}))},187:function(e,n,t){"use strict";var r=t(95),o=t(5),i=t(1),c=t(14),a=(t(4),t(948)),u=t(880),l=t(102),s=t(111),d=t(101);var f="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var p=i.forwardRef((function(e,n){var t=e.children,r=e.container,o=e.disablePortal,a=void 0!==o&&o,u=e.onRendered,l=i.useState(null),p=l[0],v=l[1],h=Object(d.a)(i.isValidElement(t)?t.ref:null,n);return f((function(){a||v(function(e){return e="function"===typeof e?e():e,c.findDOMNode(e)}(r)||document.body)}),[r,a]),f((function(){if(p&&!a)return Object(s.a)(n,p),function(){Object(s.a)(n,null)}}),[n,p,a]),f((function(){u&&(p||a)&&u()}),[u,p,a]),a?i.isValidElement(t)?i.cloneElement(t,{ref:h}):t:p?c.createPortal(t,p):p})),v=t(129),h=t(107),b=t(179),m=t(131),y=t(174),E=t(120),g=t(128),k=t(127);function O(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function w(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function R(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[n,t].concat(Object(E.a)(r)),c=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===c.indexOf(e.tagName)&&O(e,o)}))}function j(e,n){var t=-1;return e.some((function(e,r){return!!n(e)&&(t=r,!0)})),t}function x(e,n){var t,r=[],o=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=Object(l.a)(e);return n.body===e?Object(k.a)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var c=Object(g.a)();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(w(i)+c,"px"),t=Object(l.a)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(w(e)+c,"px")}))}var a=i.parentElement,u="HTML"===a.nodeName&&"scroll"===window.getComputedStyle(a)["overflow-y"]?a:i;r.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){o[n]?e.style.paddingRight=o[n]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var n=e.value,t=e.el,r=e.key;n?t.style.setProperty(r,n):t.style.removeProperty(r)}))}}var C=function(){function e(){Object(m.a)(this,e),this.modals=[],this.containers=[]}return Object(y.a)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&O(e.modalRef,!1);var r=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);R(n,e.mountNode,e.modalRef,r,!0);var o=j(this.containers,(function(e){return e.container===n}));return-1!==o?(this.containers[o].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:r}),t)}},{key:"mount",value:function(e,n){var t=j(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];r.restore||(r.restore=x(r,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=j(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&O(e.modalRef,!0),R(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&O(o.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var A=function(e){var n=e.children,t=e.disableAutoFocus,r=void 0!==t&&t,o=e.disableEnforceFocus,a=void 0!==o&&o,u=e.disableRestoreFocus,s=void 0!==u&&u,f=e.getDoc,p=e.isEnabled,v=e.open,h=i.useRef(),b=i.useRef(null),m=i.useRef(null),y=i.useRef(),E=i.useRef(null),g=i.useCallback((function(e){E.current=c.findDOMNode(e)}),[]),k=Object(d.a)(n.ref,g),O=i.useRef();return i.useEffect((function(){O.current=v}),[v]),!O.current&&v&&"undefined"!==typeof window&&(y.current=f().activeElement),i.useEffect((function(){if(v){var e=Object(l.a)(E.current);r||!E.current||E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),E.current.focus());var n=function(){e.hasFocus()&&!a&&p()&&!h.current?E.current&&!E.current.contains(e.activeElement)&&E.current.focus():h.current=!1},t=function(n){!a&&p()&&9===n.keyCode&&e.activeElement===E.current&&(h.current=!0,n.shiftKey?m.current.focus():b.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var o=setInterval((function(){n()}),50);return function(){clearInterval(o),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),s||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[r,a,s,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelEnd"}))},I={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},P=i.forwardRef((function(e,n){var t=e.invisible,c=void 0!==t&&t,a=e.open,u=Object(r.a)(e,["invisible","open"]);return a?i.createElement("div",Object(o.a)({"aria-hidden":!0,ref:n},u,{style:Object(o.a)({},I.root,c?I.invisible:{},u.style)})):null}));var F=new C,S=i.forwardRef((function(e,n){var t=Object(a.a)(),s=Object(u.a)({name:"MuiModal",props:Object(o.a)({},e),theme:t}),f=s.BackdropComponent,m=void 0===f?P:f,y=s.BackdropProps,E=s.children,g=s.closeAfterTransition,k=void 0!==g&&g,w=s.container,R=s.disableAutoFocus,j=void 0!==R&&R,x=s.disableBackdropClick,C=void 0!==x&&x,I=s.disableEnforceFocus,S=void 0!==I&&I,T=s.disableEscapeKeyDown,L=void 0!==T&&T,D=s.disablePortal,M=void 0!==D&&D,B=s.disableRestoreFocus,N=void 0!==B&&B,K=s.disableScrollLock,W=void 0!==K&&K,z=s.hideBackdrop,H=void 0!==z&&z,V=s.keepMounted,J=void 0!==V&&V,q=s.manager,Y=void 0===q?F:q,G=s.onBackdropClick,Q=s.onClose,U=s.onEscapeKeyDown,X=s.onRendered,Z=s.open,$=Object(r.a)(s,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),_=i.useState(!0),ee=_[0],ne=_[1],te=i.useRef({}),re=i.useRef(null),oe=i.useRef(null),ie=Object(d.a)(oe,n),ce=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(s),ae=function(){return Object(l.a)(re.current)},ue=function(){return te.current.modalRef=oe.current,te.current.mountNode=re.current,te.current},le=function(){Y.mount(ue(),{disableScrollLock:W}),oe.current.scrollTop=0},se=Object(h.a)((function(){var e=function(e){return e="function"===typeof e?e():e,c.findDOMNode(e)}(w)||ae().body;Y.add(ue(),e),oe.current&&le()})),de=i.useCallback((function(){return Y.isTopModal(ue())}),[Y]),fe=Object(h.a)((function(e){re.current=e,e&&(X&&X(),Z&&de()?le():O(oe.current,!0))})),pe=i.useCallback((function(){Y.remove(ue())}),[Y]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){Z?se():ce&&k||pe()}),[Z,pe,ce,k,se]),!J&&!Z&&(!ce||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:b.a}),he={};return void 0===E.props.tabIndex&&(he.tabIndex=E.props.tabIndex||"-1"),ce&&(he.onEnter=Object(v.a)((function(){ne(!1)}),E.props.onEnter),he.onExited=Object(v.a)((function(){ne(!0),k&&pe()}),E.props.onExited)),i.createElement(p,{ref:fe,container:w,disablePortal:M},i.createElement("div",Object(o.a)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&de()&&(U&&U(e),L||(e.stopPropagation(),Q&&Q(e,"escapeKeyDown")))},role:"presentation"},$,{style:Object(o.a)({},ve.root,!Z&&ee?ve.hidden:{},$.style)}),H?null:i.createElement(m,Object(o.a)({open:Z,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),!C&&Q&&Q(e,"backdropClick"))}},y)),i.createElement(A,{disableEnforceFocus:S,disableAutoFocus:j,disableRestoreFocus:N,getDoc:ae,isEnabled:de,open:Z},i.cloneElement(E,he))))}));n.a=S}}]);
//# sourceMappingURL=6.ff1ffe48.chunk.js.map