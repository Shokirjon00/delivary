import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delivery-club';
  sideBarOpen = true;

  ngOnInit() {}
    sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
