"use strict";(self.webpackChunkcodersouth=self.webpackChunkcodersouth||[]).push([[947],{8947:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var r,n,l=a(9526),o=a(6481),s=a(2166),u=a(9949),i=a(5547),c=a(3016),d=a(8245),m=a(2480),p=a(8539),g=a(9291),b=a(5615),h=a(1391),f=a(8570),E=a(9083);(n=r||(r={})).key="questions",n.path="questions/";const w=e=>Object.entries(e.val()).map((([e,t])=>({user:t.user,question:t.question,date:t.date,id:e}))).sort(((e,t)=>e.date>t.date?1:-1)),y=()=>{const{data:e,refetch:t}=(0,b.useQuery)(r.key,(async()=>{const e=await(0,h.U2)((0,h.iH)(E.db,r.path));return w(e)}));return(0,l.useEffect)((()=>{var e;e=()=>t(),(0,h.jM)((0,h.iH)(E.db,r.path),(t=>t.val()?e(w(t)):[]))}),[t]),{questions:null!=e?e:[],makeQuestion:e=>(e=>(0,h.t8)((0,h.iH)(E.db,`${r.path}${(0,f.Z)()}`),e))(e)}};var k=a(9804),v=Object.defineProperty,x=Object.defineProperties,q=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const S=()=>{const{user:e}=(0,k.a)(),[t,a]=(0,l.useState)(),{questions:r}=y(),n=(0,l.useMemo)((()=>t?r.filter((e=>e.user===t)):r),[t,r]),{handleSubmit:b,register:h}=(0,g.cI)(),{makeQuestion:f}=y(),E=(0,l.useCallback)((async({question:t})=>{await f({question:t,user:null==e?void 0:e.email,date:Date.now()})}),[f,e]);return l.createElement(o.gC,{alignItems:"flex-start",justifyContent:"stretch",spacing:8,width:"full"},l.createElement(s.X,null,"Preguntas"),l.createElement(u.x,null,"Hacer una pregunta:"),l.createElement(o.gC,{alignItems:"flex-start",background:"white",borderRadius:"2xl",boxShadow:"2xl",padding:"2rem 1.5rem",width:"full"},l.createElement("form",{onSubmit:b(E),style:{width:"100%"}},l.createElement(i.g,(w=((e,t)=>{for(var a in t||(t={}))j.call(t,a)&&P(e,a,t[a]);if(O)for(var a of O(t))C.call(t,a)&&P(e,a,t[a]);return e})({},h("question")),x(w,q({background:"teal.50",marginBottom:6,placeholder:"Pregunta",resize:"none",w:"full"})))),l.createElement(c.z,{type:"submit"},"Preguntar"))),l.createElement(u.x,null,t?"Mostrando solo mis preguntas":"Mostrando todas las preguntas"),l.createElement(o.Ug,null,l.createElement(c.z,{onClick:()=>a(void 0)},"Ver todas las preguntas"),l.createElement(c.z,{onClick:()=>a(null==e?void 0:e.email),variant:"ghost"},"Ver mis preguntas")),0===n.length&&t&&l.createElement(u.x,{color:"red.400",fontWeight:"extrabold"},"Todavia no preguntaste nada"),n.map((({user:e,id:t,question:a})=>l.createElement(d.k,{bg:"white",borderRadius:"2xl",boxShadow:"lg",key:t,padding:"1rem 1.2rem",width:"full"},l.createElement(m.qE,{name:null!=e?e:void 0}),l.createElement(p.xu,{ml:"3"},l.createElement(u.x,{fontWeight:"bold"},e),l.createElement(u.x,{fontSize:"sm"},a))))));var w}}}]);
//# sourceMappingURL=947.02edf83ccb8284d422bd.bundle.js.map