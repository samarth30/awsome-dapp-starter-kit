(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[6],{1708:function(e,n,o){!function(e){function n(n,o,t){var i,u=n.getWrapperElement();return(i=u.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof o?i.innerHTML=o:i.appendChild(o),e.addClass(u,"dialog-opened"),i}function o(e,n){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=n}e.defineExtension("openDialog",(function(t,i,u){u||(u={}),o(this,null);var a=n(this,t,u.bottom),r=!1,l=this;function s(n){if("string"==typeof n)f.value=n;else{if(r)return;r=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),l.focus(),u.onClose&&u.onClose(a)}}var c,f=a.getElementsByTagName("input")[0];return f?(f.focus(),u.value&&(f.value=u.value,!1!==u.selectValueOnOpen&&f.select()),u.onInput&&e.on(f,"input",(function(e){u.onInput(e,f.value,s)})),u.onKeyUp&&e.on(f,"keyup",(function(e){u.onKeyUp(e,f.value,s)})),e.on(f,"keydown",(function(n){u&&u.onKeyDown&&u.onKeyDown(n,f.value,s)||((27==n.keyCode||!1!==u.closeOnEnter&&13==n.keyCode)&&(f.blur(),e.e_stop(n),s()),13==n.keyCode&&i(f.value,n))})),!1!==u.closeOnBlur&&e.on(a,"focusout",(function(e){null!==e.relatedTarget&&s()}))):(c=a.getElementsByTagName("button")[0])&&(e.on(c,"click",(function(){s(),l.focus()})),!1!==u.closeOnBlur&&e.on(c,"blur",s),c.focus()),s})),e.defineExtension("openConfirm",(function(t,i,u){o(this,null);var a=n(this,t,u&&u.bottom),r=a.getElementsByTagName("button"),l=!1,s=this,c=1;function f(){l||(l=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),s.focus())}r[0].focus();for(var d=0;d<r.length;++d){var p=r[d];!function(n){e.on(p,"click",(function(o){e.e_preventDefault(o),f(),n&&n(s)}))}(i[d]),e.on(p,"blur",(function(){--c,setTimeout((function(){c<=0&&f()}),200)})),e.on(p,"focus",(function(){++c}))}})),e.defineExtension("openNotification",(function(t,i){o(this,s);var u,a=n(this,t,i&&i.bottom),r=!1,l=i&&"undefined"!==typeof i.duration?i.duration:5e3;function s(){r||(r=!0,clearTimeout(u),e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a))}return e.on(a,"click",(function(n){e.e_preventDefault(n),s()})),l&&(u=setTimeout(s,l)),s}))}(o(1705))}}]);
//# sourceMappingURL=6.2d9d6a04.chunk.js.map