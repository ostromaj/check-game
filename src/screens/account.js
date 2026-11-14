/* (c) Mr. O - free to play, not to copy. */
import{html as n}from"../lib/html.js";import{money as a}from"../lib/money.js";import{newProfile as m,addTxn as l}from"../lib/store.js";import{icons as f}from"../components/icons.js";import{screenHead as s,keypad as u,pinDots as g,primary as d}from"../components/ui.js";const r=2500;export const TEACHER_CODE="turtle",profiles={penny:e=>({key:e.store.profiles.length?"p_profiles":"p_profilesEmpty"}),view:e=>{const o=e.store.profiles;return n`
      <h1 class="title">${e.t("who")}</h1>
      ${o.length?n`<div class="stack">${o.map(t=>n`
        <button class="profile" data-action="profiles:pick" data-arg="${t.id}">
          <span class="avatar">${t.name.charAt(0).toUpperCase()}</span><b>${t.name}</b>
        </button>`)}</div>`:""}
      <button class="btn ${o.length?"alt":""} wide" data-action="profiles:create">${e.t("newAcct")}</button>
      ${e.store.ok?"":n`<p class="note">${e.t("storageOff")}</p>`}
      <button class="link-btn" data-action="app:help">${f.help}${e.t("help")}</button>`},actions:{create:e=>e.go("signup"),pick:(e,o)=>{const t=e.store.profile(o);t&&e.go("pin",{profile:t,stage:t.pin?"enter":"make"})}}},signup={penny:()=>({key:"p_signup"}),view:e=>n`
    ${s(e,{back:"app:profiles"})}
    <form class="card" data-form="signup:submit">
      <h2>${e.t("yourName")}</h2>
      <input class="field" id="new-name" name="name" type="text" maxlength="20" autocomplete="off" placeholder="${e.text("namePh")}" required data-autofocus>
      <button class="btn wide" type="submit">${e.t("next")}</button>
    </form>`,forms:{submit:(e,o)=>{const t=o.name.value.trim().replace(/\s+/g," ").slice(0,20);t&&e.go("pin",{profile:m(t),stage:"make"})}}};const h={make:"makePin",confirm:"confirmPin",enter:"enterPin"},p={make:"p_pinMake",confirm:"p_pinConfirm",enter:"p_pinEnter"};export const pin={init:(e,o)=>(e.usePad("pin",{onDone:t=>$(e,t)}),o),penny:e=>e.state.message?{key:e.state.message,mood:e.state.message==="pinReset"?"talk":"oops"}:{key:p[e.state.stage],vars:{name:e.state.profile.name}},view:e=>n`
    ${s(e,{back:"app:profiles"})}
    <div class="card center">
      <h2>${e.t(h[e.state.stage])}</h2>
      ${g(0)}
      ${u("pin")}
      ${e.state.stage==="enter"?n`<button class="link-btn" data-action="pin:forgot">${e.t("forgotPin")}</button>`:""}
    </div>`,actions:{forgot:e=>e.go("teacher",{profile:e.state.profile})}};function $(e,o){const{profile:t,stage:i,first:c}=e.state;return i==="make"?e.go("pin",{profile:t,stage:"confirm",first:o}):i==="confirm"?o!==c?e.go("pin",{profile:t,stage:"make",message:"pinNoMatch"}):(t.pin=o,e.me=t,t.created?(e.save(),e.go("home")):(t.created=new Date().toISOString(),e.store.addProfile(t),l(t,{type:"open",acct:"checking",amount:r}),e.save(),e.go("welcome"))):o===t.pin?(e.me=t,e.go("home")):e.go("pin",{profile:t,stage:"enter",message:"wrongPin"})}export const teacher={penny:e=>({key:e.state.wrong?"teacherCodeWrong":"p_teacher",mood:e.state.wrong?"oops":"talk"}),view:e=>n`
    ${s(e,{back:"app:profiles"})}
    <form class="card" data-form="teacher:submit">
      <h2>${e.t("teacherTitle")}</h2>
      <input class="field" name="code" type="password" autocomplete="off" placeholder="${e.text("codePh")}" required data-autofocus>
      <button class="btn wide" type="submit">${e.t("unlock")}</button>
    </form>`,forms:{submit:(e,o)=>{const{profile:t}=e.state;return o.code.value.trim().toLowerCase()!==TEACHER_CODE?e.go("teacher",{profile:t,wrong:!0}):(t.pin="",e.save(),e.go("pin",{profile:t,stage:"make",message:"pinReset"}))}}},welcome={needsAccount:!0,penny:()=>({key:"p_welcome",vars:{amt:a(r)},mood:"happy"}),view:e=>n`
    <div class="card center welcome">
      <span class="big-amt num">+${a(r)}</span>
      <h1 class="title">${e.t("welcomeTitle")}</h1>
      <p class="muted">${e.t("welcomeTip")}</p>
      ${d(e.t("next"),"app:home")}
    </div>`};