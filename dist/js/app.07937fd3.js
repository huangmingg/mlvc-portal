(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/mlvc-portal/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),i=r("b1e0"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("app-navigation"),r("div",{staticClass:"m-4"},[r("router-view")],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",[e._v("MLVC Portal")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/home",exact:"","exact-active-class":"active"}},[e._v(" Home ")]),r("b-nav-item",{attrs:{to:"/predict",exact:"","exact-active-class":"active"}},[e._v(" Predict ")]),r("b-nav-item",{attrs:{to:"/company",exact:"","exact-active-class":"active"}},[e._v(" Company ")]),r("b-nav-item",{attrs:{to:"/reference",exact:"","exact-active-class":"active"}},[e._v(" Reference ")])],1)],1)],1)],1)},l=[],u={name:"Navigation"},p=u,d=r("2877"),h=Object(d["a"])(p,c,l,!1,null,"337925f1",null),m=h.exports,f={name:"App",components:{"app-navigation":m}},g=f,v=Object(d["a"])(g,o,s,!1,null,null,null),b=v.exports,w=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"p-4 bg-light",attrs:{fluid:""}},[r("div",[e._v("Home Page")])])],1)},_=[],x=r("1da1"),C=(r("96cf"),r("369b")),O=r.n(C),P=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=O.a.parse("../data/company.csv"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=r("bc3a"),k=r.n(j),R=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://mlvc-service.herokuapp.com/predict/");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M={name:"HomePage",created:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:P(),R();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{}},K=M,S=Object(d["a"])(K,y,_,!1,null,"6489e5e6",null),A=S.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"p-4 bg-light",attrs:{fluid:""}},[r("b-form",{on:{submit:e.onSubmit}},[r("b-row",[r("b-col",[r("b-form-group",{attrs:{id:"input-group-1",label:"Company Name:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",state:e.nameState,required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Description:","label-for":"input-6"}},[r("b-form-textarea",{attrs:{id:"input-6",state:e.descriptionState,type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Founded Date:","label-for":"input-7"}},[r("b-form-datepicker",{attrs:{id:"input-7",date:"",required:"",state:e.expireState,min:e.minDate},model:{value:e.form.foundedAt,callback:function(t){e.$set(e.form,"foundedAt",t)},expression:"form.foundedAt"}})],1),r("b-button",{staticClass:"float-right",attrs:{variant:"info",type:"submit"}},[e._v(" Submit ")])],1)],1)],1)],1)],1)},$=[],D={name:"PredictPage",data:function(){return{form:{name:"",price:"",quantity:"",unit:"Carton",description:"",foundedAt:"",category:"Expiring"},minDate:new Date((new Date).getTime()+864e5),categories:["Ugly","Expiring"],units:["Carton","Kg","Ml","Box","Gram","Pax"]}},created:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(e){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("submitting form");case 1:case"end":return e.stop()}}),e)})))()}}},T=D,q=Object(d["a"])(T,E,$,!1,null,"2f86f8e5",null),I=q.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"p-4 bg-light",attrs:{fluid:""}},[r("b-table",{attrs:{"sticky-header":"",hover:"",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage}})],1),r("b-col",[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},W=[],L={name:"CompanyPage",data:function(){return{fields:[{key:"last_name",sortable:!0},{key:"first_name",sortable:!1},{key:"age",label:"Person age",sortable:!0}],items:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],totalRows:1}},created:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{}},N=L,B=Object(d["a"])(N,H,W,!1,null,"0ffd3410",null),F=B.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"p-4 bg-light",attrs:{fluid:""}},[r("b-row",[r("div",{staticClass:"col-12"},[r("h1",[e._v(" Unsupervised Learning ")]),r("p",[e._v(" In this project, we sought to find distinct clusters of start-ups with similar characteristics to uncover insights on their growth prospect. We used K-means, K-prototype and Hierarchical Clustering to cluster the start-ups. More details about each clustering approach can be found below. ")])])]),r("hr"),r("b-row",[r("div",{staticClass:"col-12"},[r("h2",[e._v(" Results ")])]),r("div",{staticClass:"col-12"},[r("p",[e._v(" We compared the results obtained from running the different unsupervised learning methods and did not find visually distinct groups of start-ups. The clusters seem to only be distinctly separable based on total funding amount. ")])]),r("img",{staticClass:"ml-auto mr-auto",staticStyle:{"align-self":"center"},attrs:{src:"#",width:"200px",height:"200px",alt:"Results"}}),r("div",{staticClass:"col-12"},[r("p",[e._v(" Another observation is that the average number of active products being sold decreases as start-ups receive more funding. This could be an indication that having fewer products is correlated with high funding amount. Perhaps, start-ups with fewer products are able to devote more time and effort to develop and grow their business. Being more focused on certain products may also give investors greater confidence in the start-up. ")])])]),r("hr"),r("b-row",[r("div",{staticClass:"col-12"},[r("h2",[e._v(" K-Means Clustering ")])]),r("div",{staticClass:"col-12"},[r("p",[e._v(" K-Means algorithm is one of the most popular unsupervised clustering algorithm. It uses Euclidian distance between the points and centroids to determine the location of the cluster centroids and which points belong to that particular cluster. ")])]),r("div",{staticClass:"col-12"},[r("p",[e._v("Below is a brief overview of the K-Means algorithm:")]),r("ol",[r("li",[e._v("Step 1")]),r("li",[e._v("Step 2")])])]),r("div",{staticClass:"col-12"},[r("p",[r("strong",[e._v("Limitations")])]),r("ul",[r("li",[e._v("Unable to handle categorical variables")])])])]),r("hr"),r("b-row",[r("div",{staticClass:"col-12"},[r("h2",[e._v(" K-Modes")])]),r("div",{staticClass:"col-12"},[r("p",[e._v(" K-Modes is an extension of the K-Means that deals with categorical variables. Instead of using Euclidian distance, it uses dissimilarities and frequency-based method (mode) to update the cluster centroids. ")]),r("p",[e._v(" Matching dissimilarity score between two points is given by the total number of mismatches for all the categorical variables. K-Mode uses matching dissimilarity to determine which cluster a point belongs to. ")]),r("p",[e._v(" Mode is the most frequently occurring value in a group. This is then used to update the cluster centroids by taking the mode of the cluster for each categorical variable. With that, the K-Modes method uses the same procedure as K-Means to cluster objects that have categorical attributes. ")])])]),r("hr"),r("b-row",[r("div",{staticClass:"col-12"},[r("h2",[e._v(" K-Prototype Clustering ")])]),r("div",{staticClass:"col-12"},[r("p",[e._v(" K-Prototype integrates both the K-Means and K-Mode algorithm to deal with dataset that have a mixed of numerical and categorical variables. In K-Prototype, we separate the numerical data and categorical data and apply K-means and K-mode algorithm to them respectively. ")])])]),r("hr"),r("b-row",[r("div",{staticClass:"col-12"},[r("h2",[e._v(" Hierarchical Clustering ")])]),r("div",{staticClass:"col-12"},[r("p",[e._v(" A method of clustering in which we being by setting every data point as a cluster and slowly merge similar groups. After a few iterations, we reach the final clusters wanted. ")]),r("p",[e._v(" There are two types of hierarchical clustering – Agglomerative and Divisive. Agglomerative begins with each point being a cluster and at each iteration, we merge the closest pair of clusters until a single cluster remains. On the other hand, Divisive Hierarchical Clustering begins with all points belong to the same cluster. At each iteration, we split the furthest point in the cluster and repeat this until each cluster has only one point. ")]),r("p",[e._v(" In this project, we decided to use agglomerative clustering. In order to choose the appropriate number of clusters, we used a dendrogram, which shows the sequence of merges from the algorithm. In general, the longer the vertical lines in the dendrogram, the more the distance there is between those clusters. We set the threshold where it cuts the tallest vertical line. ")])]),r("img",{staticClass:"ml-auto mr-auto",staticStyle:{"align-self":"center"},attrs:{src:"#",width:"200px",height:"200px",alt:"dendrogram"}})]),r("hr")],1)],1)},U=[],G={name:"ReferencePage",created:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{}},z=G,V=Object(d["a"])(z,J,U,!1,null,"03f5a0be",null),Q=V.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("Not Found Page")])},Y=[],Z={name:"NotFoundPage"},ee=Z,te=Object(d["a"])(ee,X,Y,!1,null,"6265606b",null),re=te.exports,ae=[{path:"/",redirect:"/home"},{path:"/home",component:A},{path:"/predict",component:I},{path:"/company",component:F},{path:"/reference",component:Q},{path:"*",component:re}];a["default"].use(w["a"]);var ne,ie=new w["a"]({linkActiveClass:"is-active",mode:"history",routes:ae}),oe=(r("f9e3"),r("2dd8"),r("9062")),se=r.n(oe);r("e40d");a["default"].config.productionTip=!1,a["default"].use(n["a"]),a["default"].use(i["a"]),a["default"].use(se.a),ne||(ne=new a["default"]({router:ie,render:function(e){return e(b)}}).$mount("#app"))}});
//# sourceMappingURL=app.07937fd3.js.map