(()=>{var e,o,t,c={8984:(e,o,t)=>{"use strict";t.r(o);var c={};t.r(c),t.d(c,{blockifyConfig:()=>we,getDescription:()=>ue,isConversionPossible:()=>pe});var r={};t.r(r),t.d(r,{blockifyConfig:()=>fe,getDescription:()=>be,isConversionPossible:()=>_e});var l={};t.r(l),t.d(l,{blockifyConfig:()=>Ee,getDescription:()=>ve,getSkeleton:()=>Be,isConversionPossible:()=>he});var a=t(1609);const i=window.wp.blocks,n=window.wc.wcSettings;var s,m,d,p,u,w,k,g,_,b;const f=(0,n.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),h=f.pluginUrl+"assets/images/",y=(f.pluginUrl,null===(s=n.STORE_PAGES.shop)||void 0===s||s.permalink,null===(m=n.STORE_PAGES.checkout)||void 0===m||m.id,null===(d=n.STORE_PAGES.checkout)||void 0===d||d.permalink,null===(p=n.STORE_PAGES.privacy)||void 0===p||p.permalink,null===(u=n.STORE_PAGES.privacy)||void 0===u||u.title,null===(w=n.STORE_PAGES.terms)||void 0===w||w.permalink,null===(k=n.STORE_PAGES.terms)||void 0===k||k.title,null===(g=n.STORE_PAGES.cart)||void 0===g||g.id,null===(_=n.STORE_PAGES.cart)||void 0===_||_.permalink,null!==(b=n.STORE_PAGES.myaccount)&&void 0!==b&&b.permalink?n.STORE_PAGES.myaccount.permalink:(0,n.getSetting)("wpLoginUrl","/wp-login.php"),(0,n.getSetting)("localPickupEnabled",!1),(0,n.getSetting)("shippingMethodsExist",!1),(0,n.getSetting)("shippingEnabled",!0),(0,n.getSetting)("countries",{})),v=(0,n.getSetting)("countryData",{}),B=(Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,v[e].states||{}]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,v[e].states||{}]))),Object.fromEntries(Object.keys(v).map((e=>[e,v[e].locale||{}]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),E=((0,n.getSetting)("addressFieldsLocations",B).address,(0,n.getSetting)("addressFieldsLocations",B).contact,(0,n.getSetting)("addressFieldsLocations",B).order,(0,n.getSetting)("additionalOrderFields",{}),(0,n.getSetting)("additionalContactFields",{}),(0,n.getSetting)("additionalAddressFields",{}),window.wp.blockEditor),S=window.wp.components;var P=t(7723),C=t(7104),T=t(885);const O=window.wp.data;var N=t(6087);const I=window.wp.notices,x=window.wp.coreData;t(4967),t(3803);const A="woocommerce/legacy-template",j="single-product",D="product-catalog",L="product-taxonomy",R="product-search-results",H="order-confirmation",G="archive-product",M={"single-product":{type:j,title:(0,P.__)("Product (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product page.","woocommerce"),placeholder:"single-product"},"archive-product":{type:D,title:(0,P.__)("Product Grid (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product grid page. ","woocommerce"),placeholder:G},"taxonomy-product_cat":{type:L,title:(0,P.__)("Product Category (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product category page.","woocommerce"),placeholder:G},"taxonomy-product_tag":{type:L,title:(0,P.__)("Product Tag (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product tag page.","woocommerce"),placeholder:G},"taxonomy-product_attribute":{type:L,title:(0,P.__)("Product Attribute (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product attribute page.","woocommerce"),placeholder:G},"taxonomy-product":{type:L,title:(0,P.__)("Product's Custom Taxonomy (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product's custom taxonomy page.","woocommerce"),placeholder:G},"product-search-results":{type:R,title:(0,P.__)("Product Search Results (Classic)","woocommerce"),description:(0,P.__)("Displays the PHP product search results.","woocommerce"),placeholder:G},"checkout-header":{type:"checkout-header",title:(0,P.__)("Checkout Header","woocommerce"),placeholder:"checkout-header"},"order-confirmation":{type:H,title:(0,P.__)("Order Confirmation Block","woocommerce"),placeholder:"fallback"}};function z(e,o){const t=Object.keys(o);let c=null;for(let r=0;t.length>r;r++){const l=o[e.substr(0,t[r].length)];if(l){c=l;break}}return c}const F=(e,o)=>{var t;const c="core/query-title",r=((null===(t=(0,i.getBlockType)(c))||void 0===t?void 0:t.variations)||[]).find((({name:o})=>o===e));if(!r)return null;const{attributes:l}=r,a={...l,...o,showPrefix:!1};return(0,i.createBlock)(c,a)},U=(e,o)=>{var t;const c="core/group",r=((null===(t=(0,i.getBlockType)(c))||void 0===t?void 0:t.variations)||[]).find((({name:e})=>"group-row"===e));if(!r)return null;const{attributes:l}=r,a={...l,...o,layout:{...l.layout,justifyContent:"space-between"}};return(0,i.createBlock)(c,a,e)},q=JSON.parse('{"name":"woocommerce/product-collection"}');let W=function(e){return e.GRID="flex",e.STACK="list",e}({}),Y=function(e){return e.FILL="fill",e.FIXED="fixed",e}({}),$=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const J=`${q.name}/product-title`,V=(0,n.getSetting)("stockStatusOptions",[]),K={perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",search:"",exclude:[],inherit:!1,taxQuery:{},isProductCollectionBlock:!0,featured:!1,woocommerceOnSale:!1,woocommerceStockStatus:(0,n.getSetting)("hideOutOfStockItems",!1)?Object.keys(function(e,o){const{[o]:t,...c}=e;return c}(V,"outofstock")):Object.keys(V),woocommerceAttributes:[],woocommerceHandPickedProducts:[],timeFrame:void 0,priceRange:void 0,filterable:!1,relatedBy:{categories:!0,tags:!0}},Q={query:K,tagName:"div",displayLayout:{type:W.GRID,columns:3,shrinkColumns:!0},dimensions:{widthType:Y.FILL},queryContextIncludes:["collection"],forcePageReload:!1},X=["woocommerce/product-template",{},[["woocommerce/product-image",{imageSizing:$.THUMBNAIL}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:J}],["woocommerce/product-price",{textAlign:"center",fontSize:"small"}],["woocommerce/product-button",{textAlign:"center",fontSize:"small"}]]],Z=[X,["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}}],["woocommerce/product-collection-no-results"]],ee=e=>(0,i.createBlock)("woocommerce/product-collection",{...Q,...e,query:{...K,inherit:!0}},(0,i.createBlocksFromInnerBlocksTemplate)(Z)),oe=(e,o=!1)=>[(0,i.createBlock)("woocommerce/breadcrumbs",e),F("archive-title",e),o?(0,i.createBlock)("core/term-description",e):null,(0,i.createBlock)("woocommerce/store-notices",e),U([(0,i.createBlock)("woocommerce/product-results-count"),(0,i.createBlock)("woocommerce/catalog-sorting")],e),ee(e)].filter(Boolean),te=()=>!0,ce=(e,o)=>o?(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),re=()=>(0,P.__)("Transform into blocks","woocommerce"),le={isConversionPossible:te,getDescription:ce,blockifyConfig:{getButtonLabel:re,onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,oe(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:oe}},ae={isConversionPossible:te,getDescription:ce,blockifyConfig:{getButtonLabel:re,onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,oe(o,!0));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:e=>oe(e,!0)}};var ie=t(4478);const ne=(0,P.__)("Product Title","woocommerce"),se=((0,a.createElement)(C.A,{icon:ie.A,className:"wc-block-editor-components-block-icon"}),(0,P.__)("Display the title of a product.","woocommerce")),me="woocommerce/product-query/product-title";!function(e,{blockDescription:o,blockIcon:t,blockTitle:c,variationName:r,scope:l}){(0,i.registerBlockVariation)(e,{description:o,name:r,title:c,isActive:e=>e.__woocommerceNamespace===r,icon:{src:t},attributes:{__woocommerceNamespace:r},scope:l})}("core/post-title",{blockDescription:se,blockIcon:(0,a.createElement)(S.Icon,{icon:ie.A}),blockTitle:ne,variationName:me,scope:["block"]});const de=()=>[(0,i.createBlock)("woocommerce/breadcrumbs"),(0,i.createBlock)("woocommerce/store-notices"),(0,i.createBlock)("core/columns",{align:"wide"},[(0,i.createBlock)("core/column",{type:"constrained",justifyContent:"right",width:"512px"},[(0,i.createBlock)("woocommerce/product-image-gallery")]),(0,i.createBlock)("core/column",{},[(0,i.createBlock)("core/post-title",{__woocommerceNamespace:me,level:1}),(0,i.createBlock)("woocommerce/product-rating"),(0,i.createBlock)("woocommerce/product-price",{fontSize:"large"}),(0,i.createBlock)("woocommerce/product-summary",{isDescendentOfSingleProductTemplate:!0}),(0,i.createBlock)("woocommerce/add-to-cart-form"),(0,i.createBlock)("woocommerce/product-meta")])]),(0,i.createBlock)("woocommerce/product-details",{align:"wide",className:"is-style-minimal"}),(0,i.createBlock)("core/heading",{align:"wide",level:2,content:(0,P.__)("Related Products","woocommerce"),style:{spacing:{margin:{bottom:"1rem"}}}}),(0,i.createBlock)("woocommerce/product-collection",{...Q,query:{...K,perPage:5,pages:1,woocommerceStockStatus:["instock","onbackorder"],filterable:!1},displayLayout:{type:"flex",columns:5,shrinkColumns:!0},collection:"woocommerce/product-collection/related",hideControls:["inherit"],align:"wide"},(0,i.createBlocksFromInnerBlocksTemplate)([X]))].filter(Boolean),pe=()=>!0,ue=(e,o)=>o?(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),we={getButtonLabel:()=>(0,P.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,getBlocks:o,replaceBlock:t,selectBlock:c})=>{t(e,de());const r=o().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/breadcrumbs"===e.name))));r&&c(r.clientId)},getBlockifiedTemplate:de},ke=e=>{const o=((e,o)=>{const t=[(0,i.createBlock)("core/paragraph",{content:(0,P.__)("No products were found matching your selection.","woocommerce")}),(0,i.createBlock)("core/search",{buttonPosition:"button-outside",buttonText:(0,P.__)("Search","woocommerce"),buttonUseIcon:!1,showLabel:!1,placeholder:(0,P.__)("Search products…","woocommerce"),query:{post_type:"product"}})],c="woocommerce/product-collection-no-results",r=e.findIndex((e=>e[0]===c)),l={...e[r][1]||{},...o},a=[c,l,t];return[...e.slice(0,r),a,...e.slice(r+1)]})(Z,e);return(0,i.createBlock)("woocommerce/product-collection",{...Q,...e,query:{...K,inherit:!0}},(0,i.createBlocksFromInnerBlocksTemplate)(o))},ge=e=>[F("search-title",e),(0,i.createBlock)("woocommerce/store-notices",e),U([(0,i.createBlock)("woocommerce/product-results-count"),(0,i.createBlock)("woocommerce/catalog-sorting")],e),ke(e)].filter(Boolean),_e=()=>!0,be=(e,o)=>o?(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,P.sprintf)(/* translators: %s is the template title */ /* translators: %s is the template title */
(0,P.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),fe={getButtonLabel:()=>(0,P.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,ge(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:ge},he=()=>!0,ye=e=>[(0,i.createBlock)("woocommerce/order-confirmation-status",{...e,fontSize:"large"}),(0,i.createBlock)("woocommerce/order-confirmation-summary",e),(0,i.createBlock)("woocommerce/order-confirmation-totals-wrapper",e),(0,i.createBlock)("woocommerce/order-confirmation-downloads-wrapper",e),(0,i.createBlock)("core/columns",{...e,className:"wc-block-order-confirmation-address-wrapper"},[(0,i.createBlock)("core/column",e,[(0,i.createBlock)("woocommerce/order-confirmation-shipping-wrapper",e)]),(0,i.createBlock)("core/column",e,[(0,i.createBlock)("woocommerce/order-confirmation-billing-wrapper",e)])]),(0,i.createBlock)("woocommerce/order-confirmation-additional-fields-wrapper",e),(0,i.createBlock)("woocommerce/order-confirmation-additional-information",e)].filter(Boolean),ve=()=>(0,P.__)("This block represents the classic template used to display the order confirmation. The actual rendered template may appear different from this placeholder.","woocommerce"),Be=()=>(0,a.createElement)("div",{className:"woocommerce-page"},(0,a.createElement)("div",{className:"woocommerce-order"},(0,a.createElement)("h1",null,(0,P.__)("Order received","woocommerce")),(0,a.createElement)("p",{className:"woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-confirmation"},(0,P.__)("Thank you. Your order has been received.","woocommerce")),(0,a.createElement)("ul",{className:"woocommerce-order-overview woocommerce-thankyou-order-details order_details"},(0,a.createElement)("li",{className:"woocommerce-order-overview__order order"},(0,P.__)("Order number","woocommerce"),":"," ",(0,a.createElement)("strong",null,"123")),(0,a.createElement)("li",{className:"woocommerce-order-overview__date date"},(0,P.__)("Date","woocommerce"),":"," ",(0,a.createElement)("strong",null,"May 25, 2023")),(0,a.createElement)("li",{className:"woocommerce-order-overview__email email"},(0,P.__)("Email","woocommerce"),":"," ",(0,a.createElement)("strong",null,"shopper@woocommerce.com")),(0,a.createElement)("li",{className:"woocommerce-order-overview__total total"},(0,P.__)("Total","woocommerce"),":"," ",(0,a.createElement)("strong",null,"$20.00"))),(0,a.createElement)("section",{className:"woocommerce-order-details"},(0,a.createElement)("h2",{className:"woocommerce-order-details__title"},(0,P.__)("Order details","woocommerce")),(0,a.createElement)("table",{className:"woocommerce-table woocommerce-table--order-details shop_table order_details"},(0,a.createElement)("thead",null,(0,a.createElement)("tr",null,(0,a.createElement)("th",{className:"woocommerce-table__product-name product-name"},(0,P.__)("Product","woocommerce")),(0,a.createElement)("th",{className:"woocommerce-table__product-table product-total"},(0,P.__)("Total","woocommerce")))),(0,a.createElement)("tbody",null,(0,a.createElement)("tr",{className:"woocommerce-table__line-item order_item"},(0,a.createElement)("td",{className:"woocommerce-table__product-name product-name"},"Sample Product"," ",(0,a.createElement)("strong",{className:"product-quantity"},"× 2")," "),(0,a.createElement)("td",{className:"woocommerce-table__product-total product-total"},"$20.00"))),(0,a.createElement)("tfoot",null,(0,a.createElement)("tr",null,(0,a.createElement)("th",{scope:"row"},(0,P.__)("Subtotal","woocommerce"),":"),(0,a.createElement)("td",null,"$20.00")),(0,a.createElement)("tr",null,(0,a.createElement)("th",{scope:"row"},(0,P.__)("Total","woocommerce"),":"),(0,a.createElement)("td",null,"$20.00"))))),(0,a.createElement)("section",{className:"woocommerce-customer-details"},(0,a.createElement)("section",{className:"woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses"},(0,a.createElement)("div",{className:"woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1"},(0,a.createElement)("h2",{className:"woocommerce-column__title"},(0,P.__)("Billing address","woocommerce")),(0,a.createElement)("address",null,"123 Main St",(0,a.createElement)("br",null),"New York, NY 10001",(0,a.createElement)("br",null),"United States (US)")),(0,a.createElement)("div",{className:"woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2"},(0,a.createElement)("h2",{className:"woocommerce-column__title"},(0,P.__)("Shipping address","woocommerce")),(0,a.createElement)("address",null,"123 Main St",(0,a.createElement)("br",null),"New York, NY 10001",(0,a.createElement)("br",null),"United States (US)")))))),Ee={getButtonLabel:()=>(0,P.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,ye(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:ye},Se={[D]:le,[L]:ae,[j]:c,[R]:r,[H]:l,fallback:{isConversionPossible:()=>!1,getBlockifiedTemplate:()=>[],getDescription:()=>"",onClickCallback:()=>{}}},Pe=({blockifyConfig:e,clientId:o,attributes:t})=>{const{getButtonLabel:c,onClickCallback:r,getBlockifiedTemplate:l}=e,[n,s]=(0,N.useState)(!1),{replaceBlock:m,selectBlock:d,replaceBlocks:p}=(0,O.useDispatch)(E.store),{getBlocks:u}=(0,O.useSelect)((e=>({getBlocks:e(E.store).getBlocks})),[]),{createInfoNotice:w}=(0,O.useDispatch)(I.store);return(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},(0,a.createElement)(S.Button,{variant:"primary",onClick:()=>{r({clientId:o,getBlocks:u,attributes:t,replaceBlock:m,selectBlock:d}),w((0,P.__)("Template transformed into blocks!","woocommerce"),{actions:[{label:(0,P.__)("Undo","woocommerce"),onClick:()=>{const e=u().reduce(((e,o)=>"core/template-part"===o.name?e:[...e,o.clientId]),[]);p(e,(0,i.createBlock)("core/group",{layout:{inherit:!0,type:"constrained"}},[(0,i.createBlock)("woocommerce/legacy-template",{template:t.template})]))}}],type:"snackbar"})},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),text:c?c():""},n&&(0,a.createElement)(S.Popover,{resize:!1,placement:"right-end"},(0,a.createElement)("div",{style:{minWidth:"250px",width:"250px",maxWidth:"250px",minHeight:"300px",height:"300px",maxHeight:"300px",cursor:"pointer"}},(0,a.createElement)(E.BlockPreview,{blocks:l({...t,isPreview:!0}),viewportWidth:1200,additionalStyles:[{css:"body { padding: 20px !important; height: fit-content !important; overflow:hidden}"}]})))))},Ce=({clientId:e,attributes:o,setAttributes:t})=>{var c,r,l,i;const n=(0,E.useBlockProps)(),{editedPostId:s}=(0,O.useSelect)((e=>({editedPostId:e("core/edit-site").getEditedPostId()})),[]),m=(0,x.useEntityRecord)("postType","wp_template",s),d=z(o.template,M),p=null!==(c=null===(r=m.record)||void 0===r||null===(r=r.title.rendered)||void 0===r?void 0:r.toLowerCase())&&void 0!==c?c:o.template,u=null!==(l=null==d?void 0:d.placeholder)&&void 0!==l?l:"fallback",w=null!==(i=null==d?void 0:d.type)&&void 0!==i?i:"fallback";(0,N.useEffect)((()=>{var e;return t({template:o.template,align:null!==(e=o.align)&&void 0!==e?e:"wide"})}),[o.align,o.template,t]);const{isConversionPossible:k,getDescription:g,getSkeleton:_,blockifyConfig:b}=Se[w],f=_?_():(0,a.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${h}template-placeholders/${u}.svg`,alt:p}),y=k(),v=g(p,y);return(0,a.createElement)("div",{...n},(0,a.createElement)(S.Placeholder,{className:"wp-block-woocommerce-classic-template__placeholder"},(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},f),(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy__icon-container"},(0,a.createElement)("h1",null,(0,P.__)("WooCommerce","woocommerce")),(0,a.createElement)("span",null,(0,P.__)("Classic Template Placeholder","woocommerce"))),(0,a.createElement)("p",{dangerouslySetInnerHTML:{__html:v}}),(0,a.createElement)("p",null,(0,P.__)("You cannot edit the content of this block. However, you can move it and place other blocks around it.","woocommerce")),y&&b&&(0,a.createElement)(Pe,{clientId:e,blockifyConfig:b,attributes:o}))))};let Te=null,Oe=!1,Ne=!1;const Ie=({template:e,inserter:o})=>{Oe&&(0,i.unregisterBlockType)(A),Ne=o,Oe=!0,(({template:e,inserter:o})=>{(0,i.registerBlockType)(A,{title:e&&M[e]?M[e].title:(0,P.__)("WooCommerce Classic Template","woocommerce"),icon:(0,a.createElement)(C.A,{icon:T.A,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:3,keywords:[(0,P.__)("WooCommerce","woocommerce")],description:e&&M[e]?M[e].description:(0,P.__)("Renders classic WooCommerce PHP templates.","woocommerce"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:o},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:({attributes:o,clientId:t,setAttributes:c})=>{const r=null!=e?e:o.template;return(0,a.createElement)(Ce,{attributes:{...o,template:r},setAttributes:c,clientId:t})},save:()=>null})})({template:e,inserter:o})};(0,O.subscribe)((()=>{var e,o;const t=null===(e=(0,O.select)(E.store))||void 0===e?void 0:e.getBlockCount(),c=null===(o=(0,O.select)("core/editor"))||void 0===o?void 0:o.getEditedPostSlug(),r=t&&t>0?c:null;if(Oe&&Te===r)return;if(Te=r,!r)return void(Oe||Ie({template:r,inserter:!1}));const l=!!z(r,M);l||!Ne?!l||Ne?l&&function(e,o){const t=z(o,M);return(null==e?void 0:e.title)!==(null==t?void 0:t.title)}((0,i.getBlockType)(A),r)&&Ie({template:r,inserter:!0}):Ie({template:r,inserter:!0}):Ie({template:r,inserter:!1})}),"core/blocks-editor")},4967:()=>{},3803:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var o=r[e];if(void 0!==o)return o.exports;var t=r[e]={exports:{}};return c[e].call(t.exports,t,t.exports,l),t.exports}l.m=c,e=[],l.O=(o,t,c,r)=>{if(!t){var a=1/0;for(m=0;m<e.length;m++){for(var[t,c,r]=e[m],i=!0,n=0;n<t.length;n++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](t[n])))?t.splice(n--,1):(i=!1,r<a&&(a=r));if(i){e.splice(m--,1);var s=c();void 0!==s&&(o=s)}}return o}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[t,c,r]},l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var a={};o=o||[null,t({}),t([]),t(t)];for(var i=2&c&&e;"object"==typeof i&&!~o.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((o=>a[o]=()=>e[o]));return a.default=()=>e,l.d(r,a),r},l.d=(e,o)=>{for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=2733,(()=>{var e={2733:0};l.O.j=o=>0===e[o];var o=(o,t)=>{var c,r,[a,i,n]=t,s=0;if(a.some((o=>0!==e[o]))){for(c in i)l.o(i,c)&&(l.m[c]=i[c]);if(n)var m=n(l)}for(o&&o(t);s<a.length;s++)r=a[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},t=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=l.O(void 0,[94],(()=>l(8984)));a=l.O(a),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["legacy-template"]=a})();