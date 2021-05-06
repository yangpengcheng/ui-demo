import{_ as l}from"./Property.a8a5d2de.js";import{k as a,o as e,c as o,a as t,d,t as i,F as u,i as s,r as n}from"./vendor.44a3bf71.js";const V={components:{PropertyTable:l},setup:()=>({switchVal:a(),radioVal2:a(),data:[{param:"v-model",description:"switch绑定的value",type:"Boolean",optional:"true / false",default:"false"},{param:"label",description:"标签",type:"String",optional:"-",default:"-"},{param:"color",description:"颜色",type:"String",optional:"attention / danger / info / primary / success / warning / 自定义值",default:"primary"},{param:"disabled",description:"是否禁用",type:"Boolean",optional:"true / false",default:"false"},{param:"size",description:"尺寸",type:"String",optional:"large / default / small",default:"default"}]})},c=s(),r=c(((l,a,s,V,r,m)=>{const p=n("y-switch"),w=n("y-accordion-item"),h=n("y-accordion"),b=n("property-table");return e(),o(u,null,[t(h,null,{default:c((()=>[t(w,{title:"基本使用"},{default:c((()=>[t(p,{label:"1",modelValue:V.switchVal,"onUpdate:modelValue":a[1]||(a[1]=l=>V.switchVal=l),color:"attention"},null,8,["modelValue"]),t(p,{label:"2",modelValue:V.switchVal,"onUpdate:modelValue":a[2]||(a[2]=l=>V.switchVal=l),color:"danger"},null,8,["modelValue"]),t(p,{label:"3",modelValue:V.switchVal,"onUpdate:modelValue":a[3]||(a[3]=l=>V.switchVal=l),color:"info"},null,8,["modelValue"]),t(p,{label:"4",modelValue:V.switchVal,"onUpdate:modelValue":a[4]||(a[4]=l=>V.switchVal=l),color:"primary"},null,8,["modelValue"]),t(p,{label:"5",modelValue:V.switchVal,"onUpdate:modelValue":a[5]||(a[5]=l=>V.switchVal=l),color:"success"},null,8,["modelValue"]),t(p,{label:"6",modelValue:V.switchVal,"onUpdate:modelValue":a[6]||(a[6]=l=>V.switchVal=l),color:"warning"},null,8,["modelValue"]),d(" "+i(V.switchVal),1)])),_:1}),t(w,{title:"禁用"},{default:c((()=>[t(p,{label:"1",modelValue:V.switchVal,"onUpdate:modelValue":a[7]||(a[7]=l=>V.switchVal=l),color:"attention",disabled:""},null,8,["modelValue"]),t(p,{label:"2",modelValue:V.switchVal,"onUpdate:modelValue":a[8]||(a[8]=l=>V.switchVal=l),color:"danger",disabled:""},null,8,["modelValue"]),t(p,{label:"3",modelValue:V.switchVal,"onUpdate:modelValue":a[9]||(a[9]=l=>V.switchVal=l),color:"info",disabled:""},null,8,["modelValue"]),t(p,{label:"4",modelValue:V.switchVal,"onUpdate:modelValue":a[10]||(a[10]=l=>V.switchVal=l),color:"primary",disabled:""},null,8,["modelValue"]),t(p,{label:"5",modelValue:V.switchVal,"onUpdate:modelValue":a[11]||(a[11]=l=>V.switchVal=l),color:"success",disabled:""},null,8,["modelValue"]),t(p,{label:"6",modelValue:V.switchVal,"onUpdate:modelValue":a[12]||(a[12]=l=>V.switchVal=l),color:"warning",disabled:""},null,8,["modelValue"])])),_:1}),t(w,{title:"尺寸"},{default:c((()=>[t(p,{label:"1",modelValue:V.switchVal,"onUpdate:modelValue":a[13]||(a[13]=l=>V.switchVal=l),color:"attention",size:"large"},null,8,["modelValue"]),t(p,{label:"2",modelValue:V.switchVal,"onUpdate:modelValue":a[14]||(a[14]=l=>V.switchVal=l),color:"danger",size:"default"},null,8,["modelValue"]),t(p,{label:"3",modelValue:V.switchVal,"onUpdate:modelValue":a[15]||(a[15]=l=>V.switchVal=l),color:"info",size:"small"},null,8,["modelValue"])])),_:1})])),_:1}),t(b,{data:V.data},null,8,["data"])],64)}));V.render=r,V.__scopeId="data-v-276e6a59";export default V;