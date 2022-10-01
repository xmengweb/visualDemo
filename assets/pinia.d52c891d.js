import{i as r}from"./vue-demi.b3a9cad9.js";import{ao as p,d as l,an as u}from"./@vue.ee5a936a.js";/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const f=Symbol();var i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(i||(i={}));function _(){const t=p(!0),n=t.run(()=>l({}));let o=[],c=[];const a=u({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,c.forEach(s=>o.push(s)),c=[]},use(e){return!this._a&&!r?c.push(e):o.push(e),this},_p:o,_a:null,_e:t,_s:new Map,state:n});return a}export{_ as c};
