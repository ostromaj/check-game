/* (c) Mr. O - free to play, not to copy. */
import{html as i}from"../lib/html.js";import{money as s}from"../lib/money.js";import{acctEnding as c}from"../lib/store.js";import{MISSIONS as l,starCount as m}from"../lib/missions.js";import{icons as e,star as b}from"../components/icons.js";const r=[{action:"home:deposit",icon:e.camera,title:"actDeposit",sub:"actDepositSub",hot:!0},{action:"home:teller",icon:e.teller,title:"actTeller",sub:"actTellerSub"},{action:"home:move",icon:e.move,title:"actMove",sub:"actMoveSub"},{action:"home:activity",icon:e.receipt,title:"actActivity",sub:"actActivitySub"}],n=(t,o,a)=>i`
  <div class="acct ${a?"main":""}">
    <div><b>${t.t(o)} ${c(t.me,o)}</b><small>${t.t(`${o}Desc`)}</small></div>
    <span class="bal num">${s(t.me[o])}</span>
  </div>`;export const home={needsAccount:!0,penny:t=>({key:"p_home",vars:{name:t.me.name,amt:s(t.me.checking)}}),view:t=>i`
    <h1 class="title">${t.t("hi",{name:t.me.name})}</h1>
    <div class="stack">${n(t,"checking",!0)}${n(t,"savings",!1)}</div>
    <div class="tiles">${r.map(o=>i`
      <button class="tile ${o.hot?"hot":""}" data-action="${o.action}">
        ${o.icon}<b>${t.t(o.title)}</b><small>${t.t(o.sub)}</small>
      </button>`)}</div>
    <button class="row-btn" data-action="app:missions">
      ${b(!0)}<span><b>${t.t("missions")}</b><small>${t.t("missionsSub",{n:m(t.me),total:l.length})}</small></span>
    </button>
    <div class="row between">
      <button class="link-btn" data-action="app:help">${e.help}${t.t("help")}</button>
      <button class="link-btn" data-action="app:signOut">${t.t("signOut")}</button>
    </div>`,actions:{deposit:t=>t.go("deposit"),teller:t=>t.go("teller"),move:t=>t.go("move"),activity:t=>t.go("activity")}};