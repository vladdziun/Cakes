import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { callbackify } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cakes:any;
  id = "";
  newCake:any;
  updatedCake: any;
  rating: number;
  comment: string;
  selectedCake: any;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.newCake = {name: "", url: ""}
    this.updatedCake = {name: "", url:"", comment:"", rating:0}
    this.getCakesFromService();
  }

  submitNewCake(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Adding cake", data)
      this.cakes.push(data);
      // this.getCakesFromService();
    });
    this.newCake = {name: "", url:""} 
  }

  rateCake(id,name,url){
    this.updatedCake = {id:id,name:name, url:url, rating: this.rating,
      comment:this.comment}
    console.log(this.updatedCake);
    let observable = this._httpService.updateCake(id, this.updatedCake);
    observable.subscribe(data => {
    });
  }

  getCakesFromService() {
    console.log("Here!")
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
      console.log("got our data", data);
      this.cakes = data;
      console.log(this.cakes);
    })
  }
  cakeToShow(cake){
      this.selectedCake = cake;
      this.getCakesFromService();
  }
}
