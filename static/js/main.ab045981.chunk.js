(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),o=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=(s(14),s(15),s(2)),d=s.n(h),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortLength=function(){t.setState({sortType:n.LENGTH})},t.reverseItems=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetList=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return i.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return n.NONE}})),r&&i.reverse(),i}(j,{sortType:s,isReversed:e});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":s!==n.ALPHABET}),onClick:this.sortAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":s!==n.LENGTH}),onClick:this.sortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":!e}),onClick:this.reverseItems,children:"Reverse"}),(e||s!==n.NONE)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetList,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.Component);i.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ab045981.chunk.js.map