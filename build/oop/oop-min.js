YUI.add("oop",function(E){var D=E.Lang,C=E.Array,B=Object.prototype;E.augment=function(A,R,H,P,L){var J=R.prototype,N=null,Q=R,M=(L)?E.Array(L):[],G=A.prototype,K=G||A,O=false;if(G&&Q){var F={},I={};N={};E.each(J,function(T,S){I[S]=function(){var V=this;for(var U in F){if(E.Object.owns(F,U)&&(V[U]===I[U])){V[U]=F[U];}}Q.apply(V,M);return F[S].apply(V,arguments);};if((!P||(S in P))&&(H||!(S in this))){if(D.isFunction(T)){F[S]=T;this[S]=I[S];}else{this[S]=T;}}},N,true);}else{O=true;}E.mix(K,N||J,H,P);if(O){R.apply(K,M);}return A;};E.aggregate=function(G,F,A,H){return E.mix(G,F,A,H,0,true);};E.extend=function(I,H,F,K){if(!H||!I){E.fail("extend failed, verify dependencies");}var J=H.prototype,G=E.Object(J),A;I.prototype=G;G.constructor=I;I.superclass=J;if(H!=Object&&J.constructor==B.constructor){J.constructor=H;}if(F){E.mix(G,F,true);}if(K){E.mix(I,K,true);}return I;};E.each=function(G,F,H,A){if(G.each&&G.item){return G.each.call(G,F,H);}else{switch(C.test(G)){case 1:return C.each(G,F,H);case 2:return C.each(E.Array(G,0,true),F,H);default:return E.Object.each(G,F,H,A);}}};E.clone=function(J,I,H,K,A){if(!D.isObject(J)){return J;}if(D.isDate(J)){return new Date(J);}var G=D.isFunction(J),F;if(G){if(J instanceof RegExp){return new RegExp(J.source);}F=E.bind(J,A);}else{F=(I)?{}:E.Object(J);}E.each(J,function(M,L){if(!H||(H.call(K||this,M,L,this,J)!==false)){this[L]=E.clone(M,I,H,K,this);}},F);return F;};E.bind=function(F,G){var A=E.Array(arguments,2,true);return function(){return F.apply(G||F,E.Array(arguments,0,true).concat(A));};};},"@VERSION@");