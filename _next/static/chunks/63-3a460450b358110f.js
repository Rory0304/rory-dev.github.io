"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{1408:function(e,s,t){t.r(s);var n=t(9268);t(6006);var i=t(4240),r=t(5507),l=t(9843),o=t(1771),d=t(3722),c=t(5846),a=t.n(c);let u=()=>(0,n.jsx)("footer",{children:(0,n.jsx)(o.Z,{bgcolor:"whitesmoke",paddingX:3,paddingY:5,children:(0,n.jsx)(l.Z,{maxWidth:"md",children:(0,n.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(i.Z,{variant:"body2",children:"\xa9 2023 Rory. All rights reserved."}),(0,n.jsx)(a(),{href:"/rss.xml",children:(0,n.jsx)(d.Z,{})})]})})})});s.default=u},792:function(e,s,t){t.r(s);var n=t(9268);t(6006);var i=t(1007),r=t(9843),l=t(5793),o=t(1771),d=t(4240),c=t(5507),a=t(7931),u=t(5846),h=t.n(u);let y=[{title:"Articles",url:"/"},{title:"Logs",url:"/logs"},{title:"About",url:"/about"}],S=()=>(0,n.jsx)(i.Z,{elevation:0,sx:{borderRadius:0,transition:"linear 0.2s",backdropFilter:"saturate(180%) blur(5px)",background:"hsla(0,0%,100%,.8)",boxShadow:"inset 0 -1px 0 0 #eaeaea"},children:(0,n.jsx)(r.Z,{maxWidth:"md",children:(0,n.jsx)(l.Z,{disableGutters:!0,children:(0,n.jsxs)(o.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(h(),{passHref:!0,href:"/",children:(0,n.jsx)(d.Z,{component:"h1",fontSize:24,fontWeight:800,sx:{marginY:2,display:"block",color:"black"},children:"RD"})})}),(0,n.jsx)(c.Z,{direction:"row",rowGap:1,children:y.map(e=>(0,n.jsx)(h(),{passHref:!0,href:e.url,children:(0,n.jsx)(a.Z,{color:"neutral",sx:{my:2,display:"block",color:"black",textTransform:"initial"},children:e.title})},e.title))})]})})})});s.default=S},6606:function(e,s,t){t.r(s);var n=t(9268);t(6006);var i=t(9843);let r=e=>{let{children:s}=e;return(0,n.jsx)("main",{children:(0,n.jsx)(i.Z,{maxWidth:"md",sx:{paddingY:8},children:s})})};s.default=r},7912:function(e,s,t){t.r(s),t.d(s,{default:function(){return Q}});var n,i,r,l,o,d,c,a,u,h,y,S,_,b,A,p,g,C,m=t(9268),x=t(6006),D=t(5846),f=t.n(D),P=t(6394),j=t.n(P),v=t(1771),E=t(3210),Z=t(3673),w=t(7095),F=t(8235),T=t(7595),V=t(4240),I=t(6267),k=t(2805),B=t(994),G=t(9346),R=t(1888);function L(){let e=(0,k._)(["\n  border-bottom: 0;\n  text-transform: none;\n  font-size: 1.25rem;\n  color: #d1d6db;\n  min-width: 0;\n  padding: 0;\n  margin-right: 1rem;\n  transition: all 0.15s;\n  font-weight: 600;\n\n  &:hover {\n    color: #333d4b;\n  }\n\n  &.Mui-selected {\n    color: #333d4b;\n  }\n"]);return L=function(){return e},e}let W=(0,R.Z)(G.Z)(L()),U=e=>{let{tabs:s,tab:t,total:n,onChange:i}=e,r=Object.keys(s);return(0,m.jsxs)(B.Z,{value:t,variant:"scrollable",onChange:(e,s)=>i(s),TabIndicatorProps:{sx:{display:"none"}},children:[(0,m.jsx)(W,{disableRipple:!0,value:"All",label:"전체 (".concat(n,")")}),r.map(e=>(0,m.jsx)(W,{disableRipple:!0,value:e,label:"".concat(e," ").concat(s[e]?"(".concat(s[e],")"):null)},e))]})};t(3883);var O=t(7056);function H(){let e=(0,k._)(["\n    fragment ArticleFields on Article {\n  sys {\n    id\n  }\n  title\n  slug\n  content\n  category\n  date\n  thumbnail {\n    url\n  }\n}\n    "]);return H=function(){return e},e}function z(){let e=(0,k._)(["\n    fragment LogsFields on Log {\n  sys {\n    id\n  }\n  title\n  content\n  youtubeUrl\n  media {\n    url\n  }\n  tag\n  date\n}\n    "]);return z=function(){return e},e}function N(){let e=(0,k._)(["\n    query GetArticle($slug: String!) {\n  articleCollection(where: {slug: $slug}) {\n    items {\n      ...ArticleFields\n    }\n  }\n}\n    ",""]);return N=function(){return e},e}function Y(){let e=(0,k._)(["\n    query GetArticles {\n  articleCollection(order: date_DESC) {\n    items {\n      ...ArticleFields\n    }\n  }\n}\n    ",""]);return Y=function(){return e},e}function M(){let e=(0,k._)(["\n    query GetArticleSlugs {\n  articleCollection(order: date_DESC) {\n    items {\n      slug\n    }\n  }\n}\n    "]);return M=function(){return e},e}function J(){let e=(0,k._)(["\n    query GetLogs {\n  logCollection {\n    items {\n      ...LogsFields\n    }\n  }\n}\n    ",""]);return J=function(){return e},e}(n=h||(h={})).CategoryAsc="category_ASC",n.CategoryDesc="category_DESC",n.DateAsc="date_ASC",n.DateDesc="date_DESC",n.SlugAsc="slug_ASC",n.SlugDesc="slug_DESC",n.SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",n.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",n.SysIdAsc="sys_id_ASC",n.SysIdDesc="sys_id_DESC",n.SysPublishedAtAsc="sys_publishedAt_ASC",n.SysPublishedAtDesc="sys_publishedAt_DESC",n.SysPublishedVersionAsc="sys_publishedVersion_ASC",n.SysPublishedVersionDesc="sys_publishedVersion_DESC",(i=y||(y={})).CategoryAsc="category_ASC",i.CategoryDesc="category_DESC",i.DateAsc="date_ASC",i.DateDesc="date_DESC",i.SlugAsc="slug_ASC",i.SlugDesc="slug_DESC",i.SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",i.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",i.SysIdAsc="sys_id_ASC",i.SysIdDesc="sys_id_DESC",i.SysPublishedAtAsc="sys_publishedAt_ASC",i.SysPublishedAtDesc="sys_publishedAt_DESC",i.SysPublishedVersionAsc="sys_publishedVersion_ASC",i.SysPublishedVersionDesc="sys_publishedVersion_DESC",(r=S||(S={})).DateAsc="date_ASC",r.DateDesc="date_DESC",r.SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",r.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",r.SysIdAsc="sys_id_ASC",r.SysIdDesc="sys_id_DESC",r.SysPublishedAtAsc="sys_publishedAt_ASC",r.SysPublishedAtDesc="sys_publishedAt_DESC",r.SysPublishedVersionAsc="sys_publishedVersion_ASC",r.SysPublishedVersionDesc="sys_publishedVersion_DESC",r.YoutubeUrlAsc="youtubeUrl_ASC",r.YoutubeUrlDesc="youtubeUrl_DESC",(l=_||(_={})).ContentTypeAsc="contentType_ASC",l.ContentTypeDesc="contentType_DESC",l.FileNameAsc="fileName_ASC",l.FileNameDesc="fileName_DESC",l.HeightAsc="height_ASC",l.HeightDesc="height_DESC",l.SizeAsc="size_ASC",l.SizeDesc="size_DESC",l.SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",l.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",l.SysIdAsc="sys_id_ASC",l.SysIdDesc="sys_id_DESC",l.SysPublishedAtAsc="sys_publishedAt_ASC",l.SysPublishedAtDesc="sys_publishedAt_DESC",l.SysPublishedVersionAsc="sys_publishedVersion_ASC",l.SysPublishedVersionDesc="sys_publishedVersion_DESC",l.UrlAsc="url_ASC",l.UrlDesc="url_DESC",l.WidthAsc="width_ASC",l.WidthDesc="width_DESC",(o=b||(b={})).SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",o.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",o.SysIdAsc="sys_id_ASC",o.SysIdDesc="sys_id_DESC",o.SysPublishedAtAsc="sys_publishedAt_ASC",o.SysPublishedAtDesc="sys_publishedAt_DESC",o.SysPublishedVersionAsc="sys_publishedVersion_ASC",o.SysPublishedVersionDesc="sys_publishedVersion_DESC",(d=A||(A={})).Avif="AVIF",d.Jpg="JPG",d.JpgProgressive="JPG_PROGRESSIVE",d.Png="PNG",d.Png8="PNG8",d.Webp="WEBP",(c=p||(p={})).Bottom="BOTTOM",c.BottomLeft="BOTTOM_LEFT",c.BottomRight="BOTTOM_RIGHT",c.Center="CENTER",c.Face="FACE",c.Faces="FACES",c.Left="LEFT",c.Right="RIGHT",c.Top="TOP",c.TopLeft="TOP_LEFT",c.TopRight="TOP_RIGHT",(a=g||(g={})).Crop="CROP",a.Fill="FILL",a.Fit="FIT",a.Pad="PAD",a.Scale="SCALE",a.Thumb="THUMB",(u=C||(C={})).DateAsc="date_ASC",u.DateDesc="date_DESC",u.SysFirstPublishedAtAsc="sys_firstPublishedAt_ASC",u.SysFirstPublishedAtDesc="sys_firstPublishedAt_DESC",u.SysIdAsc="sys_id_ASC",u.SysIdDesc="sys_id_DESC",u.SysPublishedAtAsc="sys_publishedAt_ASC",u.SysPublishedAtDesc="sys_publishedAt_DESC",u.SysPublishedVersionAsc="sys_publishedVersion_ASC",u.SysPublishedVersionDesc="sys_publishedVersion_DESC",u.YoutubeUrlAsc="youtubeUrl_ASC",u.YoutubeUrlDesc="youtubeUrl_DESC";let q=(0,O.Ps)(H()),X=(0,O.Ps)(z());(0,O.Ps)(N(),q),(0,O.Ps)(Y(),q),(0,O.Ps)(M()),(0,O.Ps)(J(),X);let $=e=>e?e.startsWith("/")?e.replace("/",""):e:"",K=e=>{let{articleList:s,tabList:t}=e,[n,i]=x.useState(1),[r,l]=x.useState("All"),[o,d]=x.useState(s),c=Math.ceil(o.length/10);return x.useEffect(()=>{if(i(1),"All"===r)d(s);else{let e=s.filter(e=>e.category===r);d(e)}},[r]),(0,m.jsxs)(v.Z,{paddingY:6,children:[(0,m.jsx)(U,{tabs:t,tab:r,total:s.length,onChange:l}),(0,m.jsx)(E.Z,{disablePadding:!0,sx:{marginBottom:4},children:o.map((e,s)=>{var t;let n=e.date?new Date(e.date).toLocaleDateString():"";return e.slug?(0,m.jsx)(f(),{href:"/articles/".concat($(e.slug)),children:(0,m.jsx)(Z.ZP,{disablePadding:!0,divider:!0,children:(0,m.jsxs)(w.Z,{sx:{display:"flex",flexGrow:1,justifyContent:"space-between",boxShadow:"none",paddingY:4,borderRadius:0,alignItems:"center",":hover":{"p:first-of-type":{color:"coral"}}},children:[(0,m.jsxs)(F.Z,{sx:{padding:0,marginRight:4},children:[(0,m.jsx)(T.Z,{label:e.category,size:"small",sx:{borderRadius:4,marginBottom:2}}),(0,m.jsx)(V.Z,{component:"p",variant:"h5",marginBottom:1,fontWeight:400,sx:{transition:"color 0.15s"},children:e.title}),(0,m.jsx)(V.Z,{component:"p",variant:"body1",color:"GrayText",marginBottom:3,sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"},children:e.content}),(0,m.jsx)(V.Z,{component:"span",variant:"caption",color:"GrayText",children:(0,m.jsx)("time",{dateTime:n,suppressHydrationWarning:!0,children:n})})]}),(null===(t=e.thumbnail)||void 0===t?void 0:t.url)?(0,m.jsx)(j(),{src:e.thumbnail.url,alt:"",width:150,height:150,style:{objectFit:"cover"}}):null]})})},"article-".concat(s)):null})}),(0,m.jsx)(v.Z,{children:(0,m.jsx)(I.Z,{shape:"rounded",count:c,page:n,onChange:(e,s)=>i(s)})})]})};var Q=K},133:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var n=t(2805),i=t(9268),r=t(6006),l=t(1888),o=t(1771),d=t(3210),c=t(3673),a=t(4240),u=t(5507),h=t(6267);function y(){let e=(0,n._)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */\n"]);return y=function(){return e},e}function S(){let e=(0,n._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n"]);return S=function(){return e},e}t(6606),t(792),t(1408);let _=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([a-zA-Z0-9\-_]+)/,b=(0,l.Z)(o.Z)(y()),A=l.Z.iframe(S()),p=e=>{let{videoUrl:s}=e,t=r.useCallback(()=>{let e=s.match(_);if(!e)return null;{let s=e[1];return s}},[s]),n=t();return(0,i.jsx)(b,{children:(0,i.jsx)(A,{allowFullScreen:!0,id:"player",src:"https://www.youtube.com/embed/".concat(n),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"})})};function g(){let e=(0,n._)(["\n  &.markdown-body {\n    menu,\n    ol,\n    ul {\n      list-style: revert;\n    }\n  }\n"]);return g=function(){return e},e}let C=(0,l.Z)(o.Z)(g()),m=e=>{let{logList:s}=e,[t,n]=r.useState(1),l=Math.ceil(s.length/10);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{disablePadding:!0,sx:{marginBottom:4},children:s.map((e,s)=>{let t=new Date(e.date).toLocaleDateString();return(0,i.jsx)(c.ZP,{disablePadding:!0,divider:!0,children:(0,i.jsxs)("article",{children:[(0,i.jsxs)(o.Z,{paddingBottom:3,children:[(0,i.jsx)(a.Z,{variant:"h5",component:"h2",paddingBottom:1,children:e.title}),(0,i.jsx)(a.Z,{variant:"caption",component:"p",color:"GrayText",children:(0,i.jsx)("time",{dateTime:t,suppressHydrationWarning:!0,children:t})})]}),(0,i.jsxs)(o.Z,{paddingBottom:3,children:[e.youtubeUrl?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{videoUrl:e.youtubeUrl}),(0,i.jsx)(o.Z,{paddingBottom:3})]}):null,(0,i.jsx)(C,{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.content}})]}),(0,i.jsx)(u.Z,{direction:"row",columnGap:1,paddingBottom:3,children:e.tag.map((e,s)=>(0,i.jsxs)(a.Z,{variant:"body2",color:"GrayText",children:["#",e]},s))})]})},"log-".concat(s))})})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(h.Z,{shape:"rounded",count:l,page:t,onChange:(e,s)=>n(s)})})]})};var x=m},1547:function(e,s,t){t.r(s);var n=t(9268);t(6006);var i=t(5507),r=t(4240);let l=e=>{let{title:s,description:t}=e;return(0,n.jsxs)(i.Z,{paddingY:8,component:"header",children:[(0,n.jsx)(r.Z,{variant:"h3",component:"h1",fontWeight:800,marginBottom:2,children:s}),(0,n.jsx)(r.Z,{variant:"body1",color:"grayText",children:t})]})};s.default=l},809:function(e,s,t){t.r(s);var n=t(9268);t(6006);var i=t(1824),r=t(6008);let l=e=>{var s;let{title:t,description:l,canonical:o}=e,d=(0,r.usePathname)();return(0,n.jsx)(i.PB,{title:null!=t?t:void 0,description:null!=l?l:void 0,canonical:null!==(s=null!=o?o:d)&&void 0!==s?s:void 0})};s.default=l},3883:function(e,s,t){var n=t(5203),i=t(1737);let r=new n.f({uri:"".concat("https://graphql.contentful.com/content/v1","/spaces/").concat("98cksird3kze","/environments/").concat("master","?access_token=").concat("VDFvzsJJZ9S8kVxW__5bPj9yn44Jp6AiX08Hlse6494"),cache:new i.h});s.Z=r}}]);