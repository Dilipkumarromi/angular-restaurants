import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class APIServerService {

  // Define API
 apiURL = 'http://localhost:3000/api/v1/student';
 POSTURL = 'http://localhost:3000/api/v1/insert';
 RecordDelete='http://localhost:3000/api/v1/RecordDel';
 checkToinsert='http://localhost:3000/api/v1/registration';
 FindByID='http://localhost:3000/api/v1/FindByEmail';

 constructor(private http: HttpClient) { }

    getData(){    
      return this.http.get(this.apiURL)
    }
    getDataById(email:any){
      const url=`${this.FindByID}/${email.email}`;
      
      return this.http.get(url)
    }

    saveData(data:any){
      return this.http.post(this.POSTURL,data)
    }
    DeleteData(id:number){
      const url=`${this.RecordDelete}/${id}`;
      return this.http.delete(url)
    }

    //existing check and Insert 
    ExisingAndInsert(email:any){
      const url=`${this.checkToinsert}/${email}`;
      
      return this.http.post(this.checkToinsert,email)
    }

    //Update Records
    updateRecord(id:number){
      const url=`${this.apiURL}/${id}`;
      return this.http.get(url)
    }
}
