import{n as p}from"./vendor-Bv82aGDC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const _="favourites_exercises",f=()=>{try{return JSON.parse(localStorage.getItem(_))||[]}catch(e){return console.error(e),[]}},q=e=>{localStorage.setItem(_,JSON.stringify(e))},U=e=>{const t=f();t.some(s=>s._id===e._id)||(t.push(e),q(t))},x=e=>{const t=f().filter(s=>s._id!==e);q(t)};async function W(){if(cachedQuote)return cachedQuote;const e=localStorage.getItem(QUOTE_KEY),t=localStorage.getItem(QUOTE_TIME_KEY);if(e&&t&&Date.now()-Number(t)<ONE_DAY_MS)return cachedQuote=JSON.parse(e),cachedQuote;try{const o=await(await fetch("https://your-energy.b.goit.study/api/quote")).json();return localStorage.setItem(QUOTE_KEY,JSON.stringify(o)),localStorage.setItem(QUOTE_TIME_KEY,Date.now().toString()),cachedQuote=o,o}catch(s){return console.error("Error fetching quote:",s),e?(cachedQuote=JSON.parse(e),cachedQuote):{quote:"No quote available",author:""}}}const j=(e,t)=>`
  <svg width="32" height="32" class="quote-text-icon">
    <use href="/home-task/icons.svg#icon-run"></use>
  </svg>
  <div>
    <h3 class="main-quote-title">Quote of the day</h3>
    <p class="main-quote-text">${e}</p>
    <p class="main-quote-author">${t}</p>
    <svg width="24" height="24" class="quote-text-icon-commas">
      <use href="/home-task/icons.svg#icon-commas"></use>
    </svg>
  </div>
