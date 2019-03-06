var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());window["$"]=window.jquip=(function(){var aq=window,j="http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",H=function(){return aq.Sizzle||aq.qwery},K=document,r=K.documentElement,M=[],g=[],aU,N=/Until$/,aQ=/,/,Y=/^(?:parents|prevUntil|prevAll)/,aR=/<([\w:]+)/,ar=/[\n\t\r]/g,ag=/^[\w-]+$/,B=/^#[\w-]+$/,V=/^\.[\w-]+$/,T=/\s+/,aH=/\d/,aA=/\S/,aw=/\r\n/g,b=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,aY=/\r?\n/g,i=/^(?:select|textarea)/i,aC=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,m=String.prototype.trim,aM,F=/^\s+/,W=/\s+$/,af,ad,ac={children:true,contents:true,next:true,prev:true},ax=Object.prototype.toString,aI={},y=false,t=true,aa={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},R={},ah=Array.prototype,aS=Object.prototype,ak=aS.hasOwnProperty,C=ah.slice,c=ah.push,l=ah.indexOf,aV=ah.forEach,am=ah.filter,D=ah.indexOf,aL="jq-"+(+new Date()),e=K.createElement("p");if(aA.test("\xA0")){F=/^[\s\xA0]+/;W=/[\s\xA0]+$/}
function an(a3,J){var a1;for(var a2=0,p=aF.length;a2<p;a2++){if(aF[a2].apply(this,arguments)){return this}}if(!a3){return this}if(au(a3)){if(aU){a3()}else{M.push(a3)}return this}else{if(ay(a3)){return this["make"](a3)}}if(a3.nodeType||aP(a3)){return this["make"]([a3])}if(a3=="body"&&!J&&K.body){this["context"]=a3.context;this[0]=K.body;this.length=1;this["selector"]=a3;return this}if(a3.selector!==undefined){this["context"]=a3.context;this["selector"]=a3.selector;return this["make"](a3)}a3=al(a3)&&a3.charAt(0)==="<"?(a1=b.exec(a3))?[K.createElement(a1[1])]:ae(a3).childNodes:aW((this["selector"]=a3),J);this["make"](a3);if(aD(J)){this["attr"](J)}return this}var aF=[],aE={},aB=1,n={_id:0},S={},U;function aJ(J,p){return new an(J,p)}U=an.prototype=aJ.prototype=aJ.fn={constructor:aJ,selector:"",length:0,dm:function(a4,a2,J){var a5=a4[0],a6,a7,a3,p,a1;if(a5){if(this[0]){if(!(a7=a5.nodeType===3&&a5)){a6=a5&&a5.parentNode;a7=a6&&a6.nodeType===11&&a6.childNodes.length===this.length?a6:ae(a5);a3=a7.firstChild;if(a7.childNodes.length===1){a7=a3}if(!a3){return this}}for(a1=0,p=this.length;a1<p;a1++){J.call(this[a1],(a1==0?a7:a7.cloneNode(true)))}}}return this},ps:function(a2,a1,p){var J=this.constructor();if(ay(a2)){c.apply(J,a2)}else{E(J,a2)}J.prevObject=this;J.context=this.context;if(a1==="find"){J.selector=this["selector"]+(this["selector"]?" ":"")+p}else{if(a1){J.selector=this["selector"]+"."+a1+"("+p+")"}}return J}};U.make=function(p){aT(this,p);return this};U.toArray=function(){return C.call(this,0)};U.get=function(p){return at(p)?(p<0?this[this.length+p]:this[p]):this["toArray"]()};U.add=function(a1,p){var a2=typeof a1=="string"?aJ(a1,p):aG(a1&&a1.nodeType?[a1]:a1),J=E(this.get(),a2);return this.ps(aO(a2[0])||aO(J[0])?J:u(J))};function aO(p){return !p||!p.parentNode||p.parentNode.nodeType==11}U.each=function(a1){if(!au(a1)){return this}for(var J=0,p=this.length;J<p;J++){a1.call(this[J],J,this[J])}return this};U.attr=function(p,a1){var J=this[0];return(al(p)&&a1===undefined)?ab(J,p):this["each"](function(a2){var a4=this.nodeType;if(a4!==3&&a4!==8&&a4!==2){if(ap(p)){for(var a3 in p){if(a1===null){this.removeAttribute(p)}else{this.setAttribute(a3,p[a3])}}}else{this.setAttribute(p,au(a1)?a1.call(this,a2,this.getAttribute(p)):a1)}}})};U.removeAttr=function(p){return this["each"](function(){if(this.nodeType==1){this.removeAttribute(p)}})};U.data=function(p,J){return(J===undefined)?x(this[0],p):this["each"](function(){x(this,p,J)})};U.append=function(){return this.dm(arguments,true,function(p){if(this.nodeType===1){this.appendChild(p)}})};U.prepend=function(){return this.dm(arguments,true,function(p){if(this.nodeType===1){this.insertBefore(p,this.firstChild)}})};U.before=function(){if(this[0]&&this[0].parentNode){return this.dm(arguments,false,function(p){this.parentNode.insertBefore(p,this)})}return this};U.after=function(){if(this[0]&&this[0].parentNode){return this.dm(arguments,false,function(p){this.parentNode.insertBefore(p,this.nextSibling)})}return this};U.replaceWith=function(a1){var p=this,J=au(a1);return this["each"](function(a2){var a4=this.nextSibling,a3=this.parentNode,a5=J?a1.call(this,a2,this):a1;if(a3&&a3.nodeType!=11){a3.removeChild(this);(a4?aJ(a4).before(a5):aJ(a3).append(a5))}else{p[a2]=aJ(a5).clone()[0]}})};U.hide=function(){return this["each"](function(){L(this,"display",this.style.display);this.style.display="none"})};U.show=function(){return this["each"](function(){this.style.display=L(this,"display")||d(this.tagName)})};U.toggle=function(){return this["each"](function(){var p=aJ(this);aJ.Expr["hidden"](this)?p.show():p.hide()})};U.eq=function(p){return p===-1?this.slice(p):this.slice(p,+p+1)};U.first=function(){return this["eq"](0)};U.last=function(){return this["eq"](-1)};U.slice=function(){return this.ps(C.apply(this,arguments),"slice",C.call(arguments).join(","))};U.map=function(p){return this.ps(A(this,function(a1,J){return p.call(a1,J,a1)}))};U.find=function(a5){var a1=this,a3,J;if(!al(a5)){return aJ(a5).filter(function(){for(a3=0,J=a1.length;a3<J;a3++){if(af(a1[a3],this)){return true}}})}var a2=this.ps("","find",a5),p,a6,a4;for(a3=0,J=this.length;a3<J;a3++){p=a2.length;E(a2,aJ(a5,this[a3]));if(a3===0){for(a6=p;a6<a2.length;a6++){for(a4=0;a4<p;a4++){if(a2[a4]===a2[a6]){a2.splice(a6--,1);break}}}}}return a2};U.not=function(p){return this.ps(ai(this,p,false),"not",p)};U.filter=function(p){return this.ps(ai(this,p,true),"filter",p)};U.indexOf=function(p){return O(this,p)};U.is=function(p){return this.length>0&&aJ(this[0]).filter(p).length>0};U.remove=function(){for(var p=0,J;at(J=this[p]);p++){if(J.parentNode){J.parentNode.removeChild(J)}}return this};U.closest=function(a3,J){var a1=[],a2,p,a4;for(a2=0,p=this.length;a2<p;a2++){a4=this[a2];while(a4){if(G(a3,[a4]).length>0){a1.push(a4);break}else{a4=a4.parentNode;if(!a4||!a4.ownerDocument||a4===J||a4.nodeType===11){break}}}}a1=a1.length>1?u(a1):a1;return this.ps(a1,"closest",a3)};U.val=function(p){if(!at(p)){return(this[0]&&this[0].value)||""}return this["each"](function(){this.value=p})};U.html=function(p){if(!at(p)){return(this[0]&&this[0].innerHTML)||""}return this["each"](function(){this.innerHTML=p})};U.text=function(a1){var J=this[0],p;return at(a1)?this["empty"]()["append"]((J&&J.ownerDocument||K).createTextNode(a1)):(J&&(p=J.nodeType)?((p===1||p===9)?(al(J.textContent)?J.textContent:J.innerText.replace(aw,"")):(p===3||p===4)?J.nodeValue:null):null)};U.empty=function(){var p,J;for(p=0;at(J=this[p]);p++){while(J.firstChild){J.removeChild(J.firstChild)}}return this};U.addClass=function(a5){var a1,a2,J,a3,a4,a6,p;if(au(a5)){return this["each"]
(function(a7){aJ(this)["addClass"](a5.call(this,a7,this.className))})}if(a5&&al(a5)){a1=a5.split(T);for(a2=0,J=this.length;a2<J;a2++){a3=this[a2];if(a3&&a3.nodeType===1){if(!a3.className&&a1.length===1){a3.className=a5}else{a4=" "+a3.className+" ";for(a6=0,p=a1.length;a6<p;a6++){if(!~a4.indexOf(" "+a1[a6]+" ")){a4+=a1[a6]+" "}}a3.className=aM(a4)}}}}return this};U.removeClass=function(a5){var a2,a3,a1,a4,J,a6,p;if(au(a5)){return this["each"](function(a7){aJ(this)["removeClass"](a5.call(this,a7,this.className))})}if((a5&&al(a5))||a5===undefined){a2=(a5||"").split(T);for(a3=0,a1=this.length;a3<a1;a3++){a4=this[a3];if(a4.nodeType===1&&a4.className){if(a5){J=(" "+a4.className+" ").replace(ar," ");for(a6=0,p=a2.length;a6<p;a6++){J=J.replace(" "+a2[a6]+" "," ")}a4.className=aM(J)}else{a4.className=""}}}}return this};U.hasClass=function(p){return a0(this,p)};U.fadeIn=function(){this["each"](function(){aJ(this)["show"]()})};U.fadeOut=function(){this["each"](function(){aJ(this)["hide"]()})};U.serializeArray=function(){return this["map"](function(){return this.elements?aG(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||i.test(this.nodeName)||aC.test(this.type))}).map(function(p,J){var a1=aJ(this)["val"]();return a1==null||ay(a1)?A(a1,function(a2){return{name:J.name,value:a2.replace(aY,"\r\n")}}):{name:J.name,value:a1.replace(aY,"\r\n")}}).get()};U.wrap=function(p){return this["each"](function(){var J=aJ(aJ(p)[0].cloneNode(false));aJ(this).before(J);J.append(aJ(this))})};U.prop=function(p,J){if(at(J)){return this.each(function(){this[p]=J})}return this[0]&&this[0][p]};U.clone=function(){return aJ(this.map(function(){return this.cloneNode(true)}))};U.toggleClass=function(p,J){return this["each"](function(){var a1=aJ(this);(at(J)?J:!a1.hasClass(p))?a1.addClass(p):a1.removeClass(p)})};aJ.Expr={hidden:function(p){return(aJ.css&&aJ.css(p,"display")||p.style.display)==="none"},visible:function(p){return !aJ.Expr["hidden"](p)}};function ai(J,a1,p){a1=a1||0;if(au(a1)){return k(J,function(a4,a3){return !!a1.call(a4,a3,a4)===p})}else{if(a1.nodeType){return k(J,function(a3){return(a3===a1)===p})}else{if(al(a1)){var a2=a1.charAt(0)==":"&&aJ.Expr[a1.substring(1)];return k(J,function(a6){var a4=a6.parentNode,a5=!a4,a3;if(a5){a4=e;a4.appendChild(a6)}a3=a2?a2(a6):a6.parentNode&&O(aW(a1,a6.parentNode),a6)>=0;a5&&a4.removeChild(a6);return a3})}}}return k(J,function(a3){return(O(a1,a3)>=0)===p})}function L(J,p,a1){var a2=J[aL];if(!at(a1)){return a2&&n[a2]&&(p?n[a2][p]:n[a2])}if(!a2){a2=J[aL]=aB++}return(n[a2]||(n[a2]={}))[p]=a1}function d(p){if(!S[p]){var J=aJ("<"+p+">")["appendTo"](K.body),a1=(aJ.css&&aJ.css(J[0],"display"))||J[0].style.display;J.remove();S[p]=a1}return S[p]}function aT(p,a2){p.length=(a2&&a2.length||0);if(p.length===0){return p}for(var a1=0,J=a2.length;a1<J;a1++){p[a1]=a2[a1]}return p}function a0(a2,J){J=" "+J+" ";for(var a1=0,p=a2.length;a1<p;a1++){if(Z(a2[a1],J)){return true}}return false}aJ.hasClass=a0;function Z(J,p){return J.nodeType===1&&(" "+J.className+" ").replace(ar," ").indexOf(p)>-1}function aX(a4,J,a1){J=J||K;a1=a1||[];if(J.nodeType==1){if(a4(J)){a1.push(J)}}var a3=J.childNodes;for(var a2=0,p=a3.length;a2<p;a2++){var a5=a3[a2];if(a5.nodeType==1){aX(a4,a5,a1)}}return a1}aJ.walk=aX;function aW(a3,p,a2){if(a3&&al(a3)){if(p instanceof aJ){p=p[0]}p=p||K;a2=a2||aJ.query;var a1,J=a3.substring(1);return B.test(a3)&&p===K?((a1=K.getElementById(J))?[a1]:[]):aG(V.test(a3)&&p.getElementsByClassName?p.getElementsByClassName(J):ag.test(a3)?p.getElementsByTagName(a3):a2(a3,p))}return a3.nodeType==1||a3.nodeType==9?[a3]:[]}aJ["$$"]=aW;aJ.setQuery=function(p){aJ.query=function(a1,J){return aW(a1,J,(p||function(a3,a2){return a2.querySelectorAll(a3)}))}};var P=H();aJ.setQuery(P||function(J,p){return(p=p||K).querySelectorAll?aG(p.querySelectorAll(J)):[]});
function aK(a1,p,a4){var a3=K.head||K.getElementsByTagName("head")[0]||r,a2=K.createElement("script"),J;if(a4){a2.async="async"}a2.onreadystatechange=function(){if(!(J=a2.readyState)||J=="loaded"||J=="complete"){a2.onload=a2.onreadystatechange=null;if(a3&&a2.parentNode){a3.removeChild(a2)}a2=undefined;if(p){p()}}};a2.onload=p;a2.src=a1;a3.insertBefore(a2,a3.firstChild)}aJ.loadScript=aK;function aZ(p){aq.console&&aq.console.warn(arguments)}aJ.each=function(a5,p,a3){var a1,a4=0,J=a5.length,a2=J===undefined||au(a5);if(a3){if(a2){for(a1 in a5){if(p.apply(a5[a1],a3)===false){break}}}else{for(;a4<J;){if(p.apply(a5[a4++],a3)===false){break}}}}else{if(a2){for(a1 in a5){if(p.call(a5[a1],a1,a5[a1])===false){break}}}else{for(;a4<J;){if(p.call(a5[a4],a4,a5[a4++])===false){break}}}}return a5};function h(a4,a3,J){if(a4==null){return}if(aV&&a4.forEach===aV){a4.forEach(a3,J)}else{if(a4.length===+a4.length){for(var a2=0,p=a4.length;a2<p;a2++){if(a2 in a4&&a3.call(J,a4[a2],a2,a4)===R){return}}}else{for(var a1 in a4){if(ak.call(a4,a1)){if(a3.call(J,a4[a1],a1,a4)===R){return}}}}}}aJ._each=h;function ab(a1,J){if(!a1||!a1.getAttribute||!J){return}var p=a1.hasAttribute&&a1.hasAttribute(J)?a1.getAttribute(J):a1[J];return(p===null?undefined:p)}function G(J,p){return at(J)?aJ(p).filter(J):aJ(p)}aJ.filter=G;function O(p,a2){if(p==null){return -1}var a1,J;if(D&&p.indexOf===D){return p.indexOf(a2)}for(a1=0,J=p.length;a1<J;a1++){if(p[a1]===a2){return a1}}return -1}aJ._indexOf=O;aJ._defaults=function(p){h(C.call(arguments,1),function(a1){for(var J in a1){if(p[J]==null){p[J]=a1[J]}}});return p};function Q(a2,a1,p){var J=[];if(a2==null){return J}if(am&&a2.filter===am){return a2.filter(a1,p)}h(a2,function(a5,a4,a3){if(a1.call(p,a5,a4,a3)){J[J.length]=a5}});return J}aJ._filter=Q;aJ.proxy=function(a3,p){if(typeof p=="string"){var a2=a3[p];p=a3;a3=a2}if(au(a3)){var J=C.call(arguments,2),a1=function(){return a3.apply(p,J.concat(C.call(arguments)))};a1.guid=a3.guid=a3.guid||a1.guid||aB++;return a1}};function w(J,a3,a2){var p=[],a1=J[a3];while(a1&&a1.nodeType!==9&&(a2===undefined||a1.nodeType!==1||!aJ(a1).is(a2))){if(a1.nodeType===1){p.push(a1)}a1=a1[a3]}return p}aJ.dir=w;function o(a2,a1,J){a1=a1||1;var p=0;for(;a2;a2=a2[J]){if(a2.nodeType===1&&++p===a1){break}}return a2}aJ.nth=o;function aj(a1,p){var J=[];for(;a1;a1=a1.nextSibling){if(a1.nodeType===1&&a1!==p){J.push(a1)}}return J}aJ.sibling=aj;function k(a4,J,p){var a2=[],a5;p=!!p;for(var a3=0,a1=a4.length;a3<a1;a3++){a5=!!J(a4[a3],a3);if(p!==a5){a2.push(a4[a3])}}return a2}aJ.grep=k;function A(a1,J,a7){var a5,a6,a4=[],a2=0,p=a1.length,a3=a1 instanceof aJ||typeof p=="number"&&((p>0&&a1[0]&&a1[p-1])||p===0||ay(a1));if(a3){for(;a2<p;a2++){a5=J(a1[a2],a2,a7);if(a5!=null){a4[a4.length]=a5}}}else{for(a6 in a1){a5=J(a1[a6],a6,a7);if(a5!=null){a4[a4.length]=a5}}}return a4.concat.apply([],a4)}aJ.map=A;function x(a1,p,a2){if(!a1){return{}}var J=L(a1,p,a2);return J||a(a1)["data-"+p]}aJ.data=x;function a(a2){var a3={};if(a2.nodeType==1){for(var a1=0,J=a2.attributes,p=J.length;a1<p;a1++){a3[J.item(a1).nodeName]=J.item(a1).nodeValue}}return a3}aJ.attrs=a;function z(J,p){return !J||!p?J==p:J.toLowerCase()===p.toLowerCase()}aJ.eqSI=z;aM=m?function(p){return p==null?"":m.call(p)}:function(p){return p==null?"":p.toString().replace(F,"").replace(W,"")};aJ.trim=aM;aJ.indexOf=aJ.inArray=function(a1,p){if(!p){return -1}if(l){return l.call(p,a1)}for(var J=0,a2=p.length;J<a2;J++){if(p[J]===a1){return J}}return -1};h("Boolean Number String Function Array Date RegExp Object".split(" "),function(p){aI["[object "+p+"]"]=p.toLowerCase();return this});function az(p){return p==null?String(p):aI[ax.call(p)]||"object"}aJ.type=az;function at(p){return p!==void 0}function al(p){return typeof p=="string"}function ap(p){return typeof p=="object"}function au(p){return typeof p=="function"||az(p)==="function"}aJ.isFunction=au;function ay(p){return az(p)==="array"}aJ.isArray=Array.isArray||ay;function s(p){return !al(p)&&typeof p.length=="number"}function aP(p){return p&&typeof p=="object"&&"setInterval" in p}aJ.isWindow=aP;function X(p){return p==null||!aH.test(p)||isNaN(p)}aJ.isNaN=X;function aD(a1){if(!a1||az(a1)!=="object"||a1.nodeType||aP(a1)){return false}try{if(a1.constructor&&!ak.call(a1,"constructor")&&!ak.call(a1.constructor.prototype,"isPrototypeOf")){return false}}catch(J){return false}var p;for(p in a1){}return p===undefined||ak.call(a1,p)}function E(a2,p){var a4=a2.length,a3=0;if(typeof p.length=="number"){for(var J=p.length;a3<J;a3++){a2[a4++]=p[a3]}}else{while(p[a3]!==undefined){a2[a4++]=p[a3++]}}a2.length=a4;return a2}aJ.merge=E;
function ao(){var a2,a1,p,J,a9,a6,a5=arguments,a7=a5[0]||{},a4=1,a3=a5.length,a8=false;if(typeof a7=="boolean"){a8=a7;a7=a5[1]||{};a4=2}if(typeof a7!="object"&&!au(a7)){a7={}}if(a3===a4){a7=this;--a4}for(;a4<a3;a4++){if((a2=a5[a4])!=null){for(a1 in a2){p=a7[a1];J=a2[a1];if(a7===J){continue}if(a8&&J&&(aD(J)||(a9=ay(J)))){if(a9){a9=false;a6=p&&ay(p)?p:[]}else{a6=p&&aD(p)?p:{}}a7[a1]=ao(a8,a6,J)}else{if(J!==undefined){a7[a1]=J}}}}}return a7}aJ.extend=aJ.fn["extend"]=ao;function aG(p,a1){var J=a1||[];if(p!=null){var a2=az(p);if(p.length==null||a2=="string"||a2=="function"||a2==="regexp"||aP(p)){c.call(J,p)}else{E(J,p)}}return J}aJ.makeArray=aG;function ae(J,p,a2){p=((p||K)||p.ownerDocument||p[0]&&p[0].ownerDocument||K);a2=a2||p.createDocumentFragment();if(s(J)){return av(J,p,a2)&&a2}var a1=v(J);while(a1.firstChild){a2.appendChild(a1.firstChild)}return a2}aJ.htmlFrag=ae;function v(a1,J){var a4=(J||K).createElement("div"),p=(aR.exec(a1)||["",""])[1].toLowerCase(),a2=aa[p]||aa._default,a3=a2[0];a4.innerHTML=a2[1]+a1+a2[2];while(a3--){a4=a4.lastChild}return a4}function av(a2,p,a4){var J=[],a1,a3;for(a1=0;(a3=a2[a1])!=null;a1++){if(al(a3)){a3=v(a3,p)}if(a3.nodeType){J.push(a3)}else{J=E(J,a3)}}if(a4){for(a1=0;a1<J.length;a1++){if(J[a1].nodeType){a4.appendChild(J[a1])}}}return J}var q=function(J,p,a1){if(J===p){return a1}var a2=J.nextSibling;while(a2){if(a2===p){return -1}a2=a2.nextSibling}return 1};af=aJ.contains=r.contains?function(J,p){return J!==p&&(J.contains?J.contains(p):true)}:function(){return false};ad=r.compareDocumentPosition?(af=function(J,p){return !!(J.compareDocumentPosition(p)&16)})&&function(J,p){if(J===p){y=true;return 0}if(!J.compareDocumentPosition||!p.compareDocumentPosition){return J.compareDocumentPosition?-1:1}return J.compareDocumentPosition(p)&4?-1:1}:function(a7,a6){if(a7===a6){y=true;return 0}else{if(a7.sourceIndex&&a6.sourceIndex){return a7.sourceIndex-a6.sourceIndex}}var a4,J,a1=[],p=[],a3=a7.parentNode,a5=a6.parentNode,a8=a3;if(a3===a5){return q(a7,a6)}else{if(!a3){return -1}else{if(!a5){return 1}}}while(a8){a1.unshift(a8);a8=a8.parentNode}a8=a5;while(a8){p.unshift(a8);a8=a8.parentNode}a4=a1.length;J=p.length;for(var a2=0;a2<a4&&a2<J;a2++){if(a1[a2]!==p[a2]){return q(a1[a2],p[a2])}}return a2===a4?q(a7,p[a2],-1):q(a1[a2],a6,1)};function u(J){if(ad){y=t;J.sort(ad);if(y){for(var p=1;p<J.length;p++){if(J[p]===J[p-1]){J.splice(p--,1)}}}}return J}aJ.unique=u;h({parent:function(J){var p=J.parentNode;return p&&p.nodeType!==11?p:null},parents:function(p){return w(p,"parentNode")},parentsUntil:function(J,p,a1){return w(J,"parentNode",a1)},next:function(p){return o(p,2,"nextSibling")},prev:function(p){return o(p,2,"previousSibling")},nextAll:function(p){return w(p,"nextSibling")},prevAll:function(p){return w(p,"previousSibling")},nextUntil:function(J,p,a1){return w(J,"nextSibling",a1)},prevUntil:function(J,p,a1){return w(J,"previousSibling",a1)},siblings:function(p){return aj(p.parentNode["firstChild"],p)},children:function(p){return aj(p.firstChild)},contents:function(p){return p.nodeName==="iframe"?p.contentDocument||p.contentWindow["document "]:aG(p.childNodes)}},function(J,p){aJ.fn[p]=function(a4,a3){var a2=A(this,J,a4),a1=C.call(arguments);if(!N.test(p)){a3=a4}if(al(a3)){a2=aG(G(a3,a2))}a2=this.length>1&&!ac[p]?u(a2):a2;if((this.length>1||aQ.test(a3))&&Y.test(p)){a2=a2.reverse()}return this.ps(a2,p,a1.join(","))}});h({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after"},function(J,p){aJ.fn[p]=function(a5){var a2=[],a7=aJ(a5),a4,a3,a1,a6=this.length===1&&this[0].parentNode;if(a6&&a6.nodeType===11&&a6.childNodes.length===1&&a7.length===1){a7[J](this[0]);return this}else{for(a4=0,a1=a7.length;a4<a1;a4++){a3=(a4>0?this.clone(true):this).get();aJ(a7[a4])[J](a3);a2=a2.concat(a3)}return this.ps(a2,p,a7.selector)}}});function aN(){if(!K.body){return null}var J=K.createElement("div");K.body.appendChild(J);J.style.width="20px";J.style.padding="10px";var p=J.offsetWidth;K.body.removeChild(J);return p==40}(function(){var p=document.createElement("div");p.style.display="none";p.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var a7=p.getElementsByTagName("a")[0];aJ.support={boxModel:null,opacity:/^0.55$/.test(a7.style.opacity),cssFloat:!!a7.style.cssFloat};var a4=/(webkit)[ \/]([\w.]+)/,a1=/(opera)(?:.*version)?[ \/]([\w.]+)/,a6=/(msie) ([\w.]+)/,a3=/(mozilla)(?:.*? rv:([\w.]+))?/,J=navigator.userAgent.toLowerCase(),a2=a4.exec(J)||a1.exec(J)||a6.exec(J)||J.indexOf("compatible")<0&&a3.exec(J)||[],a5;a5=aJ.browser={version:a2[2]||"0"};a5[a2[1]||""]=true})();aJ.scriptsLoaded=function(p){if(au(p)){M.push(p)}};
function I(J,p){g.push({url:J,cb:p})}aJ.loadAsync=I;if(!P&&!K.querySelectorAll){I(j,function(){aJ.setQuery(H())})}function f(){h(M,function(p){p()});aU=true}aJ.init=false;aJ.onload=function(){if(!aJ.init){try{aJ.support["boxModel"]=aN();var p=0;h(g,function(a1){p++;aK(a1.url,function(){try{if(a1.cb){a1.cb()}}catch(a2){}if(!--p){f()}})});aJ.init=true;if(!p){f()}}catch(J){aZ(J)}}};if(K.body&&!aJ.init){setTimeout(aJ.onload,1)}aJ.hook=function(p){aF.push(p)};aJ.plug=function(a1,J){var p=al(a1)?a1:a1.name;J=au(a1)?a1:J;if(!au(J)){throw"Plugin fn required"}if(p&&J){aE[p]=J}J(aJ)};return aJ})();$.plug("docready",function(b){var c=window,i=document,f,d,j=[],e=false,h=1;b.hook(function(l,k){if(typeof l=="function"){this["ready"](l);return true}});function a(){if(e){return}try{i.documentElement.doScroll("left")}catch(k){setTimeout(a,1);return}g()}function g(n){if(n===true){h--}if(!h||(n!==true&&!e)){if(!i.body){return setTimeout(l,1)}e=true;if(n!==true&&--h>0){return}if(j){var m,k=0,l=j;j=null;while((m=l[k++])){m.call(i,b)}if(b.fn["trigger"]){b(i)["trigger"]("ready")["unbind"]("ready")}}}}b.ready=g;f=i.addEventListener?function(){i.removeEventListener("DOMContentLoaded",f,false);g()}:function(){if(i.readyState==="complete"){i.detachEvent("onreadystatechange",f);g()}};b.bindReady=function(){if(d){return}d=true;if(i.readyState==="complete"){return setTimeout(g,1)}if(i.addEventListener){i.addEventListener("DOMContentLoaded",f,false);c.addEventListener("load",g,false)}else{if(i.attachEvent){i.attachEvent("onreadystatechange",f);c.attachEvent("onload",g);var k=false;try{k=window.frameElement==null}catch(l){}if(i.documentElement.doScroll&&k){a()}}}};b.fn["ready"]=function(k){b.bindReady();if(e){k.call(i,b)}else{if(j){j.push(k)}}return this};if(!b.init){b(document)["ready"](b.onload)}});$.plug("events",function(f){var l=document,e={},b=1;function m(p){return p._jquid||(p._jquid=b++)}function k(r,q,p){if(r.addEventListener){r.addEventListener(q,p,false)}else{r["e"+q+p]=p;r[q+p]=function(){r["e"+q+p](window.event)};r.attachEvent("on"+q,r[q+p])}}f.bind=k;function o(r,q,p){if(r.removeEventListener){r.removeEventListener(q,p,false)}else{r.detachEvent("on"+q,r[q+p]);r[q+p]=null}}f.unbind=o;function c(p){var q=(""+p).split(".");return{e:q[0],ns:q.slice(1).sort().join(" ")}}function i(p){return new RegExp("(?:^| )"+p.replace(" "," .* ?")+"(?: |$)")}function a(s,q,r,t){q=c(q);if(q.ns){var p=i(q.ns)}return f._filter(e[m(s)]||[],function(u){return u&&(!q.e||u.e==q.e)&&(!q.ns||p.test(u.ns))&&(!r||u.fn==r)&&(!t||u.sel==t)})}function n(s,p,r,t,q){var v=m(s),u=(e[v]||(e[v]=[]));f._each(p.split(/\s/),function(w){var x=f.extend(c(w),{fn:r,sel:t,del:q,i:u.length});u.push(x);k(s,x.e,q||r)});s=null}function j(r,p,q,s){var t=m(r);f._each((p||"").split(/\s/),function(u){f._each(a(r,u,q,s),function(v){delete e[t][v.i];o(r,v.e,v.del||v.fn)})})}var h=["preventDefault","stopImmediatePropagation","stopPropagation"];function g(p){var q=f.extend({originalEvent:p},p);f._each(h,function(r){if(p[r]){q[r]=function(){return p[r].apply(p,arguments)}}});return q}var d=f.fn;f._each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(p){d[p]=function(q,r){return arguments.length>0?this["bind"](p,q,r):this["trigger"](p)}});d.bind=function(q,p){return this["each"](function(){n(this,q,p)})};d.unbind=function(q,p){return this["each"](function(){j(this,q,p)})};d.one=function(q,p){return this["each"](function(){var r=this;n(this,q,function s(){p.apply(r,arguments);j(r,q,arguments.callee)})})};d.delegate=function(r,q,p){return this["each"](function(s,t){n(t,q,p,r,function(w){var v=w.target||w.srcElement,u=f["$$"](r,t);while(v&&f._indexOf(u,v)<0){v=v.parentNode}if(v&&!(v===t)&&!(v===document)){p.call(v,f.extend(g(w||window.event),{currentTarget:v,liveFired:t}))}})})};d.undelegate=function(r,q,p){return this["each"](function(){j(this,q,p,r)})};d.live=function(q,p){f(l.body)["delegate"](this["selector"],q,p);return this};d.die=function(q,p){f(l.body)["undelegate"](this["selector"],q,p);return this};d.on=function(q,r,p){return typeof r==="function"?this.bind(q,r):this.delegate(q,r,p)};d.off=function(q,r,p){return typeof r==="string"?this.undelegate(q,r,p):this.unbind(q,p)};d.trigger=function(p){return this["each"](function(){if((p=="click"||p=="blur"||p=="focus")&&this[p]){return this[p]()}if(l.createEvent){var q=l.createEvent("Events");this.dispatchEvent(q,q.initEvent(p,true,true))}else{if(this.fireEvent){try{if(p!=="ready"){this.fireEvent("on"+p)}}catch(q){}}}})};if(!f.init){f(window)["bind"]("load",f.onload)}});$.plug("css",function(j){var F=document,f=F.documentElement,k=/alpha\([^)]*\)/i,d=/opacity=([^)]*)/,o=/-([a-z])/ig,z=/([A-Z])/g,e=/^-?\d+(?:px)?$/i,m=/^-?\d/,b=/^(?:body|html)$/i,n={position:"absolute",visibility:"hidden",display:"block"},r=["Left","Right"],u=["Top","Bottom"],A,w,q,C=function(H,G){return G.toUpperCase()};j.cssHooks={opacity:{get:function(I,G){if(!G){return I.style.opacity}var H=A(I,"opacity","opacity");return H===""?"1":H}}};j._each(["height","width"],function(G){j.cssHooks[G]={get:function(J,I,H){var K;if(I){if(J.offsetWidth!==0){return B(J,G,H)}s(J,n,function(){K=B(J,G,H)});return K}},set:function(H,I){if(e.test(I)){I=parseFloat(I);if(I>=0){return I+"px"}}else{return I}}}});
function B(I,H,G){var K=H==="width"?I.offsetWidth:I.offsetHeight,J=H==="width"?r:u;if(K>0){if(G!=="border"){j.each(J,function(){if(!G){K-=parseFloat(p(I,"padding"+this))||0}if(G==="margin"){K+=parseFloat(p(I,G+this))||0}else{K-=parseFloat(p(I,"border"+this+"Width"))||0}})}return K+"px"}return""}if(!j.support["opacity"]){j.support["opacity"]={get:function(G,H){return d.test((H&&G.currentStyle?G.currentStyle.filter:G.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":H?"1":""},set:function(J,K){var I=J.style;I.zoom=1;var G=j.isNaN(K)?"":"alpha(opacity="+K*100+")",H=I.filter||"";I.filter=k.test(H)?H.replace(k,G):I.filter+" "+G}}}if(F.defaultView&&F.defaultView.getComputedStyle){w=function(K,G,J){var I,L,H;J=J.replace(z,"-$1").toLowerCase();if(!(L=K.ownerDocument.defaultView)){return undefined}if((H=L.getComputedStyle(K,null))){I=H.getPropertyValue(J);if(I===""&&!j.contains(K.ownerDocument.documentElement,K)){I=j.style(K,J)}}return I}}if(F.documentElement.currentStyle){q=function(K,I){var L,H=K.currentStyle&&K.currentStyle[I],G=K.runtimeStyle&&K.runtimeStyle[I],J=K.style;if(!e.test(H)&&m.test(H)){L=J.left;if(G){K.runtimeStyle.left=K.currentStyle.left}J.left=I==="fontSize"?"1em":(H||0);H=J.pixelLeft+"px";J.left=L;if(G){K.runtimeStyle.left=G}}return H===""?"auto":H}}A=w||q;j.fn["css"]=function(G,H){if(arguments.length===2&&H===undefined){return this}return i(this,G,H,true,function(J,I,K){return K!==undefined?y(J,I,K):p(J,I)})};j.cssNumber={zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true};j.cssProps={"float":j.support["cssFloat"]?"cssFloat":"styleFloat"};function y(I,H,N,J){if(!I||I.nodeType===3||I.nodeType===8||!I.style){return}var M,K=t(H),G=I.style,O=j.cssHooks[K];H=j.cssProps[K]||K;if(N!==undefined){if(typeof N==="number"&&isNaN(N)||N==null){return}if(typeof N==="number"&&!j.cssNumber[K]){N+="px"}if(!O||!("set" in O)||(N=O.set(I,N))!==undefined){try{G[H]=N}catch(L){}}}else{if(O&&"get" in O&&(M=O.get(I,false,J))!==undefined){return M}return G[H]}}j.style=y;function p(L,K,H){var J,I=t(K),G=j.cssHooks[I];K=j.cssProps[I]||I;if(G&&"get" in G&&(J=G.get(L,true,H))!==undefined){return J}else{if(A){return A(L,K,I)}}}j.css=p;function s(K,J,G){var H={},I;for(var I in J){H[I]=K.style[I];K.style[I]=J[I]}G.call(K);for(I in J){K.style[I]=H[I]}}j.swap=s;function t(G){return G.replace(o,C)}j.camelCase=t;function i(J,O,M,G,L,N){var H=J.length;if(typeof O==="object"){for(var I in O){i(J,I,O[I],G,L,M)}return J}if(M!==undefined){G=!N&&G&&j.isFunction(M);for(var K=0;K<H;K++){L(J[K],O,G?M.call(J[K],K,L(J[K],O)):M,N)}return J}return H?L(J[0],O):undefined}var x,h,g,a,D,E,c=function(){if(x){return}var G=F.body,N=F.createElement("div"),M,K,J,L,H=parseFloat(p(G,"marginTop"))||0,I="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";j.extend(N.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});N.innerHTML=I;G.insertBefore(N,G.firstChild);M=N.firstChild;K=M.firstChild;L=M.nextSibling.firstChild.firstChild;D=(K.offsetTop!==5);E=(L.offsetTop===5);K.style.position="fixed";K.style.top="20px";a=(K.offsetTop===20||K.offsetTop===15);K.style.position=K.style.top="";M.style.overflow="hidden";M.style.position="relative";g=(K.offsetTop===-5);h=(G.offsetTop!==H);G.removeChild(N);x=true},l=function(G){var I=G.offsetTop,H=G.offsetLeft;c();if(h){I+=parseFloat(p(G,"marginTop"))||0;H+=parseFloat(p(G,"marginLeft"))||0}return{top:I,left:H}};j.fn["offset"]=function(){var H=this[0],L;if(!H||!H.ownerDocument){return null}if(H===H.ownerDocument.body){return l(H)}try{L=H.getBoundingClientRect()}catch(P){}if(!L||!j.contains(f,H)){return L?{top:L.top,left:L.left}:{top:0,left:0}}var M=F.body,N=v(F),K=f.clientTop||M.clientTop||0,O=f.clientLeft||M.clientLeft||0,G=N.pageYOffset||j.support["boxModel"]&&f.scrollTop||M.scrollTop,J=N.pageXOffset||j.support["boxModel"]&&f.scrollLeft||M.scrollLeft,Q=L.top+G-K,I=L.left+J-O;return{top:Q,left:I}};j.fn["position"]=function(){if(!this[0]){return null}var I=this[0],G=this["offsetParent"](),J=this["offset"](),H=b.test(G[0].nodeName)?{top:0,left:0}:G.offset();J.top-=parseFloat(p(I,"marginTop"))||0;J.left-=parseFloat(p(I,"marginLeft"))||0;H.top+=parseFloat(p(G[0],"borderTopWidth"))||0;H.left+=parseFloat(p(G[0],"borderLeftWidth"))||0;return{top:J.top-H.top,left:J.left-H.left}};j.fn["offsetParent"]=function(){return this["map"](function(){var G=this.offsetParent||F.body;while(G&&(!b.test(G.nodeName)&&p(G,"position")==="static")){G=G.offsetParent}return G})};j._each(["Height","Width"],function(G,H){var I=G.toLowerCase();j.fn["inner"+G]=function(){var J=this[0];return J&&J.style?parseFloat(p(J,I,"padding")):null};j.fn["outer"+G]=function(K){var J=this[0];return J&&J.style?parseFloat(p(J,I,K?"margin":"border")):null};j.fn[I]=function(L){var M=this[0];if(!M){return L==null?null:this}if(j.isFunction(L)){return this["each"](function(Q){var P=j(this);P[I](L.call(this,Q,P[I]()))})}if(j.isWindow(M)){var N=M.document.documentElement["client"+G],J=M.document.body;return M.document.compatMode==="CSS1Compat"&&N||J&&J["client"+G]||N}else{if(M.nodeType===9){return Math.max(M.documentElement["client"+G],M.body["scroll"+G],M.documentElement["scroll"+G],M.body["offset"+G],M.documentElement["offset"+G])}else{if(L===undefined){var O=p(M,I),K=parseFloat(O);return j.isNaN(K)?O:K}else{return this["css"](I,typeof L==="string"?L:L+"px")}}}}});
function v(G){return j.isWindow(G)?G:G.nodeType===9?G.defaultView||G.parentWindow:false}j._each(["Left","Top"],function(G,H){var I="scroll"+G;j.fn[I]=function(L){var J,K;if(L===undefined){J=this[0];if(!J){return null}K=v(J);return K?("pageXOffset" in K)?K[H?"pageYOffset":"pageXOffset"]:j.support["boxModel"]&&K.document.documentElement[I]||K.document.body[I]:J[I]}return this["each"](function(){K=v(this);if(K){K.scrollTo(!H?L:j(K)["scrollLeft"](),H?L:j(K)["scrollTop"]())}else{this[I]=L}})}})});$.plug("ajax",function($){var xhrs=[function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("MSXML2.XMLHTTP.3.0")},function(){return new ActiveXObject("MSXML2.XMLHTTP")}],_xhrf=null;function _xhr(){if(_xhrf!=null){return _xhrf()}for(var i=0,l=xhrs.length;i<l;i++){try{var f=xhrs[i],req=f();if(req!=null){_xhrf=f;return req}}catch(e){}}return function(){}}$.xhr=_xhr;function _xhrResp(xhr,dataType){dataType=(dataType||xhr.getResponseHeader("Content-Type").split(";")[0]).toLowerCase();if(dataType.indexOf("json")>=0){var j=false;if(window.JSON){j=window.JSON.parse(xhr.responseText)}else{j=eval(xhr.responseText)}return j}if(dataType.indexOf("script")>=0){return eval(xhr.responseText)}if(dataType.indexOf("xml")>=0){return xhr.responseXML}return xhr.responseText}$._xhrResp=_xhrResp;$.formData=function formData(o){var kvps=[],regEx=/%20/g;for(var k in o){kvps.push(encodeURIComponent(k).replace(regEx,"+")+"="+encodeURIComponent(o[k].toString()).replace(regEx,"+"))}return kvps.join("&")};$.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){$.fn[o]=function(f){return this["bind"](o,f)}});function ajax(url,o){var xhr=_xhr(),timer,n=0;if(typeof url==="object"){o=url}else{o.url=url}o=$._defaults(o,{userAgent:"XMLHttpRequest",lang:"en",type:"GET",data:null,contentType:"application/x-www-form-urlencoded",dataType:null,processData:true,headers:{"X-Requested-With":"XMLHttpRequest"}});if(o.timeout){timer=setTimeout(function(){xhr.abort();if(o.timeoutFn){o.timeoutFn(o.url)}},o.timeout)}var cbCtx=$(o.context||document),evtCtx=cbCtx;xhr.onreadystatechange=function(){if(xhr.readyState==4){if(timer){clearTimeout(timer)}if(xhr.status<300){var res,decode=true,dt=o.dataType||"";try{res=_xhrResp(xhr,dt,o)}catch(e){decode=false;if(o.error){o.error(xhr,xhr.status,xhr.statusText)}evtCtx.trigger(cbCtx,"ajaxError",[xhr,xhr.statusText,o])}if(o.success&&decode&&(dt.indexOf("json")>=0||!!res)){o.success(res)}evtCtx.trigger(cbCtx,"ajaxSuccess",[xhr,res,o])}else{if(o.error){o.error(xhr,xhr.status,xhr.statusText)}evtCtx.trigger(cbCtx,"ajaxError",[xhr,xhr.statusText,o])}if(o.complete){o.complete(xhr,xhr.statusText)}evtCtx.trigger(cbCtx,"ajaxComplete",[xhr,o])}else{if(o.progress){o.progress(++n)}}};var url=o.url,data=null;var isPost=o.type.toUpperCase()=="POST"||o.type.toUpperCase()=="PUT";if(o.data&&o.processData&&typeof o.data=="object"){data=$.formData(o.data)}if(!isPost&&data){url+="?"+data;data=null}xhr.open(o.type,url);try{for(var i in o.headers){xhr.setRequestHeader(i,o.headers[i])}}catch(_){console.log(_)}if(isPost){if(o.contentType.indexOf("json")>=0){data=o.data}xhr.setRequestHeader("Content-Type",o.contentType)}xhr.send(data)}$.ajax=ajax;$.getJSON=function(url,data,success,error){if($.isFunction(data)){error=success;success=data;data=null}ajax({url:url,data:data,success:success,dataType:"json"})};$.get=function(url,data,success,dataType){if($.isFunction(data)){dataType=success;success=data;data=null}ajax({url:url,type:"GET",data:data,success:success,dataType:dataType||"text/plain"})};$.post=function(url,data,success,dataType){if($.isFunction(data)){dataType=success;success=data;data=null}ajax({url:url,type:"POST",data:data,success:success,dataType:dataType||"text/plain"})};$.getScript=function(url,success){return $.get(url,undefined,success,"script")};if(!window.JSON){$.loadAsync("http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js")}});$.plug("custom",function(e){var h=window,g=document,d={},f=h.location.search.substring(1).split("&"),a=e.Key=function(i){this.keyCode=i};for(var c=0;c<f.length;c++){var b=f[c].split("=");d[b[0]]=unescape(b[1])}e.queryString=function(i){return d[i]};a.namedKeys={Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,Pause:19,Capslock:20,Escape:27,PageUp:33,PageDown:34,End:35,Home:36,LeftArrow:37,UpArrow:38,RightArrow:39,DownArrow:40,Insert:45,Delete:46};e._each(a.namedKeys,function(k,i){var j=k;a.prototype["is"+i]=function(){return this.keyCode===j}});e.key=function(i){i=i||window.event;return new a(i.keyCode||i.which)};e.cancelEvent=function(i){if(!i){i=window.event}i.cancelBubble=true;i.returnValue=false;if(i.stopPropagation){i.stopPropagation();i.preventDefault()}return false};e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};e._template=function(l,k){var m=e.templateSettings;var i="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+l.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(m.escape,function(n,o){return"',_.escape("+o.replace(/\\'/g,"'")+"),'"}).replace(m.interpolate,function(n,o){return"',"+o.replace(/\\'/g,"'")+",'"}).replace(m.evaluate||null,function(n,o){return"');"+o.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";var j=new Function("obj","$",i);return k?j(k,e):function(n){return j(n,e)}}});
