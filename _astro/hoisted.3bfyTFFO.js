import"./hoisted.DF-rxbhH.js";const o=document.getElementById("search-input"),l=document.getElementById("search-container"),{posts:m,authors:i}=window.__BLOG_DATA__,h=e=>{const r=i.find(d=>d.id===e.authorId),t=e.translatorId?i.find(d=>d.id===e.translatorId):null,n=e.thumbnail?`<img src="${e.thumbnail}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />`:'<div class="w-full h-full flex items-center justify-center text-muted-foreground text-sm">بدون تصویر</div>',s=r?`
        <span class="font-medium text-foreground flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
          </span>
          <a href="/authors/${r.id}" class="hover:text-primary transition-colors">${r.name}</a>
        </span>`:"",a=t?`
        <span class="text-xs text-muted-foreground flex items-center gap-2 pr-[2px] mt-1">
          <span class="w-5 h-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </span>
          مترجم: <a href="/authors/${t.id}" class="hover:text-primary transition-colors">${t.name}</a>
        </span>`:"";return`
      <div class="group flex flex-col sm:flex-row gap-6 bg-card border border-border p-4 rounded-xl hover:shadow-md transition-all duration-300">
        <a href="/posts/${e.slug}" class="relative w-full sm:w-1/3 aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 block bg-muted">
          ${n}
        </a>
        <div class="flex flex-col flex-grow py-2">
          <div class="flex items-center gap-2 text-sm text-primary font-medium mb-2 font-shabnam">
            <a href="/search?q=${e.category}" class="bg-primary/10 px-2 py-1 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-sans">${e.category}</a>
            <span class="text-muted-foreground opacity-50">•</span>
            <span class="text-muted-foreground">${e.date}</span>
          </div>
          <a href="/posts/${e.slug}" class="block mb-3">
            <h3 class="text-2xl font-bold group-hover:text-primary transition-colors leading-tight font-vazirmatn">${e.title}</h3>
          </a>
          <p class="text-muted-foreground mb-6 line-clamp-2 leading-relaxed font-shabnam text-[15px]">${e.excerpt}</p>
          <div class="mt-auto flex items-center justify-between border-t border-border/50 pt-4 font-shabnam">
            <div class="flex flex-col gap-1 text-sm">${s}${a}</div>
            <a href="/posts/${e.slug}" class="text-primary text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
              ادامه مطلب
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>`},u=()=>{const e=o.value.trim().toLowerCase();if(!e&&!l)return;const r=m.filter(t=>{const n=i.find(a=>a.id===t.authorId),s=t.translatorId?i.find(a=>a.id===t.translatorId):null;return t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.content.toLowerCase().includes(e)||t.category.toLowerCase().includes(e)||n&&n.name.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)});if(!e){l.innerHTML="";return}r.length===0?l.innerHTML=`
          <div class="text-center text-muted-foreground py-20 bg-muted/30 rounded-3xl border border-dashed border-border mt-8">
            <div class="flex justify-center mb-4 opacity-50"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
            <p class="text-xl font-medium">متاسفانه نتیجه‌ای برای «${e}» یافت نشد.</p>
            <p class="mt-2 opacity-70">لطفاً کلمات دیگری را امتحان کنید.</p>
          </div>
        `:l.innerHTML=`
          <h2 class="text-2xl font-bold mb-6 font-vazirmatn">${r.length} نتیجه یافت شده:</h2>
          <div class="grid grid-cols-1 gap-8">
            ${r.map(h).join("")}
          </div>
        `},c=new URLSearchParams(window.location.search);c.has("q")&&(o.value=c.get("q")||"",u());o.addEventListener("input",()=>{const e=new URL(window.location.href);o.value?e.searchParams.set("q",o.value):e.searchParams.delete("q"),window.history.replaceState({},"",e),u()});
