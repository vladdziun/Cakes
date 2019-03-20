import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getAuthors(){
    return this._http.get('/api/authors');
  }
  getAuthor(id){
    return this._http.get(`/api/authors/${id}`)
  }
  addAuthor(newAuthor){
    return this._http.post('/api/authors', newAuthor);
  }
  deleteAuthor(id){
    return this._http.delete(`/api/authors/${id}`);
  }
  updateAuthor(id, updatedAuthor){
    return this._http.put(`/api/authors/${id}`, updatedAuthor);
  }
}
