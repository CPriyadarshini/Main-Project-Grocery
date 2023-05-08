import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = 'product_categorys';
  isOpen:boolean =false;
 open():void{
    this.isOpen = true;
  }
  close():void{
    this.isOpen = false;
  }
}
