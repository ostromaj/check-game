/* (c) Mr. O - free to play, not to copy. */
import{html as r}from"../lib/html.js";import{money as s}from"../lib/money.js";import{keypad as m,moneyDisplay as l,primary as d}from"../components/ui.js";function u(t,e,a){const n=[s(t.before),s(t.amount),a?s(t.after):"?"],c=Math.max(...n.map(i=>i.length),s(t.after).length),o=i=>i.padStart(c," ");return r`
    <div class="sum num" aria-hidden="true">
      <div><span class="op"> </span><span>${o(n[0])}</span></div>
      <div><span class="op">${e==="add"?"+":"−"}</span><span>${o(n[1])}</span></div>
      <div class="bar"><span class="op"> </span><span class="${a?"ans":""}">${o(n[2])}</span></div>
    </div>`}export const math={needsAccount:!0,init:(t,e)=>(t.usePad("money"),{tries:0,done:!1,result:null,...e}),penny:t=>{const{tx:e,kind:a}=t.state,n=t.text(a==="add"?"math_add":"math_sub",{acct:t.acctName(e.acct),a:s(e.before),b:s(e.amount)});return{text:`${t.text("p_math")} ${n}`}},view:t=>{const{tx:e,kind:a,done:n,result:c}=t.state,o={acct:t.acctName(e.acct),a:r`<b class="num">${s(e.before)}</b>`,b:r`<b class="num">${s(e.amount)}</b>`};return r`
      <div class="card">
        <span class="kicker">${t.t("math_title")}</span>
        <p class="question">${t.t(a==="add"?"math_add":"math_sub",o)}</p>
        ${u(e,a,n)}
        ${n?r`${c==="right"?r`<p class="note good">${t.t("math_right",{ans:s(e.after)})}</p>`:r`<p class="note warn">${t.t("math_show",{ans:s(e.after)})}</p>`}
            ${d(t.t("see_receipt"),"math:receipt")}`:r`${l(t.keypad.value)}${m("money")}${d(t.t("math_check"),"math:check",{id:"kp-next",disabled:!0})}`}
      </div>`},actions:{check:t=>{const e=t.state,a=t.padCents;a!==null&&(e.tries+=1,a===e.tx.after?(e.done=!0,e.result="right",e.tries===1&&(t.me.firstTry+=1),t.say("math_right",{ans:s(e.tx.after)},{mood:"happy"})):e.tries>=2?(e.done=!0,e.result="shown",t.say("math_show",{ans:s(e.tx.after)},{mood:"think"})):t.say("math_wrong",{},{mood:"oops"}),t.save(),t.usePad("money"),t.render())},receipt:t=>t.go("receipt",{txId:t.state.tx.id,teller:t.state.teller?"ask":null})}};