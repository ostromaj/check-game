/* (c) Mr. O - free to play, not to copy. */
import{html as o,attr as f}from"../lib/html.js";import{money as m,parseMoney as i,words as w}from"../lib/money.js";import{findCheck as _}from"../data/checks.js";import{addTxn as x,acctEnding as E}from"../lib/store.js";import{Camera as C,fromFile as P,practicePhoto as A}from"../lib/camera.js";import{icons as r}from"../components/icons.js";import{screenHead as B,accountPicker as I,keypad as S,moneyDisplay as F,primary as $,note as d}from"../components/ui.js";const h=["acct","amount","front","back","number","review"],y={acct:"home",amount:"acct",front:"amount",back:"front",number:"back",review:"number"},k={acct:"p_depAcct",amount:"p_depAmount",front:"p_depFront",back:"p_depBack",number:"p_depNumber",review:"p_depReview"},u={front:"payee",back:"endorse"};function c(t,e,a=null){const n=t.state;if(n.step==="amount"&&(n.amount=t.keypad.value),n.step=e,n.problem=a,e==="amount"&&t.usePad("money",{value:n.amount}),t.render(),window.scrollTo(0,0),a)t.mascot.say(a,{mood:"oops"});else{const s=e==="front"&&t.store.data.practice;t.say(s?"p_depFrontPractice":k[e],{},{hop:!0})}}function R(t,e){const a=t.state[e],n=t.store.data.practice;return a?o`
      <div class="shot"><img src="${a.url}" alt=""></div>
      ${a.problem?d(t.t(a.problem),"warn"):d(t.t(n?"practiceShot":"photoGood"),"good")}
      <button class="btn alt wide" data-action="deposit:${n?"practice":"retake"}" data-arg="${e}">${r.camera}${t.t("retake")}</button>
      ${a.problem?o`<button class="link-btn wide" data-action="deposit:useAnyway" data-arg="${e}">${t.t("useAnyway")}</button>`:""}`:n?o`
      <div class="shot empty"><span>${r.camera}${t.t("takePhoto")}</span></div>
      <button class="btn wide" data-action="deposit:practice" data-arg="${e}">${r.camera}${t.t("takePhoto")}</button>`:C.supported&&!t.camera.error?o`
      <div class="cam">
        <video id="cam-video" playsinline muted autoplay></video>
        <div class="cam-frame"><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i></div>
        <div class="cam-label">${t.t(e==="front"?"cam_front":"cam_back")}</div>
        <div class="cam-status" id="cam-status">${t.t("cam_starting")}</div>
      </div>
      <div class="cam-controls">
        <span></span>
        <button class="shutter" id="cam-snap" data-action="deposit:snap" data-arg="${e}" aria-label="${t.text("cam_snap")}" disabled><span></span></button>
        <button class="link-btn" id="cam-switch" data-action="deposit:switchCam" hidden>${r.switchCam}${t.t("cam_switch")}</button>
      </div>
      <label class="link-btn wide file-btn">${t.t("cam_upload")}<input type="file" accept="image/*" data-change="deposit:upload" data-side="${e}"></label>`:o`
    <div class="shot empty"><span>${r.camera}${t.t("takePhoto")}</span></div>
    ${t.camera.error?d(t.t(t.camera.error),"warn"):""}
    <label class="btn wide file-btn">${r.camera}${t.t("takePhoto")}<input type="file" accept="image/*" capture="environment" data-change="deposit:upload" data-side="${e}"></label>
    ${d(t.t("noCamera"))}`}function v(t,e){const a=t.state[e];return!!(a&&!a.problem&&t.state[u[e]])}function l(t,e,a){t.state[e]=a,t.render(),a.problem?t.say(a.problem,{},{mood:"oops"}):t.say("p_photoGood",{},{mood:"happy"})}const g={acct:t=>o`
    <h2>${t.t("md_acct")}</h2>
    ${I(t,"deposit:acct",t.state.acct)}
    ${$(t.t("next"),"deposit:to",{arg:"amount"})}`,amount:t=>o`
    <h2>${t.t("md_amount")}</h2>
    ${F(t.keypad.value)}
    ${S("money")}
    ${$(t.t("next"),"deposit:amount",{id:"kp-next",disabled:i(t.keypad.value)===null||!t.keypad.value})}`,photo:(t,e)=>o`
    <h2>${t.t(e==="front"?"md_front":"md_back")}</h2>
    ${e==="back"?o`<p class="callout">${t.t("md_backWords")}</p>`:""}
    ${R(t,e)}
    <label class="agree"><input type="checkbox" data-change="deposit:agree" data-key="${u[e]}"${f("checked",t.state[u[e]])}><span>${t.t(e==="front"?"md_payee":"md_endorse")}</span></label>
    <button class="btn wide" id="photo-next" data-action="deposit:to" data-arg="${e==="front"?"back":"number"}"${f("disabled",!v(t,e))}>${t.t("next")}</button>`,number:t=>o`
    <h2>${t.t("md_number")}</h2>
    <form class="stack" data-form="deposit:number">
      <input class="field num big" name="number" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" value="${t.state.number}" placeholder="1001" required data-autofocus>
      <button class="btn wide" type="submit">${t.t("next")}</button>
    </form>`,review:t=>{const e=t.state,a=i(e.amount);return o`
      <h2>${t.t("md_review")}</h2>
      <dl class="kv">
        <dt>${t.t("md_to")}</dt><dd>${t.t(e.acct)} ${E(t.me,e.acct)}</dd>
        <dt>${t.t("md_amt")}</dt><dd class="num">${m(a)}</dd>
        <dt>${t.t("md_num")}</dt><dd class="num">${e.number}</dd>
      </dl>
      <div class="thumbs"><img src="${e.front.url}" alt=""><img src="${e.back.url}" alt=""></div>
      ${e.problem?o`<div class="btns two">
        <button class="btn alt" data-action="deposit:to" data-arg="amount">${t.t("fix_amount")}</button>
        <button class="btn alt" data-action="deposit:to" data-arg="number">${t.t("fix_number")}</button></div>`:""}
      <button class="btn coral wide" data-action="deposit:submit">${t.t("md_submit")} ${m(a)}</button>`}};export const deposit={needsAccount:!0,init:()=>({step:"acct",acct:"checking",amount:"",number:"",front:null,back:null,payee:!1,endorse:!1,misses:0,problem:null}),penny:()=>({key:k.acct}),view:t=>{const{step:e}=t.state,a=e==="front"||e==="back"?g.photo(t,e):g[e](t),n=y[e]==="home"?"app:home":"deposit:back";return o`
      ${B(t,{back:n,kicker:t.t("md_title"),step:h.indexOf(e)+1,steps:h.length})}
      <div class="card">${a}</div>`},mounted:t=>{const e=document.getElementById("cam-video");e&&t.camera.attach(e,{onReady:a=>{e.parentElement.querySelector(".cam-frame")?.classList.toggle("ready",a);const n=document.getElementById("cam-status");n&&(n.textContent=t.text(a?"cam_ready":"cam_looking"));const s=document.getElementById("cam-snap");s&&(s.disabled=!1),a&&t.mascot.react("happy",900)},onCameras:a=>{const n=document.getElementById("cam-switch");n&&(n.hidden=a<2)},onError:()=>t.render()})},actions:{back:t=>c(t,y[t.state.step]),to:(t,e)=>c(t,e),acct:(t,e)=>{t.state.acct=e,t.render()},amount:t=>{if(!t.padCents)return c(t,"amount",t.text("err_zero"));const a=t.state;return a.amount=t.keypad.value,c(t,a.front&&a.back&&a.number?"review":"front")},snap:(t,e)=>{const a=document.getElementById("cam-video");a?.videoWidth&&(t.sounds&&t.sound.shutter(),l(t,e,t.camera.snap(a,a.parentElement.querySelector(".cam-frame"))))},retake:(t,e)=>{t.state[e]=null,t.render()},switchCam:t=>{t.camera.switchFacing(),t.render()},practice:(t,e)=>l(t,e,A(e)),useAnyway:(t,e)=>{t.state[e].problem=null,t.render()},upload:async(t,e)=>{const a=e.files?.[0];a&&l(t,e.dataset.side,await P(a))},agree:(t,e)=>{t.state[e.dataset.key]=e.checked;const a=document.getElementById("photo-next");a&&(a.disabled=!v(t,t.state.step))},submit:async t=>{const e=t.state,a=i(e.amount),n=_(e.number);if(!n)return c(t,"number",t.text("err_noCheck",{n:e.number}));if(t.me.used[n.number])return c(t,"number",t.text("err_used",{n:n.number}));if(a!==n.cents){e.misses+=1;let b=t.text("err_amount",{n:n.number});return e.misses>=2&&(b+=` ${t.text("err_amountHint",{words:w(n.cents)})}`),c(t,"review",b)}t.me.used[n.number]=!0;const s=x(t.me,{type:"mobile",acct:e.acct,amount:a,check:{number:n.number,payer:n.payer.name,level:n.level},photos:{front:e.front.url,back:e.back.url}});return t.save(),await t.party(`+${m(a)}`),t.go("math",{tx:s,kind:"add"})}},forms:{number:(t,e)=>{t.state.number=e.number.value.replace(/\D/g,""),t.state.number&&c(t,"review")}}};