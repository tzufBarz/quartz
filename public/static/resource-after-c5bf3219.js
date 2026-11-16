(function(){const o=window.location.protocol==="https:"?"wss:":"ws:";new WebSocket(`${o}//localhost:3001`).addEventListener("message",()=>document.location.reload(!0))})();
