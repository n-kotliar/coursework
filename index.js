import{d as T,f as q,s as k,a as $,b as B,l,p as o,c as p,h as C,e as F,g,i as H}from"./assets/exercises_card-DBCfiKiO.js";import{i as d}from"./assets/vendor-Bv82aGDC.js";const s={filters:document.querySelector(".filters"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form"),loadMoreBtn:document.querySelector(".load-more-btn"),quoteContainer:document.querySelector(".quote"),pagination:document.querySelector(".pagination"),exercises:document.querySelector(".exercises")};T(s.quoteContainer);h();s.musclesBtn.classList.add("active-btn");s.filters.addEventListener("click",A);s.exercises.addEventListener("click",I);s.searchForm.addEventListener("input",j);var y;(y=s.loadMoreBtn)==null||y.addEventListener("click",loadMore);async function h(e=!0){e&&(s.exercises.innerHTML="");const t=await q(e);if(!t.results.length)return L();N(t.results),S(t.totalPages)}function N(e){const t=e.map(({name:a,filter:i,imgURL:c})=>`
      <li class="exercise">
        <img src="${c}" alt="${a}" loading="lazy" class="exercise-image" />
        <div class="exercise-info">
          <h2 class="exercise-subtitle">${u(a)}</h2>
          <p class="exercise-filter">${i}</p>
        </div>
      </li>
    `).join("");s.exercises.insertAdjacentHTML("beforeend",t)}function A(e){var t;e.target.tagName==="BUTTON"&&((t=document.querySelector(".active-btn"))==null||t.classList.remove("active-btn"),e.target.classList.add("active-btn"),e.target.classList.contains("muscles-btn")?g("Muscles"):e.target.classList.contains("bodyparts-btn")?g("Body parts"):e.target.classList.contains("equipment-btn")&&g("Equipment"),s.exercisesTitle.textContent="Exercises",s.searchForm.style.display="none",h(!0))}async function I(e){const t=e.target.closest(".exercise");if(!t)return;const a=t.querySelector(".exercise-filter"),i=t.querySelector(".exercise-subtitle");!a||!i||(k(a.textContent),$(i.textContent.toLowerCase()),s.exercisesTitle.innerHTML=`Exercises / <span>${u(i.textContent)}</span>`,s.searchForm.style.display="block",p(1),s.exercises.innerHTML="",await v())}async function v(e=!0){e&&(l.length=0);const t=await B(e);if(!t.results.length)return L();l.length=0,l.push(...t.results),R(t.results),S(t.totalPages)}function R(e){s.exercises.innerHTML="",l.length=0,l.push(...e);const t=`
    <ul class="exercises-cards">
      ${e.map(({name:a,_id:i,rating:c,burnedCalories:r,bodyPart:E,target:w,time:M})=>`
        <li class="exercise-information" data-id-card="${i}">
          <div class="top-nav">
            <div>
              <p class="tag">Workout</p>
              <span class="rating">
                ${c}
                <svg class="star-icon" width="14" height="14">
                  <use href="/coursework/symbol-defs.svg#icon-star"></use>
                </svg>
              </span>
            </div>
            <button name="start" data-action="start" data-id="${i}" class="details-link">
              Start
              <svg class="arrow-icon" width="16" height="16">
                <use href="/coursework/symbol-defs.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-header">
            <svg class="icon-man" fill="white" width="24" height="24">
              <use href="/coursework/symbol-defs.svg#icon-run"></use>
            </svg>
            <h2 class="exercise-name">${u(a)}</h2>
          </div>
          <ul class="exercise-details">
            <li><span>Burned calories:</span> ${r} / ${M} min</li>
            <li><span>Body part:</span> ${u(E)}</li>
            <li><span>Target:</span> ${u(w)}</li>
          </ul>
        </li>
      `).join("")}
    </ul>
  `;s.exercises.insertAdjacentHTML("beforeend",t)}function j(e){keyWord=e.target.value.trim().toLowerCase(),p(1),s.exercises.innerHTML="",v(!0)}function L(){var e;s.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span>no results</span> were found.</p>',(e=s.loadMoreBtn)==null||e.style.setProperty("display","none"),s.pagination&&(s.pagination.innerHTML="")}function u(e){const t=e.trim();return t[0].toUpperCase()+t.slice(1)}function S(e){if(!s.pagination)return;if(e<=1){s.pagination.innerHTML="";return}let t="";const a=r=>`
    <li>
      <button class="pagination-btn ${r===o?"active":""}" data-page="${r}">
        ${r}
      </button>
    </li>
  `;let i=Math.max(1,o-1),c=Math.min(e,o+1);o===1&&(c=Math.min(e,3)),o===e&&(i=Math.max(1,e-2)),i>1&&(t+=a(1),i>2&&e>4&&(t+='<li class="dots">...</li>'));for(let r=i;r<=c;r++)t+=a(r);c<e&&(c<e-1&&e>4&&(t+='<li class="dots">...</li>'),t+=a(e)),s.pagination.innerHTML=t}var b;(b=s.pagination)==null||b.addEventListener("click",e=>{const t=e.target.closest(".pagination-btn");if(!t)return;const a=Number(t.dataset.page);a!==o&&(p(a),s.exercises.innerHTML="",F?v(!1):h(!1))});s.exercises.addEventListener("click",e=>{const t=e.target.closest('[data-action="start"]');if(!t)return;const a=l.find(i=>i._id===t.dataset.id);C(a)});const n=document.querySelector("input[name=email]"),f=document.querySelector(".footer-send-button"),x="feedback-form-state";function m(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}function z(){localStorage.setItem(x,JSON.stringify({email:n.value}))}function O(){const e=localStorage.getItem(x);if(!e)return;const{email:t}=JSON.parse(e);n.value=t||"",f.disabled=!m(n.value)}O();n.addEventListener("input",()=>{z(),f.disabled=!m(n.value)});n.addEventListener("change",()=>{m(n.value)||d.info({message:"Please enter a valid email address"})});f.addEventListener("click",async e=>{if(e.preventDefault(),!!m(n.value))try{await H(n.value),d.success({title:"Success",message:"Welcome to energy.flow world!"}),n.value="",f.disabled=!0,localStorage.removeItem(x)}catch(t){t.message==="EMAIL_EXISTS"?d.warning({message:"Email already exists"}):d.error({title:"Error",message:"Something went wrong! Please try again later"})}});
//# sourceMappingURL=index.js.map
