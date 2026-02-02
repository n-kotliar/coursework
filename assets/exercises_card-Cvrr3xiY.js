import{n as v}from"./vendor-Bv82aGDC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const u="favourites_exercises",Y=e=>{localStorage.setItem(u,JSON.stringify(e))},E=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},F=e=>{const t=E(u).filter(r=>r._id!==e);localStorage.removeItem(u),localStorage.setItem(u,JSON.stringify(t))},q="todays_uote",_="quote_time",G=24*60*60*1e3;let l=null;async function K(){if(l)return l;const e=localStorage.getItem(q),t=localStorage.getItem(_);if(e&&t&&Date.now()-Number(t)<G)return l=JSON.parse(e),l;try{const n=await(await fetch("https://your-energy.b.goit.study/api/quote")).json();return localStorage.setItem(q,JSON.stringify(n)),localStorage.setItem(_,Date.now().toString()),l=n,n}catch(r){return console.error("Error fetching quote:",r),e?(l=JSON.parse(e),l):{quote:"No quote available",author:""}}}const z=async e=>{const{quote:t,author:r}=await K();e.innerHTML=renderQuoteHTML(t,r)},V=document.querySelector(".header-nav-link-favorites"),X=document.querySelector(".header-nav-link-main"),I=window.PAGE;I==="favorites"&&V.classList.add("active");I==="main"&&X.classList.add("active");const Z=document.querySelector(".open-mobile-menu-btn"),ee=document.querySelector(".close-mobile-menu-btn"),k=document.querySelector(".mobile-menu-wrapper"),te=document.querySelector(".mobile-menu");Z.addEventListener("click",()=>{k.classList.add("is-open"),document.body.classList.add("not-scrollable")});ee.addEventListener("click",()=>{N()});k.addEventListener("click",()=>{N()});te.addEventListener("click",e=>{e.stopPropagation()});function N(){k.classList.remove("is-open"),document.body.classList.remove("not-scrollable")}const i={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper"),quoteContainer:document.querySelector(".quote"),noCardsContainer:document.querySelector(".no_cards_wrapper-container"),paginationCards:document.querySelector(".pagination-cards")};let f=1;const x=8,re=(e,t)=>{const r=(t-1)*x,n=r+x;return e.slice(r,n)},se=(e=[])=>{const t=new Set;return e.filter(r=>!(r!=null&&r._id)||t.has(r._id)?!1:(t.add(r._id),!0))},C=e=>{const t=e.map(({name:r,_id:n,burnedCalories:s,bodyPart:o,target:a,time:U=3})=>{let j=`${s} / ${U} min`;return`
        <li class="exercise-information" data-id-card="${n}" data-component="fav_card">
          <div class="top-nav">
            <div>
              <p class="tag">Workout</p>
              <button
                name="trash"
                data-id-del-btn="${n}"
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
                data-id-start-btn="${n}"
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
            <h2 class="exercise-name">${r}</h2>
          </div>

          <ul class="exercise-details">
            <li><span>Burned calories:</span> ${j}</li>
            <li><span>Body part:</span> ${o}</li>
            <li><span>Target:</span> ${a}</li>
          </ul>
        </li>
      `}).join("");i.cardSet.innerHTML=t},ne=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),r=e.target.closest('[data-action="delete_fav_card"]');if(!(!t&&!r)){if(r){F(r.dataset.idDelBtn),p();return}if(t){const s=(E(u)||[]).find(o=>o._id===t.dataset.idStartBtn);s&&D(s,!0,!0)}}};i.cardSet&&i.cardSet.addEventListener("click",ne);function oe(e){if(i.paginationCards){if(e<=1){i.paginationCards.innerHTML="";return}i.paginationCards.innerHTML=Array.from({length:e},(t,r)=>`
      <li>
        <button
          name="pagination"
          class="pagination-btn ${f===r+1?"active":""}"
          data-page="${r+1}">
          ${r+1}
        </button>
      </li>
    `).join("")}}i.paginationCards&&i.paginationCards.addEventListener("click",e=>{const t=e.target.closest(".pagination-btn");t&&(f=Number(t.dataset.page),p())});const p=()=>{if(!document.querySelector(".favourite_exercises"))return;const e=E(u)||[],t=se(e);if(!t.length){i.noCards.classList.remove("visually-hidden"),i.noCardsContainer.classList.remove("visually-hidden"),i.cardSet.classList.add("visually-hidden"),i.paginationCards.innerHTML="";return}if(i.noCards.classList.add("visually-hidden"),i.noCardsContainer.classList.add("visually-hidden"),i.cardSet.classList.remove("visually-hidden"),window.innerWidth<1440){const r=Math.ceil(t.length/x);f>r&&(f=r),C(re(t,f)),oe(r)}else C(t),i.paginationCards.innerHTML=""};window.addEventListener("resize",()=>{f=1,p()});p();z(i.quoteContainer);let b=1,ie=window.innerWidth<768?9:12,ae=window.innerWidth<768?8:10,T="Muscles",$="Muscles",ce="",P="",A="",le=[];function ye(e){T=e}function be(e){b=e}function we(e){P=e}function Se(e){A=e}async function xe(e=!0){e&&(b=1);let t=`https://your-energy.b.goit.study/api/filters?filter=${T}&page=${b}&limit=${ie}`;$.trim()&&(t+=`&name=${$}`);const r=await fetch(t);if(!r.ok)throw new Error("Failed to fetch filters");return await r.json()}async function Le(e=!0){e&&(le.length=0);let t=P.toLowerCase();t==="body parts"&&(t="bodypart");const r=`
    https://your-energy.b.goit.study/api/exercises?
    ${t}=${A}
    &keyword=${ce}
    &page=${b}
    &limit=${ae}
  `.replace(/\s+/g,""),n=await fetch(r);if(!n.ok)throw new Error("Failed to fetch exercises");return await n.json()}async function Ee(e){const t=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.status===409)throw new Error("EMAIL_EXISTS");if(!t.ok)throw new Error("REQUEST_FAILED");return await t.json()}async function de(e,{email:t,rate:r,comment:n}){r=Number(r);const s=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,o=await fetch(s,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rate:r,review:n})});if(!o.ok){const a=await o.json();throw new Error(a.message||"Rating failed")}return o.json()}const ue=document.getElementById("form-close-btn"),w=document.querySelector(".backdrop"),O=document.querySelector("#user-email"),B=document.getElementById("user-comment");document.querySelector(".form-send-btn");const fe=document.querySelector(".rating-wrapper"),H=document.querySelector(".rating-star-value"),ge=document.querySelector(".backdrop-form");let R=null,L=null;const c={rate:0,email:"",comment:""};function me(){O.value="",B.value="",c.rate=0,c.comment="",c.email="",H.textContent="0.0",document.querySelectorAll(".rating-star-icons").forEach(t=>{t.style.fill="var(--white-20)"})}function J(e){e.key==="Escape"&&S(!0)}function S(e=!1){w.classList.remove("is-open"),document.removeEventListener("keydown",J),e&&L&&D(L)}ue.addEventListener("click",()=>S(!0));w.addEventListener("click",e=>{e.target===w&&S(!0)});fe.addEventListener("click",e=>{if(!e.target.dataset.id)return;c.rate=Number(e.target.dataset.id),H.textContent=`${c.rate}.0`;const t=document.querySelectorAll(".rating-star-icons");for(let r=0;r<5;r++)t[r].style.fill=r<c.rate?"var(--orange-color)":"var(--white-20)"});function pe(e,t=null){R=e,L=t,w.classList.add("is-open"),document.addEventListener("keydown",J)}ge.addEventListener("submit",async e=>{if(e.preventDefault(),c.email=O.value.trim(),c.comment=B.value.trim()||void 0,!c.rate){v.Notify.failure("Please select a rating");return}if(!c.email){v.Notify.failure("Please enter your email");return}try{await de(R,c),v.Notify.success("Your rating has been saved!"),me(),S()}catch(t){v.Notify.failure(t.message||"Something went wrong")}});const m=document.querySelector(".exr-card-backdrop");let d=!1,g=[],M=JSON.parse(localStorage.getItem("favourite"));M&&M.forEach(e=>{g[0]||(g[0]=e),g.push(e)});let Q=null;function h(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function D(e,t=!1,r=!1){Q=e,d=t,d||g.forEach(n=>{n._id===e._id&&(d=!0)}),ve(e),m.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),document.addEventListener("keydown",W),d===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`)}function ve(e,t){let r=e.rating;r%1===0&&(r+=".0"),r=parseFloat(r).toFixed(1);const n=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon"">
        <use href="/coursework/symbol-defs.svg#icon-x"></use>
      </svg>
      </button>
      <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
      <div>
      <h3 class="exercise-name">${h(e.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${r}</p>
          </li>
          <li>
            <svg class="star-rating-icon" width="14px" height="14px">
              <use href="/coursework/symbol-defs.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon" width="14px" height="14px">
              <use href="/coursework/symbol-defs.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon" width="14px" height="14px">
              <use href="/coursework/symbol-defs.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon" width="14px" height="14px">
              <use href="/coursework/symbol-defs.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon" width="14px" height="14px">
              <use href="/coursework/symbol-defs.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${h(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${h(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${h(e.equipment)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Popular</p>
          <p class="exr-info" id="exr-popularity">${e.popularity}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Burned Calories</p>
          <p class="exr-info" id="burned-cal">${e.burnedCalories}/${e.time} min</p>
        </div>
      </div>
      <p class="exr-description">${e.description}</p>
      <div class="buttons-cont">
        <button name="add-favorurite" class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon" width="20px" height="20px">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>
        </button>
        <button name="rating" class="give-rating-btn">Give a rating</button>
      </div>
    </div>`;m.innerHTML=n;const s=document.querySelectorAll(".star-rating-icon");for(let a=0;a<Math.round(e.rating);++a)s[a].style.fill="#eea10c";const o=document.querySelector(".add-favourite-btn");o.addEventListener("click",function(){d?(F(e._id),o.innerHTML=`Add to favourite
          <svg class="heart-icon" width="20px" height="20px">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`,d=!1):(g.push(e),Y(g),o.innerHTML=`Remove
          <svg class="heart-icon" width="20px" height="20px">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`,d=!0),p()}),document.getElementById("close-card").addEventListener("click",y),m.addEventListener("click",a=>{a.target===m&&y()}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{y(),pe(e._id,Q)})}function W(e){e.key==="Escape"&&y()}function y(){m.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),document.removeEventListener("keydown",W)}export{Se as a,Le as b,be as c,z as d,ye as e,xe as f,Ee as g,D as h,le as l,b as p,we as s};
//# sourceMappingURL=exercises_card-Cvrr3xiY.js.map
