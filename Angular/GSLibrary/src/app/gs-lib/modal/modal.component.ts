import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  //------------------- INPUTS ---------------------------
  @Input() modalWidth:string = "95vw";
  @Input() modalHeight:string = "95vh";
  @Input() modalBorderRadius:string = "5px";
  @Input() headerHeight:number = 10;
  @Input() footerHeight:number = 10;
  @Input() showModal:boolean = false;
  @Input() modalBackgroundColor:string = "transparent";
  //-----------------------------------------------------

  //------------------- GLOBALS ---------------------------
  contentHeight:number = 0;
  mainWidth:string = "0px";
  mainHeight:string = "0px";
  //-------------------------------------------------------

  //------------------- OUTPUTS ---------------------------
  @Output() closeModal = new EventEmitter<boolean>();
  //-------------------------------------------------------

  ngOnInit(): void {
    this.setContentHeight();
  }

  ngOnChanges() {
    this.showHideModal();
  }

  showHideModal(){
    if(this.showModal){
      this.mainWidth = this.modalWidth;
      this.mainHeight = this.modalHeight;
    }
    else{
      this.mainWidth = "0px";
      this.mainHeight = "0px";
    }
  }

  setContentHeight(){
    this.contentHeight = 100 - (this.headerHeight + this.footerHeight);
  }

  closeModalFUN(){
    this.showModal = false;
    this.showHideModal();
    this.closeModal.emit(this.showModal);
  }
}
