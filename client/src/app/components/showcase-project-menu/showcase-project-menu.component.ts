import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-showcase-project-menu',
  templateUrl: './showcase-project-menu.component.html',
  styleUrls: ['./showcase-project-menu.component.scss']
})
export class ShowcaseProjectMenuComponent implements OnInit {

  projects;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects(): Promise<void> {
    this.projectsService.getProjects().then((res) => {
      this.projects = res.response;
    });
  }

}
