import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {APIServerService} from '../apiserver.service'
import Swal from 'sweetalert2'
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
Data:any
searchValue:string=''
  constructor(private api:APIServerService) {
    
   }

  ngOnInit(): void {
  }
  swtAlert(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
       
    })
  }
  InsertRecord(data:any){
    this.Data=data;
   this.api.saveData(data).subscribe(result => {
    Swal.fire({
      title: 'Congratulation!',
      text: 'Do you want to continue',
      icon: 'success',
       
    })
    
   })
  }

  clearSearch() {
    this.searchValue = '';
  }

}
