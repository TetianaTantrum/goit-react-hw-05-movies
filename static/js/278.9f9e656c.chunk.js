"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{7082:function(n,e,t){t.d(e,{Hg:function(){return u},Ku:function(){return d},Pg:function(){return l},Wf:function(){return m},fI:function(){return g}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="https://api.themoviedb.org/3/",s="f9bf05506ad1ee4c133a8c572dbb21a2";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/movie/week?api_key=").concat(s,"&page=").concat(e,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"?api_key=").concat(s,"&append_to_response=videos&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9278:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),i=t(7757),o=t.n(i),c=t(2791),s=t(1087),u=t(7689),p=t(7082),l=t(155),f=t(9126),d=t(184);e.default=function(){var n,e=(0,c.useState)([]),t=(0,a.Z)(e,2),i=t[0],x=t[1],g=(0,s.useSearchParams)(),h=(0,a.Z)(g,2),m=h[0],v=h[1],b=null!==(n=m.get("query"))&&void 0!==n?n:"",y=(0,u.TH)();(0,c.useEffect)((function(){if(""===b)return v({});function n(){return(n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Wf)(b);case 3:e=n.sent,x(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}v({query:b}),function(){n.apply(this,arguments)}()}),[b,v]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.l0,{onSubmit:function(n){n.preventDefault(),v({query:n.target.input.value}),n.target.reset()},children:[(0,d.jsx)(l.II,{type:"text",name:"input"}),(0,d.jsxs)(l.zx,{children:[(0,d.jsx)(f.dVI,{style:{marginRight:"10px"}}),"Search"]})]}),(0,d.jsx)(l.ri,{children:i.map((function(n){var e=n.id,t=n.poster_path,r=n.title,a=n.vote_average,i=n.release_date,o=null===a||void 0===a?void 0:a.toFixed(1);return(0,d.jsx)(l.ck,{children:(0,d.jsxs)(s.Link,{to:"/movies/".concat(e),state:{from:y},children:[(0,d.jsx)(l.Ee,{src:t?"https://image.tmdb.org/t/p/w500"+t:"https://lands-tube.it.landsd.gov.hk/AVideo/view/img/notfound_portrait.jpg",alt:r}),(0,d.jsxs)(l.Dx,{children:[r," | ",null===i||void 0===i?void 0:i.toString().slice(0,4)]}),(0,d.jsxs)(l.xv,{children:[(0,d.jsx)("b",{children:"Average: "}),o]})]})},e)}))})]})}},155:function(n,e,t){t.d(e,{Dx:function(){return h},Ee:function(){return g},II:function(){return b},ck:function(){return x},l0:function(){return v},ri:function(){return d},xv:function(){return m},zx:function(){return y}});var r,a,i,o,c,s,u,p,l=t(168),f=t(6444),d=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=f.ZP.li(a||(a=(0,l.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=f.ZP.img(i||(i=(0,l.Z)(["\n  width: 100%;\n  max-height: 400px;\n  object-fit: contain;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),h=f.ZP.h2(o||(o=(0,l.Z)(["\n  color: #363d43;\n  margin-left: 15px;\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5rem;\n  letter-spacing: 0.02em;\n"]))),m=f.ZP.p(c||(c=(0,l.Z)(["\n  color: #363d43;\n  margin-left: 15px;\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.2rem;\n"]))),v=f.ZP.form(s||(s=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),b=f.ZP.input(u||(u=(0,l.Z)(["\n  display: inline-block;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 7px;\n  padding-right: 7px;\n  width: 50%;\n  height: 30px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  margin-right: 10px;\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 12px;\n  line-height: 1.17;\n  letter-spacing: 0.01em;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus {\n    outline: none;\n    border-color: #074207;\n  }\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    align-items: center;\n  }\n"]))),y=f.ZP.button(p||(p=(0,l.Z)(["\n  display: inline-block;\n  background-color: #051805;\n  text-decoration: none;\n  padding: 7px 20px;\n  text-align: center;\n  border-radius: 5px;\n  margin-left: 15px;\n  border: 0px;\n  color: rgb(239, 239, 239);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 14px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n"])))}}]);
//# sourceMappingURL=278.9f9e656c.chunk.js.map