"use strict";(self.webpackChunkpapermanager_docs=self.webpackChunkpapermanager_docs||[]).push([[151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,d=s["".concat(p,".").concat(c)]||s[c]||h[c]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="Using the component",o={unversionedId:"using-the-component",id:"version-0.x.x/using-the-component",title:"Using the component",description:"The Paper Manager component lets the user manage the paper collection. It offers three CRUD editors. One for the paper categories, another for the authors and a third one for the papers themselves. Each can be accessed from the administration by navigating to Components &#8594; Paper Manager &#8594; Categories, Components &#8594; Paper Manager &#8594; Authors and Components &#8594; Paper Manager &#8594; Papers respectively. Each item in these lists has the following fields:",source:"@site/versioned_docs/version-0.x.x/03-using-the-component.md",sourceDirName:".",slug:"/using-the-component",permalink:"/docs/0.x.x/using-the-component",draft:!1,editUrl:"https://github.com/papermanager/papermanager.github.io/edit/main/versioned_docs/version-0.x.x/03-using-the-component.md",tags:[],version:"0.x.x",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/0.x.x/installation"},next:{title:"Using the plugin",permalink:"/docs/0.x.x/using-the-plugin"}},p={},u=[{value:"Getting started with the Paper Manager component",id:"getting-started-with-the-paper-manager-component",level:3}],m={toc:u},s="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-component"},"Using the component"),(0,r.kt)("p",null,"The Paper Manager component lets the user manage the paper collection. It offers three CRUD editors. One for the paper categories, another for the authors and a third one for the papers themselves. Each can be accessed from the administration by navigating to ",(0,r.kt)("em",{parentName:"p"},"Components ","\u2192"," Paper Manager ","\u2192"," Categories"),", ",(0,r.kt)("em",{parentName:"p"},"Components ","\u2192"," Paper Manager ","\u2192"," Authors")," and ",(0,r.kt)("em",{parentName:"p"},"Components ","\u2192"," Paper Manager ","\u2192"," Papers")," respectively. Each item in these lists has the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Categories",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": Record number in the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title"),": The title of the category."))),(0,r.kt)("li",{parentName:"ul"},"Authors",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": Record number in the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": The first and last name of the author."))),(0,r.kt)("li",{parentName:"ul"},"Papers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": Record number in the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title"),": The title of the paper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authors"),": List of the paper's authors. Multiple authors can be selected. The authors can be edited in ",(0,r.kt)("em",{parentName:"li"},"Components ","\u2192"," Paper Manager ","\u2192"," Authors"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Category"),": The paper's category. A single category can be selected. The categories can be edited in ",(0,r.kt)("em",{parentName:"li"},"Components ","\u2192"," Paper Manager ","\u2192"," Categories"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Year"),": The year of the publication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Month"),": The month of the publication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Produced In Lab"),": Checkbox \u2013 checked if the paper was produced in the lab. This field is relevant only on research lab or organization websites and not on personal profile websites."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTML Text"),": The HTML text that will be used by the plugin to display the paper entry on the site.")))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"PaperManagerER",src:"/img/paper_manager_er.png",title:"Paper Manager ER"})),(0,r.kt)("h3",{id:"getting-started-with-the-paper-manager-component"},"Getting started with the Paper Manager component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the administration, navigate to ",(0,r.kt)("em",{parentName:"li"},"Components ","\u2192"," Paper Manager ","\u2192"," Categories")," and add the following entries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Journal Publications")),(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Conference Publications"))))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"PaperManagerCategories",src:"/img/paper_manager_tutorial_categories_small.png",title:"Paper Manager Categories"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"Components ","\u2192"," Paper Manager ","\u2192"," Authors")," and add the following entries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 1")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 2")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 3")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 4")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 5"))))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"PaperManagerAuthors",src:"/img/paper_manager_tutorial_authors_small.png",title:"Paper Manager Authors"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"Components ","\u2192"," Paper Manager ","\u2192"," Papers")," and add the following entries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Paper 1"),",",(0,r.kt)("br",null),"\nAuthors: ",(0,r.kt)("inlineCode",{parentName:"li"},"{Author 2, Author 4, Author 5}"),",",(0,r.kt)("br",null),"\nCategory: ",(0,r.kt)("inlineCode",{parentName:"li"},"Journal Publications"),",",(0,r.kt)("br",null),"\nYear: ",(0,r.kt)("inlineCode",{parentName:"li"},"2013"),",",(0,r.kt)("br",null),"\nMonth: ",(0,r.kt)("inlineCode",{parentName:"li"},"April"),",",(0,r.kt)("br",null),"\nProduced in Lab: ",(0,r.kt)("inlineCode",{parentName:"li"},"Not Checked"),",",(0,r.kt)("br",null),"\nHTML Text: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 2, Author 4, Author 5. Paper 1. Journal of Something 10(1):25-35")),(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Paper 2"),",",(0,r.kt)("br",null),"\nAuthors: ",(0,r.kt)("inlineCode",{parentName:"li"},"{Author 1, Author 3, Author 5}"),",",(0,r.kt)("br",null),"\nCategory: ",(0,r.kt)("inlineCode",{parentName:"li"},"Journal Publications"),",",(0,r.kt)("br",null),"\nYear: ",(0,r.kt)("inlineCode",{parentName:"li"},"2014"),",",(0,r.kt)("br",null),"\nMonth: ",(0,r.kt)("inlineCode",{parentName:"li"},"January"),",",(0,r.kt)("br",null),"\nProduced in Lab: ",(0,r.kt)("inlineCode",{parentName:"li"},"Checked"),",",(0,r.kt)("br",null),"\nHTML Text: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 1, Author 3, Author 5. Paper 2. Journal of Something Else 25(3):36-55")),(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Paper 3"),",",(0,r.kt)("br",null),"\nAuthors: ",(0,r.kt)("inlineCode",{parentName:"li"},"{Author 1, Author 3, Author 4}"),",",(0,r.kt)("br",null),"\nCategory: ",(0,r.kt)("inlineCode",{parentName:"li"},"Journal Publications"),",",(0,r.kt)("br",null),"\nYear: ",(0,r.kt)("inlineCode",{parentName:"li"},"2013"),",",(0,r.kt)("br",null),"\nMonth: ",(0,r.kt)("inlineCode",{parentName:"li"},"February"),",",(0,r.kt)("br",null),"\nProduced in Lab: ",(0,r.kt)("inlineCode",{parentName:"li"},"Checked"),",",(0,r.kt)("br",null),"\nHTML Text: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 1, Author 3, Author 4. Paper 3. Journal of Something Different 6(4):28-49")),(0,r.kt)("li",{parentName:"ul"},"Title: ",(0,r.kt)("inlineCode",{parentName:"li"},"Paper 4"),",",(0,r.kt)("br",null),"\nAuthors: ",(0,r.kt)("inlineCode",{parentName:"li"},"{Author 2, Author 3, Author 4}"),",",(0,r.kt)("br",null),"\nCategory: ",(0,r.kt)("inlineCode",{parentName:"li"},"Conference Publications"),",",(0,r.kt)("br",null),"\nYear: ",(0,r.kt)("inlineCode",{parentName:"li"},"2013"),",",(0,r.kt)("br",null),"\nMonth: ",(0,r.kt)("inlineCode",{parentName:"li"},"August"),",",(0,r.kt)("br",null),"\nProduced in Lab: ",(0,r.kt)("inlineCode",{parentName:"li"},"Checked"),",",(0,r.kt)("br",null),"\nHTML Text: ",(0,r.kt)("inlineCode",{parentName:"li"},"Author 2, Author 4, Author 5. Paper 4. 5th International Conference of Something, Athens, Greece, July 5-6, 2013"))))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"PaperManagerPaper",src:"/img/paper_manager_tutorial_paper_small.png",title:"Paper Manager Paper"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"PaperManagerPapers",src:"/img/paper_manager_tutorial_papers_small.png",title:"Paper Manager Papers"})))}h.isMDXComponent=!0}}]);