import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service'; 
import configurl from '../../assets/config/config.json'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  config = {
    ApiUrl: configurl.apiServer.url,
  };

  title = 'WebApp';

  response = "No data loaded, yet";

  constructor(private sharedService: DemoService) 
  { 

  } 

  ngOnInit(): void {
    setTimeout(() => {
      this.refreshList();
    }, 2000);
  }

  refreshList() {
    this.sharedService.getData().subscribe(data =>{
      console.log(data) 
      this.response = data;		
    });
  }

}
