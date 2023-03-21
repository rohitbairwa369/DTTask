import { Component } from '@angular/core';
import { TaskdataService } from './services/taskdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DTtask';

  apidata:any;
  constructor(private getdata:TaskdataService){
  
    getdata.getdata().subscribe((res)=>{
      this.apidata= res;
      console.log("Data is Here",this.apidata);
    })
  }
  
}
