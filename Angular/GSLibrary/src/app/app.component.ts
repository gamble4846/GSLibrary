import { Component } from '@angular/core';
import { carouselData } from './gs-lib/carousel/carouselData.model';
import { productGridData } from './gs-lib/product-grid/productGridData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GSLibrary';
  carouselData:Array<carouselData> = [];
  productGridData:Array<productGridData> = [];

  constructor() { }

  ngOnInit(): void {
    this.CreateCarouselData();
    this.CreateProductGridData();
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
}
