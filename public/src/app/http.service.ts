import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getCakes() {
    return this._http.get('/api/cakes');
  }
  getOneCake(id){
    return this._http.get(`/api/cakes/${id}`);
  }
  addCake(newCake){
    return this._http.post(`/api/cakes`, newCake);
  }
  deleteCake(id)
  {
    return this._http.delete(`/api/cakes/${id}`);
  }
  updateCake(id, updatedCake)
  {
    return this._http.put(`/api/cakes/${id}`, updatedCake);
  }

}