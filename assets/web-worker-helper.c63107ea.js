function b(o,t){if(!o)throw new Error(t||"web worker helper assertion failed.")}var D=typeof window<"u"&&typeof window.orientation<"u",F=function(){function o(t,r){var s=this;this.name=t,this.workerThread=r,this.isRunning=!0,this.resolve=function(){},this.reject=function(){},this.result=new Promise(function(i,e){s.resolve=i,s.reject=e})}return o.prototype.postMessage=function(t,r){this.workerThread.postMessage({source:"Main thread",type:t,payload:r})},o.prototype.done=function(t){b(this.isRunning,"WorkerJob isRunning false."),this.isRunning=!1,this.resolve(t)},o.prototype.error=function(t){b(this.isRunning,"WorkerJob isRunning false."),this.isRunning=!1,this.reject(t)},o}(),p=new Map;function I(o){b(o.source&&!o.url||!o.source&&o.url);var t=p.get(o.source||o.url);return t||(o.url&&(t=U(o.url),p.set(o.url,t)),o.source&&(t=Q(o.source),p.set(o.source,t))),b(t),t}function U(o){if(!o.startsWith("http"))return o;var t=j(o);return Q(t)}function Q(o){var t=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(t)}function j(o){return`try {
  importScripts('`+o+`');
} catch (error) {
  console.error(error);
  throw error;
}`}function x(o,t,r){t===void 0&&(t=!0);var s=r||new Set;if(o){if(E(o))s.add(o);else if(E(o.buffer))s.add(o.buffer);else if(!ArrayBuffer.isView(o)){if(t&&typeof o=="object")for(var i in o)x(o[i],t,s)}}return r===void 0?Array.from(s):[]}function E(o){return o?o instanceof ArrayBuffer||typeof MessagePort<"u"&&o instanceof MessagePort||typeof ImageBitmap<"u"&&o instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas:!1}var k=function(){},O=function(){function o(t){this.terminated=!1,this.loadableURL="";var r=t.name,s=t.source,i=t.url;b(s||i),this.name=r,this.source=s,this.url=i,this.onMessage=k,this.onError=function(e){return console.log(e)},this.worker=this.createBrowserWorker()}return o.isSupported=function(){return typeof Worker<"u"},o.prototype.destroy=function(){this.onMessage=k,this.onError=k,this.worker.terminate(),this.terminated=!0},Object.defineProperty(o.prototype,"isRunning",{get:function(){return Boolean(this.onMessage)},enumerable:!1,configurable:!0}),o.prototype.postMessage=function(t,r){r=r||x(t),this.worker.postMessage(t,r)},o.prototype.getErrorFromErrorEvent=function(t){var r="Failed to load ";return r+="worker "+this.name+" from "+this.url+". ",t.message&&(r+=t.message+" in "),t.lineno&&(r+=":"+t.lineno+":"+t.colno),new Error(r)},o.prototype.createBrowserWorker=function(){var t=this;this.loadableURL=I({source:this.source,url:this.url});var r=new Worker(this.loadableURL,{name:this.name});return r.onmessage=function(s){s.data?t.onMessage(s.data):t.onError(new Error("No data received"))},r.onerror=function(s){t.onError(t.getErrorFromErrorEvent(s)),t.terminated=!0},r.onmessageerror=function(s){return console.error("worker "+t.name+", message error: "+s)},r},o}(),v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(o){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},v.apply(this,arguments)},P=globalThis&&globalThis.__awaiter||function(o,t,r,s){function i(e){return e instanceof r?e:new r(function(a){a(e)})}return new(r||(r=Promise))(function(e,a){function l(u){try{n(s.next(u))}catch(f){a(f)}}function c(u){try{n(s.throw(u))}catch(f){a(f)}}function n(u){u.done?e(u.value):i(u.value).then(l,c)}n((s=s.apply(o,t||[])).next())})},S=globalThis&&globalThis.__generator||function(o,t){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},s,i,e,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(n){return function(u){return c([n,u])}}function c(n){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,i=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){r.label=n[1];break}if(n[0]===6&&r.label<e[1]){r.label=e[1],e=n;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(n);break}e[2]&&r.ops.pop(),r.trys.pop();continue}n=t.call(o,r)}catch(u){n=[6,u],i=0}finally{s=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},B=function(){function o(t){this.name="unnamed",this.maxConcurrency=1,this.maxMobileConcurrency=1,this.onDebug=function(){},this.reuseWorkers=!0,this.props={},this.jobQueue=[],this.idleQueue=[],this.count=0,this.isDestroyed=!1,this.source=t.source,this.url=t.url,this.setProps(t)}return o.prototype.destroy=function(){this.idleQueue.forEach(function(t){return t.destroy()}),this.isDestroyed=!0},o.prototype.setProps=function(t){this.props=v(v({},this.props),t),t.name!==void 0&&(this.name=t.name),t.maxConcurrency!==void 0&&(this.maxConcurrency=t.maxConcurrency),t.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=t.maxMobileConcurrency),t.reuseWorkers!==void 0&&(this.reuseWorkers=t.reuseWorkers),t.onDebug!==void 0&&(this.onDebug=t.onDebug)},o.prototype.startJob=function(t,r,s){return r===void 0&&(r=function(i,e,a){return i.done(a)}),s===void 0&&(s=function(i,e){return i.error(e)}),P(this,void 0,void 0,function(){var i,e=this;return S(this,function(a){switch(a.label){case 0:return i=new Promise(function(l){return e.jobQueue.push({name:t,onMessage:r,onError:s,onStart:l}),e}),this.startQueuedJob(),[4,i];case 1:return[2,a.sent()]}})})},o.prototype.startQueuedJob=function(){return P(this,void 0,void 0,function(){var t,r,s;return S(this,function(i){switch(i.label){case 0:if(!this.jobQueue.length)return[2];if(t=this.getAvailableWorker(),!t)return[2];if(r=this.jobQueue.shift(),!r)return[3,4];this.onDebug({message:"Starting job",name:r.name,backlog:this.jobQueue.length,workerThread:t}),s=new F(r.name,t),t.onMessage=function(e){return r.onMessage(s,e.type,e.payload)},t.onError=function(e){return r.onError(s,e)},r.onStart(s),i.label=1;case 1:return i.trys.push([1,,3,4]),[4,s.result];case 2:return i.sent(),[3,4];case 3:return this.returnWorkerToQueue(t),[7];case 4:return[2]}})})},o.prototype.returnWorkerToQueue=function(t){var r=this.isDestroyed||!this.reuseWorkers||this.count>this.getMaxConcurrency();r?(t.destroy(),this.count--):this.idleQueue.push(t),this.isDestroyed||this.startQueuedJob()},o.prototype.getAvailableWorker=function(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this.getMaxConcurrency()){this.count++;var t=this.name.toLowerCase()+" (#"+this.count+" of "+this.maxConcurrency+")";return new O({name:t,source:this.source,url:this.url})}return null},o.prototype.getMaxConcurrency=function(){return D?this.maxMobileConcurrency:this.maxConcurrency},o}(),y=globalThis&&globalThis.__assign||function(){return y=Object.assign||function(o){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},y.apply(this,arguments)},C=globalThis&&globalThis.__values||function(o){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&o[t],s=0;if(r)return r.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&s>=o.length&&(o=void 0),{value:o&&o[s++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},J={maxConcurrency:3,maxMobileConcurrency:1,onDebug:function(){},reuseWorkers:!0},K=function(){function o(t){this.workerPools=new Map,this.props=y({},J),this.setProps(t),this.workerPools=new Map}return o.isSupported=function(){return O.isSupported()},o.getWorkerFarm=function(t){return t===void 0&&(t={}),o.workerFarm=o.workerFarm||new o({}),o.workerFarm.setProps(t),o.workerFarm},o.prototype.destroy=function(){var t,r;try{for(var s=C(this.workerPools.values()),i=s.next();!i.done;i=s.next()){var e=i.value;e.destroy()}}catch(a){t={error:a}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}},o.prototype.setProps=function(t){var r,s;this.props=y(y({},this.props),t);try{for(var i=C(this.workerPools.values()),e=i.next();!e.done;e=i.next()){var a=e.value;a.setProps(this.getWorkerPoolProps())}}catch(l){r={error:l}}finally{try{e&&!e.done&&(s=i.return)&&s.call(i)}finally{if(r)throw r.error}}},o.prototype.getWorkerPool=function(t){var r=t.name,s=t.source,i=t.url,e=this.workerPools.get(r);return e||(e=new B({name:r,source:s,url:i}),e.setProps(this.getWorkerPoolProps()),this.workerPools.set(r,e)),e},o.prototype.getWorkerPoolProps=function(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}},o}(),_=new Map,d=function(){function o(){}return Object.defineProperty(o,"onmessage",{set:function(t){self.onmessage=function(r){if(!!L(r)){var s=r.data,i=s.type,e=s.payload;t(i,e)}}},enumerable:!1,configurable:!0}),o.addEventListener=function(t){var r=_.get(t);r||(r=function(s){if(!!L(s)){var i=s.data,e=i.type,a=i.payload;t(e,a)}}),self.addEventListener("message",r)},o.removeEventListener=function(t){var r=_.get(t);_.delete(t),self.removeEventListener("message",r)},o.postMessage=function(t,r){if(self){var s={source:"Worker thread",type:t,payload:r},i=x(r);self.postMessage(s,i)}},o}();function L(o){var t=o.type,r=o.data;return t==="message"&&r&&typeof r.source=="string"&&r.source==="Main thread"}globalThis&&globalThis.__awaiter;globalThis&&globalThis.__generator;var A=function(){function o(){this._values=[],this._settlers=[],this._closed=!1}return o.prototype[Symbol.asyncIterator]=function(){return this},o.prototype.push=function(t){return this.enqueue(t)},o.prototype.enqueue=function(t){if(this._closed)throw new Error("Closed");if(this._settlers.length>0){if(this._values.length>0)throw new Error("Illegal internal state");var r=this._settlers.shift();t instanceof Error?r.reject(t):r.resolve({value:t})}else this._values.push(t)},o.prototype.close=function(){for(;this._settlers.length>0;){var t=this._settlers.shift();t.resolve({done:!0})}this._closed=!0},o.prototype.next=function(){var t=this;if(this._values.length>0){var r=this._values.shift();return r instanceof Error?Promise.reject(r):Promise.resolve({done:!1,value:r})}if(this._closed){if(this._settlers.length>0)throw new Error("Illegal internal state");return Promise.resolve({done:!0,value:void 0})}return new Promise(function(s,i){t._settlers.push({resolve:s,reject:i})})},o}(),q=globalThis&&globalThis.__awaiter||function(o,t,r,s){function i(e){return e instanceof r?e:new r(function(a){a(e)})}return new(r||(r=Promise))(function(e,a){function l(u){try{n(s.next(u))}catch(f){a(f)}}function c(u){try{n(s.throw(u))}catch(f){a(f)}}function n(u){u.done?e(u.value):i(u.value).then(l,c)}n((s=s.apply(o,t||[])).next())})},G=globalThis&&globalThis.__generator||function(o,t){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},s,i,e,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(n){return function(u){return c([n,u])}}function c(n){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,i=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){r.label=n[1];break}if(n[0]===6&&r.label<e[1]){r.label=e[1],e=n;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(n);break}e[2]&&r.ops.pop(),r.trys.pop();continue}n=t.call(o,r)}catch(u){n=[6,u],i=0}finally{s=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},$=globalThis&&globalThis.__asyncValues||function(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],r;return t?t.call(o):(o=typeof __values=="function"?__values(o):o[Symbol.iterator](),r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r);function s(e){r[e]=o[e]&&function(a){return new Promise(function(l,c){a=o[e](a),i(l,c,a.done,a.value)})}}function i(e,a,l,c){Promise.resolve(c).then(function(n){e({value:n,done:l})},a)}},V=0,g,R;function z(o,t){var r=this;if(!(typeof self>"u")){var s={process:N};d.onmessage=function(i,e){return q(r,void 0,void 0,function(){var a,l,c,n,u,f,W,w,T,m,M;return G(this,function(h){switch(h.label){case 0:switch(h.trys.push([0,19,,20]),a=i,a){case"process":return[3,1];case"process-in-batches":return[3,3];case"input-batch":return[3,16];case"input-done":return[3,17]}return[3,18];case 1:if(!o)throw new Error("Worker does not support atomic processing");return[4,o(e.input,e.options||{},s)];case 2:return l=h.sent(),d.postMessage("done",{result:l}),[3,18];case 3:if(!t)throw new Error("Worker does not support batched processing");g=new A,R=e.options||{},c=t(g,R,s),h.label=4;case 4:h.trys.push([4,9,10,15]),n=$(c),h.label=5;case 5:return[4,n.next()];case 6:if(u=h.sent(),!!u.done)return[3,8];f=u.value,d.postMessage("output-batch",{result:f}),h.label=7;case 7:return[3,5];case 8:return[3,15];case 9:return W=h.sent(),m={error:W},[3,15];case 10:return h.trys.push([10,,13,14]),u&&!u.done&&(M=n.return)?[4,M.call(n)]:[3,12];case 11:h.sent(),h.label=12;case 12:return[3,14];case 13:if(m)throw m.error;return[7];case 14:return[7];case 15:return d.postMessage("done",{}),[3,18];case 16:return g.push(e.input),[3,18];case 17:return g.close(),[3,18];case 18:return[3,20];case 19:return w=h.sent(),T=w instanceof Error?w.message:"",d.postMessage("error",{error:T}),[3,20];case 20:return[2]}})})}}}function N(o,t){return t===void 0&&(t={}),new Promise(function(r,s){var i=V++,e=function(l,c){if(c.id===i)switch(l){case"done":d.removeEventListener(e),r(c.result);break;case"error":d.removeEventListener(e),s(c.error);break}};d.addEventListener(e);var a={id:i,input:o,options:t};d.postMessage("process",a)})}globalThis&&globalThis.__awaiter;globalThis&&globalThis.__generator;export{K as W,z as c};
