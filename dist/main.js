(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=document.createElement("div");return e.innerText="X",e.addEventListener("click",l),e}e.d({},{Ik:()=>p,CF:()=>s,tz:()=>m});class n{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}}let r=[];function c(e){let t=new n(e),c=document.createElement("div");return c.addEventListener("click",o),c.innerText=t.name,document.querySelector("#header").innerHTML="",s(),document.querySelector("#header").appendChild(c),p(),r.push(t),t}function o(){document.querySelector("#formLocation").innerHTML="";let e=document.createElement("div");e.className="projectDisplay",document.querySelector("#formLocation").appendChild(e),e.appendChild(t());for(const t of r){let n=document.createElement("div");n.innerText=t.name,e.appendChild(n)}}function i(e){document.querySelector("#content").innerHTML="",m(e);for(const t of e.taskList)a(e,t)}class d{constructor(e){this.name=e[0],this.description=e[1],this.dueDate=e[2],this.priority=e[3],this.complete=!1}}function a(e,t){let n=document.createElement("div");n.className="task",document.querySelector("#content").appendChild(n);for(const e of function(e){let t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");return t.innerText=`Name: ${e.name}`,n.innerText=`Description: ${e.description}`,r.innerText=`Due Date: ${e.dueDate}`,c.innerText=`Priority: ${e.priority}`,[t,n,r,c]}(t))n.appendChild(e);n.appendChild(function(e){let t=document.createElement("button");return!1===e.complete?t.innerText="❌":t.innerText="✔️",t.classList.add("checkMark"),t.addEventListener("click",(()=>{"✔️"===t.innerText?(t.innerText="❌",e.complete=!1):(t.innerText="✔️",e.complete=!0)})),t}(t)),n.appendChild(function(e,t){let n=document.createElement("button");return n.innerText="X",n.addEventListener("click",(()=>{n.parentNode.parentNode.removeChild(n.parentNode),function(e,t){let n=0;for(const r of e.taskList)r===t&&e.taskList.splice(n,1),n++;i(e)}(e,t)})),n}(e,t))}function u(e){let n=document.createElement("form");n.className="form",document.querySelector("#formLocation").appendChild(n),n.appendChild(t());for(const e of function(){let e=[];for(const t of["name","description","dueDate","priority"]){let n=document.createElement("input");n.setAttribute("input","text"),n.setAttribute("id",t),e.push(n)}return e}())n.appendChild(e);n.appendChild(function(e){let t=document.createElement("div");return t.innerText="Enter",t.addEventListener("click",(()=>{let t=function(){let e=document.querySelector("#name").value,t=document.querySelector("#description").value,n=document.querySelector("#dueDate").value,r=document.querySelector("#priority").value;return new d([e,t,n,r])}();e.addTask(t),i(e),l()})),t}(e))}function l(){document.querySelector("#formLocation").innerHTML=""}function m(e){let t=document.createElement("div");t.innerText="Add Task",t.setAttribute("id","addTask"),document.querySelector("#content").appendChild(t),document.querySelector("#addTask").addEventListener("click",(()=>{u(e)}))}function s(){const e=document.createElement("div");e.setAttribute("id","#switchProject"),e.innerText="Switch Project",e.addEventListener("click",(()=>{!function(e){for(const t of r)if(t.name===e){document.querySelector("#content").innerHTML="",i(t);let e=document.createElement("div");return e.innerText=t.name,document.querySelector("#header").innerHTML="",s(),document.querySelector("#header").appendChild(e),void p()}alert("Error, no such project name!")}(prompt("Switch to which project?"))})),document.querySelector("#header").appendChild(e)}function p(){const e=document.createElement("div");e.setAttribute("id","#addProject"),e.innerText="New Project",e.addEventListener("click",(()=>{i(c(prompt("What do you want to name the project?")))})),document.querySelector("#header").appendChild(e)}m(c("Project 1"))})();