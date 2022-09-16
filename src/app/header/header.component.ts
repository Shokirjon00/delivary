import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidbarForMe: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidbar(){
    this.toggleSidbarForMe.emit();
  }

}