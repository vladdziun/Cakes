import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors: any;
  id: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    this._httpService.getAuthors().subscribe(data => {
      console.log("Got data",data)
      this.authors = data;
    })
  }
  deleteAuthor(id){
    this.id = id;
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log("deleteing author", this.id)
      
    })
   this.getAllAuthors()
  }
  goHome() {
    this._router.navigate(['/']);
  }

}
