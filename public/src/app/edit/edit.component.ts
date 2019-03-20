import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updatedAuthor:any;
  id: any;

  constructor(private _httpService: HttpService,
     private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.updatedAuthor = {name: ""}
  }
  updateAuthor(id, name) {
    id = this._activatedRoute.snapshot.paramMap.get('id');
  this.updatedAuthor = {id: id, name: name}
    this._httpService.updateAuthor(id, this.updatedAuthor).subscribe(data => {
     
      console.log("updating author", data);
    })
    this.updatedAuthor = {name: ""}
  }
}
