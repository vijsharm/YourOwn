import { Component,ElementRef } from '@angular/core';
import 'app/SlideDownBoxMenu/jquery.easing.1.3.js';
const window: any = {};

@Component({
  selector: 'my-app',
  templateUrl: 'app/SlideDownBoxMenu/index.html'
  /*template:`
  <img [imageZoom]="app/SlideDownBoxMenu/images/tesla-zoom.jpg" [src]="app/SlideDownBoxMenu/images/tesla-small.jpg" [style.width.px]="20" [style.height.px]="20" >

  `*/
})
export class AppComponent  { name = 'Angular'; 
constructor(private elementRef:ElementRef) {};

ngAfterViewInit() {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "./app/SlideDownBoxMenu/custom.js";
  this.elementRef.nativeElement.appendChild(s);
}
}
