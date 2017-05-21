import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlitght]'
})
export class BetterHighlitghtDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';

  @Input() highLightColor: string = 'blue';

  // another way to change the DOM instead of using @HostListener @HostBinding('{property that you want to change}')
  @HostBinding('style.backgroundColor') backgroudColor : string ;

  constructor(private elementRef:ElementRef, private render:Renderer2) { }

  ngOnInit() {
    this.backgroudColor = this.defaultColor;
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroudColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroudColor = this.defaultColor;
  }
}
