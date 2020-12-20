import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarOutPut: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit()  {
  }
  toggleSideBar(){
    this.toggleSideBarOutPut.emit();
  }
}
