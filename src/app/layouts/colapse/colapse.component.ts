import { Component } from '@angular/core';

@Component({
  selector: 'app-colapse',
  templateUrl: './colapse.component.html',
  styleUrls: ['./colapse.component.css']
})
export class ColapseComponent {


  hideshow:boolean=false;
  toggle(){
    return this.hideshow = !this.hideshow;
  }

main_title="Explore the world management"

  titles:any=[
    {
      asset_title: "Technical Project Management"
      },
      {
      asset_title: "Threadbuild"
      },
      {
      asset_title: "Structure you pointers "
      },
      {
      asset_title: "4SA Method"
      }
  ]
  
  
  
  }
  


