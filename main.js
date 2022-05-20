(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t){var r,o=document.createElement("form");o.className="form",document.querySelector("#formLocation").appendChild(o),o.appendChild(((r=document.createElement("button")).innerText="X",r.addEventListener("click",n),r));var i,a=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(function(){for(var e=[],t=0,n=["name","description","dueDate","priority"];t<n.length;t++){var r=n[t],o=document.createElement("input");o.setAttribute("id",r),"dueDate"===r?(o.setAttribute("type","date"),o.setAttribute("required","")):"priority"===r?(o.setAttribute("type","number"),o.setAttribute("min","1"),o.setAttribute("max","4"),o.setAttribute("required","")):"name"===r?(o.setAttribute("type","text"),o.setAttribute("minlength","1"),o.setAttribute("maxlength","15"),o.setAttribute("required","")):(o.setAttribute("type","text"),o.setAttribute("maxlength","30"),o.setAttribute("required",""));var i=document.createElement("label");i.setAttribute("for",r),i.innerText="".concat(r.charAt(0).toUpperCase()+r.slice(1),":");var a=document.createElement("div");a.appendChild(i),a.appendChild(o),e.push(a)}return e}());try{for(a.s();!(i=a.n()).done;){var u=i.value;o.appendChild(u)}}catch(e){a.e(e)}finally{a.f()}o.appendChild(function(e){var t=document.createElement("button");return t.innerText="Enter",t.addEventListener("click",(function(){if(!0===function(){for(var e=0,t=[document.querySelector("#name"),document.querySelector("#description"),document.querySelector("#dueDate"),document.querySelector("#priority")];e<t.length;e++)if(!0!==t[e].checkValidity())return!1;return!0}()){console.log("yup");var t=(r=document.querySelector("#name").value,o=document.querySelector("#description").value,i=document.querySelector("#dueDate").value,a=document.querySelector("#priority").value,new c([r,o,i,a]));e.addTask(t),h(e),n()}var r,o,i,a})),t}(t))}function n(){document.querySelector("#formLocation").innerHTML=""}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=a((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t[0],this.description=t[1],this.dueDate=t[2],this.priority=t[3],this.complete=!1}));function u(e,t){var n=document.createElement("div");n.className="task",document.querySelector("#content").appendChild(n);var o,i=r(function(e){var t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");return t.innerText="Name: ".concat(e.name),n.innerText="Description: ".concat(e.description),r.innerText="Due Date: ".concat(e.dueDate),o.innerText="Priority: ".concat(e.priority),[t,n,r,o]}(t));try{for(i.s();!(o=i.n()).done;){var a=o.value;n.appendChild(a)}}catch(e){i.e(e)}finally{i.f()}n.appendChild(function(e){var t=document.createElement("button");return!1===e.complete?t.innerText="❌":t.innerText="✔️",t.classList.add("checkMark"),t.addEventListener("click",(function(){"✔️"===t.innerText?(t.innerText="❌",e.complete=!1):(t.innerText="✔️",e.complete=!0)})),t}(t)),n.appendChild(function(e,t){var n=document.createElement("button");return n.innerText="X",n.addEventListener("click",(function(){n.parentNode.parentNode.removeChild(n.parentNode),function(e,t){var n,o=0,i=r(e.taskList);try{for(i.s();!(n=i.n()).done;)n.value===t&&e.taskList.splice(o,1),o++}catch(e){i.e(e)}finally{i.f()}h(e)}(e,t)})),n}(e,t))}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.taskList=[]}var t,n;return t=e,(n=[{key:"addTask",value:function(e){this.taskList.push(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p=[];function y(e){var t=new m(e);return p.push(t),t}function v(){if(""===document.querySelector("#projectDisplay").innerHTML){var e=document.createElement("div");e.className="projectDisplay",document.querySelector("#projectDisplay").appendChild(e);var t,n=d(p);try{var r=function(){var n=t.value,r=document.createElement("div");e.appendChild(r);var o=document.createElement("div");o.innerText=n.name,o.addEventListener("click",(function(){switchProject(n)}));var i=document.createElement("button");i.innerText="X",i.addEventListener("click",(function(){!function(e){var t,n=0,r=d(p);try{for(r.s();!(t=r.n()).done;)t.value===e&&p.splice(n,1),n++}catch(e){r.e(e)}finally{r.f()}v()}(n)})),r.appendChild(i),r.appendChild(o)};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}else document.querySelector("#projectDisplay").innerHTML=""}function h(e){(function(e){var n=document.createElement("button");n.addEventListener("click",v),n.innerText=e.name,document.querySelector("#header").innerHTML="",document.querySelector("#header").appendChild(n),function(){var e=document.createElement("button");e.setAttribute("id","#addProject"),e.innerText="New Project",document.querySelector("#header").appendChild(e),e.addEventListener("click",(function(){document.querySelector("#formLocation").innerHTML="";var e=y(prompt("What do you want to name the project?"));document.querySelector("#projectDisplay").innerHTML="",h(e)}));var t=document.createElement("img");t.src="images/plus-box.png",t.setAttribute("width","30px"),t.setAttribute("height","auto"),e.appendChild(t)}(),function(e){var n=document.createElement("button");n.innerText="Add Task",n.setAttribute("id","addTask"),document.querySelector("#header").appendChild(n),document.querySelector("#addTask").addEventListener("click",(function(){t(e)}));var r=document.createElement("img");r.src="images/plus-box.png",r.setAttribute("width","30px"),r.setAttribute("height","auto"),n.appendChild(r)}(e);var r=document.createElement("img");r.src="images/dropdown.png",r.setAttribute("width","30px"),r.setAttribute("height","auto"),n.appendChild(r)})(e),function(e){document.querySelector("#content").innerHTML="";var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(e.taskList);try{for(n.s();!(t=n.n()).done;)u(e,t.value)}catch(e){n.e(e)}finally{n.f()}}(e)}h(y("Project 1"))})();