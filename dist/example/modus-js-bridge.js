var Modus=function(){let e,n=null!==t("example");function t(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}let o=function(o,a){var r=Math.floor(1e7*Math.random()),i=o+"_success_"+r,l=o+"_error_"+r;return new Promise((function(r,s){window[i]=function(e){r(e),window[i]=null,window[l]=null,delete window[i],delete window[l]},window[l]=function(e){s(e),window[i]=null,window[l]=null,delete window[i],delete window[l]};let d={methodName:o,data:a,successMethodId:i,errorMethodId:l},u=t("os"),c=navigator.userAgent;return"windows"===u||c.includes("Windows.Desktop")?window.external.notify(JSON.stringify(d)):"ios"===u||window.webkit&&null!=window.webkit.messageHandlers.modus?window.webkit.messageHandlers.modus.postMessage(d):"android"===u||null!=window.appInterface?window.appInterface.postMessage(JSON.stringify(d)):("web"===u&&console.log("do something"),e&&function(n){let t=!1,o=n.methodName;if(e&&e[o]&&"function"==typeof e[o]){var a=e[o](n.data);t=!0,a&&a.then?a.then((function(e){window[n.successMethodId](e)})).catch((function(e){window[n.errorMethodId](e)})):a?console.error("Fallback methods needs to return a promise or nothing"):console.warn(o+" was executed but does not return a promise")}else console.warn('No fallback method for "'+o+'" exists');return t}(d)?void 0:n?function(e){var n=null;switch(e.methodName){case"getCurrentUserName":n="Obi Won Kenobi";break;case"getCurrentUserEmail":n="okenobi@jedicouncil.crst";break;case"getAccessToken":n="12x45e783s1234=";break;case"getCurrentUserRegions":n=["Tatooine","Stewjon","Coruscant"];break;case"getItem":case"getGlobalItem":n=localStorage.getItem(e.data.key);break;case"setItem":case"setGlobalItem":localStorage.setItem(e.data.key,e.data.value);break;case"sendAgenda":case"sendEmail":case"sendEmailHtml":var t=e.data,o=t.body?t.body:t.html?t.html:"",a="mailto:"+(t.to?t.to:t.emailAddress)+"?subject="+t.subject+"&body="+o+"&cc="+t.cc;window.open(a);break;case"getAgendas":n=JSON.stringify([{agendaId:"1",agendaTitle:"Bespin Meeting"},{agendaId:"2",agendaTitle:"Endor Visit"},{agendaId:"3",agendaTitle:"Hoth Beach Vacation"}])}window[e.successMethodId](n)}(d):void 0)}))};return{getCurrentUserName:o.bind(null,"getCurrentUserName",null),getCurrentUserEmail:o.bind(null,"getCurrentUserEmail",null),getCurrentUserRegions:o.bind(null,"getCurrentUserRegions",null),getAccessToken:o.bind(null,"getAccessToken",null),getItem:function(e){return o("getItem",{key:e})},setItem:function(e,n){return o("setItem",{key:e,value:n})},getGlobalItem:function(e){return o("getGlobalItem",{key:e})},setGlobalItem:function(e,n){return o("setGlobalItem",{key:e,value:n})},sendEmail:function(e,n,t,a){return o("sendEmail",{to:e,cc:n,subject:t,body:a})},sendEmailHtml:function(e,n,t,a){return o("sendEmailHtml",{to:e,cc:n,subject:t,html:a})},sendEmailWithFileAttachmentFromBase64:function(e){return o("sendEmailWithFileAttachmentFromBase64",{data:e})},getAgendas:o.bind(null,"getAgendas",null),sendAgenda:function(e,n){return o("sendAgenda",{agendaId:e,emailAddress:n})},scanBarcode:o.bind(null,"scanPDF417Barcode",null),getMediaWithPicker:function(e){return o("getMediaWithPicker",{excludeMedias:e})},sendFollowup:function(e,n,t){return o("sendFollowup",{step:e,bundle:n,link:t})},previewNextFollowupLink:o.bind(null,"previewNextFollowupLink",null),getFollowupGuid:function(e){return o("getFollowupGuid",{link:e})},asyncHttpRequest:function(e,n,t,a){return o("asyncHttpRequest",{url:e,verb:n,headers:t,body:a})},promptShareMenuWithData:function(e,n){return o("promptShareMenuWithData",{name:e,fileAsBase64:n})},getDeviceFilePicker:function(e){return o("getDeviceFilePicker",{uploadParams:e})},registerFallbackFunctions:function(n){e=n},enableExamples:function(e){n=!1!==e}}}();window.Modus=Modus;export default Modus;