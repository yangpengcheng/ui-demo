import{_ as l}from"./Property.a8a5d2de.js";import{_ as e}from"./Slot.73f108e4.js";import{_ as a}from"./Event.a8687237.js";import{p as t,h as o,o as i,c as r,a as n,F as c,i as d,d as s,r as u}from"./vendor.44a3bf71.js";const f={components:{PropertyTable:l,SlotTable:e,EventTable:a},setup:()=>({debounce:{wait:2e3,options:{leading:!0,maxWait:3e3,trailing:!1}},throttle:{wait:2e3,options:{leading:!0,trailing:!1}},click:l=>{console.log(Object.prototype.toString.call(l)),console.log("click",l.target)},data:[{param:"color",description:"颜色",type:"String",optional:"attention / danger / info / primary / success / warning / 自定义值",default:"primary"},{param:"effect",description:"效果",type:"String",optional:"dark / light / outline",default:"dark"},{param:"circle",description:"是否圆形按钮",type:"Boolean",optional:"true / false",default:"false"},{param:"iconClass",description:"图标类名",type:"String",optional:"-",default:"-"},{param:"disabled",description:"是否禁用",type:"Boolean",optional:"true / false",default:"false"},{param:"size",description:"尺寸",type:"String",optional:"large / default / small",default:"default"},{param:"loading",description:"是否加载中",type:"Boolean",optional:"true / false",default:"false"},{param:"debounce",description:"防抖参数",type:"Object",optional:"-",default:"-"},{param:"throttle",description:"节流参数",type:"Object",optional:"-",default:"-"}],slots:[{name:"default",description:"按钮内部内容"}],events:[{name:"change",description:"点击button时触发的事件",param:"evt:PointerEvent"}]})},_=d();t("data-v-dd7e37a6");const p=s("注意按钮"),b=s("危险按钮"),m=s("信息按钮"),g=s("主要按钮"),y=s("成功按钮"),z=s("警告按钮"),h=s("注意按钮"),C=s("危险按钮"),w=s("信息按钮"),v=s("主要按钮"),k=s("成功按钮"),j=s("警告按钮"),S=n("br",null,null,-1),x=s("注意按钮"),B=s("危险按钮"),E=s("信息按钮"),O=s("主要按钮"),P=s("成功按钮"),T=s("警告按钮"),W=n("br",null,null,-1),F=s("注意按钮"),I=s("危险按钮"),q=s("信息按钮"),A=s("主要按钮"),D=s("成功按钮"),G=s("警告按钮"),H=s("注意按钮"),J=s("危险按钮"),K=s("信息按钮"),L=s("主要按钮"),M=s("成功按钮"),N=s("警告按钮"),Q=n("br",null,null,-1),R=s("注意按钮"),U=s("危险按钮"),V=s("信息按钮"),X=s("主要按钮"),Y=s("成功按钮"),Z=s("警告按钮"),$=n("br",null,null,-1),ll=s(" 注意按钮 "),el=s("危险按钮"),al=s("信息按钮"),tl=s("主要按钮"),ol=s("成功按钮"),il=s("警告按钮"),rl=s("危险按钮"),nl=s("危险按钮"),cl=s("信息按钮"),dl=s("信息按钮"),sl=s("主要按钮"),ul=s("主要按钮"),fl=s(" 闹钟 "),_l=s(" 闹钟 "),pl=s("闹钟"),bl=n("i",{class:"bi bi-alarm large y-button__icon"},null,-1),ml=n("span",null,"闹钟",-1),gl=n("i",{class:"bi bi-alarm large y-button__icon"},null,-1),yl=n("i",{class:"bi bi-alarm default y-button__icon"},null,-1),zl=n("span",null,"闹钟",-1),hl=n("i",{class:"bi bi-alarm default y-button__icon"},null,-1),Cl=n("i",{class:"bi bi-alarm small y-button__icon"},null,-1),wl=n("span",null,"闹钟",-1),vl=n("i",{class:"bi bi-alarm small y-button__icon"},null,-1),kl=s("主要按钮"),jl=n("p",null,"防抖:[wait=0], [options=],",-1),Sl=n("p",null,"[wait=0] (number): 需要延迟的毫秒数",-1),xl=n("p",null,"[options.leading=false] (boolean): 指定在延迟开始前调用",-1),Bl=n("p",null,"[options.maxWait] (number): 设置 func 允许被延迟的最大值",-1),El=n("p",null,"[options.trailing=true] (boolean): 指定在延迟结束后调用",-1),Ol=s("注意按钮"),Pl=n("p",null,"节流:[wait=0], [options=],",-1),Tl=n("p",null,"[wait=0] (number): 需要节流的毫秒",-1),Wl=n("p",null,"[options.leading=true] (boolean): 指定调用在节流开始前",-1),Fl=n("p",null,"[options.trailing=true] (boolean): 指定调用在节流结束后。",-1),Il=s("注意按钮"),ql=s("自定义按钮");o();const Al=_(((l,e,a,t,o,d)=>{const s=u("y-button"),f=u("y-accordion-item"),Al=u("y-accordion"),Dl=u("property-table"),Gl=u("slot-table"),Hl=u("event-table");return i(),r(c,null,[n("div",null,[n(Al,null,{default:_((()=>[n(f,{title:"颜色"},{default:_((()=>[n(s,{color:"attention"},{default:_((()=>[p])),_:1}),n(s,{color:"danger"},{default:_((()=>[b])),_:1}),n(s,{color:"info"},{default:_((()=>[m])),_:1}),n(s,{color:"primary"},{default:_((()=>[g])),_:1}),n(s,{color:"success"},{default:_((()=>[y])),_:1}),n(s,{color:"warning"},{default:_((()=>[z])),_:1})])),_:1}),n(f,{title:"效果"},{default:_((()=>[n(s,{color:"attention"},{default:_((()=>[h])),_:1}),n(s,{color:"danger"},{default:_((()=>[C])),_:1}),n(s,{color:"info"},{default:_((()=>[w])),_:1}),n(s,{color:"primary"},{default:_((()=>[v])),_:1}),n(s,{color:"success"},{default:_((()=>[k])),_:1}),n(s,{color:"warning"},{default:_((()=>[j])),_:1}),S,n(s,{effect:"light",color:"attention"},{default:_((()=>[x])),_:1}),n(s,{effect:"light",color:"danger"},{default:_((()=>[B])),_:1}),n(s,{effect:"light",color:"info"},{default:_((()=>[E])),_:1}),n(s,{effect:"light",color:"primary"},{default:_((()=>[O])),_:1}),n(s,{effect:"light",color:"success"},{default:_((()=>[P])),_:1}),n(s,{effect:"light",color:"warning"},{default:_((()=>[T])),_:1}),W,n(s,{effect:"outline",color:"attention"},{default:_((()=>[F])),_:1}),n(s,{effect:"outline",color:"danger"},{default:_((()=>[I])),_:1}),n(s,{effect:"outline",color:"info"},{default:_((()=>[q])),_:1}),n(s,{effect:"outline",color:"primary"},{default:_((()=>[A])),_:1}),n(s,{effect:"outline",color:"success"},{default:_((()=>[D])),_:1}),n(s,{effect:"outline",color:"warning"},{default:_((()=>[G])),_:1})])),_:1}),n(f,{title:"圆形按钮"},{default:_((()=>[n(s,{circle:"",color:"attention",iconClass:"bi-alarm"}),n(s,{circle:"",color:"danger",iconClass:"bi-alarm"}),n(s,{circle:"",color:"info",iconClass:"bi-alarm"}),n(s,{circle:"",color:"primary",iconClass:"bi-alarm"}),n(s,{circle:"",color:"success",iconClass:"bi-alarm"}),n(s,{circle:"",color:"warning",iconClass:"bi-alarm"})])),_:1}),n(f,{title:"禁用状态"},{default:_((()=>[n(s,{disabled:"",color:"attention"},{default:_((()=>[H])),_:1}),n(s,{disabled:"",color:"danger"},{default:_((()=>[J])),_:1}),n(s,{disabled:"",color:"info"},{default:_((()=>[K])),_:1}),n(s,{disabled:"",color:"primary"},{default:_((()=>[L])),_:1}),n(s,{disabled:"",color:"success"},{default:_((()=>[M])),_:1}),n(s,{disabled:"",color:"warning"},{default:_((()=>[N])),_:1}),Q,n(s,{disabled:"",effect:"light",color:"attention"},{default:_((()=>[R])),_:1}),n(s,{disabled:"",effect:"light",color:"danger"},{default:_((()=>[U])),_:1}),n(s,{disabled:"",effect:"light",color:"info"},{default:_((()=>[V])),_:1}),n(s,{disabled:"",effect:"light",color:"primary"},{default:_((()=>[X])),_:1}),n(s,{disabled:"",effect:"light",color:"success"},{default:_((()=>[Y])),_:1}),n(s,{disabled:"",effect:"light",color:"warning"},{default:_((()=>[Z])),_:1}),$,n(s,{disabled:"",effect:"outline",color:"attention"},{default:_((()=>[ll])),_:1}),n(s,{disabled:"",effect:"outline",color:"danger"},{default:_((()=>[el])),_:1}),n(s,{disabled:"",effect:"outline",color:"info"},{default:_((()=>[al])),_:1}),n(s,{disabled:"",effect:"outline",color:"primary"},{default:_((()=>[tl])),_:1}),n(s,{disabled:"",effect:"outline",color:"success"},{default:_((()=>[ol])),_:1}),n(s,{disabled:"",effect:"outline",color:"warning"},{default:_((()=>[il])),_:1})])),_:1}),n(f,{title:"尺寸"},{default:_((()=>[n(s,{size:"large",color:"danger"},{default:_((()=>[rl])),_:1}),n(s,{size:"large",round:"",color:"danger"},{default:_((()=>[nl])),_:1}),n(s,{size:"large",circle:"",color:"danger",iconClass:"bi-alarm"}),n(s,{size:"default",color:"info"},{default:_((()=>[cl])),_:1}),n(s,{size:"default",round:"",color:"info"},{default:_((()=>[dl])),_:1}),n(s,{size:"default",circle:"",color:"info",iconClass:"bi-alarm"}),n(s,{size:"small",color:"primary"},{default:_((()=>[sl])),_:1}),n(s,{size:"small",round:"",color:"primary"},{default:_((()=>[ul])),_:1}),n(s,{size:"small",circle:"",color:"primary",iconClass:"bi-alarm"})])),_:1}),n(f,{title:"图标(图标类名)"},{default:_((()=>[n(s,{size:"large",color:"attention",iconClass:"bi-alarm"},{default:_((()=>[fl])),_:1}),n(s,{size:"large",circle:"",color:"attention",iconClass:"bi-alarm"}),n(s,{size:"default",color:"danger",iconClass:"bi-alarm"},{default:_((()=>[_l])),_:1}),n(s,{size:"default",circle:"",color:"danger",iconClass:"bi-alarm"}),n(s,{size:"small",color:"info",iconClass:"bi-alarm"},{default:_((()=>[pl])),_:1}),n(s,{size:"small",circle:"",color:"info",iconClass:"bi-alarm"})])),_:1}),n(f,{title:"图标(默认插槽)"},{default:_((()=>[n(s,{size:"large",color:"attention"},{default:_((()=>[bl,ml])),_:1}),n(s,{size:"large",circle:"",color:"attention"},{default:_((()=>[gl])),_:1}),n(s,{size:"default",color:"danger"},{default:_((()=>[yl,zl])),_:1}),n(s,{size:"default",circle:"",color:"danger"},{default:_((()=>[hl])),_:1}),n(s,{size:"small",color:"info"},{default:_((()=>[Cl,wl])),_:1}),n(s,{size:"small",circle:"",color:"info"},{default:_((()=>[vl])),_:1})])),_:1}),n(f,{title:"加载中"},{default:_((()=>[n(s,{loading:""},{default:_((()=>[kl])),_:1})])),_:1}),n(f,{title:"防抖节流"},{default:_((()=>[jl,Sl,xl,Bl,El,n(s,{debounce:t.debounce,onClick:t.click},{default:_((()=>[Ol])),_:1},8,["debounce","onClick"]),Pl,Tl,Wl,Fl,n(s,{throttle:t.throttle,onClick:t.click},{default:_((()=>[Il])),_:1},8,["throttle","onClick"])])),_:1}),n(f,{title:"自定义样式"},{default:_((()=>[n(s,{color:"customer"},{default:_((()=>[ql])),_:1})])),_:1})])),_:1})]),n(Dl,{data:t.data},null,8,["data"]),n(Gl,{data:t.slots},null,8,["data"]),n(Hl,{data:t.events},null,8,["data"])],64)}));f.render=Al,f.__scopeId="data-v-dd7e37a6";export default f;
