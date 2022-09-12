import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { carouselData } from './carouselData.model';

@Component({
  selector: 'gs-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //------------------- INPUTS ---------------------------
  @Input() carouselData:Array<carouselData> = [];
  @Input() hiddenScrollBar:boolean = false;
  @Input() imageHeight:number = 100;
  @Input() imageWidth:number = 200;
  @Input() showButtons:boolean = true;
  //------------------------------------------------------

  //------------------- View Childs ---------------------------
  @ViewChild('gsCarouselInnerContainer') gsCarouselInnerContainer!: ElementRef;
  //-----------------------------------------------------------

  //----------------------- OUTPUTS -------------------------------
  @Output() itemClicked = new EventEmitter<String>();
  //---------------------------------------------------------------

  constructor() { }

  ngOnInit(): void {
    console.log(this.carouselData);
  }

  ngAfterViewInit():void{
  }

  scrollInnerContainer(value:number){
    let toScroll = this.gsCarouselInnerContainer.nativeElement.offsetWidth - 50;
    let timeout = setInterval( () => {
      this.gsCarouselInnerContainer.nativeElement.scrollBy(value,0);
      toScroll -= Math.abs(value);
      if(toScroll <= 0){
        clearInterval(timeout);
      }
    }, 0);
  }

  cardClicked(data:any){
    this.itemClicked.emit(data);
  }
}
