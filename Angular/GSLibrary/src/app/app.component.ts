import { Component } from '@angular/core';
import { carouselData } from './gs-lib/carousel/carouselData.model';
import { productGridData } from './gs-lib/product-grid/productGridData.model';
import { option, selectData } from './gs-lib/select/selectData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GSLibrary';
  carouselData:Array<carouselData> = [];
  productGridData:Array<productGridData> = [];
  showModal:boolean = false;
  selectData:Array<option> = [];
  selectDataParentChild:Array<selectData> = [];

  constructor() { }

  ngOnInit(): void {
    this.CreateCarouselData();
    this.CreateProductGridData();
    this.CreateSelectData();
    this.CreateSelectDataParentChild();
  }

  CreateCarouselData(){
    this.carouselData.push(
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "1",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "2",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "3",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "4",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "5",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "6",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "7",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "8",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "9",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "10",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "11",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "12",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "13",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "14",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "15",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "16",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "17",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "18",id: "string2"},
      {imageLink : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",title : "19",id: "string1"},
      {imageLink : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6",title : "20",id: "string2"},
    );
  }

  carouselItemClicked(event:any){
    console.log(event);
  }

  CreateProductGridData(){
    this.productGridData.push(
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "1",
        id: "string1",
        headOne: "1",
        headTwo: "1"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "2",
        id: "string2",
        headOne: "2",
        headTwo: "2"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "3",
        id: "string3",
        headOne: "3",
        headTwo: "3"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "4",
        id: "string4",
        headOne: "4",
        headTwo: "4"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "5",
        id: "string5",
        headOne: "5",
        headTwo: "5"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "3",
        id: "string3",
        headOne: "3",
        headTwo: "3"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "4",
        id: "string4",
        headOne: "4",
        headTwo: "4"
      },
      {
        imageLink : "https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGljbGV8ZW58MHx8MHx8&w=1000&q=80",
        title : "5",
        id: "string5",
        headOne: "5",
        headTwo: "5"
      },
    );
  }

  productGridItemClicked(event:any){
    console.log(event);
  }

  showGsModal(){
    this.showModal = true;
  }

  hideModal(event:any){
    console.log(event);
    if(event){
      this.showModal = false;
    }
  }

  CreateSelectData(){
    this.selectData = [
      {value: "1", text: "1"},
      {value: "2", text: "2"},
      {value: "3", text: "3"},
      {value: "4", text: "4"},
      {value: "5", text: "5"},
      {value: "6", text: "6"},
      {value: "7", text: "7"},
      {value: "8", text: "8"},
      {value: "9", text: "9"},
      {value: "10", text: "10", checked: true},
      {value: "11", text: "11", checked: true},
      {value: "12", text: "12", checked: true},
      {value: "13", text: "13", checked: true},
      {value: "14", text: "14", checked: true},
    ];
  }

  CreateSelectDataParentChild(){
    let parent1:option = {
      text: "p1",
      value: "vp1"
    }

    let parent2:option = {
      text: "p2",
      value: "vp2"
    }

    let chid1:option = {
      text: "c1",
      value: "vc1",
      checked: true
    }

    let chid2:option = {
      text: "c2",
      value: "vc2",
      checked: true
    }

    let chid3:option = {
      text: "c3",
      value: "vc3",
      checked: true
    }

    let chid4:option = {
      text: "c4",
      value: "vc4",
      checked: true
    }

    let chid5:option = {
      text: "c5",
      value: "vc5"
    }

    let chid6:option = {
      text: "c6",
      value: "vc6"
    }

    let chid7:option = {
      text: "c7",
      value: "vc7"
    }

    let chid8:option = {
      text: "c8",
      value: "vc8"
    }


    this.selectDataParentChild = [
      {
        parent: parent1,
        children: [
          chid1,chid2
        ]
      },
      {
        parent: parent2,
        children: [
          chid3,chid4
        ]
      }
    ];
  }

  dropDownChanged(event:any){
    //console.log(event);
  }
}
