const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let n=null,e=!1;function a(t,n){t.disabled=!0,n.disabled=!1}t.startBtn.addEventListener("click",(function(){if(a(t.startBtn,t.stopBtn),e)return;e=!0,n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){a(t.stopBtn,t.startBtn),e=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.70ac200e.js.map