!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.principal=e,this.years=n,this.rate=r}return function(t,e,r){e&&n(t.prototype,e),r&&n(t,r)}(t,[{key:"monthlyPayment",get:function(){var t=this.rate/100/12;return this.principal*t/(1-Math.pow(1/(1+t),12*this.years))}},{key:"amortization",get:function(){for(var t=this.monthlyPayment,e=this.rate/100/12,n=this.principal,r=[],a=0;a<this.years;a++){for(var i=0,o=0,c=0;c<12;c++){var l=n*e,u=t-l;i+=l,o+=u,n-=u}r.push({principalY:o,interestY:i,balance:n})}return r}}]),t}();document.getElementById("calcBtn").addEventListener("click",function(){var t=document.getElementById("principal").value,e=document.getElementById("years").value,n=document.getElementById("rate").value,a=new r(t,e,n);document.getElementById("monthlyPayment").innerHTML=a.monthlyPayment.toFixed(2),document.getElementById("monthlyRate").innerHTML=(n/12).toFixed(2);var i="<table>";a.amortization.forEach(function(t,e){return i+="\n        <tr>\n            <td>".concat(e+1,'</td>\n            <td class="currency">').concat(Math.round(t.principalY),'</td>\n            <td class="stretch">\n                <div class="flex">\n                    <div class="bar principal"\n                         style="flex:').concat(t.principalY,";-webkit-flex:").concat(t.principalY,'">\n                    </div>\n                    <div class="bar interest"\n                         style="flex:').concat(t.interestY,";-webkit-flex:").concat(t.interestY,'">\n                    </div>\n                </div>\n            </td>\n            <td class="currency left">').concat(Math.round(t.interestY),'</td>\n            <td class="currency">').concat(Math.round(t.balance),"</td>\n        </tr>\n    ")}),i+="</table>",document.getElementById("amortization").innerHTML=i})}]);
//# sourceMappingURL=main.bundle.js.map