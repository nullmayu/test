(window.webpackJsonptest=window.webpackJsonptest||[]).push([["EkitanFlapScene"],{26:function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return u}));var i=e(0),a=e(2),h=e(1),n=e(7),r=e(10),o=e(9);var l=Object.freeze({first:1,middle:2,last:3,end:4}),d=e(5);class p{static createLightGrad(t,s,e){return e?this.createGradient(t,s,"rgba(255,255,255,0.1)","rgba(100,100,100,0.1)"):this.createGradient(t,s,"rgba(100,100,100,0.1)","rgba(255,255,255,0.1)")}static createGradient(t,s,e,a){const h=document.createElement("canvas"),n=h.getContext("2d");if(n){const i=n.createLinearGradient(0,0,0,s);h.setAttribute("width",""+t),h.setAttribute("height",""+s),i.addColorStop(0,e),i.addColorStop(1,a),n.fillStyle=i,n.fillRect(0,0,t,s)}return i.f.from(h)}static createShade(t,s){const e=new i.c;return e.beginFill(16777215,.1),e.drawRect(0,0,t,s),e.endFill(),e}static createBoardFrame(t,s){const e=new i.c;return e.lineStyle(2,0,1,0),e.beginFill(0,0),e.drawRect(0,0,t,s),e.endFill(),e}static createShaft(t){const s=new i.c;return s.beginFill(2763306,.8),s.drawRect(0,0,4,t),s.endFill(),s}static createFlapTexture(t,s){const e=[],a=t.baseTexture,h=t.width,n=t.height/s;for(let t=0;t<n;t++){const n=new i.d(0,s*t,h,s/2),r=new i.d(0,s*(t+.5),h,s/2),o=new i.h(a,n),l=new i.h(a,r);e.push(o,l)}return e}static setWordTexture(t){const s=[],e=t.types.length,a=new i.a({width:t.width*e,height:t.height});for(let s=0;s<e;s++){const e=t.types[s];let i=void 0;e.frame&&(i={color:e.textcolor,weight:10});const h=o.a.rectangle(t.width,t.height,e.backcolor,i);h.position.set(0,t.height*s),a.stage.addChild(h);const n=o.a.text(e.name,"center",t.fontsize,e.textcolor,t.width-30,!0,"bold");n.position.set(.5*t.width,t.height*(s+.5)),a.stage.addChild(n)}const h=a.renderer.plugins.extract.canvas(a.stage),n=i.e.from(h).baseTexture;for(let a=0;a<e;a++){const e=new i.d(0,t.height*a,t.width,t.height/2),h=new i.d(0,t.height*(a+.5),t.width,t.height/2),r=new i.h(n,e),o=new i.h(n,h);s.push(r,o)}return{textures:s,app:a}}}class c extends i.b{constructor(t){super(),this.layer=4,this.containers=[],this.shadeUp=new i.c,this.shadeDown=new i.c,this.rotateUp=new i.f,this.rotateDown=new i.f,this.speed=10,this.finished=!0,this.anime=this.Turn(),this.setContainers(),this.textures=t,this.max=this.textures.length/2-1,this.flapW=this.textures[0].width,this.flapH=this.textures[0].height,this.state=l.end,this.nowUpNo=this.max,this.nowDownNo=this.max,this.turnNo=0,this.backUp=this.setSprite(this.max,!0),this.backDown=this.setSprite(this.max,!1),this.setInitial()}setSprite(t,s){if(s){return new i.f(this.textures[2*t])}return new i.f(this.textures[2*t+1])}lessMax(t){return t>this.max?t-this.max-1:t}setAnime(t){return this.turnNo=this.lessMax(t+this.max+1-this.nowUpNo),this.turnNo>0&&(this.anime=this.Turn(),this.finished=!1),this}*Turn(){this.state=l.first;let t=this.turnNo-1;for(this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=l.middle;t>0;)this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),t-=1;this.state=l.last,this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=l.end,this.finished=!0}*turnFlap(){let t=0;for(;t<90;){if(this.state===l.first||this.state===l.middle){const s=Math.cos(t/180*Math.PI);this.shadeUp.y=this.flapH*(1-s),this.shadeUp.scale.y=s*(1-s),this.rotateUp.scale.y=s}if(this.state===l.middle||this.state===l.last){const s=Math.sin(t/180*Math.PI);this.shadeDown.y=this.flapH*(1+s),this.shadeDown.scale.y=s*(1-s),this.rotateDown.scale.y=s}t+=this.speed,yield*d.a.wait(1)}}setTurnStart(){if(this.state!==l.middle&&this.state!==l.last||(this.rotateDown=this.setSprite(this.nowUpNo,!1),this.rotateDown.position.set(0,this.flapH),this.containers[1].addChild(this.rotateDown)),this.state===l.first||this.state===l.middle){this.rotateUp=this.setSprite(this.nowUpNo,!0),this.rotateUp.anchor.set(0,1),this.rotateUp.position.set(0,this.flapH),this.containers[1].addChild(this.rotateUp);const t=this.lessMax(this.nowUpNo+1);this.nowUpNo=t,this.backUp.destroy(),this.backUp=this.setSprite(t,!0),this.containers[0].addChild(this.backUp)}}setTurnEnd(){if(this.state!==l.first&&this.state!==l.middle||(this.rotateUp.destroy(),this.shadeUp.scale.y=0),this.state===l.middle||this.state===l.last){this.rotateDown.destroy(),this.shadeDown.scale.y=0;const t=this.lessMax(this.nowDownNo+1);this.nowDownNo=t,this.backDown.destroy(),this.backDown=this.setSprite(t,!1),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}}setInitial(){const t=p.createLightGrad(this.flapW,this.flapH,!0);this.containers[3].addChild(t);const s=p.createLightGrad(this.flapW,this.flapH,!1);s.position.set(0,this.flapH),this.containers[3].addChild(s);const e=p.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(e);const i=p.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(i),i.position.set(0,this.flapH);const a=p.createShaft(this.flapH/3);a.position.set(this.flapW/2,this.flapH/6*5),this.containers[3].addChild(a),this.shadeUp=p.createShade(this.flapW,this.flapH),this.shadeUp.scale.y=0,this.containers[2].addChild(this.shadeUp),this.shadeDown=p.createShade(this.flapW,this.flapH),this.shadeDown.position.set(0,this.flapH),this.shadeDown.scale.y=0,this.containers[2].addChild(this.shadeDown),this.backUp.position.set(0,0),this.containers[0].addChild(this.backUp),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}setContainers(){for(let t=0;t<this.layer;t++){const s=new i.b;this.containers[t]=s,this.addChild(s)}}}class u extends n.a{constructor(){super(),this.flaps=[],this.currentNo=0,this.layer=2,this.setContainers(),this.workapp=[],this.loadimgs=[{imgid:"number",url:"number.png",x:0,y:0,width:60,height:1100}]}load(){var t;super.load(),this.setBackGround(),this.setFlaps(),null===(t=document.getElementById("nexttrain"))||void 0===t||t.addEventListener("click",t=>{t.preventDefault(),this.nextTrain()})}start(){super.start(),this.startFlapTurn()}finish(){super.finish();for(let t=0;t<this.workapp.length;t++)this.workapp[t].destroy(!0,{children:!0,texture:!0,baseTexture:!0})}update(){super.update(!0)}nextTrain(){a.a.instance.state===h.a.animeFinished&&(this.currentNo++,this.startFlapTurn())}startFlapTurn(){for(let t=0;t<this.flaps.length;t++){const s=[];for(let e=0;e<this.flaps[t].length;e++){const i=this.flaps[t][e].setAnime(r.a.timetable.trains[this.currentNo+t].data[e]);s.push(i)}this.animations.push(s)}}setFlap(t,s,e,i){const a=new c(t);a.position.set(e,i),this.flaps[s].push(a)}setFlaps(){const t=this.loadimgs.find(t=>"number"===t.imgid);let s=[];(null==t?void 0:t.texture)&&(s=p.createFlapTexture(t.texture,100));const e=p.setWordTexture({types:r.a.timetable.types,width:250,height:100,fontsize:60});this.workapp.push(e.app);const a=p.setWordTexture({types:r.a.timetable.dests,width:400,height:100,fontsize:60});this.workapp.push(a.app),this.flaps[0]=[],this.setFlap(s,0,470,400),this.setFlap(s,0,540,400),this.setFlap(s,0,640,400),this.setFlap(s,0,710,400),this.setFlap(e.textures,0,200,400),this.setFlap(a.textures,0,790,400),this.flaps[1]=[],this.setFlap(s,1,470,540),this.setFlap(s,1,540,540),this.setFlap(s,1,640,540),this.setFlap(s,1,710,540),this.setFlap(e.textures,1,200,540),this.setFlap(a.textures,1,790,540);for(let t=0;t<this.flaps.length;t++)for(let s=0;s<this.flaps[t].length;s++)this.containers[1].addChild(this.flaps[t][s]);const h=a.app.renderer.plugins.extract.canvas(a.app.stage),n=i.h.from(h).baseTexture,o=new i.h(n),l=new i.f(o);l.scale.set(.2),this.containers[1].addChild(l)}setBackGround(){const t=class{static createBackGround(){const t=[],s=o.a.rectangle(1280,720,8421504);t.push(s);const e=o.a.rectangle(1e3,200,4210752);e.position.set(40,40),t.push(e);const i=o.a.rectangle(1200,360,4210752,{color:0,weight:10});i.position.set(40,320),t.push(i);const a=o.a.line(920,5,16777215);a.position.set(80,160),t.push(a);const h=o.a.line(65,5,16777215,90);h.position.set(540,160),t.push(h);const n=o.a.text(r.a.timetable.stationname,"center",60,16777215,880,!1,"bold");if(n.position.set(540,110),t.push(n),r.a.timetable.nextstation[0]){const s=o.a.text(r.a.timetable.nextstation[0],"left",40,16777215,400);s.position.set(120,198),t.push(s)}if(r.a.timetable.nextstation[1]){const s=o.a.text(r.a.timetable.nextstation[1],"right",40,16777215,400);s.position.set(960,198),t.push(s)}const l=o.a.text(`${r.a.timetable.linename}    ${r.a.timetable.direction}`,"left",40,0,1110,!1,"bold");return l.position.set(60,280),t.push(l),t}}.createBackGround();for(let s=0;s<t.length;s++)this.containers[0].addChild(t[s])}}}}]);