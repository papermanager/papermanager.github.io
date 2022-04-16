"use strict";(self.webpackChunkpapermanager_docs=self.webpackChunkpapermanager_docs||[]).push([[929],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,c=d["".concat(o,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3663:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},o="Using the plugin",s={unversionedId:"using-the-plugin",id:"using-the-plugin",title:"Using the plugin",description:"The Paper Manager plugin loads Paper Manager publications within content (ex. articles). It works in a similar way with the Content - Load Modules plugin, which is included in the core Joomla distribution. Special code snippets are used in the content that are translated into HTML code in the front-end (lists of papers in our occasion).",source:"@site/docs/04-using-the-plugin.md",sourceDirName:".",slug:"/using-the-plugin",permalink:"/docs/using-the-plugin",editUrl:"https://github.com/papermanager/papermanager.github.io/edit/main/docs/04-using-the-plugin.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using the component",permalink:"/docs/using-the-component"},next:{title:"Uninstallation",permalink:"/docs/uninstallation"}},u={},m=[{value:"Getting started with the Paper Manager plugin",id:"getting-started-with-the-paper-manager-plugin",level:3},{value:"Code snippets syntax",id:"code-snippets-syntax",level:3},{value:"Plugin parameters",id:"plugin-parameters",level:3},{value:"Style",id:"style",level:4},{value:"<code>ul</code> - Wrapped by unordered list",id:"ul---wrapped-by-unordered-list",level:5},{value:"<code>ol</code> - Wrapped by ordered list",id:"ol---wrapped-by-ordered-list",level:5},{value:"<code>olreversed</code> - Wrapped by reverse ordered list",id:"olreversed---wrapped-by-reverse-ordered-list",level:5},{value:"<code>div</code> - Wrapped by Divs",id:"div---wrapped-by-divs",level:5}],d={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"using-the-plugin"},"Using the plugin"),(0,l.kt)("p",null,"The Paper Manager plugin loads Paper Manager publications within content (ex. articles). It works in a similar way with the ",(0,l.kt)("em",{parentName:"p"},"Content - Load Modules")," plugin, which is included in the core Joomla distribution. Special code snippets are used in the content that are translated into HTML code in the front-end (lists of papers in our occasion)."),(0,l.kt)("p",null,"You have to enable the plugin before using it. To do this, navigate to ",(0,l.kt)("em",{parentName:"p"},"System ","\u2192"," Manage ","\u2192"," Plugins")," and enable ",(0,l.kt)("em",{parentName:"p"},"Content - Paper Manager Plugin"),"."),(0,l.kt)("p",null,"From the same page (",(0,l.kt)("em",{parentName:"p"},"System ","\u2192"," Manage ","\u2192"," Plugins ","\u2192"," Content - Paper Manager Plugin"),"), the plugin's ",(0,l.kt)("a",{parentName:"p",href:"#plugin-parameters"},"default parameters")," can also be edited."),(0,l.kt)("h3",{id:"getting-started-with-the-paper-manager-plugin"},"Getting started with the Paper Manager plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"From the article manager, create an article titled ",(0,l.kt)("em",{parentName:"li"},"Journal Publications")," and a menu item of the same name targeting this single article."),(0,l.kt)("li",{parentName:"ul"},"Edit this article and insert the following code in its content:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"{loadpapers:authors=any:categories=1:years=any:months=any:lab=1:style=olreversed}\n")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{alt:"PaperManagerPlugin",src:"/img/paper_manager_plugin_tutorial_1_small.png",title:"Paper Manager Plugin"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"From the article manager, create an article titled ",(0,l.kt)("em",{parentName:"li"},"Author 2")," and a menu item of the same name targeting this single article."),(0,l.kt)("li",{parentName:"ul"},"Edit this article and insert the following code in its content:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"{loadpapers:authors=2:categories=any:years=any:months=any:lab=any:style=olreversed}\n")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{alt:"PaperManagerPlugin",src:"/img/paper_manager_plugin_tutorial_3_small.png",title:"Paper Manager Plugin"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create two menu items pointing to the two newly created articles.")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{alt:"PaperManagerPlugin",src:"/img/paper_manager_plugin_tutorial_2_small.png",title:"Paper Manager Plugin"})),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{alt:"PaperManagerPlugin",src:"/img/paper_manager_plugin_tutorial_4_small.png",title:"Paper Manager Plugin"})),(0,l.kt)("h3",{id:"code-snippets-syntax"},"Code snippets syntax"),(0,l.kt)("p",null,"Code snippets should be written in the following form. Each snippet works as a query to the plugin. The plugin process the queries, retrieves the appropriate papers and generates the HTML code for each query/paper list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"{loadpapers:authors=X:categories=X:years=X:months=X:lab=X:style=X}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"X")," denotes a value. Six constraints are used in a single snippet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"authors"),": The ID of a single author or the IDs multiple authors separated by comma.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"1 | ... | n | any")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"1,20,12,23")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"categories"),": The ID of a single category or the IDs multiple categories separated by comma.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"1 | ... | n | any")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"1,20,12,23")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"years"),": A single year (four digit format) or multiple years separated by comma.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"YYYY | any")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"2013,2014")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"months"),": A single month (range from 1 to 12 format) or multiple months separated by comma.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"1 | ... | 12 | any")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"7")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lab"),": Defines whether to retrieve papers produced in the lab or outside of it. Value 1 stands for ",(0,l.kt)("em",{parentName:"li"},"produced in the lab")," and 2 for ",(0,l.kt)("em",{parentName:"li"},"not produced in the lab"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"1 | 2 | any")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"1,20,12,23")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style"),": The code that will wrap the papers lists. ( ",(0,l.kt)("a",{parentName:"li",href:"#style"},"more...")," )",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value range: ",(0,l.kt)("inlineCode",{parentName:"li"},"ul | ol | olreversed | div | none | default")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"olreversed"))))),(0,l.kt)("p",null,"To omit a constraint from the query its value should be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),". authors, categories, years, months and lab can be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," if you don't want to constrain the output to some specific value. ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," does not work for style though. style accepts the value ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," in order to make use of the style set in the ",(0,l.kt)("a",{parentName:"p",href:"#plugin-parameters"},"plugin's parameters"),"."),(0,l.kt)("h3",{id:"plugin-parameters"},"Plugin parameters"),(0,l.kt)("p",null,"To edit the parameters of the plugin, navigate to ",(0,l.kt)("em",{parentName:"p"},"System ","\u2192"," Manage ","\u2192"," Plugins ","\u2192"," Content - Paper Manager Plugin"),"."),(0,l.kt)("h4",{id:"style"},"Style"),(0,l.kt)("p",null,"The style of the code that will wrap papers lists. It can get the values ",(0,l.kt)("inlineCode",{parentName:"p"},"ul | ol | olreversed | div | none | default"),". Each style outputs the following HTML code:"),(0,l.kt)("h5",{id:"ul---wrapped-by-unordered-list"},(0,l.kt)("inlineCode",{parentName:"h5"},"ul")," - Wrapped by unordered list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ul class="papermanager_front_list">\n     <li class="papermanager_front_list_item">Item 1</li>\n     <li class="papermanager_front_list_item">Item 2</li>\n     ...\n     <li class="papermanager_front_list_item">Item n</li>\n</ul>\n')),(0,l.kt)("h5",{id:"ol---wrapped-by-ordered-list"},(0,l.kt)("inlineCode",{parentName:"h5"},"ol")," - Wrapped by ordered list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ol class="papermanager_front_list">\n     <li class="papermanager_front_list_item">Item 1</li>\n     <li class="papermanager_front_list_item">Item 2</li>\n     ...\n     <li class="papermanager_front_list_item">Item n</li>\n</ol>\n')),(0,l.kt)("h5",{id:"olreversed---wrapped-by-reverse-ordered-list"},(0,l.kt)("inlineCode",{parentName:"h5"},"olreversed")," - Wrapped by reverse ordered list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ol reversed="" class="papermanager_front_list">\n     <li class="papermanager_front_list_item">Item 1</li>\n     <li class="papermanager_front_list_item">Item 2</li>\n     ...\n     <li class="papermanager_front_list_item">Item n</li>\n</ol>\n')),(0,l.kt)("h5",{id:"div---wrapped-by-divs"},(0,l.kt)("inlineCode",{parentName:"h5"},"div")," - Wrapped by Divs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="papermanager_front_list">\n     <div class="papermanager_front_list_item">Item 1</div>\n     <div class="papermanager_front_list_item">Item 2</div>\n      ...\n     <div class="papermanager_front_list_item">Item n</div>\n</div>\n')),(0,l.kt)("p",null,"As it can be noticed, certain CSS classes are assigned to the generated HTML code to provide a way of stylizing the output. The following CSS rules can be used as a template:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ul.papermanager_front_list{\n}\nul.papermanager_front_list li.papermanager_front_list_item{\n}\nol.papermanager_front_list{\n}\nol.papermanager_front_list li.papermanager_front_list_item{\n}\ndiv.papermanager_front_list{\n}\ndiv.papermanager_front_list div.papermanager_front_list_item{\n}\n")))}g.isMDXComponent=!0}}]);