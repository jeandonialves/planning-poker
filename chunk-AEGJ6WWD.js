import{$ as I,$a as Le,Aa as de,Ba as le,Ca as ue,D as rt,Da as ce,Ea as pe,Fa as he,Ga as ge,Ha as ve,Ia as _e,Ja as fe,Ka as me,La as Ie,Ma as Pe,N as st,Na as ye,Oa as Ae,Pa as Ee,Qa as Re,Ra as we,Sa as xe,Ta as ke,Ua as be,Va as Ce,Wa as Se,Xa as C,Ya as f,Za as Ne,_ as V,_a as A,aa as m,ab as Oe,ba as Z,bb as Te,ca as P,cb as We,da as L,db as Me,ea as g,eb as E,fa as Q,fb as Ue,ga as y,gb as Fe,h as D,ha as x,hb as De,ia as k,ib as ot,j as $,ja as G,jb as O,k as nt,ka as X,kb as Be,l as j,la as at,lb as Ve,m as it,ma as b,mb as Ge,na as ee,nb as He,o as B,oa as te,ob as T,pa as ne,pb as dt,qa as ie,qb as lt,r as w,ra as H,rb as ut,sa as z,sb as ze,ta as K,tb as Ke,ua as Y,va as re,wa as se,xa as J,ya as ae,za as oe}from"./chunk-I7AAR3MZ.js";import{g as a}from"./chunk-MXGVE4JG.js";function R(){return window}var Rt=2e3;function wt(n,e,t){return a(this,null,function*(){var i;let{BuildInfo:r}=R();Q(e.sessionId,"AuthEvent did not contain a session ID");let s=yield St(e.sessionId),o={};return X()?o.ibi=r.packageName:G()?o.apn=r.packageName:P(n,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,ut(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)})}function xt(n){return a(this,null,function*(){let{BuildInfo:e}=R(),t={};X()?t.iosBundleId=e.packageName:G()?t.androidPackageName=e.packageName:P(n,"operation-not-supported-in-this-environment"),yield lt(n,t)})}function kt(n){let{cordova:e}=R();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,at()?"_blank":"_system","location=yes"),t(r)})})}function bt(n,e,t){return a(this,null,function*(){let{cordova:i}=R(),r=()=>{};try{yield new Promise((s,o)=>{let d=null;function u(){var l;s();let N=(l=i.plugins.browsertab)===null||l===void 0?void 0:l.close;typeof N=="function"&&N(),typeof t?.close=="function"&&t.close()}function _(){d||(d=window.setTimeout(()=>{o(L(n,"redirect-cancelled-by-user"))},Rt))}function c(){document?.visibilityState==="visible"&&_()}e.addPassiveListener(u),document.addEventListener("resume",_,!1),G()&&document.addEventListener("visibilitychange",c,!1),r=()=>{e.removePassiveListener(u),document.removeEventListener("resume",_,!1),document.removeEventListener("visibilitychange",c,!1),d&&window.clearTimeout(d)}})}finally{r()}})}function Ct(n){var e,t,i,r,s,o,d,u,_,c;let l=R();g(typeof((e=l?.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),g(typeof((t=l?.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),g(typeof((s=(r=(i=l?.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),g(typeof((u=(d=(o=l?.cordova)===null||o===void 0?void 0:o.plugins)===null||d===void 0?void 0:d.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),g(typeof((c=(_=l?.cordova)===null||_===void 0?void 0:_.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}function St(n){return a(this,null,function*(){let e=Nt(n),t=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")})}function Nt(n){if(Q(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);let e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}var Lt=20,Ye=class extends dt{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}initialized(){return a(this,null,function*(){yield this.initPromise})}};function Ot(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Mt(),postBody:null,tenantId:n.tenantId,error:L(n,"no-auth-event")}}function Tt(n,e){return Je()._set(qe(n),e)}function ct(n){return a(this,null,function*(){let e=yield Je()._get(qe(n));return e&&(yield Je()._remove(qe(n))),e})}function Wt(n,e){var t,i;let r=Ft(e);if(r.includes("/__/auth/callback")){let s=q(r),o=s.firebaseError?Ut(decodeURIComponent(s.firebaseError)):null,d=(i=(t=o?.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],u=d?L(d):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function Mt(){let n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Lt;t++){let i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Je(){return y(C)}function qe(n){return k("authEvent",n.config.apiKey,n.name)}function Ut(n){try{return JSON.parse(n)}catch{return null}}function Ft(n){let e=q(n),t=e.link?decodeURIComponent(e.link):void 0,i=q(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return q(r).link||r||i||t||n}function q(n){if(!n?.includes("?"))return{};let[e,...t]=n.split("?");return rt(t.join("?"))}var Dt=500,$e=class{constructor(){this._redirectPersistence=f,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=T,this._overrideRedirectResult=O}_initialize(e){return a(this,null,function*(){let t=e._key(),i=this.eventManagers.get(t);return i||(i=new Ye(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i})}_openPopup(e){P(e,"operation-not-supported-in-this-environment")}_openRedirect(e,t,i,r){return a(this,null,function*(){Ct(e);let s=yield this._initialize(e);yield s.initialized(),s.resetRedirect(),ot(),yield this._originValidation(e);let o=Ot(e,i,r);yield Tt(e,o);let d=yield wt(e,o,t),u=yield kt(d);return bt(e,s,u)})}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xt(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:i,handleOpenURL:r,BuildInfo:s}=R(),o=setTimeout(()=>a(this,null,function*(){yield ct(e),t.onEvent(pt())}),Dt),d=c=>a(this,null,function*(){clearTimeout(o);let l=yield ct(e),N=null;l&&c?.url&&(N=Wt(l,c.url)),t.onEvent(N||pt())});typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,d);let u=r,_=`${s.packageName.toLowerCase()}://`;R().handleOpenURL=c=>a(this,null,function*(){if(c.toLowerCase().startsWith(_)&&d({url:c}),typeof u=="function")try{u(c)}catch(l){console.error(l)}})}},ht=$e;function pt(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:L("no-auth-event")}}function gt(n,e){b(n)._logFramework(e)}var Vt="@firebase/auth-compat",Gt="0.5.14";var Ht=1e3;function U(){var n;return((n=self?.location)===null||n===void 0?void 0:n.protocol)||null}function zt(){return U()==="http:"||U()==="https:"}function ft(n=D()){return!!((U()==="file:"||U()==="ionic:"||U()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Kt(){return j()||$()}function Yt(){return it()&&document?.documentMode===11}function Jt(n=D()){return/Edge\/\d+/.test(n)}function qt(n=D()){return Yt()||Jt(n)}function mt(){try{let n=self.localStorage,e=Ne();if(n)return n.setItem(e,"1"),n.removeItem(e),qt()?B():!0}catch{return tt()&&B()}return!1}function tt(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function je(){return(zt()||nt()||ft())&&!Kt()&&mt()&&!tt()}function It(){return ft()&&typeof document<"u"}function $t(){return a(this,null,function*(){return It()?new Promise(n=>{let e=setTimeout(()=>{n(!1)},Ht);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1})}function jt(){return typeof window<"u"?window:null}var h={LOCAL:"local",NONE:"none",SESSION:"session"},W=g,Pt="persistence";function Zt(n,e){if(W(Object.values(h).includes(e),n,"invalid-persistence-type"),j()){W(e!==h.SESSION,n,"unsupported-persistence-type");return}if($()){W(e===h.NONE,n,"unsupported-persistence-type");return}if(tt()){W(e===h.NONE||e===h.LOCAL&&B(),n,"unsupported-persistence-type");return}W(e===h.NONE||mt(),n,"unsupported-persistence-type")}function Ze(n){return a(this,null,function*(){yield n._initializationPromise;let e=yt(),t=k(Pt,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())})}function Qt(n,e){let t=yt();if(!t)return[];let i=k(Pt,n,e);switch(t.getItem(i)){case h.NONE:return[x];case h.LOCAL:return[A,f];case h.SESSION:return[f];default:return[]}}function yt(){var n;try{return((n=jt())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}var Xt=g,v=class{constructor(){this.browserResolver=y(ze),this.cordovaResolver=y(ht),this.underlyingResolver=null,this._redirectPersistence=f,this._completeRedirectFn=T,this._overrideRedirectResult=O}_initialize(e){return a(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)})}_openPopup(e,t,i,r){return a(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,r)})}_openRedirect(e,t,i,r){return a(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,r)})}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return It()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Xt(this.underlyingResolver,"internal-error"),this.underlyingResolver}selectUnderlyingResolver(){return a(this,null,function*(){if(this.underlyingResolver)return;let e=yield $t();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver})}};function At(n){return n.unwrap()}function en(n){return n.wrapped()}function tn(n){return Et(n)}function nn(n,e){var t;let i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e?.code==="auth/multi-factor-auth-required"){let r=e;r.resolver=new Xe(n,Ce(n,e))}else if(i){let r=Et(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function Et(n){let{_tokenResponse:e}=n instanceof w?n.customData:n;if(!e)return null;if(!(n instanceof w)&&"temporaryProof"in e&&"phoneNumber"in e)return E.credentialFromResult(n);let t=e.providerId;if(!t||t===I.PASSWORD)return null;let i;switch(t){case I.GOOGLE:i=K;break;case I.FACEBOOK:i=z;break;case I.GITHUB:i=Y;break;case I.TWITTER:i=J;break;default:let{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:d,nonce:u}=e;return!s&&!o&&!r&&!d?null:d?t.startsWith("saml.")?re._create(t,d):ne._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:r,accessToken:s}):new H(t).credential({idToken:r,accessToken:s,rawNonce:u})}return n instanceof w?i.credentialFromError(n):i.credentialFromResult(n)}function p(n,e){return e.catch(t=>{throw t instanceof w&&nn(n,t),t}).then(t=>{let i=t.operationType,r=t.user;return{operationType:i,credential:tn(t),additionalUserInfo:be(t),user:S.getOrCreate(r)}})}function Qe(n,e){return a(this,null,function*(){let t=yield e;return{verificationId:t.verificationId,confirm:i=>p(n,t.confirm(i))}})}var Xe=class{constructor(e,t){this.resolver=t,this.auth=en(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return p(At(this.auth),this.resolver.resolveSignIn(e))}};var S=class n{constructor(e){this._delegate=e,this.multiFactor=Se(e)}static getOrCreate(e){return n.USER_MAP.has(e)||n.USER_MAP.set(e,new n(e)),n.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}linkWithCredential(e){return a(this,null,function*(){return p(this.auth,le(this._delegate,e))})}linkWithPhoneNumber(e,t){return a(this,null,function*(){return Qe(this.auth,Te(this._delegate,e,t))})}linkWithPopup(e){return a(this,null,function*(){return p(this.auth,De(this._delegate,e,v))})}linkWithRedirect(e){return a(this,null,function*(){return yield Ze(b(this.auth)),Ge(this._delegate,e,v)})}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}reauthenticateWithCredential(e){return a(this,null,function*(){return p(this.auth,ue(this._delegate,e))})}reauthenticateWithPhoneNumber(e,t){return Qe(this.auth,We(this._delegate,e,t))}reauthenticateWithPopup(e){return p(this.auth,Fe(this._delegate,e,v))}reauthenticateWithRedirect(e){return a(this,null,function*(){return yield Ze(b(this.auth)),Ve(this._delegate,e,v)})}sendEmailVerification(e){return Ee(this._delegate,e)}unlink(e){return a(this,null,function*(){return yield oe(this._delegate,e),this})}updateEmail(e){return xe(this._delegate,e)}updatePassword(e){return ke(this._delegate,e)}updatePhoneNumber(e){return Me(this._delegate,e)}updateProfile(e){return we(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Re(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};S.USER_MAP=new WeakMap;var M=g,vt=(()=>{class n{constructor(t,i){if(this.app=t,i.isInitialized()){this._delegate=i.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:r}=t.options;M(r,"invalid-api-key",{appName:t.name}),M(r,"invalid-api-key",{appName:t.name});let s=typeof window<"u"?v:void 0;this._delegate=i.initialize({options:{persistence:rn(r,t.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(Z),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?S.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,i){ee(this._delegate,t,i)}applyActionCode(t){return ge(this._delegate,t)}checkActionCode(t){return ve(this._delegate,t)}confirmPasswordReset(t,i){return he(this._delegate,t,i)}createUserWithEmailAndPassword(t,i){return a(this,null,function*(){return p(this._delegate,fe(this._delegate,t,i))})}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return Ae(this._delegate,t)}isSignInWithEmailLink(t){return Pe(this._delegate,t)}getRedirectResult(){return a(this,null,function*(){M(je(),this._delegate,"operation-not-supported-in-this-environment");let t=yield He(this._delegate,v);return t?p(this._delegate,Promise.resolve(t)):{credential:null,user:null}})}addFrameworkForLogging(t){gt(this._delegate,t)}onAuthStateChanged(t,i,r){let{next:s,error:o,complete:d}=_t(t,i,r);return this._delegate.onAuthStateChanged(s,o,d)}onIdTokenChanged(t,i,r){let{next:s,error:o,complete:d}=_t(t,i,r);return this._delegate.onIdTokenChanged(s,o,d)}sendSignInLinkToEmail(t,i){return Ie(this._delegate,t,i)}sendPasswordResetEmail(t,i){return pe(this._delegate,t,i||void 0)}setPersistence(t){return a(this,null,function*(){Zt(this._delegate,t);let i;switch(t){case h.SESSION:i=f;break;case h.LOCAL:i=(yield y(A)._isAvailable())?A:C;break;case h.NONE:i=x;break;default:return P("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(i)})}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return p(this._delegate,ae(this._delegate))}signInWithCredential(t){return p(this._delegate,de(this._delegate,t))}signInWithCustomToken(t){return p(this._delegate,ce(this._delegate,t))}signInWithEmailAndPassword(t,i){return p(this._delegate,me(this._delegate,t,i))}signInWithEmailLink(t,i){return p(this._delegate,ye(this._delegate,t,i))}signInWithPhoneNumber(t,i){return Qe(this._delegate,Oe(this._delegate,t,i))}signInWithPopup(t){return a(this,null,function*(){return M(je(),this._delegate,"operation-not-supported-in-this-environment"),p(this._delegate,Ue(this._delegate,t,v))})}signInWithRedirect(t){return a(this,null,function*(){return M(je(),this._delegate,"operation-not-supported-in-this-environment"),yield Ze(this._delegate),Be(this._delegate,t,v)})}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return _e(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}return n.Persistence=h,n})();function _t(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);let r=i;return{next:o=>r(o&&S.getOrCreate(o)),error:e,complete:t}}function rn(n,e){let t=Qt(n,e);if(typeof self<"u"&&!t.includes(A)&&t.push(A),typeof window<"u")for(let i of[C,f])t.includes(i)||t.push(i);return t.includes(x)||t.push(x),t}var F=class{constructor(){this.providerId="phone",this._delegate=new E(At(V.auth()))}static credential(e,t){return E.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}};F.PHONE_SIGN_IN_METHOD=E.PHONE_SIGN_IN_METHOD;F.PROVIDER_ID=E.PROVIDER_ID;var sn=g,et=class{constructor(e,t,i=V.app()){var r;sn((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new Le(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}};var an="auth-compat";function on(n){n.INTERNAL.registerComponent(new st(an,e=>{let t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new vt(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:m.EMAIL_SIGNIN,PASSWORD_RESET:m.PASSWORD_RESET,RECOVER_EMAIL:m.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:m.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:m.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:m.VERIFY_EMAIL}},EmailAuthProvider:ie,FacebookAuthProvider:z,GithubAuthProvider:Y,GoogleAuthProvider:K,OAuthProvider:H,SAMLAuthProvider:se,PhoneAuthProvider:F,PhoneMultiFactorGenerator:Ke,RecaptchaVerifier:et,TwitterAuthProvider:J,Auth:vt,AuthCredential:te,Error:w}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(Vt,Gt)}on(V);
