YUI.add("get",function(C){var B=C.UA,A=C.Lang;C.Get=function(){var K={},I=0,D=0,R=false;var T=function(X,U,Y){var V=Y||C.config.win,Z=V.document,a=Z.createElement(X);for(var W in U){if(U[W]&&C.Object.owns(U,W)){a.setAttribute(W,U[W]);}}return a;};var Q=function(U,V,X){var W=X||"utf-8";return T("link",{"id":"yui__dyn_"+(D++),"type":"text/css","charset":W,"rel":"stylesheet","href":U},V);};var P=function(U,V,X){var W=X||"utf-8";return T("script",{"id":"yui__dyn_"+(D++),"type":"text/javascript","charset":W,"src":U},V);};var S=function(X,W){var U=K[X];if(U.onFailure){var V=U.context||U;U.onFailure.call(V,M(U,W));}};var J=function(U,X){var V=K[X],W=(A.isString(U))?V.win.document.getElementById(U):U;if(!W){S(X,"target node not found: "+U);}return W;};var L=function(b){var Y=K[b];if(Y){var a=Y.nodes,U=a.length,Z=Y.win.document,X=Z.getElementsByTagName("head")[0];if(Y.insertBefore){var W=J(Y.insertBefore,b);if(W){X=W.parentNode;}}for(var V=0;V<U;V=V+1){X.removeChild(a[V]);}}Y.nodes=[];};var M=function(U,V){return{tId:U.tId,win:U.win,data:U.data,nodes:U.nodes,msg:V,purge:function(){L(this.tId);}};};var G=function(X){var U=K[X];U.finished=true;if(U.aborted){var W="transaction "+X+" was aborted";S(X,W);return ;}if(U.onSuccess){var V=U.context||U;U.onSuccess.call(V,M(U));}};var N=function(W){var U=K[W];if(U.onTimeout){var V=U.context||U;U.onTimeout.call(V,M(U));}};var F=function(W,Z){var V=K[W];if(V.timer){V.timer.cancel();}if(V.aborted){var Y="transaction "+W+" was aborted";S(W,Y);return ;}if(Z){V.url.shift();if(V.varName){V.varName.shift();}}else{V.url=(A.isString(V.url))?[V.url]:V.url;if(V.varName){V.varName=(A.isString(V.varName))?[V.varName]:V.varName;}}var c=V.win,b=c.document,a=b.getElementsByTagName("head")[0],X;if(V.url.length===0){G(W);return ;}var U=V.url[0];if(V.timeout){V.timer=A.later(V.timeout,V,N,W);}if(V.type==="script"){X=P(U,c,V.charset);}else{X=Q(U,c,V.charset);}H(V.type,X,W,U,c,V.url.length);V.nodes.push(X);if(V.insertBefore){var e=J(V.insertBefore,W);if(e){e.parentNode.insertBefore(X,e);}}else{a.appendChild(X);}if((B.webkit||B.gecko)&&V.type==="css"){F(W,U);}};var E=function(){if(R){return ;}R=true;for(var U in K){if(K.hasOwnProperty(U)){var V=K[U];if(V.autopurge&&V.finished){L(V.tId);delete K[U];}}}R=false;};var O=function(V,U,W){var Y="q"+(I++);W=W||{};if(I%C.Get.PURGE_THRESH===0){E();}K[Y]=C.merge(W,{tId:Y,type:V,url:U,finished:false,nodes:[]});var X=K[Y];X.win=X.win||C.config.win;X.context=X.context||X;X.autopurge=("autopurge" in X)?X.autopurge:(V==="script")?true:false;A.later(0,X,F,Y);return{tId:Y};};var H=function(W,b,a,V,Z,Y,U){var X=U||F;if(B.ie){b.onreadystatechange=function(){var c=this.readyState;if("loaded"===c||"complete"===c){X(a,V);}};}else{if(B.webkit){if(W==="script"){b.addEventListener("load",function(){X(a,V);});}}else{b.onload=function(){X(a,V);};}}};return{PURGE_THRESH:20,_finalize:function(U){A.later(0,null,G,U);},abort:function(V){var W=(A.isString(V))?V:V.tId;var U=K[W];if(U){U.aborted=true;}},script:function(U,V){return O("script",U,V);},css:function(U,V){return O("css",U,V);}};}();},"@VERSION@");