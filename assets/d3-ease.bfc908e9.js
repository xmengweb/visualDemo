function B(n){return+n}function C(n){return n*n}function P(n){return n*(2-n)}function h(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function q(n){return n*n*n}function S(n){return--n*n*n+1}function p(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var I=3,w=function n(e){e=+e;function t(u){return Math.pow(u,e)}return t.exponent=n,t}(I),Q=function n(e){e=+e;function t(u){return 1-Math.pow(1-u,e)}return t.exponent=n,t}(I),M=function n(e){e=+e;function t(u){return((u*=2)<=1?Math.pow(u,e):2-Math.pow(2-u,e))/2}return t.exponent=n,t}(I),k=Math.PI,E=k/2;function _(n){return+n==1?1:1-Math.cos(n*E)}function g(n){return Math.sin(n*E)}function v(n){return(1-Math.cos(k*n))/2}function c(n){return(Math.pow(2,-10*n)-.0009765625)*1.0009775171065494}function j(n){return c(1-+n)}function z(n){return 1-c(n)}function d(n){return((n*=2)<=1?c(1-n):2-c(n-1))/2}function L(n){return 1-Math.sqrt(1-n*n)}function T(n){return Math.sqrt(1- --n*n)}function m(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}var f=4/11,A=6/11,D=8/11,F=3/4,G=9/11,H=10/11,J=15/16,K=21/22,N=63/64,s=1/f/f;function R(n){return 1-i(1-n)}function i(n){return(n=+n)<f?s*n*n:n<D?s*(n-=A)*n+F:n<H?s*(n-=G)*n+J:s*(n-=K)*n+N}function U(n){return((n*=2)<=1?1-i(1-n):i(n-1)+1)/2}var O=1.70158,V=function n(e){e=+e;function t(u){return(u=+u)*u*(e*(u-1)+u)}return t.overshoot=n,t}(O),W=function n(e){e=+e;function t(u){return--u*u*((u+1)*e+u)+1}return t.overshoot=n,t}(O),x=function n(e){e=+e;function t(u){return((u*=2)<1?u*u*((e+1)*u-e):(u-=2)*u*((e+1)*u+e)+2)/2}return t.overshoot=n,t}(O),o=2*Math.PI,l=1,b=.3,X=function n(e,t){var u=Math.asin(1/(e=Math.max(1,e)))*(t/=o);function a(r){return e*c(- --r)*Math.sin((u-r)/t)}return a.amplitude=function(r){return n(r,t*o)},a.period=function(r){return n(e,r)},a}(l,b),y=function n(e,t){var u=Math.asin(1/(e=Math.max(1,e)))*(t/=o);function a(r){return 1-e*c(r=+r)*Math.sin((r+u)/t)}return a.amplitude=function(r){return n(r,t*o)},a.period=function(r){return n(e,r)},a}(l,b),Y=function n(e,t){var u=Math.asin(1/(e=Math.max(1,e)))*(t/=o);function a(r){return((r=r*2-1)<0?e*c(-r)*Math.sin((u-r)/t):2-e*c(r)*Math.sin((u+r)/t))/2}return a.amplitude=function(r){return n(r,t*o)},a.period=function(r){return n(e,r)},a}(l,b);const Z=Object.freeze(Object.defineProperty({__proto__:null,easeLinear:B,easeQuad:h,easeQuadIn:C,easeQuadOut:P,easeQuadInOut:h,easeCubic:p,easeCubicIn:q,easeCubicOut:S,easeCubicInOut:p,easePoly:M,easePolyIn:w,easePolyOut:Q,easePolyInOut:M,easeSin:v,easeSinIn:_,easeSinOut:g,easeSinInOut:v,easeExp:d,easeExpIn:j,easeExpOut:z,easeExpInOut:d,easeCircle:m,easeCircleIn:L,easeCircleOut:T,easeCircleInOut:m,easeBounce:i,easeBounceIn:R,easeBounceOut:i,easeBounceInOut:U,easeBack:x,easeBackIn:V,easeBackOut:W,easeBackInOut:x,easeElastic:y,easeElasticIn:X,easeElasticOut:y,easeElasticInOut:Y},Symbol.toStringTag,{value:"Module"}));export{Z as d};
