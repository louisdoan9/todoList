(()=>{"use strict";class e{constructor(e){this.name=e[0],this.description=e[1],this.dueDate=e[2],this.priority=e[3]}}function t(){document.querySelector("#formLocation").innerHTML=""}console.log("test4"),document.querySelector("#addTask").addEventListener("click",(function(){console.log("Test");let n=document.createElement("form");n.className="form",document.querySelector("#formLocation").appendChild(n);let i=document.createElement("div");i.innerText="X",i.addEventListener("click",t),n.appendChild(i);let d=document.createElement("input");d.setAttribute("input","text"),d.setAttribute("id","name"),n.appendChild(d);let r=document.createElement("input");r.setAttribute("input","text"),r.setAttribute("id","description"),n.appendChild(r);let c=document.createElement("input");c.setAttribute("input","text"),c.setAttribute("id","dueDate"),n.appendChild(c);let l=document.createElement("input");l.setAttribute("input","text"),l.setAttribute("id","priority"),n.appendChild(l);let o=document.createElement("div");o.innerText="Enter",o.addEventListener("click",(()=>{let n=function(){let t=document.querySelector("#name").value,n=document.querySelector("#description").value,i=document.querySelector("#dueDate").value,d=document.querySelector("#priority").value;return new e([t,n,i,d])}();!function(e){let t=document.createElement("div");t.className="task",document.querySelector("#content").appendChild(t);let n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div");n.innerText=`Name: ${e.name}`,i.innerText=`Description: ${e.description}`,d.innerText=`Due Date: ${e.dueDate}`,r.innerText=`Priority: ${e.priority}`,t.appendChild(n),t.appendChild(i),t.appendChild(d),t.appendChild(r);let c=document.createElement("button");c.innerText="❌",c.classList.add("checkMark"),c.addEventListener("click",(()=>{"✔️"===c.innerText?c.innerText="❌":c.innerText="✔️"})),t.appendChild(c);let l=document.createElement("button");l.innerText="X",l.addEventListener("click",(()=>{l.parentNode.parentNode.removeChild(l.parentNode)})),t.appendChild(l)}(n),t()})),n.appendChild(o)}))})();