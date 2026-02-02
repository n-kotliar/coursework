import{n as v}from"./vendor-Bv82aGDC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const u="favourites_exercises",Y=e=>{localStorage.setItem(u,JSON.stringify(e))},E=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},F=e=>{const t=E(u).filter(s=>s._id!==e);localStorage.removeItem(u),localStorage.setItem(u,JSON.stringify(t))},q="todays_uote",_="quote_time",G=24*60*60*1e3;let l=null;async function K(){if(l)return l;const e=localStorage.getItem(q),t=localStorage.getItem(_);if(e&&t&&Date.now()-Number(t)<G)return l=JSON.parse(e),l;try{const n=await(await fetch("https://your-energy.b.goit.study/api/quote")).json();return localStorage.setItem(q,JSON.stringify(n)),localStorage.setItem(_,Date.now().toString()),l=n,n}catch(s){return console.error("Error fetching quote:",s),e?(l=JSON.parse(e),l):{quote:"No quote available",author:""}}}const z=(e,t)=>`
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
`,V=async e=>{const{quote:t,author:s}=await K();e.innerHTML=z(t,s)},X=document.querySelector(".header-nav-link-favorites"),Z=document.querySelector(".header-nav-link-main"),I=window.PAGE;I==="favorites"&&X.classList.add("active");I==="main"&&Z.classList.add("active");const ee=document.querySelector(".open-mobile-menu-btn"),te=document.querySelector(".close-mobile-menu-btn"),k=document.querySelector(".mobile-menu-wrapper"),se=document.querySelector(".mobile-menu");ee.addEventListener("click",()=>{k.classList.add("is-open"),document.body.classList.add("not-scrollable")});te.addEventListener("click",()=>{N()});k.addEventListener("click",()=>{N()});se.addEventListener("click",e=>{e.stopPropagation()});function N(){k.classList.remove("is-open"),document.body.classList.remove("not-scrollable")}const i={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper"),quoteContainer:document.querySelector(".quote"),noCardsContainer:document.querySelector(".no_cards_wrapper-container"),paginationCards:document.querySelector(".pagination-cards")};let f=1;const x=8,re=(e,t)=>{const s=(t-1)*x,n=s+x;return e.slice(s,n)},ne=(e=[])=>{const t=new Set;return e.filter(s=>!(s!=null&&s._id)||t.has(s._id)?!1:(t.add(s._id),!0))},$=e=>{const t=e.map(({name:s,_id:n,burnedCalories:r,bodyPart:o,target:a,time:U=3})=>{let j=`${r} / ${U} min`;return`
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
            <h2 class="exercise-name">${s}</h2>
          </div>

          <ul class="exercise-details">
            <li><span>Burned calories:</span> ${j}</li>
            <li><span>Body part:</span> ${o}</li>
            <li><span>Target:</span> ${a}</li>
          </ul>
        </li>
      `}).join("");i.cardSet.innerHTML=t},oe=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),s=e.target.closest('[data-action="delete_fav_card"]');if(!(!t&&!s)){if(s){F(s.dataset.idDelBtn),p();return}if(t){const r=(E(u)||[]).find(o=>o._id===t.dataset.idStartBtn);r&&D(r,!0,!0)}}};i.cardSet&&i.cardSet.addEventListener("click",oe);function ie(e){if(i.paginationCards){if(e<=1){i.paginationCards.innerHTML="";return}i.paginationCards.innerHTML=Array.from({length:e},(t,s)=>`
      <li>
        <button
          name="pagination"
          class="pagination-btn ${f===s+1?"active":""}"
          data-page="${s+1}">
          ${s+1}
        </button>
      </li>
    `).join("")}}i.paginationCards&&i.paginationCards.addEventListener("click",e=>{const t=e.target.closest(".pagination-btn");t&&(f=Number(t.dataset.page),p())});const p=()=>{if(!document.querySelector(".favourite_exercises"))return;const e=E(u)||[],t=ne(e);if(!t.length){i.noCards.classList.remove("visually-hidden"),i.noCardsContainer.classList.remove("visually-hidden"),i.cardSet.classList.add("visually-hidden"),i.paginationCards.innerHTML="";return}if(i.noCards.classList.add("visually-hidden"),i.noCardsContainer.classList.add("visually-hidden"),i.cardSet.classList.remove("visually-hidden"),window.innerWidth<1440){const s=Math.ceil(t.length/x);f>s&&(f=s),$(re(t,f)),ie(s)}else $(t),i.paginationCards.innerHTML=""};window.addEventListener("resize",()=>{f=1,p()});p();V(i.quoteContainer);let b=1,ae=window.innerWidth<768?9:12,ce=window.innerWidth<768?8:10,T="Muscles",C="Muscles",le="",P="",A="",de=[];function be(e){T=e}function we(e){b=e}function Se(e){P=e}function xe(e){A=e}async function Le(e=!0){e&&(b=1);let t=`https://your-energy.b.goit.study/api/filters?filter=${T}&page=${b}&limit=${ae}`;C.trim()&&(t+=`&name=${C}`);const s=await fetch(t);if(!s.ok)throw new Error("Failed to fetch filters");return await s.json()}async function Ee(e=!0){e&&(de.length=0);let t=P.toLowerCase();t==="body parts"&&(t="bodypart");const s=`
    https://your-energy.b.goit.study/api/exercises?
    ${t}=${A}
    &keyword=${le}
    &page=${b}
    &limit=${ce}
  `.replace(/\s+/g,""),n=await fetch(s);if(!n.ok)throw new Error("Failed to fetch exercises");return await n.json()}async function ke(e){const t=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.status===409)throw new Error("EMAIL_EXISTS");if(!t.ok)throw new Error("REQUEST_FAILED");return await t.json()}async function ue(e,{email:t,rate:s,comment:n}){s=Number(s);const r=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,o=await fetch(r,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rate:s,review:n})});if(!o.ok){const a=await o.json();throw new Error(a.message||"Rating failed")}return o.json()}const fe=document.getElementById("form-close-btn"),w=document.querySelector(".backdrop"),O=document.querySelector("#user-email"),B=document.getElementById("user-comment");document.querySelector(".form-send-btn");const ge=document.querySelector(".rating-wrapper"),H=document.querySelector(".rating-star-value"),me=document.querySelector(".backdrop-form");let R=null,L=null;const c={rate:0,email:"",comment:""};function pe(){O.value="",B.value="",c.rate=0,c.comment="",c.email="",H.textContent="0.0",document.querySelectorAll(".rating-star-icons").forEach(t=>{t.style.fill="var(--white-20)"})}function Q(e){e.key==="Escape"&&S(!0)}function S(e=!1){w.classList.remove("is-open"),document.removeEventListener("keydown",Q),e&&L&&D(L)}fe.addEventListener("click",()=>S(!0));w.addEventListener("click",e=>{e.target===w&&S(!0)});ge.addEventListener("click",e=>{if(!e.target.dataset.id)return;c.rate=Number(e.target.dataset.id),H.textContent=`${c.rate}.0`;const t=document.querySelectorAll(".rating-star-icons");for(let s=0;s<5;s++)t[s].style.fill=s<c.rate?"var(--orange-color)":"var(--white-20)"});function ve(e,t=null){R=e,L=t,w.classList.add("is-open"),document.addEventListener("keydown",Q)}me.addEventListener("submit",async e=>{if(e.preventDefault(),c.email=O.value.trim(),c.comment=B.value.trim()||void 0,!c.rate){v.Notify.failure("Please select a rating");return}if(!c.email){v.Notify.failure("Please enter your email");return}try{await ue(R,c),v.Notify.success("Your rating has been saved!"),pe(),S()}catch(t){v.Notify.failure(t.message||"Something went wrong")}});const m=document.querySelector(".exr-card-backdrop");let d=!1,g=[],M=JSON.parse(localStorage.getItem("favourite"));M&&M.forEach(e=>{g[0]||(g[0]=e),g.push(e)});let J=null;function h(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function D(e,t=!1,s=!1){J=e,d=t,d||g.forEach(n=>{n._id===e._id&&(d=!0)}),he(e),m.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),document.addEventListener("keydown",W),d===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`)}function he(e,t){let s=e.rating;s%1===0&&(s+=".0"),s=parseFloat(s).toFixed(1);const n=`
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
            <p class="rating-score">${s}</p>
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
    </div>`;m.innerHTML=n;const r=document.querySelectorAll(".star-rating-icon");for(let a=0;a<Math.round(e.rating);++a)r[a].style.fill="#eea10c";const o=document.querySelector(".add-favourite-btn");o.addEventListener("click",function(){d?(F(e._id),o.innerHTML=`Add to favourite
          <svg class="heart-icon" width="20px" height="20px">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`,d=!1):(g.push(e),Y(g),o.innerHTML=`Remove
          <svg class="heart-icon" width="20px" height="20px">
            <use href="/coursework/symbol-defs.svg#icon-heart"></use>
          </svg>`,d=!0),p()}),document.getElementById("close-card").addEventListener("click",y),m.addEventListener("click",a=>{a.target===m&&y()}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{y(),ve(e._id,J)})}function W(e){e.key==="Escape"&&y()}function y(){m.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),document.removeEventListener("keydown",W)}export{xe as a,Ee as b,we as c,V as d,be as e,Le as f,ke as g,D as h,de as l,b as p,Se as s};
//# sourceMappingURL=exercises_card-CMNglRSv.js.map
