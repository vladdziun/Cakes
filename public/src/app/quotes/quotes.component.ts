import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any;
  id: any;
  author: any;

  constructor(private _httpService: HttpService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  getAuthor(id) {
    id = this._activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
    this._httpService.getAuthor(id).subscribe(data => {
      console.log("Got author", data);
      this.quotes = data['quotes'];
      this.author = data;
      console.log("here are my quotes", this.quotes)
    })
  }
  updateAuthor() {
    console.log("updating author", this.author);
    this._httpService.updateAuthor(this._activatedRoute.snapshot.paramMap.get('id'),
      this.author).subscribe(data => {

      })
  }
  deleteQuote(index) {
    console.log("deleting quote", index);
    this.quotes.splice(this.quotes[index], 1);
    this.updateAuthor();
  }
  rankUpQuote(index) {
    this.quotes[index].votes += 1;
    this.updateAuthor();
  }
  rankDownQuote(index) {
    this.quotes[index].votes -= 1;
    this.updateAuthor();
  }


}


