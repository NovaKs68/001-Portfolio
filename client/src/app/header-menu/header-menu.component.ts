import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  name = 'Willemin';
  forename = 'Tom';

  imgPath : string;

  constructor() {
    this.imgPath = 'assets/img/pp.jpg';
  }

  ngOnInit(): void {
  }

}
