/* (c) Mr. O - free to play, not to copy. */
import{html as n,attr as f}from"../lib/html.js";import{money as u,parseMoney as v}from"../lib/money.js";import{PAYERS as g,makeCheck as y}from"../data/checks.js";import{addTxn as x,rand as o,pick as m}from"../lib/store.js";import{checkFront as w}from"../components/check.js";import{screenHead as S,note as $}from"../components/ui.js";const C=[1,5,10,20];function N(t){const e=Math.random()<.75?"checking":"savings";let c=!0,s=!0;t===1&&(Math.random()<.5?s=!1:c=!1);let a=null;if(c){const[l,i]={1:()=>[o(2,10),m([1500,1600,1700])],2:()=>[o(1,7)*2+1,m([1550,1625,1650,1725,1775])],3:()=>{const b=o(1500,1899);return[o(3,25),b%25?b:b+3]}}[t](),d=new Date;d.setDate(d.getDate()-o(0,4));const h=`${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}/${d.getFullYear()}`;a=y(o(5001,5999),t,m(g),l,i,h)}const r=s?Array.from({length:t===1?o(2,5):t===2?o(3,5):o(4,7)},()=>m(C)).sort((l,i)=>i-l):[];return{acct:e,check:a,bills:r,cash:r.reduce((l,i)=>l+i*100,0)}}function A(t){const e=String(t).trim().match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2}|\d{4})$/);if(!e)return!1;const c=new Date,s=Number(e[3])<100?2e3+Number(e[3]):Number(e[3]);return Number(e[1])===c.getMonth()+1&&Number(e[2])===c.getDate()&&s===c.getFullYear()}const D=(t,e)=>t.trim().toLowerCase().replace(/\s+/g," ")===e.trim().toLowerCase().replace(/\s+/g," ");function k(t){return t.sc.bills.reduce((e,c,s)=>e+(t.counted[s]?c*100:0),0)}const L=t=>n`
  <div class="card">
    <h2>${t.t("tl_pick")}</h2>
    <div class="stack">${[1,2,3].map(e=>n`
      <button class="choice" data-action="teller:level" data-arg="${e}" aria-pressed="${String(t.me.level===e)}">
        <span class="dot"></span><span class="grow"><b>${t.t(`lv${e}`)}</b><small>${t.t(`lv${e}s`)}</small></span>
      </button>`)}</div>
  </div>`,E=t=>n`
  <div class="card">
    <div class="btns">
      <button class="btn wide" data-action="teller:say" data-arg="polite">"${t.t("tl_polite")}"</button>
      <button class="btn alt wide" data-action="teller:say" data-arg="rude">"${t.t("tl_rude")}"</button>
    </div>
  </div>`;function M(t){const e=t.state,{sc:c}=e;return n`
    <div class="card">
      <h3>${t.t("tl_brought")}</h3>
      ${$(t.t("tl_job",{acct:n`<b>${t.acctName(c.acct)}</b>`}))}
      <span class="kicker">${t.t("tl_check")}</span>
      ${c.check?w(c.check,{payee:t.me.name}):$(t.t("tl_noCheck"))}
      <span class="kicker">${t.t("tl_cash")}</span>
      ${c.bills.length?n`
        <div class="bills">${c.bills.map((s,a)=>n`
          <button class="bill ${e.counted[a]?"counted":""}" data-action="teller:count" data-arg="${a}" aria-label="$${s} bill"><span>$${s}</span><span>${s}</span></button>`)}
        </div>
        <p class="note">${t.t("tl_tap")} ${e.level===1?n`<b class="count-total num">${t.t("tl_counted",{amt:u(k(e))})}</b>`:""}</p>`:$(t.t("tl_noCash"))}
    </div>`}function P(t){const{f:e,bad:c}=t.state,s=(a,r,l,{money:i=!1,inputmode:d="text",placeholder:h=""}={})=>n`
    <label>${r}<input type="text" name="${a}" class="${i?"money":""} ${c===a?"bad":""}" inputmode="${d}" autocomplete="off" placeholder="${h}" value="${l}"></label>`;return n`
    <form class="slip" data-form="teller:slip" novalidate>
      <div class="slip-head"><b>${t.text("slip").toUpperCase()}</b><span>BEACHVIEW BANK</span></div>
      <div class="slip-grid">
        ${s("name",t.t("slip_name"),e.name)}
        ${s("date",t.t("slip_date"),e.date,{inputmode:"numeric",placeholder:"__/__/____"})}
      </div>
      <p class="slip-note">${t.t("slip_today",{date:n`<b>${t.i18n.longDate()}</b>`})}</p>
      <div class="slip-acct ${c==="acct"?"bad":""}">${["checking","savings"].map(a=>n`
        <label><input type="radio" name="acct" value="${a}"${f("checked",e.acct===a)}>${t.t(a)}</label>`)}
      </div>
      <div class="slip-money">
        ${s("cash",t.t("slip_cash"),e.cash,{money:!0,inputmode:"decimal"})}
        ${s("checks",t.t("slip_checks"),e.checks,{money:!0,inputmode:"decimal"})}
        <div class="total">${s("total",t.t("slip_total"),e.total,{money:!0,inputmode:"decimal"})}</div>
      </div>
      <p class="slip-note">${t.t("slip_zero")}</p>
      <button class="btn coral wide" type="submit">${t.t("slip_give")}</button>
    </form>`}const T={level:L,greet:E,slip:t=>n`${M(t)}${P(t)}`,confirm:t=>n`<div class="card"><button class="btn wide" data-action="teller:yes">"${t.t("tl_yes")}"</button></div>`};function B(t){const e=c=>t.elements[c]?.value??"";return{name:e("name"),date:e("date"),acct:t.elements.acct?.value??"",cash:e("cash"),checks:e("checks"),total:e("total")}}function F(t,e,c){const s=c.check?c.check.cents:0,[a,r,l]=[e.cash,e.checks,e.total].map(v);return D(e.name,t.me.name)?A(e.date)?e.acct!==c.acct?["acct",t.text("e_acct",{acct:t.acctName(c.acct)})]:a===null?["cash",t.text("e_blank")]:r===null?["checks",t.text("e_blank")]:l===null?["total",t.text("e_blank")]:a!==c.cash?["cash",t.text("e_cash")]:r!==s?["checks",t.text("e_checks")]:l!==c.cash+s?["total",t.text("e_total")]:null:["date",t.text("e_date")]:["name",t.text("e_name",{name:t.me.name})]}const _=t=>t.cash+(t.check?t.check.cents:0);export const teller={needsAccount:!0,outfit:"teller",init:()=>({step:"level"}),penny:()=>({key:"p_tellerLevel"}),view:t=>n`
    ${S(t,{back:"app:home",kicker:t.t("tl_title")})}
    ${T[t.state.step](t)}`,actions:{level:(t,e)=>{const c=Number(e);t.me.level=c,t.save(),Object.assign(t.state,{step:"greet",level:c,sc:N(c),counted:{},bad:null,f:{name:"",date:"",acct:"",cash:"",checks:"",total:""}}),t.render(),t.say("tl_hello",{},{hop:!0})},say:(t,e)=>e==="rude"?t.say("tl_rudeReply",{},{mood:"oops"}):(t.state.step="slip",t.render(),t.say("tl_slip")),count:(t,e)=>{const c=t.state;c.counted[e]=!c.counted[e],document.querySelectorAll(".bill")[e]?.classList.toggle("counted",c.counted[e]);const s=document.querySelector(".count-total");s&&(s.textContent=t.text("tl_counted",{amt:u(k(c))}))},yes:async t=>{const{sc:e,level:c}=t.state,s=x(t.me,{type:"teller",acct:e.acct,amount:_(e),cash:e.cash,checkAmt:e.check?e.check.cents:0,level:c});t.save(),await t.party(`+${u(s.amount)}`),t.go("math",{tx:s,kind:"add",teller:!0})}},forms:{slip:(t,e)=>{const c=t.state;c.f=B(e);const s=F(t,c.f,c.sc);if(s){[c.bad]=s,t.render(),t.mascot.say(s[1],{mood:"oops"});return}c.bad=null,c.step="confirm",t.render(),window.scrollTo(0,0),t.say("tl_confirm",{amt:u(_(c.sc)),acct:t.acctName(c.sc.acct)})}}};