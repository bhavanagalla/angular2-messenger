/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './error.component';
import * as import3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export const RenderType_ErrorComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_ErrorComponent,
  data: {}
}
);
export function View_ErrorComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'backdrop'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['display']),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),31,'div',[
      [
        'class',
        'modal'
      ]
      ,
      [
        'role',
        'dialog'
      ]
      ,
      [
        'tabindex',
        '-1'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['display']),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),26,'div',[
      [
        'class',
        'modal-dialog'
      ]
      ,
      [
        'role',
        'document'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),23,'div',[[
        'class',
        'modal-content'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'modal-header'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[
      [
        'aria-label',
        'Close'
      ]
      ,
      [
        'class',
        'close'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.ErrorComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onErrorHandled()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'aria-hidden',
        'true'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['×'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',[[
        'class',
        'modal-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'modal-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'modal-footer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.ErrorComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onErrorHandled()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Close'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.ErrorComponent = v.component;
    const currVal_0:any = ck(v,2,0,co.display);
    ck(v,1,0,currVal_0);
    const currVal_1:any = ck(v,6,0,co.display);
    ck(v,5,0,currVal_1);
  },(ck,v) => {
    var co:import2.ErrorComponent = v.component;
    const currVal_2:any = ((co.error == null)? (null as any): co.error.title);
    ck(v,19,0,currVal_2);
    const currVal_3:any = ((co.error == null)? (null as any): co.error.message);
    ck(v,25,0,currVal_3);
  });
}
function View_ErrorComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-error',([] as any[]),(null as any),(null as any),(null as any),View_ErrorComponent_0,RenderType_ErrorComponent)),
    import0.ɵdid(57344,(null as any),0,import2.ErrorComponent,[import3.ErrorService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:import0.ComponentFactory<import2.ErrorComponent> = import0.ɵccf('app-error',import2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9iaGF2YS9Eb2N1bWVudHMvR2l0SHViL2FuZ3VhcjItbWVzc2VuZ2VyL2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvYmhhdmEvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1YXIyLW1lc3Nlbmdlci9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMuRXJyb3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGRpc3BsYXl9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgZXJyb3I/LnRpdGxlIH19PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57eyBlcnJvcj8ubWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtY29udGVudCAtLT5cclxuICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XHJcbjwvZGl2PjwhLS0gLy5tb2RhbCAtLT4iLCI8YXBwLWVycm9yPjwvYXBwLWVycm9yPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQXNCO0lBQXVDO0lBQzdEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBK0M7SUFBaUM7SUFDNUU7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTBDO01BQ3RDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7TUFDdkI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQjtJQUN0QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBdUQ7UUFBQTtRQUFBO01BQUE7TUFBdkQ7SUFBQTtNQUFrRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO0lBQXVCO01BQ2xJO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUF1QjtJQUM3QztNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDcEI7SUFBRztNQUFBO01BQUE7SUFBQTtJQUFBO0lBQXdCO0lBQ3pCO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQjtJQUN0QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBOEM7UUFBQTtRQUFBO01BQUE7TUFBOUM7SUFBQTtJQUF5RTtJQUFjO0lBQ3JGO0lBQ29CO0lBQ0w7Ozs7SUFmWDtJQUF0QixTQUFzQixTQUF0QjtJQUMrQztJQUEvQyxTQUErQyxTQUEvQzs7O0lBS3dDO0lBQUE7SUFHckI7SUFBQTs7Ozs7SUNUbkI7Z0JBQUE7OztJQUFBOzs7In0=
