import { Component } from '@angular/core';

@Component({
  selector: 'app-three-button-bottom',
  templateUrl: './three-button-bottom.component.html',
  styleUrls: ['./three-button-bottom.component.css']
})
export class ThreeButtonBottomComponent {


widthcollase=100;


expandcallapse(){
  this.widthcollase=333;
}
}
