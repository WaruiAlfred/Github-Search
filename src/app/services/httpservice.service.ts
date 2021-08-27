import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/observable/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

 username!:string;

  constructor(private http:HttpClient) {
    this.username = "WaruiAlfred"
  }

  getUserName(){
    return this.http.get("https://api.github.com/users/" + this.username)

  }
}
