import { Component, OnInit } from '@angular/core';
import {APIServerService} from '../apiserver.service'

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {
Data:any
  constructor(private API:APIServerService) { 
    this.API.getData().subscribe(result => {
      this.Data = result
    })
  }

  ngOnInit(): void {
  }

  
}
