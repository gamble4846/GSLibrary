import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { option, selectData } from './selectData.model';

@Component({
  selector: 'gs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  //------------------- INPUTS ---------------------------
  @Input() dropDownHeight:number = 200;
  @Input() selectDataParentChild:Array<selectData> = [];
  @Input() isParentChild:boolean = false;
  @Input() selectData:Array<option> = [];
  @Input() showAllCheckbox:boolean = false;
  @Input() allowMultiSelect:boolean = false;
  @Input() showSearch:boolean = false;
  @Input() searchPlaceholder:string = "Search...";
  @Input() selectPlaceholder:string = "Select Options";
  @Input() responsiveOptionHiding:boolean = true;
  @Input() hideOptionsAfter:number = 0;
  @Input() KeepParentChildSeparate:boolean = false;
  @Input() disabled:boolean = false;
  //------------------------------------------------------

  //------------------- View Childs ---------------------------
  @ViewChild('selectContainer') selectContainer!: ElementRef;
  @ViewChild('outerSelectedTabsContainer') outerSelectedTabsContainer!: ElementRef;
  //-----------------------------------------------------------

  //---------- GLOBALS -----------------------------------
  showDD:boolean = false;
  allCheckBox:boolean = false;
  onlyChecked:Array<option> = [];
  searchValue:string = "";
  clickWasSVG:boolean = false;
  removedTags:number = 0;
  //------------------------------------------------------

  //------------------------------------------------------
  @Output() DropDownChanged = new EventEmitter<any>();
  //------------------------------------------------------

  constructor() { }

  ngOnInit(): void {
    this.dropDownChanged(false);
    this.searchValueChanged();
    if(this.isParentChild){
      for (let index = 0; index < this.selectDataParentChild.length; index++) {
        const pcData = this.selectDataParentChild[index];
        this.ChildrenChanged(index, 0, false);
      }
    }
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  showDropDown(){
    this.showDD = true;
    this.showHideDropDown();
  }

  toggleDropDown(){
    this.showDD = !this.showDD ;
    this.showHideDropDown();
  }

  hideDropDown(){
    this.showDD = false;
    this.showHideDropDown();
  }

  showHideDropDown(){
    if(this.showDD){
    }
    else{
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(this.selectContainer.nativeElement.contains(event.target)) {

    } else {
      this.hideDropDown();
    }

    if(this.clickWasSVG){
      this.showDropDown();
      this.clickWasSVG = false;
    }
  }

  dropDownChanged(emit:boolean = true){
    //------------------ Changing All Checked Box -----------------------
    if(!this.isParentChild){
      this.onlyChecked = this.selectData.filter((x:option) => x.checked == true);
      if(this.onlyChecked.length == this.selectData.length){
        this.allCheckBox = true;
      }
      else{
        this.allCheckBox = false;
      }
      if(emit){
        this.DropDownChanged.emit(this.selectData);
      }
    }

    if(this.isParentChild){
      let allSelectedLength = this.selectDataParentChild.filter((x:selectData) => x.parent.checked).length;
      let totalParents = this.selectDataParentChild.length;
      if(allSelectedLength == totalParents){
        this.allCheckBox = true;
      }
      else{
        this.allCheckBox = false;
      }

      this.onlyChecked = [];

      this.selectDataParentChild.forEach((fullOption:selectData) => {
        fullOption.children.forEach((option:option) => {
          if(option.checked){
            this.onlyChecked.push(option);
          }
        })
      })
      if(emit){
        this.DropDownChanged.emit(this.selectDataParentChild);
      }
    }
    this.removedTags = 0;
    this.UpdateOnlyCheckedAccordingToWidth();
    //-------------------------------------------------------------------
  }

  UpdateOnlyCheckedAccordingToWidth(){
    if(this.responsiveOptionHiding){
      setTimeout(() => {
        if(this.onlyChecked.length > 0){
          let selectedListWidth = this.outerSelectedTabsContainer.nativeElement.offsetWidth;
          let mainWidth = this.selectContainer.nativeElement.offsetWidth;

          let otherOption:option = {
            value: "G-Hide",
            text: "and ",
          }

          if(selectedListWidth > mainWidth){
            this.onlyChecked.pop();
            this.removedTags++;
            otherOption.text = "and " + this.removedTags + " more..."
            this.onlyChecked.push(otherOption);
            this.onlyChecked = [...this.onlyChecked];
            setTimeout(() => {
              selectedListWidth = this.outerSelectedTabsContainer.nativeElement.offsetWidth;
              mainWidth = this.selectContainer.nativeElement.offsetWidth;

              if(selectedListWidth > mainWidth){
                this.onlyChecked.pop();
                this.onlyChecked = [...this.onlyChecked]
                this.UpdateOnlyCheckedAccordingToWidth();
              }
            }, 10);
          }
          else if(this.removedTags > 0){
            this.onlyChecked.pop();
            this.onlyChecked.pop();
            this.onlyChecked.pop();
            this.removedTags += 3;
            otherOption.text = "and " + this.removedTags + " more..."
            this.onlyChecked.push(otherOption);
            this.onlyChecked = [...this.onlyChecked];
          }
        }
      }, 10);
    }
    else if(this.hideOptionsAfter > 0){
      if(this.onlyChecked.length > 0){
        let removedOptionsCount = this.onlyChecked.length - this.hideOptionsAfter;
        this.onlyChecked = this.onlyChecked.slice(0, this.hideOptionsAfter);

        if(removedOptionsCount > 0){
          let otherOption:option = {
            value: "G-Hide",
            text: "and ",
          }

          otherOption.text = "and " + removedOptionsCount + " more..."
          this.onlyChecked.push(otherOption);
          this.onlyChecked = [...this.onlyChecked];
        }
      }
    }
  }

  updateChildrenCheckboxAccordingToParentAll(){
    this.selectDataParentChild.forEach((fullOption:selectData) => {
      this.setAllChildrenAsChecked(fullOption);
    });
    this.dropDownChanged();
  }

  updateChildrenCheckboxAccordingToParent(parentIndex:any){
    this.setAllChildrenAsChecked(this.selectDataParentChild[parentIndex]);
    this.dropDownChanged();
  }

  setAllChildrenAsChecked(fullOption:selectData){
    let index = this.selectDataParentChild.findIndex((x:selectData) => x.parent.value == fullOption.parent.value);
    this.selectDataParentChild[index].children.map((x:option) => x.checked = fullOption.parent.checked);
  }

  allCheckBoxChanged(){
    //------ selectData ---------
    if(!this.isParentChild){
      this.selectData.map((x:option) => x.checked = this.allCheckBox);
      this.dropDownChanged();
    }
    //---------------------------

    //------ selectDataParentChild ---------
    if(this.isParentChild){
      this.selectDataParentChild.map((x:selectData) => x.parent.checked = this.allCheckBox);
      this.updateChildrenCheckboxAccordingToParentAll();
      this.dropDownChanged();
    }
    //---------------------------
  }

  removeFromSelected(option:option){
    if(!this.isParentChild){
      let index = this.selectData.findIndex((x:option) => x.value == option.value);
      if(index != -1){
        this.selectData[index].checked = false;
      }
      this.dropDownChanged();
    }

    if(this.isParentChild){
      let childIndex = -1;
      let parentIndex = -1;

      for (let index = 0; index < this.selectDataParentChild.length; index++) {
        const fullOption:selectData = this.selectDataParentChild[index];
        for (let index2 = 0; index2 < fullOption.children.length; index2++) {
          const optionIN:option = fullOption.children[index2];
          if(optionIN.value == option.value){
            childIndex = index2;
            parentIndex = index;
          }
        }
      }

      if(childIndex != -1 && parentIndex != -1){
        this.selectDataParentChild[parentIndex].children[childIndex].checked = false;
        this.ChildrenChanged(parentIndex,childIndex);
      }
    }

    this.clickWasSVG = true;
  }

  changeChecked(option:option){
    //------ selectData ---------
    if(!this.isParentChild){
      let index = this.selectData.findIndex((x:option) => x.value == option.value);
      if(index != -1){
        this.selectData[index].checked = !this.selectData[index].checked;
      }
      this.dropDownChanged();
    }
    //---------------------------
  }

  changeAllChecked(){
    this.allCheckBox = !this.allCheckBox;
    this.allCheckBoxChanged();
  }

  ChildrenChanged(parentIndex:number,childIndex:number,emitChanged:boolean = true){
    let allChildrenChecked = this.checkIfAllChildrenAreChecked(parentIndex);
    if(allChildrenChecked){
      this.selectDataParentChild[parentIndex].parent.checked = true;
    }
    else{
      this.selectDataParentChild[parentIndex].parent.checked = false;
    }
    if (emitChanged) {
      this.dropDownChanged();
    }
  }

  checkIfAllChildrenAreChecked(parentIndex:number) : boolean{
    let totalChildren = this.selectDataParentChild[parentIndex].children.length;
    let totalCheckedChildren = this.selectDataParentChild[parentIndex].children.filter((x:option) => x.checked).length;

    if(totalChildren == totalCheckedChildren){
      return true;
    }
    else{
      return false;
    }
  }

  updateChildrenCheckboxAccordingToParentClick(parentIndex:number){
    this.selectDataParentChild[parentIndex].parent.checked = !this.selectDataParentChild[parentIndex].parent.checked;
    this.updateChildrenCheckboxAccordingToParent(parentIndex);
  }

  ChildrenChangedClick(parentIndex:number,childIndex:number){
    this.selectDataParentChild[parentIndex].children[childIndex].checked = !this.selectDataParentChild[parentIndex].children[childIndex].checked;
    this.ChildrenChanged(parentIndex,childIndex);
  }

  searchValueChanged(){
    if(!this.isParentChild){
      this.selectData.map((option:option) => option.search = false);
      if(this.searchValue.length == 0){
        this.selectData.map((option:option) => option.search = true);
      }
      else{
        this.selectData.map((option:option) => {
          if(option.text.toLowerCase().includes(this.searchValue.toLowerCase())){
            option.search = true;
          }
        })
      }
    }

    if(this.isParentChild){
      this.selectDataParentChild.map((fullOption:selectData) => fullOption.parent.search = false);
      this.selectDataParentChild.map((fullOption:selectData) => fullOption.children.forEach((x:option) => x.search = false));

      if(this.searchValue.length == 0){
        this.selectDataParentChild.map((fullOption:selectData) => fullOption.parent.search = true);
        this.selectDataParentChild.map((fullOption:selectData) => fullOption.children.forEach((x:option) => x.search = true));
      }
      else{
        this.selectDataParentChild.map((fullOption:selectData) => fullOption.children.forEach((x:option) => {
          if(x.text.toLowerCase().includes(this.searchValue.toLowerCase())){
            x.search = true;
          }
        }));

        this.selectDataParentChild.map((fullOption:selectData) => {
          if(fullOption.children.filter((x:option) => x.search == true).length > 0){
            fullOption.parent.search = true;
          }
          else{
            fullOption.parent.search = false;
          }
        });
      }
    }
  }
}
