/* (c) Mr. O - free to play, not to copy. */
import{html as s}from"../lib/html.js";import{money as a}from"../lib/money.js";import{MISSIONS as m,starCount as d}from"../lib/missions.js";import{icons as n,star as u}from"../components/icons.js";import{screenHead as r}from"../components/ui.js";import{TEACHER_CODE as h}from"./account.js";function $(t,e){switch(e.type){case"open":return{title:t.t("tx_open"),icon:n.gift,plus:!0};case"mobile":return{title:t.t("tx_mobile",{n:e.check.number,payer:e.check.payer}),icon:n.camera,plus:!0};case"teller":return{title:t.t("tx_teller"),icon:n.teller,plus:!0};default:return{title:t.t(e.to==="savings"?"tx_toSavings":"tx_toChecking"),icon:n.move,plus:!1}}}export const activity={needsAccount:!0,penny:()=>({key:"p_activity"}),view:t=>{const e=[...t.me.txns].reverse().map(o=>{const{title:i,icon:l,plus:c}=$(t,o);return s`
        <button class="tx" data-action="activity:open" data-arg="${o.id}">
          <span class="tx-icon">${l}</span>
          <span class="grow"><b>${i}</b><small>${t.i18n.dateTime(o.date)} · ${t.t(o.acct)}</small></span>
          <span class="tx-amt num ${c?"plus":"minus"}">${c?"+":"−"}${a(o.amount)}</span>
        </button>`});return s`
      ${r(t,{back:"app:home"})}
      <h1 class="title">${t.t("act_title")}</h1>
      <div class="card list">${e.length?e:s`<p class="muted">${t.t("act_empty")}</p>`}</div>`},actions:{open:(t,e)=>t.go("receipt",{txId:e,fromActivity:!0})}},missions={needsAccount:!0,penny:t=>({key:"p_missions",vars:{n:d(t.me)}}),view:t=>s`
    ${r(t,{back:"app:home"})}
    <h1 class="title">${t.t("ms_title")}</h1>
    <div class="card list">${m.map(e=>s`
      <div class="mission ${t.me.missions[e.id]?"done":""}">${u(!!t.me.missions[e.id])}<b>${t.t(e.id)}</b></div>`)}
    </div>`},help={init:()=>({unlocked:!1,wrong:!1,sure:!1}),penny:()=>({key:"p_help"}),view:t=>{const e=t.state,o=t.store.data.practice,i=e.unlocked?s`
        <h3>${t.t("hp_practice")}</h3>
        <p class="muted">${t.t(o?"hp_practiceOn":"hp_practiceOff")}</p>
        <button class="btn alt wide" data-action="help:practice">${t.t(o?"hp_turnOff":"hp_turnOn")}</button>
        ${t.me?s`
          <button class="btn alt wide" data-action="help:resetPin">${t.t("hp_reset")}</button>
          <button class="btn alt wide" data-action="help:delete">${e.sure?t.t("hp_deleteSure",{name:t.me.name}):t.t("hp_delete")}</button>`:""}`:s`
        <p class="muted">${t.t("hp_needCode")}</p>
        <form class="inline-form" data-form="help:code">
          <input class="field" name="code" type="password" autocomplete="off" placeholder="${t.text("codePh")}">
          <button class="btn" type="submit">${t.t("unlock")}</button>
        </form>`;return s`
      ${r(t,{back:"app:home"})}
      <h1 class="title">${t.t("hp_title")}</h1>
      <div class="card">
        <h2>${t.t("hp_how")}</h2>
        <ol class="steps-list"><li>${t.t("hp_1")}</li><li>${t.t("hp_2")}</li><li>${t.t("hp_3")}</li><li>${t.t("hp_4")}</li></ol>
      </div>
      <div class="card">
        <h2>${t.t("hp_teacher")}</h2>
        <a class="btn alt wide" href="checks.html" target="_blank" rel="noopener">${n.print}${t.t("hp_print")}</a>
        <p class="muted">${t.t("hp_saved")}</p>
        ${i}
      </div>`},actions:{practice:t=>{t.store.data.practice=!t.store.data.practice,t.save(),t.render()},resetPin:t=>{const e=t.me;e.pin="",t.save(),t.me=null,t.go("pin",{profile:e,stage:"make",message:"pinReset"})},delete:t=>{if(!t.state.sure){t.state.sure=!0,t.render();return}t.store.removeProfile(t.me),t.me=null,t.go("profiles"),t.toast(t.text("deleted"))}},forms:{code:(t,e)=>{e.code.value.trim().toLowerCase()===h?(t.state.unlocked=!0,t.render()):t.say("teacherCodeWrong",{},{mood:"oops"})}}};