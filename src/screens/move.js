/* (c) Mr. O - free to play, not to copy. */
import{html as s}from"../lib/html.js";import{money as c}from"../lib/money.js";import{addTxn as v}from"../lib/store.js";import{screenHead as f,accountPicker as a,keypad as u,moneyDisplay as y,primary as i}from"../components/ui.js";const n=e=>e==="checking"?"savings":"checking";export const move={needsAccount:!0,init:()=>({step:"from",from:"checking"}),penny:()=>({key:"p_move"}),view:e=>{const{step:t,from:o}=e.state,m=f(e,{back:t==="from"?"app:home":"move:back",kicker:e.t("mv_title")});return t==="from"?s`${m}
        <div class="card">
          <h2>${e.t("mv_from")}</h2>
          ${a(e,"move:from",o)}
          <p class="muted">${e.t("mv_to")}: <b>${e.t(n(o))}</b></p>
          ${i(e.t("next"),"move:next")}
        </div>`:s`${m}
      <div class="card">
        <h2>${e.t("mv_amount")}</h2>
        <p class="muted">${e.t(o)}: <b class="num">${c(e.me[o])}</b> → ${e.t(n(o))}</p>
        ${y(e.keypad.value)}
        ${u("money")}
        ${i(e.t("mv_btn"),"move:go",{id:"kp-next",tone:"coral",disabled:!e.keypad.value})}
      </div>`},actions:{from:(e,t)=>{e.state.from=t,e.render()},next:e=>{e.state.step="amount",e.usePad("money"),e.render(),e.say("p_moveAmount")},back:e=>{e.state.step="from",e.render()},go:e=>{const{from:t}=e.state,o=n(t),m=e.padCents;if(!m)return e.say("err_zero",{},{mood:"oops"});if(m>e.me[t])return e.say("mv_more",{amt:c(e.me[t]),acct:e.acctName(t)},{mood:"oops"});const r=e.me[o];e.me[o]=r+m;const d=v(e.me,{type:"move",acct:t,to:o,sign:-1,amount:m,pair:{before:r,after:r+m}});return e.save(),e.mascot.react("happy"),e.go("math",{tx:d,kind:"sub"})}}};