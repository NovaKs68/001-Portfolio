import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography-menu',
  templateUrl: './biography-menu.component.html',
  styleUrls: ['./biography-menu.component.scss']
})
export class BiographyMenuComponent implements OnInit {
  imgSlideRobotHexapod: string;
  imgSlideServerNAS: string;
  constructor() {
    this.imgSlideRobotHexapod = 'assets/img/RobotHexapodSlide.PNG'
    this.imgSlideServerNAS = 'assets/img/ServerNASSlide.JPG'
  }

  ngOnInit(): void {
  }

}
