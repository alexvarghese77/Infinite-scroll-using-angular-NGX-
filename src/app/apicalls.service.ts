import { Injectable } from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ApicallsService {

  constructor(private http: Http) { }
  getpage(pagenum){
    return pagenum*20;
  }

  getHeroes(i:number): Promise<String[]> {
        return this.http.get(`../assets/api/${i}.json`)
        .toPromise()
        .then(response =>{
          return response.json().page;
          
        } )
        .catch(e => console.log("error",e));
  }
}
