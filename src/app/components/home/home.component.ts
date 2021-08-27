import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService:HttpserviceService) { }

  ngOnInit() {
    this.httpService.getUserName().subscribe(res => {
      console.log(res);
    })
  }

}
