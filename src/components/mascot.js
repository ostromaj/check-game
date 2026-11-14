/* (c) Mr. O - free to play, not to copy. */
var m=e=>{throw TypeError(e)};var E=(e,s,t)=>s.has(e)||m("Cannot "+t);var v=(e,s,t)=>s.has(e)?m("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t);var n=(e,s,t)=>(E(e,s,"access private method"),t);var i,p,k;import{html as o,raw as b}from"../lib/html.js";const q=22,h=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;export const turtleSVG=()=>b(`
<svg class="turtle" viewBox="0 0 170 130" aria-hidden="true">
  <g class="t-body">
    <g class="t-part t-flip-bl"><ellipse class="t-skin" cx="42" cy="106" rx="16" ry="8.5"/></g>
    <g class="t-part t-flip-br"><ellipse class="t-skin" cx="100" cy="108" rx="16" ry="8.5"/></g>
    <path class="t-skin" d="M20 84 4 90l16 6z"/>
    <g class="t-part t-flip-fl"><ellipse class="t-skin" cx="34" cy="58" rx="18" ry="8" transform="rotate(-32 34 58)"/></g>
    <ellipse class="t-rim" cx="70" cy="82" rx="54" ry="35"/>
    <ellipse class="t-shell" cx="70" cy="78" rx="48" ry="30"/>
    <path class="t-plate" d="M70 58l13 7.5v15L70 88l-13-7.5v-15z"/>
    <path class="t-plate" d="M41 66l11 6v13l-11 6-10-6V72zM99 66l10 6v13l-10 6-11-6V72z"/>
    <path class="t-plate" d="M56 92l14 4 14-4 3 8c-5 3-11 4-17 4s-12-1-17-4z"/>
    <path class="t-skin" d="M106 76c8-4 16-8 22-14l8 16c-8 6-18 10-28 10z"/>
    <g class="t-part t-flip-fr"><ellipse class="t-skin" cx="116" cy="98" rx="19" ry="8" transform="rotate(28 116 98)"/></g>
    <g class="t-part t-tie"><path class="t-coral" d="M112 80l-9-6v14zM112 80l9-6v14z"/><circle class="t-coral-dark" cx="112" cy="80" r="3.4"/></g>
    <g class="t-part t-head">
      <circle class="t-skin" cx="138" cy="56" r="24"/>
      <circle class="t-cheek" cx="125" cy="66" r="4.5"/><circle class="t-cheek" cx="156" cy="64" r="3.8"/>
      <ellipse class="t-eye" cx="131" cy="50" rx="7" ry="8"/><ellipse class="t-eye" cx="148" cy="49" rx="6.3" ry="7.4"/>
      <g class="t-part t-pupils">
        <circle class="t-pupil" cx="132.5" cy="51" r="4.2"/><circle class="t-pupil" cx="149.4" cy="50" r="3.8"/>
        <circle class="t-eye" cx="134" cy="49" r="1.4"/><circle class="t-eye" cx="150.8" cy="48.2" r="1.2"/>
      </g>
      <g class="t-part t-lids"><rect class="t-skin" x="122" y="40" width="17" height="19" rx="7"/><rect class="t-skin" x="140.5" y="40" width="15.5" height="18" rx="7"/></g>
      <path class="t-line t-mouth-closed" d="M133 65q6 6 13 0"/>
      <g class="t-part t-mouth-open"><ellipse class="t-mouth" cx="139.5" cy="67" rx="5.5" ry="4.5"/><ellipse class="t-tongue" cx="139.5" cy="69.5" rx="3" ry="1.6"/></g>
      <g class="t-part t-shades"><path class="t-shades-arm" d="M123 47l-9-3"/><rect class="t-shades-lens" x="122" y="43.5" width="17.5" height="11.5" rx="5"/><rect class="t-shades-lens" x="141" y="43" width="15.5" height="11" rx="5"/><path class="t-shades-arm" d="M139.5 48h1.5"/><path class="t-shades-gleam" d="M126 46.5l4-1.5M144.5 46l3.5-1.3"/></g>
      <g class="t-part t-visor"><path class="t-visor-band" d="M116 44c6-14 34-18 45-4l-2 5c-11-10-33-8-40 3z"/><path class="t-visor-brim" d="M140 38c10-2 20 0 27 6l-5 3c-6-4-14-6-22-5z"/></g>
    </g>
  </g>
</svg>`),standingTurtleSVG=()=>b(`
<svg class="turtle standing" viewBox="0 0 160 212" aria-hidden="true">
  <g class="st st-leg-l"><path class="t-skin" d="M57 158c-5 14-5 26-3 36h15c2-12 1-24-1-36z"/><ellipse class="t-skin" cx="59" cy="197" rx="14" ry="7.5"/></g>
  <g class="st st-leg-r"><path class="t-skin" d="M103 158c5 14 5 26 3 36H91c-2-12-1-24 1-36z"/><ellipse class="t-skin" cx="101" cy="197" rx="14" ry="7.5"/></g>
  <g class="st st-body">
    <ellipse class="t-rim" cx="80" cy="118" rx="56" ry="62"/>
    <ellipse class="t-shell" cx="80" cy="114" rx="50" ry="56"/>
    <path class="t-plate" d="M36 100l8 4v12l-8 4-6-4v-12zM124 100l6 4v12l-6 4-8-4v-12z"/>
    <ellipse class="t-belly" cx="80" cy="122" rx="36" ry="48"/>
    <path class="t-belly-line" d="M80 76v94M49 104q31 8 62 0M46 128q34 8 68 0M53 152q27 7 54 0"/>
    <g class="st st-arm-l"><ellipse class="t-skin" cx="40" cy="113" rx="9.5" ry="25" transform="rotate(16 40 113)"/></g>
    <g class="st st-arm-r"><ellipse class="t-skin" cx="120" cy="113" rx="9.5" ry="25" transform="rotate(-16 120 113)"/></g>
    <g class="st st-head">
      <rect class="t-skin" x="67" y="70" width="26" height="20" rx="8"/>
      <circle class="t-skin" cx="80" cy="50" r="31"/>
      <circle class="t-cheek" cx="60" cy="62" r="5.5"/><circle class="t-cheek" cx="100" cy="62" r="5.5"/>
      <ellipse class="t-eye" cx="69" cy="45" rx="8" ry="9.5"/><ellipse class="t-eye" cx="91" cy="45" rx="8" ry="9.5"/>
      <g class="st st-pupils"><circle class="t-pupil" cx="70" cy="46" r="4.8"/><circle class="t-pupil" cx="92" cy="46" r="4.8"/><circle class="t-eye" cx="71.8" cy="44" r="1.6"/><circle class="t-eye" cx="93.8" cy="44" r="1.6"/></g>
      <path class="t-line t-mouth-closed" d="M71 64q9 8 18 0"/>
      <g class="t-mouth-open"><ellipse class="t-mouth" cx="80" cy="66" rx="7.5" ry="6.5"/><ellipse class="t-tongue" cx="80" cy="69.5" rx="4.2" ry="2.2"/></g>
      <g class="st t-shades"><path class="t-shades-arm" d="M58 44l-7-3M102 44l7-3"/><rect class="t-shades-lens" x="57.5" y="37.5" width="22" height="14.5" rx="6"/><rect class="t-shades-lens" x="80.5" y="37.5" width="22" height="14.5" rx="6"/><path class="t-shades-arm" d="M79 43.5h2"/><path class="t-shades-gleam" d="M62 41.5l5-2M85 41.5l5-2"/></g>
    </g>
    <g class="st st-tie"><path class="t-coral" d="M80 89l-12-7v14zM80 89l12-7v14z"/><circle class="t-coral-dark" cx="80" cy="89" r="4"/></g>
  </g>
</svg>`);export class Mascot{constructor(s,{onTap:t,onReplay:a,replayLabel:r="Say it again"}={}){v(this,i);this.root=s,this.onTap=t,this.speaking=!1,this.full="",this.typer=null,this.moodTimer=null,s.innerHTML=String(o`
      <div class="penny" id="penny">
        <button class="penny-btn" type="button" aria-label="Penny the turtle">${turtleSVG()}</button>
        <div class="bubble" role="status" aria-live="polite"><p class="bubble-text"></p>
          <button class="bubble-say" type="button" aria-label="${r}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg></button></div>
      </div>`),this.el=s.querySelector(".penny"),this.textEl=s.querySelector(".bubble-text"),s.querySelector(".penny-btn").addEventListener("click",()=>this.onTap?.()),s.querySelector(".bubble").addEventListener("click",y=>{if(y.target.closest(".bubble-say")){this.finishTyping(),a?.(this.full);return}this.finishTyping()}),n(this,i,k).call(this)}say(s,{mood:t="talk",hop:a=!1}={}){if(!s)return;if(n(this,i,p).call(this),this.el.classList.remove("oops","happy","think"),t!=="talk"&&this.react(t),a&&this.react("enter",450),t==="oops"&&this.root.scrollIntoView?.({block:"nearest",behavior:h()?"auto":"smooth"}),this.full=s,h()){this.textEl.textContent=s;return}let r=0;this.textEl.textContent="",this.el.classList.add("talking"),this.typer=setInterval(()=>{r+=1,this.textEl.textContent=s.slice(0,r),r>=s.length&&n(this,i,p).call(this)},q)}finishTyping(){this.typer&&(this.textEl.textContent=this.full,n(this,i,p).call(this))}voiceStart(){this.speaking=!0,this.el.classList.add("talking")}voiceEnd(){this.speaking=!1,this.typer||this.el.classList.remove("talking")}react(s,t=1400){this.el.classList.remove(s),this.el.offsetWidth,this.el.classList.add(s),clearTimeout(this.moodTimer),this.moodTimer=setTimeout(()=>this.el.classList.remove(s),t)}outfit(s){this.el.classList.toggle("teller",s==="teller")}celebrate({title:s,amount:t,line:a,next:r,onOpen:y,onClose:f}){return new Promise(M=>{const T=Array.from({length:14},(d,c)=>o`<span class="coin" style="--x:${(c*7.3+Math.random()*6).toFixed(1)}%;--d:${(Math.random()*1.8).toFixed(2)}s;--s:${(2.2+Math.random()*1.4).toFixed(2)}s">$</span>`),l=document.createElement("div");l.className="party",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-labelledby","party-title");const L=["#ff8fb8","#7fe3f0","#ffd66b","#b9a2ff"],w=Array.from({length:12},(d,c)=>o`<i style="--a:${c*30}deg;--r:${70+c%3*38}px;--c:${L[c%4]};--d:${(c*.17).toFixed(2)}s"></i>`),$=Array.from({length:8},(d,c)=>o`<i style="--d:${c%4*.5}s"></i>`);l.innerHTML=String(o`
        <div class="spots" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="coins" aria-hidden="true">${T}</div>
        <div class="party-card">
          <div class="disco" aria-hidden="true"><span class="disco-string"></span><span class="disco-ball"></span><span class="sparkles">${w}</span></div>
          <div class="party-stage stander">${standingTurtleSVG()}<span class="notes" aria-hidden="true"><i>♪</i><i>♫</i><i>♪</i></span></div>
          <div class="floor" aria-hidden="true">${$}</div>
          <h2 id="party-title">${s}</h2>
          <p class="party-amt num">${t}</p>
          <p class="party-line">${a}</p>
          <button class="btn coral wide" type="button" data-party-next>${r}</button>
        </div>`),document.body.appendChild(l);const g=l.querySelector("[data-party-next]"),z=l.querySelector(".party-stage"),S=setTimeout(()=>z.classList.add("grooving"),h()?0:950);y?.();const u=()=>{clearTimeout(S),f?.(),l.classList.add("leaving"),setTimeout(()=>l.remove(),h()?0:220),document.removeEventListener("keydown",x),M()},x=d=>{d.key==="Escape"&&u()};g.addEventListener("click",u),document.addEventListener("keydown",x),setTimeout(()=>g.focus({preventScroll:!0}),50)})}}i=new WeakSet,p=function(){clearInterval(this.typer),this.typer=null,this.speaking||this.el.classList.remove("talking")},k=function(){const s=()=>{this.el.classList.add("blink"),setTimeout(()=>this.el.classList.remove("blink"),150),setTimeout(s,2200+Math.random()*3200)},t=()=>{const a=["look-l","look-r","look-up"][Math.floor(Math.random()*3)];this.el.classList.add(a),setTimeout(()=>this.el.classList.remove(a),900),setTimeout(t,5e3+Math.random()*6e3)};setTimeout(s,1500),setTimeout(t,4e3)};