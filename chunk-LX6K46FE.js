import{k as D,l as z,m as A}from"./chunk-Q4S4LLNC.js";import"./chunk-5KOFFFSL.js";import"./chunk-AEGJ6WWD.js";import"./chunk-I7AAR3MZ.js";import{E as P,Ea as T,Fa as F,G as x,Ga as B,Ha as j,Ia as $,J as b,M as _,Ma as H,N as C,O as M,Oa as U,P as w,X as l,aa as m,ca as s,da as v,ea as i,fa as a,ga as g,ha as R,ia as S,ja as u,ka as d,la as p,ma as c,na as E,oa as f,qa as I,ra as h,sa as k,ta as V}from"./chunk-GZVAOUFT.js";import"./chunk-MXGVE4JG.js";var O=class o{transform(t,e){return t.sort((n,r)=>n[e]<r[e]?-1:n[e]===r[e]?0:(n[e]>r[e]||n[e]>r[e],1))}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=b({name:"orderBy",type:o,pure:!0,standalone:!0})};function L(o,t){if(o&1){let e=u();i(0,"div",24)(1,"button",25),d("click",function(){_(e);let r=p();return C(r.displayEstimatesHandler())}),c(2," Exibir "),a(),i(3,"button",26),d("click",function(){_(e);let r=p();return C(r.deleteEstimate())}),c(4," Deletar estimativas "),a()()}}function J(o,t){if(o&1&&(i(0,"span",34),c(1),a()),o&2){let e=p().$implicit;l(),E(e.estimated)}}function K(o,t){o&1&&(i(0,"span",35),c(1,"Planning"),g(2,"br"),c(3,"Poker"),a())}function N(o,t){o&1&&(i(0,"span",36),c(1," \u2713 "),a())}function Q(o,t){if(o&1){let e=u();i(0,"button",37),d("click",function(){_(e);let r=p().$implicit,y=p();return C(y.deletePlayer(r))}),M(),i(1,"svg",38),g(2,"path",39)(3,"path",40),a()()}}function W(o,t){if(o&1&&(i(0,"div",27)(1,"div",28),m(2,J,2,1,"span",29)(3,K,4,0,"span",30)(4,N,2,0,"span",31),a(),g(5,"div"),i(6,"p",32),c(7),m(8,Q,4,0,"button",33),a()()),o&2){let e=t.$implicit,n=p();l(),v("voted",e.estimated),l(),s("ngIf",n.room==null?null:n.room.displayEstimates),l(),s("ngIf",!(n.room!=null&&n.room.displayEstimates)),l(),s("ngIf",e.estimated),l(3),f(" ",e.name," "),l(),s("ngIf",n.isOwnerOfTheRoom)}}function X(o,t){if(o&1){let e=u();i(0,"button",41),h(1,"async"),d("click",function(){let r=_(e).$implicit,y=p();return C(y.estimatedHandler(r.value))}),c(2),a()}if(o&2){let e,n=t.$implicit,r=p();v("selected",n.value==((e=k(1,4,r.estimatedPlayer$))==null?null:e.estimated)),s("ngClass",n.color),l(2),f(" ",n.value," ")}}function Y(o,t){if(o&1){let e=u();R(0),i(1,"div",42)(2,"div",43)(3,"h1",44),c(4,"Planning Poker"),a(),i(5,"p",45),c(6," Estime tarefas com precis\xE3o e agilidade, juntos! "),a(),g(7,"br")(8,"br"),i(9,"app-user-form",46),d("submit$",function(){_(e);let r=p();return C(r.submitUserForm())}),a()()(),S()}}var q=class o{sequence=[{value:"1",color:"bg-primary-subtle"},{value:"2",color:"bg-secondary-subtle"},{value:"3",color:"bg-success-subtle"},{value:"5",color:"bg-info-subtle"},{value:"8",color:"bg-warning-subtle"},{value:"13",color:"bg-danger-subtle"}];showUserForm=!1;players=[];room;selectedEstimate="";estimatedPlayer$;idRoom;router=P(U);activatedRoute=P(H);playerService=P(D);roomService=P(A);constructor(){this.idRoom=this.activatedRoute.snapshot.params.id,this.getRoomById(this.idRoom),this.getPlayersInRoom(),this.getRoom()}submitUserForm(){this.showUserForm=!1,this.roomService.addPlayer(this.idRoom)}displayEstimatesHandler(){this.roomService.updateDisplayEstimated(this.idRoom,!0)}deleteEstimate(){this.roomService.updateDisplayEstimated(this.idRoom,!1),this.roomService.deleteEstimates(this.idRoom).subscribe()}estimatedHandler(t){this.roomService.updateEstimate(this.idRoom,t)}leave(){this.roomService.leave(this.idRoom),this.router.navigateByUrl("/")}deletePlayer(t){this.roomService.removePlayer(this.idRoom,t.id)}get playerName(){let t=this.playerService.get();return t?t.name:""}get isOwnerOfTheRoom(){let t=this.playerService.get();return t?t.roomId===this.idRoom:!1}getRoomById(t){this.roomService.getById(t).subscribe(e=>{if(!e.exists()){this.router.navigate(["**"]);return}if(!this.playerService.get()){this.showUserForm=!0;return}let n=this.playerService.get();if(!n)return;let r=e.val();(!r.players||!r.players[n.id])&&this.roomService.addPlayer(this.idRoom),this.setEstimatedByPlayer()})}getPlayersInRoom(){this.roomService.getPlayers(this.idRoom).subscribe(t=>{this.players=t,setTimeout(()=>{this.validatePlayerInRoom()},100)})}validatePlayerInRoom(){let t=this.playerService.get();t&&(this.players.find(e=>e.id===t.id)||this.router.navigateByUrl("/"))}getRoom(){this.roomService.getRoom(this.idRoom).subscribe(t=>{this.room=t})}setEstimatedByPlayer(){this.estimatedPlayer$=this.roomService.getEstimatedByPlayer(this.idRoom)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["app-room"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[I],decls:31,vars:8,consts:[[1,"room-page"],[1,"gradient","shadow-lg"],[1,"wrapper-page"],[1,"header","shadow-lg"],[1,"container"],[1,"logo"],[1,"text"],[1,"badge","rounded-pill","text-bg-info"],[1,"action"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-light","btn-sm","dropdown-toggle"],[1,"dropdown-menu"],["type","button",1,"dropdown-item",3,"click"],["href","https://github.com/jeandonialves/planning-poker","target","_blank"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-github"],["d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"],[1,"container-page"],[1,"inner-container"],["class","actions",4,"ngIf"],[1,"players"],["class","player",4,"ngFor","ngForOf"],[1,"cards"],["class","card shadow",3,"ngClass","selected","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"actions"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"player"],[1,"card","shadow","position-relative"],["class","h4",4,"ngIf"],["class","label",4,"ngIf"],["class","position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success",4,"ngIf"],[1,"text-center","text-primary-emphasis"],["title","Remover jogador","class","btn-delete-player",3,"click",4,"ngIf"],[1,"h4"],[1,"label"],[1,"position-absolute","top-0","start-100","translate-middle","badge","rounded-pill","bg-success"],["title","Remover jogador",1,"btn-delete-player",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","red","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"],["d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"],[1,"card","shadow",3,"click","ngClass"],[1,"modal-container"],[1,"modal-body-container"],[1,"h3"],[1,"text-body-secondary"],[3,"submit$"]],template:function(e,n){e&1&&(i(0,"div",0),g(1,"div",1),i(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"p",6),c(7,"Planning Poker"),a(),i(8,"span",7),c(9,"Beta"),a()(),i(10,"div",8)(11,"div",9)(12,"button",10),c(13),a(),i(14,"ul",11)(15,"li")(16,"button",12),d("click",function(){return n.leave()}),c(17," Sair "),a()()()(),i(18,"a",13),M(),i(19,"svg",14),g(20,"path",15),a()()()()(),w(),i(21,"div",16)(22,"div",4)(23,"div",17),m(24,L,5,0,"div",18),i(25,"div",19),m(26,W,9,7,"div",20),h(27,"orderBy"),a(),i(28,"div",21),m(29,X,3,6,"button",22),a()()()()()(),m(30,Y,10,0,"ng-container",23)),e&2&&(l(13),f(" ",n.playerName," "),l(11),s("ngIf",n.isOwnerOfTheRoom),l(2),s("ngForOf",V(27,5,n.players,n.room!=null&&n.room.displayEstimates?"estimated":"name")),l(3),s("ngForOf",n.sequence),l(),s("ngIf",n.showUserForm))},dependencies:[$,T,F,B,j,z,O],styles:[".room-page[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:row}.room-page[_ngcontent-%COMP%] > .gradient[_ngcontent-%COMP%]{width:20px;background-image:radial-gradient(circle at 71.41% 95.91%,#4967da 0,#084198,#001e5b)}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:auto}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:45px}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;gap:5px;align-items:center;justify-content:center}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:600}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]{flex:1;display:flex}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex:1}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;gap:16px;align-items:center;padding:20px 0}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]{flex:5;display:flex;gap:32px;flex-wrap:wrap;padding:20px 0;justify-content:center;align-items:center}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{width:140px;display:flex;flex-direction:column;gap:12px}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-height:200px;display:flex;align-items:center;justify-content:center}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:600}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .card.voted[_ngcontent-%COMP%]{border:2px solid green}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .btn-delete-player[_ngcontent-%COMP%]{background:none;border:none}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{flex:2;display:flex;gap:16px;padding:15px;flex-wrap:wrap}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;min-width:100px;min-height:50px}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{box-shadow:var(--bs-box-shadow-lg)!important}.room-page[_ngcontent-%COMP%] > .wrapper-page[_ngcontent-%COMP%] > .container-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.selected[_ngcontent-%COMP%]{border-width:4px}.modal-container[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#00000080;z-index:2;left:0;top:0}.modal-container[_ngcontent-%COMP%] > .modal-body-container[_ngcontent-%COMP%]{padding:32px;background-color:#fff;border-radius:4px;min-width:320px;margin:20px}"]})};export{q as RoomComponent};