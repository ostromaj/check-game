/* (c) Mr. O - free to play, not to copy. */
import{html as a,attr as l}from"../lib/html.js";import{money as $}from"../lib/money.js";import{acctEnding as d}from"../lib/store.js";import{icons as r}from"./icons.js";export const ACCOUNTS=["checking","savings"],screenHead=(s,{back:n,kicker:o,step:t,steps:e})=>a`
  <div class="screen-head">
    ${n?a`<button class="link-btn" data-action="${n}">${r.back}${s.t("back")}</button>`:""}
    ${o?a`<span class="kicker">${o}</span>`:""}
    ${e?a`<div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${e}" aria-valuenow="${t}">
      ${Array.from({length:e},(i,c)=>a`<i class="${c<t?"on":""}"></i>`)}</div>`:""}
  </div>`,accountPicker=(s,n,o)=>a`
  <div class="stack">${ACCOUNTS.map(t=>a`
    <button class="choice" data-action="${n}" data-arg="${t}" aria-pressed="${String(o===t)}">
      <span class="dot"></span>
      <span class="grow"><b>${s.t(t)} ${d(s.me,t)}</b><small>${s.t(`${t}Desc`)}</small></span>
      <span class="num">${$(s.me[t])}</span>
    </button>`)}</div>`;export function keypad(s){return a`<div class="keypad">${["1","2","3","4","5","6","7","8","9",s==="pin"?"":".","0","del"].map(o=>o?o==="del"?a`<button class="key" data-action="app:key" data-arg="del" aria-label="Delete">${r.erase}</button>`:a`<button class="key" data-action="app:key" data-arg="${o}">${o}</button>`:a`<span></span>`)}</div>`}export const moneyDisplay=s=>a`<div class="display num" id="kp-display">${s?`$${s}`:a`<span class="ph">$0.00</span>`}</div>`,pinDots=s=>a`<div class="pin-dots">${[0,1,2,3].map(n=>a`<i class="${n<s?"on":""}"></i>`)}</div>`,primary=(s,n,{disabled:o=!1,id:t="",tone:e="",arg:i=""}={})=>a`<button class="btn ${e} wide"${t?a` id="${t}"`:""} data-action="${n}"${i?a` data-arg="${i}"`:""}${l("disabled",o)}>${s}</button>`,note=(s,n="")=>a`<p class="note ${n}">${s}</p>`;