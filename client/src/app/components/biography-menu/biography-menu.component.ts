import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-biography-menu',
  templateUrl: './biography-menu.component.html',
  styleUrls: ['./biography-menu.component.scss']
})
export class BiographyMenuComponent implements OnInit {

  imgSlideRobotHexapod: string;
  imgSlideServerNAS: string;
  showPresentMe: boolean;

  constructor() {
    this.imgSlideRobotHexapod = 'assets/img/RobotHexapodSlide.PNG'
    this.imgSlideServerNAS = 'assets/img/ServerNASSlide.JPG'
  }

  ngOnInit(): void {  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event): void {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrolled > 15) {
      this.showPresentMe = true;
    }
  }

}
