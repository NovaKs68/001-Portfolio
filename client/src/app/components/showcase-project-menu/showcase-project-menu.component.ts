import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Project } from '../../models/project';

@Component({
  selector: 'app-showcase-project-menu',
  templateUrl: './showcase-project-menu.component.html',
  styleUrls: ['./showcase-project-menu.component.scss']
})
export class ShowcaseProjectMenuComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects(): Promise<void> {
    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      this.projects = JSON.parse(JSON.stringify(projects)).response;
    },
      (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  getBackgroundImageUrl(index: number): string {
    console.log(this.projects[index].picture_project);
    return this.projects[index].picture_project;
  }

}
