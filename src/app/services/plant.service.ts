import { Injectable } from '@angular/core';

import { Http ,Headers, Response} from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { appConfig } from '../app.config';
import { Router } from '@angular/router';




import { User } from '../models/user';
//import { Plant } from '../models/plant';
import { Token } from '@angular/compiler';

import { LoginComponent } from '../views/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient, private router: Router,private https: Http) { }

  plant(token:string) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    headers.append("x-access-token", token);
  
    
    console.log(headers);
    console.log(token);
    return this.https.post('http://localhost:4000/api/plants',{"x-access-token": token}, {headers:headers})
    .map((response: Response) => {
      console.log(response);
      var result = response.json();
      return result;
    })
  }
}
