/* (c) Mr. O - free to play, not to copy. */
import{html as e}from"../lib/html.js";import{money as n,plain as l,words as i}from"../lib/money.js";import{BANK as c}from"../data/checks.js";const p=s=>[1,2,3].map(a=>e`<i class="${a<=s?"on":""}"></i>`);export const checkFront=(s,{payee:a=""}={})=>e`
  <div class="ck-wrap"><div class="ck ck-front" data-level="${s.level}">
    <div class="ck-water" aria-hidden="true">PRACTICE</div>
    <div class="ck-top">
      <div class="ck-payer"><b>${s.payer.name}</b><span>${s.payer.street}</span><span>${s.payer.city}</span></div>
      <div class="ck-num">
        <span class="ck-label">Check #</span><b>${s.number}</b>
        <span class="ck-date"><span class="ck-label">Date</span> <span class="ck-line ck-date-val">${s.date}</span></span>
      </div>
    </div>
    <div class="ck-pay">
      <span class="ck-label ck-small">Pay to the<br>order of</span>
      <span class="ck-line ck-payee">${a?e`<span class="ck-hand">${a}</span>`:""}</span>
      <span class="ck-box">$ ${l(s.cents)}</span>
    </div>
    <div class="ck-words"><span class="ck-line">${i(s.cents)}</span><span class="ck-label">Dollars</span></div>
    <div class="ck-bank"><b>${c.name}</b> · ${c.city}</div>
    <div class="ck-bottom">
      <div class="ck-memo"><span class="ck-label">Memo</span> <span class="ck-line">Pay: ${s.hours} hrs × ${n(s.rate)}/hr</span></div>
      <div class="ck-sign"><span class="ck-line ck-sig">${s.payer.signer}</span><span class="ck-label ck-small">Authorized signature</span></div>
    </div>
    <div class="ck-micr">PRACTICE ONLY · NOT REAL MONEY · ${s.number}</div>
    <div class="ck-level" title="Level ${s.level}">${p(s.level)}</div>
  </div></div>`,checkBack=s=>e`
  <div class="ck-wrap"><div class="ck ck-back">
    <div class="ck-back-info">
      <b>Check #${s.number}</b>
      <span>Practice check for Check Game. Not real money.</span>
      <span>Depositing with the app? Sign, then write:<br><i>For Mobile Deposit Only at Beachview Bank</i></span>
    </div>
    <div class="ck-endorse">
      <span class="ck-label">Endorse here</span>
      <span class="ck-eline">X</span><span class="ck-eline"></span><span class="ck-eline"></span>
      <span class="ck-reserved">Do not write, stamp or sign below this line<br>Reserved for bank use</span>
    </div>
  </div></div>`;