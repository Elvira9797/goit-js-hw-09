!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");({form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){n.preventDefault();var t,o,r,a,l,u,c=Object.fromEntries(new FormData(n.target));o=(t=c).delay,r=t.step,a=t.amount,l=1,u=setInterval((function(){var n,t;l>Number(a)?clearInterval(u):((n=l,t=o,new Promise((function(e,o){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),l+=1,o=Number(o)+Number(r))}),r)}))}();
//# sourceMappingURL=03-promises.79935b64.js.map
