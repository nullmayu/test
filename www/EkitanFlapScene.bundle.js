(window.webpackJsonptest=window.webpackJsonptest||[]).push([["EkitanFlapScene"],{25:function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return c}));var i=e(0),a=e(6),h=e(11),n=e(10);var o=Object.freeze({first:1,middle:2,last:3,end:4}),r=e(4);class d{static createLightGrad(t,s,e){let a=new i.e;return a=e?this.createGradient(t,s,"rgba(255,255,255,0.1)","rgba(100,100,100,0.1)"):this.createGradient(t,s,"rgba(100,100,100,0.1)","rgba(255,255,255,0.1)"),a}static createGradient(t,s,e,a){const h=document.createElement("canvas"),n=h.getContext("2d");if(n){const i=n.createLinearGradient(0,0,0,s);h.setAttribute("width",""+t),h.setAttribute("height",""+s),i.addColorStop(0,e),i.addColorStop(1,a),n.fillStyle=i,n.fillRect(0,0,t,s)}return i.e.from(h)}static createShade(t,s){const e=new i.c;return e.beginFill(16777215,.1),e.drawRect(0,0,t,s),e.endFill(),e}static createBoardFrame(t,s){const e=new i.c;return e.lineStyle(2,0,1,0),e.beginFill(0,0),e.drawRect(0,0,t,s),e.endFill(),e}static createShaft(t){const s=new i.c;return s.beginFill(2763306,.8),s.drawRect(0,0,4,t),s.endFill(),s}static setWordTexture(t){const s=[],e=t.words.concat(""),a=e.length,h=new i.a({width:t.width*a,height:t.height,backgroundColor:0});for(let s=0;s<a;s++){const a=new i.f(e[s]);a.style={fontSize:t.fontsize,fill:16777215},a.anchor.set(.5,.5),a.position.set(t.width*(s+.5),t.height/2),a.width>t.width&&(a.width=t.width),h.stage.addChild(a)}const n=i.g.from(h.view).baseTexture;for(let e=0;e<a;e++){const a=new i.d(t.width*e,0,t.width,t.height/2),h=new i.d(t.width*e,t.height/2,t.width,t.height/2),o=new i.g(n,a),r=new i.g(n,h);s.push(o,r)}return{textures:s,app:h}}}d.words=["あ","い","う","え","お"];class l extends i.b{constructor(t){super(),this.layer=4,this.containers=[],this.shadeUp=new i.c,this.shadeDown=new i.c,this.rotateUp=new i.e,this.rotateDown=new i.e,this.speed=10,this.finished=!0,this.anime=this.Turn(),this.setContainers(),this.textures=t.textures,this.max=this.textures.length/2-1,this.flapW=this.textures[0].width,this.flapH=this.textures[0].height,this.state=o.end,this.nowUpNo=this.max,this.nowDownNo=this.max,this.turnNo=0,this.backUp=this.setSprite(this.max,!0),this.backDown=this.setSprite(this.max,!1),this.setInitial()}setSprite(t,s){if(s){return new i.e(this.textures[2*t])}return new i.e(this.textures[2*t+1])}lessMax(t){return t>this.max?t-this.max-1:t}setInitial(){const t=d.createLightGrad(this.flapW,this.flapH,!0);this.containers[3].addChild(t);const s=d.createLightGrad(this.flapW,this.flapH,!1);s.position.set(0,this.flapH),this.containers[3].addChild(s);const e=d.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(e);const i=d.createBoardFrame(this.flapW,this.flapH);this.containers[3].addChild(i),i.position.set(0,this.flapH);const a=d.createShaft(this.flapH/5);this.containers[3].addChild(a),a.position.set(this.flapW/2,.9*this.flapH),this.shadeUp=d.createShade(this.flapW,this.flapH),this.shadeUp.scale.y=0,this.containers[2].addChild(this.shadeUp),this.shadeDown=d.createShade(this.flapW,this.flapH),this.shadeDown.position.set(0,this.flapH),this.shadeDown.scale.y=0,this.containers[2].addChild(this.shadeDown),this.backUp.position.set(0,0),this.containers[0].addChild(this.backUp),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}setAnime(t){return this.turnNo=this.lessMax(t+this.max+1-this.nowUpNo),this.turnNo>0&&(this.finished=!1),this}*Turn(){this.state=o.first;let t=this.turnNo-1;for(this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=o.middle;t>0;)this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),t-=1;this.state=o.last,this.setTurnStart(),yield*this.turnFlap(),this.setTurnEnd(),this.state=o.end,this.finished=!0}*turnFlap(){let t=0;for(;t<90;){if(this.state===o.first||this.state===o.middle){const s=Math.cos(t/180*Math.PI);this.shadeUp.y=this.flapH*(1-s),this.shadeUp.scale.y=s*(1-s),this.rotateUp.scale.y=s}if(this.state===o.middle||this.state===o.last){const s=Math.sin(t/180*Math.PI);this.shadeDown.y=this.flapH*(1+s),this.shadeDown.scale.y=s*(1-s),this.rotateDown.scale.y=s}t+=this.speed,yield*r.a.wait(1)}}setTurnStart(){if(this.state!==o.middle&&this.state!==o.last||(this.rotateDown=this.setSprite(this.nowUpNo,!1),this.rotateDown.position.set(0,this.flapH),this.containers[1].addChild(this.rotateDown)),this.state===o.first||this.state===o.middle){this.rotateUp=this.setSprite(this.nowUpNo,!0),this.rotateUp.anchor.set(0,1),this.rotateUp.position.set(0,this.flapH),this.containers[1].addChild(this.rotateUp);const t=this.lessMax(this.nowUpNo+1);this.nowUpNo=t,this.backUp.destroy(),this.backUp=this.setSprite(t,!0),this.containers[0].addChild(this.backUp)}}setTurnEnd(){if(this.state!==o.first&&this.state!==o.middle||(this.rotateUp.destroy(),this.shadeUp.scale.y=0),this.state===o.middle||this.state===o.last){this.rotateDown.destroy(),this.shadeDown.scale.y=0;const t=this.lessMax(this.nowDownNo+1);this.nowDownNo=t,this.backDown.destroy(),this.backDown=this.setSprite(t,!1),this.backDown.position.set(0,this.flapH),this.containers[0].addChild(this.backDown)}}setContainers(){for(let t=0;t<this.layer;t++){const s=new i.b;this.containers[t]=s,this.addChild(s)}}}class c extends a.a{constructor(){super(),this.layer=1,this.setContainers(),this.workapp=new i.a}load(){super.load(),this.setBackGround();const t=d.setWordTexture({words:d.words,width:1e3,height:300,fontsize:200});this.workapp=t.app;const s=t.textures,e=new l({textures:s});this.containers[0].addChild(e),this.animations.push(e.setAnime(4));const i=new l({textures:s});this.containers[0].addChild(i),i.position.set(0,400),this.animations.push(i.setAnime(3)),e.visible=!1,i.visible=!1}setBackGround(){const t=class{static createBackGround(){const t=[],s=n.a.rectangle(1280,720,8421504);t.push(s);const e=n.a.rectangle(1e3,200,4210752);e.position.set(40,40),t.push(e);const i=n.a.rectangle(1200,360,4210752,{color:0,weight:10});i.position.set(40,320),t.push(i);const a=n.a.line(920,5,16777215);a.position.set(80,160),t.push(a);const o=n.a.line(65,5,16777215,90);o.position.set(540,160),t.push(o);const r=n.a.text(h.a.timetable.stationname,"center",60,16777215,880,"bold");if(r.position.set(540,70),t.push(r),h.a.timetable.nextstation[0]){const s=n.a.text(h.a.timetable.nextstation[0],"left",40,16777215,400);s.position.set(120,175),t.push(s)}if(h.a.timetable.nextstation[1]){const s=n.a.text(h.a.timetable.nextstation[1],"right",40,16777215,400);s.position.set(960,175),t.push(s)}const d=n.a.text(`${h.a.timetable.linename}  ${h.a.timetable.direction}`,"left",40,0,1110,"bold");return d.position.set(60,255),t.push(d),t}}.createBackGround();for(let s=0;s<t.length;s++)this.containers[0].addChild(t[s])}finish(){super.finish(),this.workapp.destroy(!0,{children:!0,texture:!0,baseTexture:!0})}update(){super.update()}}}}]);