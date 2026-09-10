import{$ as ad,A as Pn$1,At as m,Bt as rh,C as Lw,Ct as iI,D as OI,Dt as lh,E as Nh,Et as lI,Ft as nu,G as Yr,Gt as tI,H as Vi$1,Ht as se$1,I as St$1,It as pu,J as ZI,Jt as th,K as Z,Kt as te,L as Tg,Lt as qP,M as Pw,Mt as mm,N as QD,Ot as ln,P as Re$1,Pt as nt,Q as _t$1,Qt as um,R as Th,Rt as qn$1,S as LI,St as iD,Tt as lB,U as WI,Ut as sh,V as Ut,Vt as rt,X as _f,Xt as uB,Y as Zr,Z as _h,Zt as uI,_ as Ie$1,_t as gh,an as zP,at as cd,b as L,bt as hh,ct as dI,d as Dm,dt as eI,en as y,et as ah,f as Em,ft as eg,g as Hw,gt as ge$1,h as Hh,ht as g,i as $P,in as zI,it as cI,j as Pr$1,jt as mh,kt as lu,l as Bt,m as G,mt as fu,n as $,nn as ym,nt as bd,o as $h,on as zo,ot as ce,p as Fs,pt as fh,q as ZD,qt as tg,r as $C,rn as z,rt as bh,s as Ai$1,st as ch,t as ce$1,tn as yh,tt as b,u as Cc,ut as du,v as KI,wt as ke$1,x as LC,xt as hu,y as Ki$1,yt as he,z as UE,zt as rI}from"./main-FGVVPNZS.js";import{a as Rn$1,c as dn,d as wa,f as x,i as Ra,l as me,m as y$1,n as Na,o as _n$1,p as xa,r as Oa,s as bt$1,t as Fa,u as tt}from"./chunk-i_umyl-r.js";var Cn=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||n)(he(Ai$1),he(_t$1))};static ɵdir=qn$1({type:n})}return n})();var Sn=(()=>{class n extends Cn{static ɵfac=(()=>{let e;return function(r){return(e||(e=_f(n)))(r||n)}})();static ɵdir=qn$1({type:n,features:[th]})}return n})();var dt=new y(``);var _i={provide:dt,useExisting:zo(()=>ze),multi:!0};function vi(){let n=rt()?rt().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var bi=new y(``);var ze=(()=>{class n extends Cn{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode??=!vi()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||n)(he(Ai$1),he(_t$1),he(bi,8))};static ɵdir=qn$1({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&fh(`input`,function(a){return r._handleInput(a.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Nh([_i]),th]})}return n})();function ct(n){return n==null||ut(n)===0}function ut(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var xe=new y(``);var ft=new y(``);var yi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ye=class{static min(t){return Mn(t)}static max(t){return xi(t)}static required(t){return Nn(t)}static requiredTrue(t){return Ci(t)}static email(t){return Si(t)}static minLength(t){return Mi(t)}static maxLength(t){return Ni(t)}static pattern(t){return wi(t)}static nullValidator(t){return Ve()}static compose(t){return Vn(t)}static composeAsync(t){return In(t)}};function Mn(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function xi(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Nn(n){return ct(n.value)?{required:!0}:null}function Ci(n){return n.value===!0?null:{required:!0}}function Si(n){return ct(n.value)||yi.test(n.value)?null:{email:!0}}function Mi(n){return t=>{let e=t.value?.length??ut(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Ni(n){return t=>{let e=t.value?.length??ut(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function wi(n){if(!n)return Ve;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(ct(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Ve(n){return null}function wn(n){return n!=null}function Fn(n){return Zr(n)?Re$1(n):n}function Dn(n){let t={};return n.forEach(e=>{t=e!=null?L(L({},t),e):t}),Object.keys(t).length===0?null:t}function En(n,t){return t.map(e=>e(n))}function Fi(n){return!n.validate}function An(n){return n.map(t=>Fi(t)?t:e=>t.validate(e))}function Vn(n){if(!n)return null;let t=n.filter(wn);return t.length==0?null:function(e){return Dn(En(e,t))}}function mt(n){return n!=null?Vn(An(n)):null}function In(n){if(!n)return null;let t=n.filter(wn);return t.length==0?null:function(e){return Fs(En(e,t).map(Fn)).pipe(z(Dn))}}function ht(n){return n!=null?In(An(n)):null}function hn(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function On(n){return n._rawValidators}function Rn(n){return n._rawAsyncValidators}function at(n){return n?Array.isArray(n)?n:[n]:[]}function Ie(n,t){return Array.isArray(n)?n.includes(t):n===t}function pn(n,t){let e=at(t);return at(n).forEach(r=>{Ie(e,r)||e.push(r)}),e}function gn(n,t){return at(t).filter(e=>!Ie(n,e))}var Oe=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=mt(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var K=class extends Oe{name;get formDirective(){return null}get path(){return null}};var pe=`VALID`;var Ae=`INVALID`;var se=`PENDING`;var ge=`DISABLED`;var q=class{};var Re=class extends q{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var ve=class extends q{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var be=class extends q{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var le=class extends q{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var Te=class extends q{source;constructor(t){super(),this.source=t}};var de=class extends q{source;constructor(t){super(),this.source=t}};function Tn(n){return(je(n)?n.validators:n)||null}function Di(n){return Array.isArray(n)?mt(n):n||null}function Pn(n,t){return(je(t)?t.asyncValidators:n)||null}function Ei(n){return Array.isArray(n)?ht(n):n||null}function je(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Ai(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new m(1e3,``);if(!kn(i,e))throw new m(1001,``)}function Vi(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new m(-1002,``)})}var Pe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Pn$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return St$1(this.statusReactive)}set status(t){St$1(()=>this.statusReactive.set(t))}_status=KI(()=>this.statusReactive());statusReactive=Pn$1(void 0);get valid(){return this.status===pe}get invalid(){return this.status===Ae}get pending(){return this.status===se}get disabled(){return this.status===ge}get enabled(){return this.status!==ge}errors;get pristine(){return St$1(this.pristineReactive)}set pristine(t){St$1(()=>this.pristineReactive.set(t))}_pristine=KI(()=>this.pristineReactive());pristineReactive=Pn$1(!0);get dirty(){return!this.pristine}get touched(){return St$1(this.touchedReactive)}set touched(t){St$1(()=>this.touchedReactive.set(t))}_touched=KI(()=>this.touchedReactive());touchedReactive=Pn$1(!1);get untouched(){return!this.touched}_events=new G;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(pn(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(pn(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(gn(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(gn(t,this._rawAsyncValidators))}hasValidator(t){return Ie(this._rawValidators,t)}hasAsyncValidator(t){return Ie(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched($(L({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new be(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new be(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty($(L({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new ve(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new ve(!0,i))}markAsPending(t={}){this.status=se;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new le(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending($(L({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ge,this.errors=null,this._forEachChild(r=>{r.disable($(L({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Re(this.value,i)),this._events.next(new le(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(L({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=pe,this._forEachChild(i=>{i.enable($(L({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors($(L({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===pe||this.status===se)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Re(this.value,e)),this._events.next(new le(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity($(L({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ge:pe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=se,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Fn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new le(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new Ie$1,this.statusChanges=new Ie$1}_calculateStatus(){return this._allControlsDisabled()?ge:this.errors?Ae:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(se)?se:this._anyControlsHaveStatus(Ae)?Ae:pe}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new ve(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new be(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){je(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Di(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Ei(this._rawAsyncValidators)}_updateHasRequiredValidator(){St$1(()=>this._hasRequired.set(this.hasValidator(ye.required)))}};function kn(n,t){return Object.hasOwn(n,t)}function Ii(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Oi(n,t,e,i){switch(e){case`name`:n.setAttribute(t,e,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e);break}}var st=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};function Ri(n){return typeof n==`number`?n:parseFloat(n)}var Ln=(()=>{class n{_validator=Ve;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Ve,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,features:[Cc]})}return n})();var Ti={provide:xe,useExisting:zo(()=>pt),multi:!0};var pt=(()=>{class n extends Ln{min;inputName=`min`;normalizeInput=e=>Ri(e);createValidator=e=>Mn(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=_f(n)))(r||n)}})();static ɵdir=qn$1({type:n,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&Yr(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[Nh([Ti]),th]})}return n})();var Pi={provide:xe,useExisting:zo(()=>Bn),multi:!0};var Bn=(()=>{class n extends Ln{required;inputName=`required`;normalizeInput=$h;createValidator=e=>Nn;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=_f(n)))(r||n)}})();static ɵdir=qn$1({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&Yr(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Nh([Pi]),th]})}return n})();var ki=new y(``);var He=new y(``,{factory:()=>gt});var gt=`always`;function Li(n,t){return[...t.path,n]}function _n(n,t,e=gt){_t(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),zi(n,t),Hi(n,t),ji(n,t),Bi(n,t)}function vn(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Le(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ke(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Bi(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function _t(n,t){let e=On(n);t.validator!==null?n.setValidators(hn(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let i=Rn(n);t.asyncValidator!==null?n.setAsyncValidators(hn(i,t.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ke(t._rawValidators,r),ke(t._rawAsyncValidators,r)}function Le(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=On(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=Rn(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return ke(t._rawValidators,i),ke(t._rawAsyncValidators,i),e}function zi(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&zn(n,t)})}function ji(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&zn(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function zn(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Hi(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function jn(n,t){_t(n,t)}function Gi(n,t){return Le(n,t)}function Ui(n,t){if(!n.hasOwnProperty(`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function qi(n){return Object.getPrototypeOf(n.constructor)===Sn}function Hn(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Wi(n,t){if(!t)return null;let e,i,r;return t.forEach(o=>{o.constructor===ze?e=o:qi(o)?i=o:r=o}),r||i||e||null}function $i(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var Zi={provide:ki,useFactory:()=>{let n=g(W,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var W=class extends Oe{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof de&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Wi(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(ge$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(Hh);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new Z,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof de&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ii(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Bn))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,r,`touched`,i.touched),this.bindControlProperty(t,r,`dirty`,i.dirty),this.bindControlProperty(t,r,`valid`,i.valid),this.bindControlProperty(t,r,`invalid`,i.invalid),this.bindControlProperty(t,r,`pending`,i.pending),this.bindControlProperty(t,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,i,r){if(e[i]===r)return;e[i]=r;let o=t.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&Oi(this.renderer,t.nativeElement,i,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,r])=>new st({context:r,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=KI(()=>{let r=t();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),bd(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var lt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Gn=(()=>{class n extends lt{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(he(W,2))};static ɵdir=qn$1({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&Ki$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[th]})}return n})();var Be=class extends Pe{constructor(t,e,i){super(Tn(e),Pn(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){St$1(()=>{Vi(this,!0,t),Object.keys(t).forEach(i=>{Ai(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this._find(i);r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,$(L({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new de(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return kn(this.controls,t)?this.controls[t]:null}};var Qi={provide:K,useExisting:zo(()=>vt)};var _e=Promise.resolve();var vt=(()=>{class n extends K{callSetDisabledState;get submitted(){return St$1(this.submittedReactive)}_submitted=KI(()=>this.submittedReactive());submittedReactive=Pn$1(!1);_directives=new Set;form;ngSubmit=new Ie$1;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Be({},mt(e),ht(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_e.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_e.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_e.then(()=>{let i=this._findContainer(e.path),r=new Be({});jn(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_e.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){_e.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Hn(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Te(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||n)(he(xe,10),he(ft,10),he(He,8))};static ɵdir=qn$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&fh(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Nh([Qi]),th]})}return n})();function bn(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function yn(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Un=class extends Pe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Tn(e),Pn(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),je(e)&&(e.nonNullable||e.initialValueIsDefault)&&(yn(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){St$1(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new de(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){bn(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){bn(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){yn(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Xi=n=>n instanceof Un;var Yi={provide:W,useExisting:zo(()=>bt)};var xn=Promise.resolve();var bt=(()=>{class n extends W{_changeDetectorRef;callSetDisabledState;control=new Un;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new Ie$1;constructor(e,i,r,o,a,_,R,G){super(R,G,o),this._changeDetectorRef=a,this.callSetDisabledState=_,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Ui(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,_n(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,_n(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){xn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&$h(i);xn.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Li(e,this._parent):[e]}static ɵfac=function(i){return new(i||n)(he(K,9),he(xe,10),he(ft,10),he(dt,10),he(Hh,8),he(He,8),he(ce,8),he(Ai$1,8))};static ɵdir=qn$1({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[Nh([Yi,Zi]),th,Cc,UE(null)]})}return n})();var Ki={provide:dt,useExisting:zo(()=>yt),multi:!0};var yt=(()=>{class n extends Sn{writeValue(e){let i=e??``;this.setProperty(`value`,i)}registerOnChange(e){this.onChange=i=>{e(i==``?null:parseFloat(i))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=_f(n)))(r||n)}})();static ɵdir=qn$1({type:n,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&fh(`input`,function(a){return r.onChange(a.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[Nh([Ki]),th]})}return n})();var Ji=(()=>{class n extends K{callSetDisabledState;get submitted(){return St$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=KI(()=>this._submittedReactive());_submittedReactive=Pn$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Le(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){vn(e.control||null,e,!1),$i(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Hn(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Te(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(vn(i||null,e),Xi(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);jn(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Gi(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){_t(this.form,this),this._oldForm&&Le(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(he(xe,10),he(ft,10),he(He,8))};static ɵdir=qn$1({type:n,features:[th,Cc]})}return n})();var er={provide:K,useExisting:zo(()=>xt)};var xt=(()=>{class n extends Ji{form=null;ngSubmit=new Ie$1;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=_f(n)))(r||n)}})();static ɵdir=qn$1({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&fh(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Nh([er]),th]})}return n})();var tr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=nt({type:n});static ɵinj=ke$1({})}return n})();var qn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:He,useValue:e.callSetDisabledState??gt}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=nt({type:n});static ɵinj=ke$1({imports:[tr]})}return n})();var Ct=class{_box;_destroyed=new G;_resizeSubject=new G;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new b(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(Ut(e=>e.some(i=>i.target===t)),ym({bufferSize:1,refCount:!0}),Em(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Wn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=g(te);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Ct(r)),this._observers.get(r).observe(e)}static ɵfac=function(i){return new(i||n)};static ɵprov=se$1({token:n,factory:n.ɵfac})}return n})();var ir=[`notch`];var rr=[`*`];var $n=[`iconPrefixContainer`];var Zn=[`textPrefixContainer`];var Qn=[`iconSuffixContainer`];var Xn=[`textSuffixContainer`];var or=[`textField`];var ar=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var sr=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function lr(n,t){n&1&&ah(0,`span`,21)}function dr(n,t){if(n&1&&(Vi$1(0,`label`,20),hu(1,1),eI(2,lr,1,0,`span`,21),lu()),n&2){let e=iI(2);sh(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Yr(`for`,e._control.disableAutomaticLabeling?null:e._control.id),iD(2),tI(!e.hideRequiredMarker&&e._control.required?2:-1)}}function cr(n,t){if(n&1&&eI(0,dr,3,5,`label`,20),n&2)tI(iI()._hasFloatingLabel()?0:-1)}function ur(n,t){n&1&&ah(0,`div`,7)}function fr(n,t){}function mr(n,t){if(n&1&&rh(0,fr,0,0,`ng-template`,13),n&2){iI(2);sh(`ngTemplateOutlet`,dI(1))}}function hr(n,t){if(n&1&&(Vi$1(0,`div`,9),eI(1,mr,1,1,null,13),lu()),n&2){let e=iI();sh(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),iD(),tI(e._forceDisplayInfixLabel()?-1:1)}}function pr(n,t){n&1&&(Vi$1(0,`div`,10,2),hu(2,2),lu())}function gr(n,t){n&1&&(Vi$1(0,`div`,11,3),hu(2,3),lu())}function _r(n,t){}function vr(n,t){if(n&1&&rh(0,_r,0,0,`ng-template`,13),n&2){iI();sh(`ngTemplateOutlet`,dI(1))}}function br(n,t){n&1&&(Vi$1(0,`div`,14,4),hu(2,4),lu())}function yr(n,t){n&1&&(Vi$1(0,`div`,15,5),hu(2,5),lu())}function xr(n,t){n&1&&ah(0,`div`,16)}function Cr(n,t){n&1&&(Vi$1(0,`div`,18),hu(1,6),lu())}function Sr(n,t){if(n&1&&(Vi$1(0,`mat-hint`,22),OI(1),lu()),n&2){let e=iI(2);sh(`id`,e._hintLabelId),iD(),Th(e.hintLabel)}}function Mr(n,t){if(n&1&&(Vi$1(0,`div`,19),eI(1,Sr,2,2,`mat-hint`,22),hu(2,7),ah(3,`div`,23),hu(4,8),lu()),n&2){let e=iI();iD(),tI(e.hintLabel?1:-1)}}var Ce=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,selectors:[[`mat-label`]]})}return n})();var Nr=new y(`MatError`);var St=(()=>{class n{align=`start`;id=g(bt$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(lh(`id`,r.id),Yr(`align`,null),Ki$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var wr=new y(`MatPrefix`);var Fr=new y(`MatSuffix`);var ii=new y(`FloatingLabelParent`);var Yn=(()=>{class n{_elementRef=g(_t$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(Wn);_ngZone=g(te);_parent=g(ii);_resizeSubscription=new Z;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Dr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Ki$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Dr(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Kn=`mdc-line-ripple--active`;var Ge=`mdc-line-ripple--deactivating`;var Jn=(()=>{class n{_elementRef=g(_t$1);_cleanupTransitionEnd;constructor(){let e=g(te),i=g(Ai$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ge),e.add(Kn)}deactivate(){this._elementRef.nativeElement.classList.add(Ge)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ge);e.propertyName===`opacity`&&r&&i.remove(Kn,Ge)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var ei=(()=>{class n{_elementRef=g(_t$1);_ngZone=g(te);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=nu({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&gh(ir,5),i&2){let o;cI(o=uI())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&Ki$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:rr,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(pu(),ch(0,`div`,1),du(1,`div`,2,0),hu(3),fu(),ch(4,`div`,3))},encapsulation:2})}return n})();var Mt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n})}return n})();var Nt=new y(`MatFormField`);var Er=new y(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ti=`fill`;var Ar=`auto`;var ni=`fixed`;var Vr=`translateY(-50%)`;var Ue=(()=>{class n{_elementRef=g(_t$1);_changeDetectorRef=g(Hh);_platform=g(y$1);_idGenerator=g(bt$1);_ngZone=g(te);_defaults=g(Er,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=$P(`iconPrefixContainer`);_textPrefixContainerSignal=$P(`textPrefixContainer`);_iconSuffixContainerSignal=$P(`iconSuffixContainer`);_textSuffixContainerSignal=$P(`textSuffixContainer`);_prefixSuffixContainers=KI(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=zP(Ce);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Rn$1(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ar}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||ti;this._appearanceSignal.set(i)}_appearanceSignal=Pn$1(ti);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ni}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ni}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new G;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=tt();constructor(){let e=this._defaults,i=g($C);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bd(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=KI(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Dm([void 0,void 0]),z(()=>[i.errorState,i.userAriaDescribedBy]),mm(),Ut(([[o,a],[_,R]])=>o!==_||a!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Em(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),um(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){qP({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=KI(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(_=>_.align===`start`):null,a=this._hintChildren?this._hintChildren.find(_=>_.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,_=i?.getBoundingClientRect().width??0,R=r?.getBoundingClientRect().width??0,G=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Vr} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+_}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+_+R+G]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||n)};static ɵcmp=nu({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(mh(o,r._labelChild,Ce,5),hh(o,Mt,5)(o,wr,5)(o,Fr,5)(o,Nr,5)(o,St,5)),i&2){lI();let a;cI(a=uI())&&(r._formFieldControl=a.first),cI(a=uI())&&(r._prefixChildren=a),cI(a=uI())&&(r._suffixChildren=a),cI(a=uI())&&(r._errorChildren=a),cI(a=uI())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(yh(r._iconPrefixContainerSignal,$n,5)(r._textPrefixContainerSignal,Zn,5)(r._iconSuffixContainerSignal,Qn,5)(r._textSuffixContainerSignal,Xn,5),gh(or,5)($n,5)(Zn,5)(Qn,5)(Xn,5)(Yn,5)(ei,5)(Jn,5)),i&2){lI(4);let o;cI(o=uI())&&(r._textField=o.first),cI(o=uI())&&(r._iconPrefixContainer=o.first),cI(o=uI())&&(r._textPrefixContainer=o.first),cI(o=uI())&&(r._iconSuffixContainer=o.first),cI(o=uI())&&(r._textSuffixContainer=o.first),cI(o=uI())&&(r._floatingLabel=o.first),cI(o=uI())&&(r._notchedOutline=o.first),cI(o=uI())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&Ki$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Nh([{provide:Nt,useExisting:n},{provide:ii,useExisting:n}])],ngContentSelectors:sr,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(pu(ar),rh(0,cr,1,1,`ng-template`,null,0,ZI),Vi$1(2,`div`,6,1),fh(`click`,function(a){return r._control.onContainerClick(a)}),eI(4,ur,1,0,`div`,7),Vi$1(5,`div`,8),eI(6,hr,2,2,`div`,9),eI(7,pr,3,0,`div`,10),eI(8,gr,3,0,`div`,11),Vi$1(9,`div`,12),eI(10,vr,1,1,null,13),hu(11),lu(),eI(12,br,3,0,`div`,14),eI(13,yr,3,0,`div`,15),lu(),eI(14,xr,1,0,`div`,16),lu(),Vi$1(15,`div`,17),eI(16,Cr,2,0,`div`,18)(17,Mr,5,1,`div`,19),lu()),i&2){let o;iD(2),Ki$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),iD(2),tI(!r._hasOutline()&&!r._control.disabled?4:-1),iD(2),tI(r._hasOutline()?6:-1),iD(),tI(r._hasIconPrefix?7:-1),iD(),tI(r._hasTextPrefix?8:-1),iD(2),tI(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),iD(2),tI(r._hasTextSuffix?12:-1),iD(),tI(r._hasIconSuffix?13:-1),iD(),tI(r._hasOutline()?-1:14),iD(),Ki$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();iD(),tI((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[Yn,ei,Lw,Jn,St],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var Se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=nt({type:n});static ɵinj=ke$1({imports:[dn,Ue,Tg]})}return n})();var Or=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=nu({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var Rr={passive:!0};var ri=(()=>{class n{_platform=g(y$1);_ngZone=g(te);_renderer=g(ln).createRenderer(null,null);_styleLoader=g(LC);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Bt;this._styleLoader.load(Or);let i=x(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new G,a=`cdk-text-field-autofilled`,_=G=>{G.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:G.target,isAutofilled:!0}))):G.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:G.target,isAutofilled:!1})))},R=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,_,Rr)));return this._monitoredElements.set(i,{subject:o,unlisten:R}),o}stopMonitoring(e){let i=x(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=se$1({token:n,factory:n.ɵfac})}return n})();var oi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=nt({type:n});static ɵinj=ke$1({})}return n})();var ai=new y(``);var si=new y(`MAT_INPUT_VALUE_ACCESSOR`);var li=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static ɵfac=function(i){return new(i||n)};static ɵprov=se$1({token:n,factory:n.ɵfac})}return n})();var qe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,i,r,o){this._defaultMatcher=t,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?Pr$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return t?.isErrorState(i,e)??!1}};var Tr=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Pr=new y(`MAT_INPUT_CONFIG`);var di=(()=>{class n{_elementRef=g(_t$1);_platform=g(y$1);ngControl=g(W,{optional:!0,self:!0});_autofillMonitor=g(ri);_ngZone=g(te);_formField=g(Nt,{optional:!0});_renderer=g(Ai$1);_uid=g(bt$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=g(Pr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new G;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Rn$1(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ye.required)??!1}set required(e){this._required=Rn$1(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&_n$1().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Rn$1(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>_n$1().has(e));constructor(){let e=g(vt,{optional:!0}),i=g(xt,{optional:!0}),r=g(li),o=g(si,{optional:!0,self:!0}),a=g(ai,{optional:!0,self:!0}),_=this._elementRef.nativeElement,R=_.nodeName.toLowerCase();o?Pr$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=_,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(_,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new qe(r,a||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=R===`select`,this._isTextarea=R===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=_.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&bd(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute(`placeholder`,e):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Tr.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=qn$1({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&fh(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(lh(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Yr(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Ki$1(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$h]},exportAs:[`matInput`],features:[Nh([{provide:Mt,useExisting:n}]),Cc]})}return n})();var ci=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=nt({type:n});static ɵinj=ke$1({imports:[Se,Se,oi,Tg]})}return n})();function Lr(n,t){if(n&1){let e=rI();Vi$1(0,`mat-card`,12)(1,`mat-card-content`,13)(2,`div`,14)(3,`div`,15)(4,`mat-icon`),OI(5,`person_add`),lu()(),Vi$1(6,`div`)(7,`div`,16),OI(8,`Spieler hinzufügen`),lu(),Vi$1(9,`div`,17),OI(10,`Wer sitzt heute mit am Tisch?`),lu()()(),Vi$1(11,`div`,18)(12,`mat-form-field`,19)(13,`mat-label`),OI(14,`Name eingeben`),lu(),Vi$1(15,`input`,20),bh(`ngModelChange`,function(r){ad(e);let o=iI();return LI(o.name,r)||(o.name=r),cd(r)}),fh(`keyup.enter`,function(){ad(e);return cd(iI().add())}),lu(),ZD(),lu(),Vi$1(16,`button`,21),fh(`click`,function(){ad(e);return cd(iI().add())}),Vi$1(17,`mat-icon`),OI(18,`add`),lu(),OI(19,` Spieler hinzufügen `),lu()()()()}if(n&2){let e=iI();iD(15),_h(`ngModel`,e.name),QD()}}function Br(n,t){if(n&1){let e=rI();Vi$1(0,`mat-form-field`,31)(1,`mat-label`),OI(2,`Score`),lu(),Vi$1(3,`input`,32),fh(`ngModelChange`,function(r){ad(e);let o=iI().$implicit;return cd(iI().setRoundScore(o.id,r))}),lu(),ZD(),lu()}if(n&2){let e=iI().$implicit,i=iI();iD(3),sh(`ngModel`,i.roundScores[e.id]),QD()}}function zr(n,t){if(n&1){let e=rI();Vi$1(0,`button`,33),fh(`click`,function(){ad(e);let r=iI().$implicit;return cd(iI().removePlayer(r.id))}),Vi$1(1,`mat-icon`),OI(2,`remove`),lu()()}if(n&2){let e=iI().$implicit;Yr(`aria-label`,e.name+` entfernen`)}}function jr(n,t){if(n&1&&(Vi$1(0,`mat-card`,22)(1,`div`,23)(2,`div`,24)(3,`div`,25)(4,`span`,26),OI(5),lu(),Vi$1(6,`div`,27),OI(7),lu()(),Vi$1(8,`div`,28)(9,`span`),OI(10),lu(),OI(11,` points `),lu()(),rh(12,Br,4,1,`mat-form-field`,29)(13,zr,3,1,`button`,30),lu()()),n&2){let e=t.$implicit,i=t.index,r=iI();iD(5),Th(i+1),iD(2),Th(e.name),iD(3),Th(e.score),iD(2),sh(`ngIf`,r.gameStarted),iD(),sh(`ngIf`,!r.gameStarted)}}function Hr(n,t){if(n&1){let e=rI();Vi$1(0,`button`,34),fh(`click`,function(){ad(e);return cd(iI().startGame())}),Vi$1(1,`mat-icon`),OI(2,`play_arrow`),lu(),OI(3,` Spiel starten `),lu()}}function Gr(n,t){if(n&1){let e=rI();Vi$1(0,`button`,35),fh(`click`,function(){ad(e);return cd(iI().nextRound())}),Vi$1(1,`mat-icon`),OI(2,`arrow_forward`),lu(),OI(3,` In die nächste Runde `),lu()}}function Ur(n,t){if(n&1){let e=rI();Vi$1(0,`button`,34),fh(`click`,function(){ad(e);return cd(iI().endGame())}),Vi$1(1,`mat-icon`),OI(2,`flag`),lu(),OI(3,` Spiel beenden `),lu()}}var ui=class n{constructor(t,e){this.game=t;this.router=e;this.players$=this.game.players$.pipe(z(i=>i.slice().sort((r,o)=>o.score-r.score)))}game;router;name=``;gameStarted=!1;hasCompletedRound=!1;roundScores={};players$;add(){this.game.addPlayer(this.name),this.name=``}removePlayer(t){this.game.removePlayer(t)}setRoundScore(t,e){this.roundScores[t]=e}startGame(){this.gameStarted=!0}nextRound(){this.game.completeRound(this.roundScores),this.roundScores={},this.hasCompletedRound=!0}endGame(){this.game.completeRound(this.roundScores),this.roundScores={},this.router.navigate([`/ranking/end-score`])}trackById(t,e){return e.id}static ɵfac=function(e){return new(e||n)(he(me),he(ce$1))};static ɵcmp=nu({type:n,selectors:[[`app-scoreboard`]],decls:18,vars:8,consts:[[1,`scoreboard-root`],[1,`hero`],[1,`badge`],[1,`title`],[1,`accent`],[1,`subtitle`],[`class`,`add-card`,4,`ngIf`],[1,`list`],[`class`,`player-card`,4,`ngFor`,`ngForOf`,`ngForTrackBy`],[1,`footer`],[`mat-flat-button`,``,`color`,`primary`,3,`click`,4,`ngIf`],[`mat-stroked-button`,``,`color`,`accent`,3,`click`,4,`ngIf`],[1,`add-card`],[1,`add-content`],[1,`add-heading`],[1,`add-icon`],[1,`add-title`],[1,`add-hint`],[1,`top`],[`appearance`,`outline`,1,`name-field`],[`matInput`,``,3,`ngModelChange`,`keyup.enter`,`ngModel`],[`mat-flat-button`,``,`color`,`primary`,1,`add-button`,3,`click`],[1,`player-card`],[1,`mat-card-wrapper`],[1,`info`],[1,`player-heading`],[1,`rank-badge`],[1,`name`],[1,`score`],[`appearance`,`outline`,`class`,`score-field`,`subscriptSizing`,`dynamic`,4,`ngIf`],[`mat-mini-fab`,``,`color`,`warn`,`class`,`remove-player-button`,`type`,`button`,`title`,`Spieler entfernen`,3,`click`,4,`ngIf`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`score-field`],[`matInput`,``,`type`,`number`,`min`,`0`,`aria-label`,`Points for this round`,3,`ngModelChange`,`ngModel`],[`mat-mini-fab`,``,`color`,`warn`,`type`,`button`,`title`,`Spieler entfernen`,1,`remove-player-button`,3,`click`],[`mat-flat-button`,``,`color`,`primary`,3,`click`],[`mat-stroked-button`,``,`color`,`accent`,3,`click`]],template:function(e,i){e&1&&(Vi$1(0,`div`,0)(1,`section`,1)(2,`div`,2),OI(3,`V1.01`),lu(),Vi$1(4,`h1`,3),OI(5,`Board Game `),Vi$1(6,`span`,4),OI(7,`Scoreboard`),lu()(),Vi$1(8,`p`,5),OI(9,`Track every round, keep the table moving.`),lu()(),rh(10,Lr,20,1,`mat-card`,6),Vi$1(11,`div`,7),rh(12,jr,14,5,`mat-card`,8),zI(13,`async`),lu(),Vi$1(14,`div`,9),rh(15,Hr,4,0,`button`,10)(16,Gr,4,0,`button`,11)(17,Ur,4,0,`button`,10),lu()()),e&2&&(iD(10),sh(`ngIf`,!i.gameStarted),iD(2),sh(`ngForOf`,WI(13,6,i.players$))(`ngForTrackBy`,i.trackById),iD(3),sh(`ngIf`,!i.gameStarted),iD(),sh(`ngIf`,i.gameStarted),iD(),sh(`ngIf`,i.hasCompletedRound))},dependencies:[tg,eg,Pw,qn,ze,yt,Gn,pt,bt,Se,Ue,Ce,ci,di,wa,Na,xa,lB,uB,Oa,Ra,Fa,Hw],styles:[`.scoreboard-root[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:28px 16px 36px;position:relative;width:100%;min-height:calc(100dvh - 88px);box-sizing:border-box;color:#fff}.scoreboard-root[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{width:min(100%,680px);text-align:center;position:relative;margin-bottom:17px}.scoreboard-root[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;padding:7px 13px;border-radius:20px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);color:#ffffffc7;font-size:12px;font-weight:600;letter-spacing:.02em;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.scoreboard-root[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:18px 0 10px;font-weight:700;line-height:.98}.scoreboard-root[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff6b81,#7c4dff);-webkit-background-clip:text;background-clip:text;color:transparent}.scoreboard-root[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:0;color:#ffffffa8;font-size:15px}.scoreboard-root[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%], .scoreboard-root[_ngcontent-%COMP%]   .player-card[_ngcontent-%COMP%]{width:min(100%,680px);box-sizing:border-box;border:1px solid rgba(255,255,255,.16);background:#ffffff1a;box-shadow:0 18px 45px #0d051338;-webkit-backdrop-filter:blur(16px) saturate(125%);backdrop-filter:blur(16px) saturate(125%)}.scoreboard-root[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]{border-radius:22px;padding:18px;overflow:hidden;position:relative}.scoreboard-root[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:5px;height:100%;background:linear-gradient(180deg,#ff6b81,#7c4dff)}.add-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:18px}.add-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.add-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:40px;height:40px;flex:0 0 40px;border-radius:13px;background:#ff6b8129;color:#ff9aaa}.add-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:21px}.add-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.add-hint[_ngcontent-%COMP%]{margin-top:3px;color:#ffffff8c;font-size:12px}.top[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.name-field[_ngcontent-%COMP%]{flex:1;margin-bottom:-1.25em}.name-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}.add-button[_ngcontent-%COMP%]{min-height:56px;padding:0 18px;border-radius:14px;white-space:nowrap}.add-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}.list[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;gap:16px;margin-top:18px}.player-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;min-height:92px;padding:16px 18px;border-radius:18px;gap:16px}.mat-card-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:center}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;min-width:0}.player-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.rank-badge[_ngcontent-%COMP%]{display:grid;place-items:center;width:30px;height:30px;flex:0 0 30px;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:linear-gradient(145deg,#ff6b81e6,#7c4dffe6);color:#fff;font-size:13px;font-weight:800;box-shadow:0 7px 16px #7c4dff40}.name[_ngcontent-%COMP%]{font-weight:600;font-size:20px;letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.score[_ngcontent-%COMP%]{color:#ffffff94;font-size:13px}.score[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;line-height:1}.score-field[_ngcontent-%COMP%]{width:112px}.remove-player-button[_ngcontent-%COMP%]{width:42px;height:42px;flex:0 0 42px;box-shadow:0 8px 18px #f4433647}.remove-player-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0;color:#fff}.footer[_ngcontent-%COMP%]{margin-top:26px;display:flex;flex-direction:column;align-items:center;gap:12px;justify-content:center}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:48px;padding:0 20px;border-radius:999px;border-color:#ffffff80;color:#fff}.footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}@media(min-width:600px){.scoreboard-root[_ngcontent-%COMP%]{padding:48px 24px 56px}}@media(max-width:420px){.scoreboard-root[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]{padding:16px 14px}.top[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.add-button[_ngcontent-%COMP%]{width:100%}.player-card[_ngcontent-%COMP%]{padding:17px 30px}.score-field[_ngcontent-%COMP%]{width:96px;flex-basis:96px}}`]})};export{ui as Scoreboard};