(window.webpackJsonptest=window.webpackJsonptest||[]).push([["EkitanFlapScene"],{26:function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return f}));var i=e(2),h=e(1),a=e(6),n=e(0);class o extends n.b{constructor(t,s){super(),this.Hhand=t,this.Mhand=s,this.width=200,this.height=200,this.setHands()}setHands(){this.Hhand.pivot.set(5,60),this.Hhand.position.set(100,100),this.addChild(this.Hhand),this.Mhand.pivot.set(4,90),this.Mhand.position.set(100,100),this.addChild(this.Mhand)}moveClock(t){const s=t-60*(t/60|0);this.Hhand.angle=t/2,this.Mhand.angle=6*s}}var r=e(10),d=e(9);class l{static createBackGround(){const t=[],s=d.a.text(r.a.timetable.stationname,"center",60,16777215,880,!1,"bold");if(s.position.set(540,110),t.push(s),r.a.timetable.nextstation[0]){const s=d.a.text(r.a.timetable.nextstation[0],"left",40,16777215,400);s.position.set(120,198),t.push(s)}if(r.a.timetable.nextstation[1]){const s=d.a.text(r.a.timetable.nextstation[1],"right",40,16777215,400);s.position.set(960,198),t.push(s)}const e=d.a.text(`${r.a.timetable.linename}    ${r.a.timetable.direction}`,"left",40,0,1110,!1,"bold");return e.position.set(60,280),t.push(e),t}}l.loadimgs=[{imgid:"number",url:"number.png",x:0,y:0,width:60,height:1100},{imgid:"back",url:"back.png",x:0,y:0,width:1280,height:720},{imgid:"shadow",url:"shadow.png",x:0,y:0,width:990,height:240},{imgid:"Hhand",url:"clockhands.png",x:10,y:0,width:10,height:70},{imgid:"Mhand",url:"clockhands.png",x:0,y:0,width:8,height:110}];var c=Object.freeze({first:1,middle:2,last:3,end:4}),p=e(7);class u{static createShade(t,s){const e=new n.c;return e.beginFill(16777215,.1),e.drawRect(0,0,t,s),e.endFill(),e}static createBoardFrame(t,s){const e=new n.c;return e.lineStyle(2,0,1,.5),e.beginFill(0,0),e.drawRect(0,0,t,s),e.endFill(),e}static createShaft(t){const s=new n.c;return s.beginFill(2763306,.8),s.drawRect(0,0,4,t),s.endFill(),s}static createFlapTexture(t,s){const e=[],i=t.baseTexture,h=t.width,a=t.height/s;for(let t=0;t<a;t++){const a=new n.d(0,s*t,h,s/2),o=new n.d(0,s*(t+.5),h,s/2),r=new n.h(i,a),d=new n.h(i,o);e.push(r,d)}return e}static setWordTexture(t){const s=[],e=t.types.length,i=new n.a({width:t.width*e,height:t.height});for(let s=0;s<e;s++){const e=t.types[s];let h=void 0;e.frame&&(h={color:e.textcolor,weight:10});const a=d.a.rectangle(t.width,t.height,e.backcolor,h);a.position.set(0,t.height*s),i.stage.addChild(a);const n=d.a.text(e.name,"center",t.fontsize,e.textcolor,t.width-30,!0,"bold");n.position.set(.5*t.width,t.height*(s+.5)),i.stage.addChild(n)}const h=i.renderer.plugins.extract.canvas(i.stage),a=n.e.from(h).baseTexture;for(let i=0;i<e;i++){const e=new n.d(0,t.height*i,t.width,t.height/2),h=new n.d(0,t.height*(i+.5),t.width,t.height/2),o=new n.h(a,e),r=new n.h(a,h);s.push(o,r)}return{textures:s,app:i}}}class w extends n.b{constructor(t){super(),this.layer=4,this.containers=[],this.shadeUp=new n.c,this.shadeDown=new n.c,this.rotateUp=new n.f,this.rotateDown=new n.f,this.speed=10,this.finished=!0,this.anime=this.Turn(),this.setContainers(),this.textures=t,this.max=this.textures.length/2-1,this.flapW=this.textures[0].width,this.flapH=this.textures[0].height,this.state=c.end,this.nowUpNo=this.max,this.nowDownNo=this.max,this.turnNo=0,this.backUp=this.setSprite(this.max,!0),this.backDown=this.setSprite(this.max,!1),this.setInitial()}setSprite(t,s){if(s){return new n.f(this.textures[2*t])}return new n.f(this.textures[2*t+1])}lessMax(t){return t>this.max?t-this.max-1:t}setAnime(t){return this.turnNo=this.lessMax(t+this.max+1-this.nowUpNo),this.turnNo>0&&(this.anime=this.Turn(),this.finished=!1),this}*Turn(){this.state=c.first;let t=this.turnNo-1;for(this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=c.middle;t>0;)this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),t-=1;this.state=c.last,this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=c.end,this.finished=!0}*turnFlap(){let t=0;for(;t<90;){if(this.state===c.first||this.state===c.middle){const s=Math.cos(t/180*Math.PI);this.shadeUp.y=this.flapH*(1-s),this.shadeUp.scale.y=s*(1-s),this.rotateUp.scale.y=s}if(this.state===c.middle||this.state===c.last){const s=Math.sin(t/180*Math.PI);this.shadeDown.y=this.flapH*(1+s),this.shadeDown.scale.y=s*(1-s),this.rotateDown.scale.y=s}t+=this.speed,yield*p.a.wait(1)}}setTurnStart(){if(this.state!==c.middle&&this.state!==c.last||(this.rotateDown=this.setSprite(this.nowUpNo,!1),this.rotateDown.position.set(0,this.flapH),this.containers[1].addChild(this.rotateDown)),this.state===c.first||this.state===c.middle){this.rotateUp=this.setSprite(this.nowUpNo,!0),this.rotateUp.anchor.set(0,1),this.rotateUp.position.set(0,this.flapH),this.containers[1].addChild(this.rotateUp);const t=this.lessMax(this.nowUpNo+1);this.nowUpNo=t,this.backUp.destroy(),this.backUp=this.setSprite(t,!0),this.containers[0].addChild(this.backUp)}}setTurnEnd(){if(this.state!==c.first&&this.state!==c.middle||(this.rotateUp.destroy(),this.shadeUp.scale.y=0),this.state===c.middle||this.state===c.last){this.rotateDown.destroy(),this.shadeDown.scale.y=0;const t=this.lessMax(this.nowDownNo+1);this.nowDownNo=t,this.backDown.destroy(),this.backDown=this.setSprite(t,!1),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}}setInitial(){const t=u.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(t);const s=u.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(s),s.position.set(0,this.flapH);const e=u.createShaft(this.flapH/3);e.position.set(this.flapW/2,this.flapH/6*5),this.containers[3].addChild(e),this.shadeUp=u.createShade(this.flapW,this.flapH),this.shadeUp.scale.y=0,this.containers[2].addChild(this.shadeUp),this.shadeDown=u.createShade(this.flapW,this.flapH),this.shadeDown.position.set(0,this.flapH),this.shadeDown.scale.y=0,this.containers[2].addChild(this.shadeDown),this.backUp.position.set(0,0),this.containers[0].addChild(this.backUp),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}setContainers(){for(let t=0;t<this.layer;t++){const s=new n.b;this.containers[t]=s,this.addChild(s)}}}class f extends a.a{constructor(){super(),this.flaps=[],this.nowtime=0,this.currentNo=0,this.layer=3,this.setContainers(),this.workapp=[],this.loadimgs=l.loadimgs}load(){var t;super.load(),this.setBackGround(),this.setFlaps(),null===(t=document.getElementById("nexttrain"))||void 0===t||t.addEventListener("click",t=>{t.preventDefault(),this.nextTrain()})}start(){super.start(),this.startFlapTurn()}finish(){super.finish();for(let t=0;t<this.workapp.length;t++)this.workapp[t].destroy(!0,{children:!0,texture:!0,baseTexture:!0})}update(){this.getNowTime(),super.update(!0)}getNowTime(){var t;const s=new Date,e=60*s.getHours()+s.getMinutes();this.nowtime!=e&&(this.nowtime=e,null===(t=this.clock)||void 0===t||t.moveClock(this.nowtime))}nextTrain(){this.currentNo++,i.a.instance.state===h.a.animeFinished&&this.startFlapTurn()}startFlapTurn(){let t=this.currentNo;for(let s=0;s<this.flaps.length;s++){const e=[];let i=r.a.timetable.trains[t];i||(0===s&&(this.currentNo=0),t=0,i=r.a.timetable.trains[t]);for(let t=0;t<this.flaps[s].length;t++){const h=this.flaps[s][t].setAnime(i.data[t]);e.push(h)}this.animations.push(e),t++}}setFlap(t,s,e,i){const h=new w(t);h.position.set(e,i),this.flaps[s].push(h)}setFlaps(){const t=this.loadimgs.find(t=>"number"===t.imgid);let s=[];(null==t?void 0:t.texture)&&(s=u.createFlapTexture(t.texture,100));const e=u.setWordTexture({types:r.a.timetable.types,width:250,height:100,fontsize:60});this.workapp.push(e.app);const i=u.setWordTexture({types:r.a.timetable.dests,width:400,height:100,fontsize:60});this.workapp.push(i.app),this.flaps[0]=[],this.setFlap(s,0,470,400),this.setFlap(s,0,540,400),this.setFlap(s,0,640,400),this.setFlap(s,0,710,400),this.setFlap(e.textures,0,200,400),this.setFlap(i.textures,0,790,400),this.flaps[1]=[],this.setFlap(s,1,470,540),this.setFlap(s,1,540,540),this.setFlap(s,1,640,540),this.setFlap(s,1,710,540),this.setFlap(e.textures,1,200,540),this.setFlap(i.textures,1,790,540);for(let t=0;t<this.flaps.length;t++)for(let s=0;s<this.flaps[t].length;s++)this.containers[1].addChild(this.flaps[t][s])}setClock(){const t=this.createImage({imgid:"Hhand"}),s=this.createImage({imgid:"Mhand"});this.clock=new o(t,s),this.clock.position.set(1040,40),this.containers[0].addChild(this.clock)}setBackGround(){const t=this.createImage({imgid:"back",x:0,y:0});this.containers[0].addChild(t);const s=this.createImage({imgid:"shadow",x:200,y:400});s.alpha=.15,this.containers[2].addChild(s),this.setClock();const e=l.createBackGround();for(let t=0;t<e.length;t++)this.containers[0].addChild(e[t])}}}}]);