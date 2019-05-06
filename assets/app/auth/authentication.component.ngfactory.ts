/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './authentication.component';
import * as import4 from './auth.service';
const styles_AuthenticationComponent:any[] = ([] as any[]);
export const RenderType_AuthenticationComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AuthenticationComponent,
  data: {}
}
);
function View_AuthenticationComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
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
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
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
    (l()(),import0.ɵted((null as any),['Signin']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'signin');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
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
    import0.ɵqud(301989888,5,{links: 1}),
    import0.ɵqud(301989888,6,{linksWithHrefs: 1}),
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
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        6,
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
    (l()(),import0.ɵted((null as any),['Logout']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'logout');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
export function View_AuthenticationComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),22,'header',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'nav',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'ul',[[
        'class',
        'nav nav-tabs'
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
    (l()(),import0.ɵted((null as any),['Signup'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n           '])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import3.AuthenticationComponent = v.component;
    const currVal_0:any = 'active';
    ck(v,8,0,currVal_0);
    const currVal_3:any = ck(v,13,0,'signup');
    ck(v,12,0,currVal_3);
    const currVal_4:boolean = !co.isLoggedIn();
    ck(v,17,0,currVal_4);
    const currVal_5:any = co.isLoggedIn();
    ck(v,20,0,currVal_5);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,12).target;
    const currVal_2:any = import0.ɵnov(v,12).href;
    ck(v,11,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-authentication',([] as any[]),(null as any),(null as any),(null as any),View_AuthenticationComponent_0,RenderType_AuthenticationComponent)),
    import0.ɵdid(24576,(null as any),0,import3.AuthenticationComponent,[import4.AuthService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AuthenticationComponentNgFactory:import0.ComponentFactory<import3.AuthenticationComponent> = import0.ɵccf('app-authentication',import3.AuthenticationComponent,View_AuthenticationComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2JoYXZhL0RvY3VtZW50cy9HaXRIdWIvYW5ndWFyMi1tZXNzZW5nZXIvYXNzZXRzL2FwcC9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2JoYXZhL0RvY3VtZW50cy9HaXRIdWIvYW5ndWFyMi1tZXNzZW5nZXIvYXNzZXRzL2FwcC9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cy5BdXRoZW50aWNhdGlvbkNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzLkF1dGhlbnRpY2F0aW9uQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj48YSBbcm91dGVyTGlua109XCJbJ3NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj48YSBbcm91dGVyTGlua109XCJbJ2xvZ291dCddXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPGFwcC1hdXRoZW50aWNhdGlvbj48L2FwcC1hdXRoZW50aWNhdGlvbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DS29CO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQW9EO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7SUFBMEI7OztJQUE3RTtJQUFKLFNBQUksU0FBSjtJQUF1RDtJQUFILFNBQUcsU0FBSDs7SUFBQTtJQUFBO0lBQUEsU0FBQSxtQkFBQTs7Ozs7TUFDcEQ7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBbUQ7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUEwQjs7O0lBQTVFO0lBQUosU0FBSSxTQUFKO0lBQXNEO0lBQUgsU0FBRyxTQUFIOztJQUFBO0lBQUE7SUFBQSxTQUFBLG1CQUFBOzs7OztJQU52RTtNQUNRO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEI7TUFDeEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQztNQUNsQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO01BQ3JCO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQThCO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7SUFBMEI7SUFBZTtJQUMxRTtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdHO0lBQ2hHO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBK0Y7SUFDOUY7SUFDSDtJQUNEO01BQ1Q7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtJQUN0QjtnQkFBQTs7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBK0I7SUFDNUI7Ozs7SUFSVTtJQUFKLFNBQUksU0FBSjtJQUFpQztJQUFILFVBQUcsU0FBSDtJQUNBO0lBQTlCLFVBQThCLFNBQTlCO0lBQzhCO0lBQTlCLFVBQThCLFNBQTlCOztJQUY4QjtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNKbEQ7Z0JBQUE7Ozs7In0=
