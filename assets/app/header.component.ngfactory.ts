/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './header.component';
const styles_HeaderComponent:any[] = ([] as any[]);
export const RenderType_HeaderComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_HeaderComponent,
  data: {}
}
);
export function View_HeaderComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'header',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),22,'nav',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'ul',[[
        'class',
        'nav nav-pills'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,1,{links: 1}),
    import0.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,12).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Messenger'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,3,{links: 1}),
    import0.ɵqud(301989888,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,21).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Authentication'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,8,0,currVal_0);
    const currVal_3:any = ck(v,13,0,'/messages');
    ck(v,12,0,currVal_3);
    const currVal_4:any = 'active';
    ck(v,17,0,currVal_4);
    const currVal_7:any = ck(v,22,0,'/auth');
    ck(v,21,0,currVal_7);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,12).target;
    const currVal_2:any = import0.ɵnov(v,12).href;
    ck(v,11,0,currVal_1,currVal_2);
    const currVal_5:any = import0.ɵnov(v,21).target;
    const currVal_6:any = import0.ɵnov(v,21).href;
    ck(v,20,0,currVal_5,currVal_6);
  });
}
function View_HeaderComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-header',([] as any[]),(null as any),(null as any),(null as any),View_HeaderComponent_0,RenderType_HeaderComponent)),
    import0.ɵdid(24576,(null as any),0,import3.HeaderComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const HeaderComponentNgFactory:import0.ComponentFactory<import3.HeaderComponent> = import0.ɵccf('app-header',import3.HeaderComponent,View_HeaderComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9iaGF2YS9Eb2N1bWVudHMvR2l0SHViL2FuZ3VhcjItbWVzc2VuZ2VyL2Fzc2V0cy9hcHAvaGVhZGVyLmNvbXBvbmVudC50cy5IZWFkZXJDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L1VzZXJzL2JoYXZhL0RvY3VtZW50cy9HaXRIdWIvYW5ndWFyMi1tZXNzZW5nZXIvYXNzZXRzL2FwcC9oZWFkZXIuY29tcG9uZW50LnRzLkhlYWRlckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL21lc3NhZ2VzJ11cIj5NZXNzZW5nZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCJbJy9hdXRoJ11cIj5BdXRoZW50aWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgIiwiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO01BQ1E7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFvQjtNQUNoQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO01BQ2xDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMEI7TUFDdEI7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBOEI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUE2QjtJQUFrQjtNQUNoRjtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUE4QjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFHO0lBQXlCO0lBQXVCO0lBQ2hGO0lBQ0g7SUFDRDs7O0lBSk87SUFBSixTQUFJLFNBQUo7SUFBaUM7SUFBSCxVQUFHLFNBQUg7SUFDMUI7SUFBSixVQUFJLFNBQUo7SUFBaUM7SUFBSCxVQUFHLFNBQUg7O0lBREE7SUFBQTtJQUFBLFVBQUEsbUJBQUE7SUFDQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNMbEQ7Z0JBQUE7Ozs7In0=
