import{g as ce}from"./@amap.5b2c865e.js";import{p as ue}from"./acorn.fd0db14e.js";function N(u,n){u.prototype=Object.create(n.prototype),u.prototype.constructor=u,u.__proto__=n}function k(u){var n=typeof Map=="function"?new Map:void 0;return k=function(e){if(e===null||!le(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return U(e,arguments,L(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),M(t,e)},k(u)}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U(u,n,a){return se()?U=Reflect.construct:U=function(t,r,c){var o=[null];o.push.apply(o,r);var i=Function.bind.apply(t,o),l=new i;return c&&M(l,c.prototype),l},U.apply(null,arguments)}function le(u){return Function.toString.call(u).indexOf("[native code]")!==-1}function M(u,n){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(u,n)}function L(u){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},L(u)}var fe=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(k(Error)),pe=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(k(SyntaxError)),W=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(k(ReferenceError)),he=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(k(TypeError)),B=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(fe),ve=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(pe),y=function(u){N(n,u);function n(){return u.apply(this,arguments)||this}return n}(W),g={UnknownError:[3001,"%0",B],ExecutionTimeOutError:[3002,"Script execution timed out after %0ms",B],NodeTypeSyntaxError:[1001,"Unknown node type: %0",y],BinaryOperatorSyntaxError:[1002,"Unknown binary operator: %0",y],LogicalOperatorSyntaxError:[1003,"Unknown logical operator: %0",y],UnaryOperatorSyntaxError:[1004,"Unknown unary operator: %0",y],UpdateOperatorSyntaxError:[1005,"Unknown update operator: %0",y],ObjectStructureSyntaxError:[1006,"Unknown object structure: %0",y],AssignmentExpressionSyntaxError:[1007,"Unknown assignment expression: %0",y],VariableTypeSyntaxError:[1008,"Unknown variable type: %0",y],ParamTypeSyntaxError:[1009,"Unknown param type: %0",y],AssignmentTypeSyntaxError:[1010,"Unknown assignment type: %0",y],FunctionUndefinedReferenceError:[2001,"%0 is not a function",W],VariableUndefinedReferenceError:[2002,"%0 is not defined",W],IsNotConstructor:[2003,"%0 is not a constructor",he]};function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function P(u,n,a){return me()?P=Reflect.construct:P=function(t,r,c){var o=[null];o.push.apply(o,r);var i=Function.bind.apply(t,o),l=new i;return c&&K(l,c.prototype),l},P.apply(null,arguments)}function K(u,n){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(u,n)}var be="0.0.3";function J(u,n){Object.defineProperty(u,"name",{value:n,writable:!1,enumerable:!1,configurable:!0})}var Se=Object.prototype.hasOwnProperty,O=Symbol("Break"),T=Symbol("Continue"),Q=Symbol("DefaultCase"),b=Symbol("EmptyStatementReturn"),X=Symbol("WithScopeName"),Y=Symbol("SuperScopeName"),Z=Symbol("RootScopeName"),ee=Symbol("GlobalScopeName");function A(u){return typeof u=="function"}var I=function(){function u(a){this.interpreter=a}var n=u.prototype;return n.generator=function(){var e=this.interpreter;function t(){return this.getCurrentScope()}function r(){return this.getGlobalScope()}function c(){return this.getCurrentContext()}return{getOptions:e.getOptions.bind(e),getCurrentScope:t.bind(e),getGlobalScope:r.bind(e),getCurrentContext:c.bind(e),getExecStartTime:e.getExecStartTime.bind(e)}},u}();function q(u,n,a){if(a===void 0&&(a=!0),!(u instanceof I))throw new Error("Illegal call");if(typeof n!="string")return n;if(!!n){var e=u.generator(),t=e.getOptions(),r={timeout:t.timeout,_initEnv:function(){a||this.setCurrentContext(e.getCurrentContext()),this.execStartTime=e.getExecStartTime(),this.execEndTime=this.execStartTime}},c=a?e.getGlobalScope():e.getCurrentScope(),o=new d(c,r);return o.evaluate(n)}}Object.defineProperty(q,"__IS_EVAL_FUNC",{value:!0,writable:!1,enumerable:!1,configurable:!1});function $(u){if(!(u instanceof I))throw new Error("Illegal call");for(var n=u.generator(),a=arguments.length,e=new Array(a>1?a-1:0),t=1;t<a;t++)e[t-1]=arguments[t];var r=e.pop(),c=new d(n.getGlobalScope(),n.getOptions()),o=`
		    (function anonymous(`+e.join(",")+`){
		        `+r+`
		    });
		    `;return c.evaluate(o)}Object.defineProperty($,"__IS_FUNCTION_FUNC",{value:!0,writable:!1,enumerable:!1,configurable:!1});var C=function(n){this.value=n},_=function(n){this.value=n},H=function(n){this.value=n},F=function(n,a,e){a===void 0&&(a=null),this.name=e,this.parent=a,this.data=n,this.labelStack=[]};function G(){}function ge(u,n){return u===void 0&&(u=null),new F(Object.create(null),u,n)}function ye(u){return Object.create(u)}var x={NaN:NaN,Infinity:1/0,undefined:void 0,Object,Array,String,Boolean,Number,Date,RegExp,Error,URIError,TypeError,RangeError,SyntaxError,ReferenceError,Float32Array,Float64Array,Uint32Array,Math,parseInt,parseFloat,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,unescape,eval:q,Function:$};typeof JSON<"u"&&(x.JSON=JSON);typeof Promise<"u"&&(x.Promise=Promise);typeof Set<"u"&&(x.Set=Set);typeof Map<"u"&&(x.Map=Map);typeof Symbol<"u"&&(x.Symbol=Symbol);typeof Proxy<"u"&&(x.Proxy=Proxy);typeof WeakMap<"u"&&(x.WeakMap=WeakMap);typeof WeakSet<"u"&&(x.WeakSet=WeakSet);typeof Reflect<"u"&&(x.Reflect=Reflect);var d=function(){function u(a,e){a===void 0&&(a=u.global),e===void 0&&(e={}),this.sourceList=[],this.collectDeclVars=Object.create(null),this.collectDeclFuncs=Object.create(null),this.isVarDeclMode=!1,this.lastExecNode=null,this.isRunning=!1,this.options={ecmaVersion:e.ecmaVersion||u.ecmaVersion,timeout:e.timeout||0,rootContext:e.rootContext,globalContextInFunction:e.globalContextInFunction===void 0?u.globalContextInFunction:e.globalContextInFunction,_initEnv:e._initEnv},this.context=a||Object.create(null),this.callStack=[],this.initEnvironment(this.context)}var n=u.prototype;return n.initEnvironment=function(e){var t;if(e instanceof F)t=e;else{var r=null,c=this.createSuperScope(e);this.options.rootContext&&(r=new F(ye(this.options.rootContext),c,Z)),t=new F(e,r||c,ee)}this.globalScope=t,this.currentScope=this.globalScope,this.globalContext=t.data,this.currentContext=t.data,this.collectDeclVars=Object.create(null),this.collectDeclFuncs=Object.create(null),this.execStartTime=Date.now(),this.execEndTime=this.execStartTime;var o=this.options._initEnv;o&&o.call(this)},n.getExecStartTime=function(){return this.execStartTime},n.getExecutionTime=function(){return this.execEndTime-this.execStartTime},n.setExecTimeout=function(e){e===void 0&&(e=0),this.options.timeout=e},n.getOptions=function(){return this.options},n.getGlobalScope=function(){return this.globalScope},n.getCurrentScope=function(){return this.currentScope},n.getCurrentContext=function(){return this.currentContext},n.isInterruptThrow=function(e){return e instanceof B||e instanceof y||e instanceof ve},n.createSuperScope=function(e){var t=Object.assign({},x),r=Object.keys(t);return r.forEach(function(c){c in e&&delete t[c]}),new F(t,null,Y)},n.setCurrentContext=function(e){this.currentContext=e},n.setCurrentScope=function(e){this.currentScope=e},n.evaluate=function(e){e===void 0&&(e="");var t;if(!!e)return t=ue(e,{ranges:!0,locations:!0,ecmaVersion:this.options.ecmaVersion||u.ecmaVersion}),this.evaluateNode(t,e)},n.appendCode=function(e){return this.evaluate(e)},n.evaluateNode=function(e,t){var r=this;t===void 0&&(t=""),this.value=void 0,this.source=t,this.sourceList.push(t),this.isRunning=!0,this.execStartTime=Date.now(),this.execEndTime=this.execStartTime,this.collectDeclVars=Object.create(null),this.collectDeclFuncs=Object.create(null);var c=this.getCurrentScope(),o=this.getCurrentContext(),i=c.labelStack.concat([]),l=this.callStack.concat([]),s=function(){r.setCurrentScope(c),r.setCurrentContext(o),c.labelStack=i,r.callStack=l};try{var f=this.createClosure(e);this.addDeclarationsToScope(this.collectDeclVars,this.collectDeclFuncs,this.getCurrentScope()),f()}catch(h){throw h}finally{s(),this.execEndTime=Date.now()}return this.isRunning=!1,this.getValue()},n.createErrorMessage=function(e,t,r){var c=e[1].replace("%0",String(t));return r!==null&&(c+=this.getNodePosition(r||this.lastExecNode)),c},n.createError=function(e,t){return new t(e)},n.createThrowError=function(e,t){return this.createError(e,t)},n.createInternalThrowError=function(e,t,r){return this.createError(this.createErrorMessage(e,t,r),e[2])},n.checkTimeout=function(){if(!this.isRunning)return!1;var e=this.options.timeout||0,t=Date.now();return t-this.execStartTime>e},n.getNodePosition=function(e){if(e){var t="";return e.loc?" ["+e.loc.start.line+":"+e.loc.start.column+"]"+t:""}return""},n.createClosure=function(e){var t=this,r;switch(e.type){case"BinaryExpression":r=this.binaryExpressionHandler(e);break;case"LogicalExpression":r=this.logicalExpressionHandler(e);break;case"UnaryExpression":r=this.unaryExpressionHandler(e);break;case"UpdateExpression":r=this.updateExpressionHandler(e);break;case"ObjectExpression":r=this.objectExpressionHandler(e);break;case"ArrayExpression":r=this.arrayExpressionHandler(e);break;case"CallExpression":r=this.callExpressionHandler(e);break;case"NewExpression":r=this.newExpressionHandler(e);break;case"MemberExpression":r=this.memberExpressionHandler(e);break;case"ThisExpression":r=this.thisExpressionHandler(e);break;case"SequenceExpression":r=this.sequenceExpressionHandler(e);break;case"Literal":r=this.literalHandler(e);break;case"Identifier":r=this.identifierHandler(e);break;case"AssignmentExpression":r=this.assignmentExpressionHandler(e);break;case"FunctionDeclaration":r=this.functionDeclarationHandler(e);break;case"VariableDeclaration":r=this.variableDeclarationHandler(e);break;case"BlockStatement":case"Program":r=this.programHandler(e);break;case"ExpressionStatement":r=this.expressionStatementHandler(e);break;case"EmptyStatement":r=this.emptyStatementHandler(e);break;case"ReturnStatement":r=this.returnStatementHandler(e);break;case"FunctionExpression":r=this.functionExpressionHandler(e);break;case"IfStatement":r=this.ifStatementHandler(e);break;case"ConditionalExpression":r=this.conditionalExpressionHandler(e);break;case"ForStatement":r=this.forStatementHandler(e);break;case"WhileStatement":r=this.whileStatementHandler(e);break;case"DoWhileStatement":r=this.doWhileStatementHandler(e);break;case"ForInStatement":r=this.forInStatementHandler(e);break;case"WithStatement":r=this.withStatementHandler(e);break;case"ThrowStatement":r=this.throwStatementHandler(e);break;case"TryStatement":r=this.tryStatementHandler(e);break;case"ContinueStatement":r=this.continueStatementHandler(e);break;case"BreakStatement":r=this.breakStatementHandler(e);break;case"SwitchStatement":r=this.switchStatementHandler(e);break;case"LabeledStatement":r=this.labeledStatementHandler(e);break;case"DebuggerStatement":r=this.debuggerStatementHandler(e);break;default:throw this.createInternalThrowError(g.NodeTypeSyntaxError,e.type,e)}return function(){var c=t.options.timeout;if(c&&c>0&&t.checkTimeout())throw t.createInternalThrowError(g.ExecutionTimeOutError,c,null);return t.lastExecNode=e,r.apply(void 0,arguments)}},n.binaryExpressionHandler=function(e){var t=this,r=this.createClosure(e.left),c=this.createClosure(e.right);return function(){var o=r(),i=c();switch(e.operator){case"==":return o==i;case"!=":return o!=i;case"===":return o===i;case"!==":return o!==i;case"<":return o<i;case"<=":return o<=i;case">":return o>i;case">=":return o>=i;case"<<":return o<<i;case">>":return o>>i;case">>>":return o>>>i;case"+":return o+i;case"-":return o-i;case"*":return o*i;case"**":return Math.pow(o,i);case"/":return o/i;case"%":return o%i;case"|":return o|i;case"^":return o^i;case"&":return o&i;case"in":return o in i;case"instanceof":return o instanceof i;default:throw t.createInternalThrowError(g.BinaryOperatorSyntaxError,e.operator,e)}}},n.logicalExpressionHandler=function(e){var t=this,r=this.createClosure(e.left),c=this.createClosure(e.right);return function(){switch(e.operator){case"||":return r()||c();case"&&":return r()&&c();default:throw t.createInternalThrowError(g.LogicalOperatorSyntaxError,e.operator,e)}}},n.unaryExpressionHandler=function(e){var t=this;switch(e.operator){case"delete":var r=this.createObjectGetter(e.argument),c=this.createNameGetter(e.argument);return function(){var s=r(),f=c();return delete s[f]};default:var o;if(e.operator==="typeof"&&e.argument.type==="Identifier"){var i=this.createObjectGetter(e.argument),l=this.createNameGetter(e.argument);o=function(){return i()[l()]}}else o=this.createClosure(e.argument);return function(){var s=o();switch(e.operator){case"-":return-s;case"+":return+s;case"!":return!s;case"~":return~s;case"void":return;case"typeof":return typeof s;default:throw t.createInternalThrowError(g.UnaryOperatorSyntaxError,e.operator,e)}}}},n.updateExpressionHandler=function(e){var t=this,r=this.createObjectGetter(e.argument),c=this.createNameGetter(e.argument);return function(){var o=r(),i=c();switch(t.assertVariable(o,i,e),e.operator){case"++":return e.prefix?++o[i]:o[i]++;case"--":return e.prefix?--o[i]:o[i]--;default:throw t.createInternalThrowError(g.UpdateOperatorSyntaxError,e.operator,e)}}},n.objectExpressionHandler=function(e){var t=this,r=[];function c(i){return i.type==="Identifier"?i.name:i.type==="Literal"?i.value:this.throwError(g.ObjectStructureSyntaxError,i.type,i)}var o=Object.create(null);return e.properties.forEach(function(i){var l=i.kind,s=c(i.key);(!o[s]||l==="init")&&(o[s]={}),o[s][l]=t.createClosure(i.value),r.push({key:s,property:i})}),function(){for(var i={},l=r.length,s=0;s<l;s++){var f=r[s],h=f.key,p=o[h],m=p.init?p.init():void 0,v=p.get?p.get():function(){},S=p.set?p.set():function(j){};if("set"in p||"get"in p){var E={configurable:!0,enumerable:!0,get:v,set:S};Object.defineProperty(i,h,E)}else{var w=f.property,R=w.kind;w.key.type==="Identifier"&&w.value.type==="FunctionExpression"&&R==="init"&&!w.value.id&&J(m,w.key.name),i[h]=m}}return i}},n.arrayExpressionHandler=function(e){var t=this,r=e.elements.map(function(c){return c&&t.createClosure(c)});return function(){for(var c=r.length,o=Array(c),i=0;i<c;i++){var l=r[i];l&&(o[i]=l())}return o}},n.safeObjectGet=function(e,t,r){return e[t]},n.createCallFunctionGetter=function(e){var t=this;switch(e.type){case"MemberExpression":var r=this.createClosure(e.object),c=this.createMemberKeyGetter(e),o=this.source;return function(){var l=r(),s=c(),f=t.safeObjectGet(l,s,e);if(!f||!A(f)){var h=o.slice(e.start,e.end);throw t.createInternalThrowError(g.FunctionUndefinedReferenceError,h,e)}return f.__IS_EVAL_FUNC?function(p){return f(new I(t),p,!0)}:f.__IS_FUNCTION_FUNC?function(){for(var p=arguments.length,m=new Array(p),v=0;v<p;v++)m[v]=arguments[v];return f.apply(void 0,[new I(t)].concat(m))}:f.bind(l)};default:var i=this.createClosure(e);return function(){var l="";e.type==="Identifier"&&(l=e.name);var s=i();if(!s||!A(s))throw t.createInternalThrowError(g.FunctionUndefinedReferenceError,l,e);if(e.type==="Identifier"&&s.__IS_EVAL_FUNC&&l==="eval")return function(p){var m=t.getScopeFromName(l,t.getCurrentScope()),v=m.name===Y||m.name===ee||m.name===Z;return s(new I(t),p,!v)};if(s.__IS_EVAL_FUNC)return function(p){return s(new I(t),p,!0)};if(s.__IS_FUNCTION_FUNC)return function(){for(var p=arguments.length,m=new Array(p),v=0;v<p;v++)m[v]=arguments[v];return s.apply(void 0,[new I(t)].concat(m))};var f=t.options.globalContextInFunction;if(e.type==="Identifier"){var h=t.getIdentifierScope(e);h.name===X&&(f=h.data)}return s.bind(f)}}},n.callExpressionHandler=function(e){var t=this,r=this.createCallFunctionGetter(e.callee),c=e.arguments.map(function(o){return t.createClosure(o)});return function(){return r().apply(void 0,c.map(function(o){return o()}))}},n.functionExpressionHandler=function(e){var t=this,r=this,c=this.source,o=this.collectDeclVars,i=this.collectDeclFuncs;this.collectDeclVars=Object.create(null),this.collectDeclFuncs=Object.create(null);var l=e.id?e.id.name:"",s=e.params.length,f=e.params.map(function(v){return t.createParamNameGetter(v)}),h=this.createClosure(e.body),p=this.collectDeclVars,m=this.collectDeclFuncs;return this.collectDeclVars=o,this.collectDeclFuncs=i,function(){var v=r.getCurrentScope(),S=function E(){for(var w=arguments.length,R=new Array(w),j=0;j<w;j++)R[j]=arguments[j];r.callStack.push(""+l);var ne=r.getCurrentScope(),D=ge(v,"FunctionScope("+l+")");r.setCurrentScope(D),r.addDeclarationsToScope(p,m,D),l&&(D.data[l]=E),D.data.arguments=arguments,f.forEach(function(ie,oe){D.data[ie()]=R[oe]});var ae=r.getCurrentContext();r.setCurrentContext(this);var z=h();if(r.setCurrentContext(ae),r.setCurrentScope(ne),r.callStack.pop(),z instanceof C)return z.value};return J(S,l),Object.defineProperty(S,"length",{value:s,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(S,"toString",{value:function(){return c.slice(e.start,e.end)},writable:!0,configurable:!0,enumerable:!1}),Object.defineProperty(S,"valueOf",{value:function(){return c.slice(e.start,e.end)},writable:!0,configurable:!0,enumerable:!1}),S}},n.newExpressionHandler=function(e){var t=this,r=this.source,c=this.createClosure(e.callee),o=e.arguments.map(function(i){return t.createClosure(i)});return function(){var i=c();if(!A(i)||i.__IS_EVAL_FUNC){var l=e.callee,s=r.slice(l.start,l.end);throw t.createInternalThrowError(g.IsNotConstructor,s,e)}return i.__IS_FUNCTION_FUNC?i.apply(void 0,[new I(t)].concat(o.map(function(f){return f()}))):P(i,o.map(function(f){return f()}))}},n.memberExpressionHandler=function(e){var t=this.createClosure(e.object),r=this.createMemberKeyGetter(e);return function(){var c=t(),o=r();return c[o]}},n.thisExpressionHandler=function(e){var t=this;return function(){return t.getCurrentContext()}},n.sequenceExpressionHandler=function(e){var t=this,r=e.expressions.map(function(c){return t.createClosure(c)});return function(){for(var c,o=r.length,i=0;i<o;i++){var l=r[i];c=l()}return c}},n.literalHandler=function(e){return function(){return e.regex?new RegExp(e.regex.pattern,e.regex.flags):e.value}},n.identifierHandler=function(e){var t=this;return function(){var r=t.getCurrentScope(),c=t.getScopeDataFromName(e.name,r);return t.assertVariable(c,e.name,e),c[e.name]}},n.getIdentifierScope=function(e){var t=this.getCurrentScope(),r=this.getScopeFromName(e.name,t);return r},n.assignmentExpressionHandler=function(e){var t=this;e.left.type==="Identifier"&&e.right.type==="FunctionExpression"&&!e.right.id&&(e.right.id={type:"Identifier",name:e.left.name});var r=this.createObjectGetter(e.left),c=this.createNameGetter(e.left),o=this.createClosure(e.right);return function(){var i=r(),l=c(),s=o();switch(e.operator!=="="&&t.assertVariable(i,l,e),e.operator){case"=":return i[l]=s;case"+=":return i[l]+=s;case"-=":return i[l]-=s;case"*=":return i[l]*=s;case"**=":return i[l]=Math.pow(i[l],s);case"/=":return i[l]/=s;case"%=":return i[l]%=s;case"<<=":return i[l]<<=s;case">>=":return i[l]>>=s;case">>>=":return i[l]>>>=s;case"&=":return i[l]&=s;case"^=":return i[l]^=s;case"|=":return i[l]|=s;default:throw t.createInternalThrowError(g.AssignmentExpressionSyntaxError,e.type,e)}}},n.functionDeclarationHandler=function(e){if(e.id){var t=this.functionExpressionHandler(e);Object.defineProperty(t,"isFunctionDeclareClosure",{value:!0,writable:!1,configurable:!1,enumerable:!1}),this.funcDeclaration(e.id.name,t)}return function(){return b}},n.getVariableName=function(e){if(e.type==="Identifier")return e.name;throw this.createInternalThrowError(g.VariableTypeSyntaxError,e.type,e)},n.variableDeclarationHandler=function(e){for(var t=this,r,c=[],o=0;o<e.declarations.length;o++){var i=e.declarations[o];this.varDeclaration(this.getVariableName(i.id)),i.init&&c.push({type:"AssignmentExpression",operator:"=",left:i.id,right:i.init})}return c.length&&(r=this.createClosure({type:"BlockStatement",body:c})),function(){if(r){var l=t.isVarDeclMode;t.isVarDeclMode=!0,r(),t.isVarDeclMode=l}return b}},n.assertVariable=function(e,t,r){if(e===this.globalScope.data&&!(t in e))throw this.createInternalThrowError(g.VariableUndefinedReferenceError,t,r)},n.programHandler=function(e){var t=this,r=e.body.map(function(c){return t.createClosure(c)});return function(){for(var c=b,o=0;o<r.length;o++){var i=r[o],l=t.setValue(i());if(l!==b&&(c=l,c instanceof C||c instanceof _||c instanceof H||c===O||c===T))break}return c}},n.expressionStatementHandler=function(e){return this.createClosure(e.expression)},n.emptyStatementHandler=function(e){return function(){return b}},n.returnStatementHandler=function(e){var t=e.argument?this.createClosure(e.argument):G;return function(){return new C(t())}},n.ifStatementHandler=function(e){var t=this.createClosure(e.test),r=this.createClosure(e.consequent),c=e.alternate?this.createClosure(e.alternate):function(){return b};return function(){return t()?r():c()}},n.conditionalExpressionHandler=function(e){return this.ifStatementHandler(e)},n.forStatementHandler=function(e){var t=this,r=G,c=e.test?this.createClosure(e.test):function(){return!0},o=G,i=this.createClosure(e.body);return e.type==="ForStatement"&&(r=e.init?this.createClosure(e.init):r,o=e.update?this.createClosure(e.update):G),function(l){var s,f=b,h=e.type==="DoWhileStatement";for(l&&l.type==="LabeledStatement"&&(s=l.label.name),r();h||c();o()){h=!1;var p=t.setValue(i());if(!(p===b||p===T)){if(p===O)break;if(f=p,f instanceof H&&f.value===s){f=b;continue}if(f instanceof C||f instanceof _||f instanceof H)break}}return f}},n.whileStatementHandler=function(e){return this.forStatementHandler(e)},n.doWhileStatementHandler=function(e){return this.forStatementHandler(e)},n.forInStatementHandler=function(e){var t=this,r=e.left,c=this.createClosure(e.right),o=this.createClosure(e.body);return e.left.type==="VariableDeclaration"&&(this.createClosure(e.left)(),r=e.left.declarations[0].id),function(i){var l,s=b,f;i&&i.type==="LabeledStatement"&&(l=i.label.name);var h=c();for(f in h){t.assignmentExpressionHandler({type:"AssignmentExpression",operator:"=",left:r,right:{type:"Literal",value:f}})();var p=t.setValue(o());if(!(p===b||p===T)){if(p===O)break;if(s=p,s instanceof H&&s.value===l){s=b;continue}if(s instanceof C||s instanceof _||s instanceof H)break}}return s}},n.withStatementHandler=function(e){var t=this,r=this.createClosure(e.object),c=this.createClosure(e.body);return function(){var o=r(),i=t.getCurrentScope(),l=new F(o,i,X);t.setCurrentScope(l);var s=t.setValue(c());return t.setCurrentScope(i),s}},n.throwStatementHandler=function(e){var t=this,r=this.createClosure(e.argument);return function(){throw t.setValue(void 0),r()}},n.tryStatementHandler=function(e){var t=this,r=this.createClosure(e.block),c=e.handler?this.catchClauseHandler(e.handler):null,o=e.finalizer?this.createClosure(e.finalizer):null;return function(){var i=t.getCurrentScope(),l=t.getCurrentContext(),s=i.labelStack.concat([]),f=t.callStack.concat([]),h=b,p,m,v=function(){t.setCurrentScope(i),t.setCurrentContext(l),i.labelStack=s,t.callStack=f};try{h=t.setValue(r()),h instanceof C&&(p=h)}catch(S){if(v(),t.isInterruptThrow(S))throw S;if(c)try{h=t.setValue(c(S)),h instanceof C&&(p=h)}catch(E){if(v(),t.isInterruptThrow(E))throw E;m=E}}if(o)try{h=o(),h instanceof C&&(p=h)}catch(S){if(v(),t.isInterruptThrow(S))throw S;m=S}if(m)throw m;return p||h}},n.catchClauseHandler=function(e){var t=this,r=this.createParamNameGetter(e.param),c=this.createClosure(e.body);return function(o){var i,l=t.getCurrentScope(),s=l.data,f=r(),h=Se.call(s,f),p=s[f];return s[f]=o,i=c(),h?s[f]=p:delete s[f],i}},n.continueStatementHandler=function(e){return function(){return e.label?new H(e.label.name):T}},n.breakStatementHandler=function(e){return function(){return e.label?new _(e.label.name):O}},n.switchStatementHandler=function(e){var t=this,r=this.createClosure(e.discriminant),c=e.cases.map(function(o){return t.switchCaseHandler(o)});return function(){for(var o=r(),i=!1,l,s,f,h=0;h<c.length;h++){var p=c[h](),m=p.testClosure();if(m===Q){f=p;continue}if(i||m===o){if(i=!0,s=t.setValue(p.bodyClosure()),s===b)continue;if(s===O||(l=s,l instanceof C||l instanceof _||l instanceof H||l===T))break}}if(!i&&f){s=t.setValue(f.bodyClosure());var v=s===b||s===O||s===T;v||(l=s)}return l}},n.switchCaseHandler=function(e){var t=e.test?this.createClosure(e.test):function(){return Q},r=this.createClosure({type:"BlockStatement",body:e.consequent});return function(){return{testClosure:t,bodyClosure:r}}},n.labeledStatementHandler=function(e){var t=this,r=e.label.name,c=this.createClosure(e.body);return function(){var o,i=t.getCurrentScope();return i.labelStack.push(r),o=c(e),o instanceof _&&o.value===r&&(o=b),i.labelStack.pop(),o}},n.debuggerStatementHandler=function(e){return function(){debugger;return b}},n.createParamNameGetter=function(e){if(e.type==="Identifier")return function(){return e.name};throw this.createInternalThrowError(g.ParamTypeSyntaxError,e.type,e)},n.createObjectKeyGetter=function(e){var t;return e.type==="Identifier"?t=function(){return e.name}:t=this.createClosure(e),function(){return t()}},n.createMemberKeyGetter=function(e){return e.computed?this.createClosure(e.property):this.createObjectKeyGetter(e.property)},n.createObjectGetter=function(e){var t=this;switch(e.type){case"Identifier":return function(){return t.getScopeDataFromName(e.name,t.getCurrentScope())};case"MemberExpression":return this.createClosure(e.object);default:throw this.createInternalThrowError(g.AssignmentTypeSyntaxError,e.type,e)}},n.createNameGetter=function(e){switch(e.type){case"Identifier":return function(){return e.name};case"MemberExpression":return this.createMemberKeyGetter(e);default:throw this.createInternalThrowError(g.AssignmentTypeSyntaxError,e.type,e)}},n.varDeclaration=function(e){var t=this.collectDeclVars;t[e]=void 0},n.funcDeclaration=function(e,t){var r=this.collectDeclFuncs;r[e]=t},n.addDeclarationsToScope=function(e,t,r){var c=r.data;for(var o in t){var i=t[o];c[o]=i&&i()}for(var l in e)l in c||(c[l]=void 0)},n.getScopeValue=function(e,t){var r=this.getScopeFromName(e,t);return r.data[e]},n.getScopeDataFromName=function(e,t){return this.getScopeFromName(e,t).data},n.getScopeFromName=function(e,t){var r=t;do if(e in r.data)return r;while(r=r.parent);return this.globalScope},n.setValue=function(e){var t=this.callStack.length;return this.isVarDeclMode||t||e===b||e===O||e===T||e instanceof _||e instanceof H||(this.value=e instanceof C?e.value:e),e},n.getValue=function(){return this.value},u}();d.version=be;d.eval=q;d.Function=$;d.ecmaVersion=5;d.globalContextInFunction=void 0;d.global=Object.create(null);function de(u){return u===void 0&&(u=Object.create(null)),u}function re(u,n,a){n===void 0&&(n=[]),a===void 0&&(a={});var e=a.parsingContext,t=a.timeout===void 0?0:a.timeout,r=`
    (function anonymous(`+n.join(",")+`){
         `+u+`
    });
    `,c=new d(e,{ecmaVersion:a.ecmaVersion,timeout:t,rootContext:a.rootContext,globalContextInFunction:a.globalContextInFunction});return c.evaluate(r)}function V(u,n,a){var e=new d(n,a);return e.evaluate(u)}var Ce=V,xe=function(){function u(a){this._code=a}var n=u.prototype;return n.runInContext=function(e){return V(this._code,e)},n.runInNewContext=function(e){return V(this._code,e)},u}();const Ee=Object.freeze(Object.defineProperty({__proto__:null,createContext:de,compileFunction:re,runInContext:V,runInNewContext:Ce,Script:xe},Symbol.toStringTag,{value:"Module"})),te=function(u,n,a){return V(u,n,a)};function we(){for(var u=arguments.length,n=new Array(u),a=0;a<u;a++)n[a]=arguments[a];var e=n.pop();return re(e||"",n)}const He=Object.freeze(Object.defineProperty({__proto__:null,Interpreter:d,vm:Ee,evaluate:te,Function:we,default:te},Symbol.toStringTag,{value:"Module"})),Te=ce(He);export{Te as r};
