import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor:any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
    this._route.params.subscribe((params: Params) => {
     this.goNew();
  });
  }
  addAuthor() {
    this._httpService.addAuthor(this.newAuthor).subscribe(data => {
     
      console.log("adding author", data);
    })
    this.newAuthor = {name: ""}
  }
  goNew() {
    this._router.navigate(['/new']);
  }


}
