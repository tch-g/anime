"use strict";(self.webpackChunkmy_anime=self.webpackChunkmy_anime||[]).push([[585],{1585:(S,g,a)=>{a.r(g),a.d(g,{AuthModule:()=>A});var m=a(8583),l=a(9068),t=a(3018),c=a(7556),e=a(3679),p=a(5469);const d=[{path:"",redirectTo:"sign-in"},{path:"sign-in",component:(()=>{class n{constructor(o,i){this.router=o,this.auth=i}SingIn({email:o,password:i}){!o||!i||this.auth.SingIn({email:o,password:i}).then(()=>{this.router.navigate(["catalogue"])})}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.F0),t.Y36(c.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sing-in"]],decls:22,vars:12,consts:[[1,"py-5","text-center","middle"],[1,"col-lg-6","col-md-8","mx-auto"],[1,"fw-light","text-white"],[1,"py-5","d-flex","justify-content-center"],[3,"ngSubmit"],["form","ngForm"],[1,"form-floating","mb-2"],["type","email","ngModel","","name","email","id","floatingInput","placeholder","Your Eemail",1,"form-control"],["for","floatingInput"],["type","password","ngModel","","name","password","id","floatingPassword","placeholder","Password",1,"form-control"],["for","floatingPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-outline-secondary"]],template:function(o,i){if(1&o){const s=t.EpF();t.TgZ(0,"main"),t.TgZ(1,"section",0),t.TgZ(2,"div",1),t.TgZ(3,"h1",2),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"section",3),t.TgZ(7,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(s);const u=t.MAs(8);return i.SingIn(u.value)}),t.TgZ(9,"div",6),t._UZ(10,"input",7),t.TgZ(11,"label",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",9),t.TgZ(16,"label",10),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.TgZ(19,"button",11),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&o&&(t.xp6(4),t.Oqu(t.lcZ(5,4,"SIGN_IN")),t.xp6(8),t.Oqu(t.lcZ(13,6,"EMAIL_ADDRESS")),t.xp6(5),t.Oqu(t.lcZ(18,8,"PASSWORD")),t.xp6(3),t.Oqu(t.lcZ(21,10,"SIGN_IN")))},directives:[e._Y,e.JL,e.F,e.Fj,e.JJ,e.On],pipes:[p.X$],styles:[".middle[_ngcontent-%COMP%]{background-image:url(n.a87fd5ac062512c86a8f.png);background-size:cover}form[_ngcontent-%COMP%]{width:340px}"]}),n})()},{path:"sign-up",component:(()=>{class n{constructor(o,i){this.auth=o,this.router=i}SingUp({email:o,password:i}){!o||!i||this.auth.SingUp({email:o,password:i}).then(()=>{this.router.navigate(["catalogue"])})}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.e),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sing-up"]],decls:27,vars:15,consts:[[1,"py-5","text-center","middle"],[1,"col-lg-6","col-md-8","mx-auto"],[1,"fw-light","text-white"],[1,"py-5","d-flex","justify-content-center"],[3,"ngSubmit"],["form","ngForm"],[1,"form-floating","mb-2"],["type","email","ngModel","","name","email","id","floatingInput","placeholder","Your Eemail",1,"form-control"],["for","floatingInput"],["type","password","ngModel","","name","password","id","floatingPassword","placeholder","Password",1,"form-control"],["for","floatingPassword"],["type","password","id","floatingRepeatPassword","placeholder","Password",1,"form-control"],["for","floatingRepeatPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-outline-secondary"]],template:function(o,i){if(1&o){const s=t.EpF();t.TgZ(0,"main"),t.TgZ(1,"section",0),t.TgZ(2,"div",1),t.TgZ(3,"h1",2),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"section",3),t.TgZ(7,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(s);const u=t.MAs(8);return i.SingUp(u.value)}),t.TgZ(9,"div",6),t._UZ(10,"input",7),t.TgZ(11,"label",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",9),t.TgZ(16,"label",10),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.TgZ(19,"div",6),t._UZ(20,"input",11),t.TgZ(21,"label",12),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.qZA(),t.TgZ(24,"button",13),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&o&&(t.xp6(4),t.Oqu(t.lcZ(5,5,"SIGN_UP")),t.xp6(8),t.Oqu(t.lcZ(13,7,"EMAIL_ADDRESS")),t.xp6(5),t.Oqu(t.lcZ(18,9,"PASSWORD")),t.xp6(5),t.Oqu(t.lcZ(23,11,"REPEAT_PASSWORD")),t.xp6(3),t.Oqu(t.lcZ(26,13,"SIGN_UP")))},directives:[e._Y,e.JL,e.F,e.Fj,e.JJ,e.On],pipes:[p.X$],styles:[".middle[_ngcontent-%COMP%]{background-image:url(n.a87fd5ac062512c86a8f.png);background-size:cover}form[_ngcontent-%COMP%]{width:340px}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),n})();var Z=a(4466);let A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,f,Z.m,e.u5]]}),n})()}}]);