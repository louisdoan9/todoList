(()=>{"use strict";function e(){document.querySelector("#formLocation").innerHTML=""}console.log("test4"),document.querySelector("#addTask").addEventListener("click",(function(){console.log("Test");let t=document.createElement("form");t.className="form",document.querySelector("#formLocation").appendChild(t);let n=document.createElement("div");n.innerText="X",n.addEventListener("click",e),t.appendChild(n)}))})();