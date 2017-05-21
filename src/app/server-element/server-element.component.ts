import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated // none (to get global style ) , native , emulated (default)
})
export class ServerElementComponent implements OnInit , OnChanges , DoCheck , AfterContentInit
  , AfterContentChecked , AfterViewInit ,AfterViewChecked , OnDestroy  {



  @Input('srvElement') element : {type:string ,name:string , content:string}
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor() {
    console.log("constructor was called !");
  }

  ngOnInit() {

    console.log("ngOnInit was called !");
    console.log("Content child:"+this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges was called !");
    console.log(changes);
  }

  // called all times that any element is changed like button click, input value etc...
  ngDoCheck(){
    console.log("ngDoCheck was called !");
  }

  // called when the content inside of <ng-content> tag is initialized.
  ngAfterContentInit() {
    console.log("ngAfterContentInit was called !");
    console.log("Content child:"+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked was called !");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit was called !");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked was called !");
  }

  // called when any element is destroyed like removing an element from the array that was into the view .
  ngOnDestroy() {
    console.log("ngOnDestroy was called !");
  }

}
