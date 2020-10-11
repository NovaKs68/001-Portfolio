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
  imgRobotHeaderPath : string;
  imgNASHeaderPath : string;

  constructor() {
    this.imgPath = 'assets/img/pp.jpg';
    this.imgRobotHeaderPath = 'assets/img/RobotPortfolio.PNG'
    this.imgNASHeaderPath = 'assets/img/ServeurNASHauteDef.png'
  }

  ngOnInit(): void {
  }

}
