import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  name = 'Willemin';
  forename = 'Tom';

  imgPath: string;
  imgRobotHeaderPath: string;
  imgNASHeaderPath: string;

  constructor(private projectsService: ProjectsService) {
    this.imgPath = 'assets/img/pp.jpg';
    this.imgRobotHeaderPath = 'assets/img/RobotPortfolio.PNG';
    this.imgNASHeaderPath = 'assets/img/ServeurNASHauteDef.png';
  }

  ngOnInit(): void {
  }

}
