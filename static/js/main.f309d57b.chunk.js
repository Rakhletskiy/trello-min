(this["webpackJsonptrello-min"]=this["webpackJsonptrello-min"]||[]).push([[0],{112:function(e,n,t){e.exports=t(207)},117:function(e,n,t){},118:function(e,n,t){},123:function(e,n,t){},125:function(e,n,t){},171:function(e,n,t){},172:function(e,n,t){},207:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(6),o=t.n(c),l=(t(117),t(92)),u=t(93),s=t(109),i=t(94),d=t(110),m=(t(118),t(2)),p=t(25),f=t(16),b=t(12),E=function(e){var n=e.source,t=e.destination;return function(e,r){var a=function(e){var n=e.state,t=e.source,r=e.destination,a=t.index,c=t.droppableId,o=r.index,l=r.droppableId,u=parseInt(c.replace("column-","")),s=parseInt(l.replace("column-",""));return n.map((function(e,t){if(s===t){var r=n[u].cards.splice(a,1),c=Object(b.a)(r,1)[0],l=Array.from(n[s].cards);l.splice(o,0,c),e.cards=l}return e}))}({state:r().columns,source:n,destination:t});return localStorage.setItem("columns",JSON.stringify(a)),e({type:"REORDER_CARDS",columns:a})}},C=t(108),g=(t(123),t(208)),O=(t(124),t(125),Object(m.b)((function(e){return{newCardText:e.newCardText}}),(function(e){return{onAddCard:function(n,t,r){return e(function(e,n){return function(t,r){var a=r(),c=a.columns[n],o=c.cards;""!==e&&null!==e&&o.push(e),c.cards=o;var l=Object(f.a)(a.columns);return l.splice(n,1,c),localStorage.setItem("columns",JSON.stringify(l)),t({type:"ADD_CARD",columns:l,newCardText:""})}}(n,t))},addNewCardText:function(n){return e(function(e){return function(n){return n({type:"ADD_NEW_CARD_TEXT",payload:e})}}(n))},onAddCol:function(n,t){return e(function(e,n){return function(t,r){var a,c=r();return n(!1),(a=null!==c.columns?Object(f.a)(c.columns):[]).push({title:e,cards:[]}),localStorage.setItem("columns",JSON.stringify(a)),t({type:"ADD_COLUMN",columns:a})}}(n,t))}}}))((function(e){var n=Object(r.useState)(!1),t=Object(b.a)(n,2),c=t[0],o=t[1];return c?a.a.createElement("div",{className:e.isAddingColumn?"adding-card card-is-adding-column":"adding-card"},a.a.createElement("textarea",{onChange:function(n){return e.addNewCardText(n.target.value)},rows:"3",placeholder:"type here...",autoFocus:!0}),a.a.createElement("div",{className:"adding-card-btn-wrapper"},a.a.createElement(g.a,{onClick:function(){return e.isAddingColumn?e.onAddCol(e.newCardText,o):e.onAddCard(e.newCardText,e.index,o)},className:"adding-card-add",type:"primary"},"ADD"),a.a.createElement(C.a,{onClick:function(){return o(!1)},className:"adding-card-close",type:"close"}))):a.a.createElement(g.a,{onClick:function(){return o(!0)},className:e.isAddingColumn?"btn-add btn-is-adding-column":"btn-add",icon:"plus",block:!0},e.text)}))),y=(t(171),t(172),Object(m.b)(null,(function(e){return{setNewCardText:function(n,t,r){return e(function(e,n,t){return function(r,a){var c=a(),o=Object(f.a)(c.columns);return o[n].cards[t]=e,localStorage.setItem("columns",JSON.stringify(o)),r({type:"EDIT_CARD",columns:o})}}(n,t,r))}}}))((function(e){var n=Object(r.useState)(e.label),t=Object(b.a)(n,2),c=t[0],o=t[1],l=Object(r.useCallback)((function(e){null!==e&&(e.focus(),e.setSelectionRange(0,e.value.length))}),[]);return a.a.createElement("div",{className:"card-edit-block"},a.a.createElement("textarea",{ref:l,onChange:function(e){return o(e.target.value)},value:c,rows:"3"}),a.a.createElement("div",{className:"btn-wrapper"},a.a.createElement(g.a,{onClick:function(){e.setNewCardText(c,e.colIndex,e.cardIndex),e.setIsEdit(!1)},className:"card-edit-block-btn",type:"primary",size:"small"},"OK"),a.a.createElement(C.a,{onClick:function(){o(e.label),e.setIsEdit(!1)},className:"card-edit-block-close",type:"close"})))}))),D=Object(m.b)(null,(function(e){return{onDelCard:function(n,t){return e(function(e,n){return function(t,r){var a=r(),c=a.columns[e];c.cards.splice(n,1);var o=Object(f.a)(a.columns);return o.splice(e,1,c),localStorage.setItem("columns",JSON.stringify(o)),t({type:"DELETE_CARD",columns:o})}}(n,t))}}}))((function(e){var n=Object(r.useState)(!1),t=Object(b.a)(n,2),c=t[0],o=t[1];return a.a.createElement(p.b,{draggableId:"card-".concat(e.colIndex,"-").concat(e.cardIndex),index:e.cardIndex},(function(n){return a.a.createElement("div",Object.assign({className:"card",ref:n.innerRef},n.draggableProps,n.dragHandleProps),a.a.createElement(C.a,{onClick:function(){return e.onDelCard(e.colIndex,e.cardIndex)},className:"card-btn card-close",type:"close"}),a.a.createElement(C.a,{onClick:function(){return o(!c)},className:"card-btn card-edit",type:"edit"}),c?a.a.createElement(y,{colIndex:e.colIndex,cardIndex:e.cardIndex,setIsEdit:o,label:e.label}):a.a.createElement("span",null,e.label))}))})),v=Object(m.b)(null,(function(e){return{onDelCol:function(n){return e(function(e){return function(n,t){var r=t(),a=Object(f.a)(r.columns);return a.splice(e,1),localStorage.setItem("columns",JSON.stringify(a)),n({type:"DELETE_COLUMN",columns:a})}}(n))}}}))((function(e){return a.a.createElement("div",{className:e.empty?e.isAddingColumn?"column add-column":"column empty":"column"},e.empty?a.a.createElement("div",null,!e.isAddingColumn&&a.a.createElement("div",null,a.a.createElement("header",{className:"column__title"},"\u043f\u0432\u0430\u0432\u0430"),a.a.createElement(C.a,{className:"close-column-btn",type:"close"})),a.a.createElement(O,{text:e.isAddingColumn?"Add new column":"Add new card",isAddingColumn:e.isAddingColumn&&!0,index:e.index})):a.a.createElement("div",null,a.a.createElement("header",{className:"column__title"},e.title),a.a.createElement(p.c,{type:"CARDS",droppableId:"column-".concat(e.index)},(function(n){return a.a.createElement("div",Object.assign({},n.droppableProps,{ref:n.innerRef}),a.a.createElement("div",{className:"column__inner"},a.a.createElement("div",{className:"column__items"},e.cards.map((function(n,t){return a.a.createElement(D,{key:t,colIndex:e.index,cardIndex:t,label:n})})),n.placeholder)))})),a.a.createElement(O,{text:"Add new card",index:e.index}),a.a.createElement(C.a,{onClick:function(){return e.onDelCol(e.index)},className:"close-column-btn",type:"close"})))})),x=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(a)))).onDragEnd=function(e){var n=e.source,r=e.destination;!r||n.droppableId===r.droppableId&&n.index===r.index||t.props.reorderCards({source:n,destination:r})},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.props.columns?a.a.createElement(p.a,{onDragEnd:this.onDragEnd},this.props.columns.map((function(e,n){return a.a.createElement(v,{title:e.title,cards:e.cards,index:n,key:Math.random(),onReorder:E})}))):null,a.a.createElement(v,{empty:!0,isAddingColumn:!0,key:9999}))}}]),n}(a.a.Component),A=Object(m.b)((function(e){return{columns:e.columns}}),(function(e){return{fetchData:function(){return e((function(e){var n=localStorage.getItem("columns");return e({type:"FETCH_DATA",columns:JSON.parse(n)})}))},reorderCards:function(n){var t=n.source,r=n.destination;return e(E({source:t,destination:r}))}}}))(x),j=t(3),N=t(106);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(t,!0).forEach((function(n){Object(N.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w={columns:[],newCardText:null};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_DATA":return h({},e,{columns:n.columns});case"ADD_NEW_CARD_TEXT":return h({},e,{newCardText:n.payload});case"ADD_CARD":return h({},e,{columns:n.columns,newCardText:n.newCardText});case"DELETE_CARD":case"ADD_COLUMN":case"DELETE_COLUMN":case"EDIT_CARD":case"REORDER_CARDS":return h({},e,{columns:n.columns});default:return e}},T=t(107),S=Object(j.d)(_,Object(j.a)(T.a));o.a.render(a.a.createElement(m.a,{store:S},a.a.createElement(A,null)),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.f309d57b.chunk.js.map