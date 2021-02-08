import { Component } from '@angular/core';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private projectsService: ProjectsService) {
  }
}
