var v={},c={},O={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=1,e=function(){return"".concat(t++)};n.default=e})(O);var y={},p={},z={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:60,u=null;return function(){for(var l=this,d=arguments.length,f=new Array(d),i=0;i<d;i++)f[i]=arguments[i];clearTimeout(u),u=setTimeout(function(){o.apply(l,f)},s)}};n.default=t})(z);var a={};Object.defineProperty(a,"__esModule",{value:!0});a.SensorTabIndex=a.SensorClassName=a.SizeSensorId=void 0;var I="size-sensor-id";a.SizeSensorId=I;var w="size-sensor-object";a.SensorClassName=w;var M="-1";a.SensorTabIndex=M;Object.defineProperty(p,"__esModule",{value:!0});p.createSensor=void 0;var x=P(z),h=a;function P(n){return n&&n.__esModule?n:{default:n}}var A=function(t){var e=void 0,o=[],s=function(){getComputedStyle(t).position==="static"&&(t.style.position="relative");var r=document.createElement("object");return r.onload=function(){r.contentDocument.defaultView.addEventListener("resize",u),u()},r.style.display="block",r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.height="100%",r.style.width="100%",r.style.overflow="hidden",r.style.pointerEvents="none",r.style.zIndex="-1",r.style.opacity="0",r.setAttribute("class",h.SensorClassName),r.setAttribute("tabindex",h.SensorTabIndex),r.type="text/html",t.appendChild(r),r.data="about:blank",r},u=(0,x.default)(function(){o.forEach(function(i){i(t)})}),l=function(r){e||(e=s()),o.indexOf(r)===-1&&o.push(r)},d=function(){e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",u),e.parentNode.removeChild(e),e=void 0,o=[])},f=function(r){var S=o.indexOf(r);S!==-1&&o.splice(S,1),o.length===0&&e&&d()};return{element:t,bind:l,destroy:d,unbind:f}};p.createSensor=A;var m={};Object.defineProperty(m,"__esModule",{value:!0});m.createSensor=void 0;var C=D(z);function D(n){return n&&n.__esModule?n:{default:n}}var E=function(t){var e=void 0,o=[],s=(0,C.default)(function(){o.forEach(function(i){i(t)})}),u=function(){var r=new ResizeObserver(s);return r.observe(t),s(),r},l=function(r){e||(e=u()),o.indexOf(r)===-1&&o.push(r)},d=function(){e.disconnect(),o=[],e=void 0},f=function(r){var S=o.indexOf(r);S!==-1&&o.splice(S,1),o.length===0&&e&&d()};return{element:t,bind:l,destroy:d,unbind:f}};m.createSensor=E;Object.defineProperty(y,"__esModule",{value:!0});y.createSensor=void 0;var N=p,T=m,$=typeof ResizeObserver<"u"?T.createSensor:N.createSensor;y.createSensor=$;Object.defineProperty(c,"__esModule",{value:!0});c.removeSensor=c.getSensor=void 0;var R=L(O),j=y,_=a;function L(n){return n&&n.__esModule?n:{default:n}}var b={},q=function(t){var e=t.getAttribute(_.SizeSensorId);if(e&&b[e])return b[e];var o=(0,R.default)();t.setAttribute(_.SizeSensorId,o);var s=(0,j.createSensor)(t);return b[o]=s,s};c.getSensor=q;var V=function(t){var e=t.element.getAttribute(_.SizeSensorId);t.element.removeAttribute(_.SizeSensorId),t.destroy(),e&&b[e]&&delete b[e]};c.removeSensor=V;Object.defineProperty(v,"__esModule",{value:!0});v.ver=v.clear=F=v.bind=void 0;var g=c,B=function(t,e){var o=(0,g.getSensor)(t);return o.bind(e),function(){o.unbind(e)}},F=v.bind=B,G=function(t){var e=(0,g.getSensor)(t);(0,g.removeSensor)(e)};v.clear=G;var H="1.0.1";v.ver=H;export{F as b};
