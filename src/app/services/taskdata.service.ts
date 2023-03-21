import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  constructor(private http:HttpClient) { }


  getdata(){
    return this.http.get('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
  }
  
}
