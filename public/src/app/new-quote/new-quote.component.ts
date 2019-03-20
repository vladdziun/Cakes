import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author: any;
  title:any;

  constructor(private _httpService: HttpService,
    private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.getAuthor(this._activatedRoute.snapshot.paramMap.get('id'));
    }
  
    getAuthor(id) {
      id = this._activatedRoute.snapshot.paramMap.get('id');
      this._httpService.getAuthor(id).subscribe(data => {
        this.author = data;
        console.log(this.author);
  
      })
    }
    addQuote()
    {
      console.log("pushing quote", this.title);
      this.author.quotes.push({title: this.title, votes: 0})
      this.updateAuthor();

    }
    updateAuthor()
    {
      console.log ("updating author", this.author);
      this._httpService.updateAuthor(this._activatedRoute.snapshot.paramMap.get('id'), 
      this.author).subscribe(data=>
        {

        })
    }

}
