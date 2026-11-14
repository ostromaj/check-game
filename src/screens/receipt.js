/* (c) Mr. O - free to play, not to copy. */
import{html as c}from"../lib/html.js";import{money as i}from"../lib/money.js";import{acctEnding as l}from"../lib/store.js";import{screenHead as a,primary as m}from"../components/ui.js";const d={open:"ty_open",mobile:"ty_mobile",teller:"ty_teller",move:"ty_move"},r=(t,e,o=!1)=>c`<div class="r-row ${o?"r-big":""}"><span>${t}</span><span>${e}</span></div>`,$=(t,e,o,n,s)=>c`
  <hr>
  ${r(t.t("r_acct"),`${t.text(e)} ${l(t.me,e)}`)}
  ${r(t.t("r_before"),i(o))}
  ${r(t.t("r_amount"),n)}
  ${r(t.t("r_after"),i(s),!0)}`;export const receipt={needsAccount:!0,init:(t,e)=>{const o=t.me.txns.find(n=>n.id===e.txId);return e.fromActivity&&!t.me.flags.receipt&&(t.me.flags.receipt=!0,t.save()),{...e,tx:o}},penny:t=>{const{tx:e,teller:o}=t.state;return o?{key:"tl_receipt"}:{key:e?.type==="mobile"?"mobileKeep":"p_receipt"}},view:t=>{const{tx:e,teller:o,fromActivity:n}=t.state;if(!e)return c`${m(t.t("done"),"app:home")}`;const s=e.sign===-1?"−":"+";return c`
      ${n?a(t,{back:"receipt:activity"}):""}
      <div class="receipt">
        <div class="r-head"><b>BEACHVIEW BANK</b><span>${t.t("receipt")}</span><span>Long Beach, CA</span></div>
        ${r(t.t("r_date"),t.i18n.dateTime(e.date))}
        ${r(t.t("r_conf"),e.conf)}
        ${r(t.t("r_type"),t.t(d[e.type]))}
        ${e.type==="mobile"?c`${r(t.t("r_check"),e.check.number)}${r(t.t("r_from"),e.check.payer)}`:""}
        ${e.type==="teller"?c`${r(t.t("r_cash"),i(e.cash))}${r(t.t("r_checks"),i(e.checkAmt))}`:""}
        ${e.type==="move"?c`${r(t.t("r_from"),t.t(e.acct))}${r(t.t("r_to"),t.t(e.to))}`:""}
        ${$(t,e.acct,e.before,`${s}${i(e.amount)}`,e.after)}
        ${e.type==="move"?$(t,e.to,e.pair.before,`+${i(e.amount)}`,e.pair.after):""}
        ${e.photos?c`<div class="r-photos"><img src="${e.photos.front}" alt=""><img src="${e.photos.back}" alt=""></div>`:""}
        <hr>
        <div class="r-foot">${t.t("keepReceipt")}</div>
      </div>
      ${o==="ask"?c`<button class="btn alt wide" data-action="receipt:thanks">"${t.t("tl_thanks")}"</button>`:""}
      ${m(t.t("done"),"app:home")}`},actions:{activity:t=>t.go("activity"),thanks:t=>{t.state.teller="done",t.render(),t.say("tl_bye",{},{mood:"happy"})}}};