`,K=async e=>{const{quote:t,author:s}=await W();e.innerHTML=j(t,s)},Y=document.querySelector(".header-nav-link-favorites"),G=document.querySelector(".header-nav-link-main"),$=window.PAGE;$==="favorites"&&Y.classList.add("active");$==="main"&&G.classList.add("active");const z=document.querySelector(".open-mobile-menu-btn"),V=document.querySelector(".close-mobile-menu-btn"),E=document.querySelector(".mobile-menu-wrapper"),X=document.querySelector(".mobile-menu");z.addEventListener("click",()=>{E.classList.add("is-open"),document.body.classList.add("not-scrollable")});V.addEventListener("click",()=>{C()});E.addEventListener("click",()=>{C()});X.addEventListener("click",e=>{e.stopPropagation()});function C(){E.classList.remove("is-open"),document.body.classList.remove("not-scrollable")}const a={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper"),quoteContainer:document.querySelector(".quote"),noCardsContainer:document.querySelector(".no_cards_wrapper-container"),paginationCards:document.querySelector(".pagination-cards")};let c=1;const w=8,Z=(e,t)=>{const s=(t-1)*w,o=s+w;return e.slice(s,o)},ee=(e=[])=>{const t=new Set;return e.filter(s=>!(s!=null&&s._id)||t.has(s._id)?!1:(t.add(s._id),!0))},L=e=>{const t=e.map(({name:s,_id:o,burnedCalories:r,bodyPart:n,target:l,time:D=3})=>{let J=`${r} / ${D} min`;return`
        <li class="exercise-information" data-id-card="${o}" data-component="fav_card">
          <div class="top-nav">
            <div>
              <p class="tag">Workout</p>
              <button
                name="trash"
                data-id-del-btn="${o}"
                data-action="delete_fav_card"
                class="trash-btn">
                <svg class="trash-icon" width="16" height="16">
                  <use href="/coursework/symbol-defs.svg#icon-trash"></use>
                </svg>
              </button>
            </div>

            <div class="actions">
              <button
                name="start"
                data-id-start-btn="${o}"
                data-action="start_exercise_btn"
                class="details-link">
                Start
                <svg class="arrow-icon" width="16" height="16">
                  <use href="/coursework/symbol-defs.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="exercise-header">
            <svg class="icon-man" width="24" height="24">
              <use href="/coursework/symbol-defs.svg#icon-run"></use>
            </svg>
            <h2 class="exercise-name">${s}</h2>
          </div>

          <ul class="exercise-details">
            <li><span>Burned calories:</span> ${J}</li>
            <li><span>Body part:</span> ${n}</li>
            <li><span>Target:</span> ${l}</li>
          </ul>
        </li>
      `}).join("");a.cardSet.innerHTML=t},te=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),s=e.target.closest('[data-action="delete_fav_card"]');if(!(!t&&!s)){if(s){x(s.dataset.idDelBtn),m();return}if(t){const r=(f()||[]).find(n=>n._id===t.dataset.idStartBtn);r&&H(r,!0,!0)}}};a.cardSet&&a.cardSet.addEventListener("click",te);function se(e){if(a.paginationCards){if(e<=1){a.paginationCards.innerHTML="";return}a.paginationCards.innerHTML=Array.from({length:e},(t,s)=>`
      <li>
        <button
          name="pagination"
          class="pagination-btn ${c===s+1?"active":""}"
          data-page="${s+1}">
          ${s+1}
        </button>
      </li>
    `).join("")}}a.paginationCards&&a.paginationCards.addEventListener("click",e=>{const t=e.target.closest(".pagination-btn");t&&(c=Number(t.dataset.page),m())});const m=()=>{if(!document.querySelector(".favourite_exercises"))return;const e=f()||[],t=ee(e);if(!t.length){a.noCards.classList.remove("visually-hidden"),a.noCardsContainer.classList.remove("visually-hidden"),a.cardSet.classList.add("visually-hidden"),a.paginationCards.innerHTML="";return}if(a.noCards.classList.add("visually-hidden"),a.noCardsContainer.classList.add("visually-hidden"),a.cardSet.classList.remove("visually-hidden"),window.innerWidth<1440){const s=Math.ceil(t.length/w);c>s&&(c=s),L(Z(t,c)),se(s)}else L(t),a.paginationCards.innerHTML=""};window.addEventListener("resize",()=>{c=1,m()});m();K(a.quoteContainer);let h=1,re=window.innerWidth<768?9:12,ne=window.innerWidth<768?8:10,F="Muscles",k="",M="",T="",I="",oe=[];function pe(e){F=e}function ge(e){h=e}function ve(e){T=e}function he(e){I=e}function ye(e){M=e}async function be(e=!0){e&&(h=1);let t=`https://your-energy.b.goit.study/api/filters?filter=${F}&page=${h}&limit=${re}`;k.trim()&&(t+=`&name=${k}`);const s=await fetch(t);if(!s.ok)throw new Error("Failed to fetch filters");return await s.json()}async function we(e=!0){e&&(oe.length=0);let t=T.toLowerCase();t==="body parts"&&(t="bodypart");const s=`
    https://your-energy.b.goit.study/api/exercises?
    ${t}=${I}
    &keyword=${M}
    &page=${h}
    &limit=${ne}
  `.replace(/\s+/g,""),o=await fetch(s);if(!o.ok)throw new Error("Failed to fetch exercises");return await o.json()}async function Se(e){const t=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.status===409)throw new Error("EMAIL_EXISTS");if(!t.ok)throw new Error("REQUEST_FAILED");return await t.json()}async function ae(e,{email:t,rate:s,comment:o}){s=Number(s);const r=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rate:s,review:o})});if(!r.ok){const n=await r.json();throw new Error(n.message||"Rating failed")}return r.json()}const ie=document.getElementById("form-close-btn"),y=document.querySelector(".backdrop"),N=document.querySelector("#user-email"),O=document.getElementById("user-comment");document.querySelector(".form-send-btn");const ce=document.querySelector(".rating-wrapper"),P=document.querySelector(".rating-star-value"),le=document.querySelector(".backdrop-form");let A=null,S=null;const i={rate:0,email:"",comment:""};function de(){N.value="",O.value="",i.rate=0,i.comment="",i.email="",P.textContent="0.0",document.querySelectorAll(".rating-star-icons").forEach(t=>{t.style.fill="var(--white-20)"})}function B(e){e.key==="Escape"&&b(!0)}function b(e=!1){y.classList.remove("is-open"),document.removeEventListener("keydown",B),e&&S&&H(S)}ie.addEventListener("click",()=>b(!0));y.addEventListener("click",e=>{e.target===y&&b(!0)});ce.addEventListener("click",e=>{if(!e.target.dataset.id)return;i.rate=Number(e.target.dataset.id),P.textContent=`${i.rate}.0`;const t=document.querySelectorAll(".rating-star-icons");for(let s=0;s<5;s++)t[s].style.fill=s<i.rate?"var(--orange-color)":"var(--white-20)"});function ue(e,t=null){A=e,S=t,y.classList.add("is-open"),document.addEventListener("keydown",B)}le.addEventListener("submit",async e=>{if(e.preventDefault(),i.email=N.value.trim(),i.comment=O.value.trim()||void 0,!i.rate){p.Notify.failure("Please select a rating");return}if(!i.email){p.Notify.failure("Please enter your email");return}try{await ae(A,i),p.Notify.success("Your rating has been saved!"),de(),b()}catch(t){p.Notify.failure(t.message||"Something went wrong")}});const u=document.querySelector(".exr-card-backdrop");let Q=null,d=!1;function g(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function H(e,t=!1,s=!1){Q=e,d=f().some(r=>r._id===e._id),fe(e),u.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),document.addEventListener("keydown",R)}function fe(e){let t=e.rating;t%1===0&&(t+=".0"),t=parseFloat(t).toFixed(1);const s=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
        <svg class="close-card-icon">
          <use href="/coursework/symbol-defs.svg#icon-x"></use>
        </svg>
      </button>

      <img src="${e.gifUrl}" alt="exercise" class="exr-image" />

      <div>
        <h3 class="exercise-name">${g(e.name)}</h3>

        <div class="rating-container">
          <ul class="star-rating-list">
            <li><p class="rating-score">${t}</p></li>
            ${Array(5).fill("").map(()=>`
              <li>
                <svg class="star-rating-icon" width="14" height="14">
                  <use href="/coursework/symbol-defs.svg#icon-star"></use>
                </svg>
              </li>`).join("")}
          </ul>
        </div>

        <div class="exr-information-container">
          <div class="exr-info-block">
            <p class="info-label">Target</p>
            <p class="exr-info">${g(e.target)}</p>
          </div>
          <div class="exr-info-block">
            <p class="info-label">Body Part</p>
            <p class="exr-info">${g(e.bodyPart)}</p>
          </div>
          <div class="exr-info-block">
            <p class="info-label">Equipment</p>
            <p class="exr-info">${g(e.equipment)}</p>
          </div>
          <div class="exr-info-block">
            <p class="info-label">Popular</p>
            <p class="exr-info">${e.popularity}</p>
          </div>
          <div class="exr-info-block">
            <p class="info-label">Burned Calories</p>
            <p class="exr-info">${e.burnedCalories}/${e.time} min</p>
          </div>
        </div>

        <p class="exr-description">${e.description}</p>

        <div class="buttons-cont">
          <button class="add-favourite-btn">
            ${d?"Remove from favourites":"Add to favourites"}
            <svg class="heart-icon" width="20" height="20">
              <use href="/coursework/symbol-defs.svg#icon-heart"></use>
            </svg>
          </button>
          <button class="give-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  `;u.innerHTML=s;const o=document.querySelectorAll(".star-rating-icon");for(let n=0;n<Math.round(e.rating);n++)o[n].style.fill="#eea10c";const r=document.querySelector(".add-favourite-btn");r.addEventListener("click",()=>{d?(x(e._id),d=!1,r.innerHTML=`Add to favourites
        <svg class="heart-icon" width="20" height="20">
          <use href="/coursework/symbol-defs.svg#icon-heart"></use>
        </svg>`):(U(e),d=!0,r.innerHTML=`Remove from favourites
        <svg class="heart-icon" width="20" height="20">
          <use href="/coursework/symbol-defs.svg#icon-heart"></use>
        </svg>`),m()}),document.getElementById("close-card").addEventListener("click",v),u.addEventListener("click",n=>{n.target===u&&v()}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{v(),ue(e._id,Q)})}function R(e){e.key==="Escape"&&v()}function v(){u.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),document.removeEventListener("keydown",R)}export{he as a,we as b,ge as c,K as d,T as e,be as f,pe as g,H as h,ye as i,Se as j,oe as l,h as p,ve as s};
//# sourceMappingURL=exercises_card-Caw7cl2J.js.map
