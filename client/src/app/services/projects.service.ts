import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {  }

  getProjects() {
    fetch('http://localhost:8080/api/project/')
      .then(function (response) {
          response.json().then(function (data) {
            console.log(data);
          });
      })
      .catch(function (err) {
        console.log('Fetch Error : ', err);
      });
  }

  getOneProject(id_project) {
    fetch('http://localhost:8080/api/project/' + id_project)
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error : ', err);
      });
  }

  postProject(title_project,picture_project,resume_project) {
    fetch('http://localhost:8080/api/project/', {
      method: "POST",
      body: JSON.stringify({ title_project,picture_project,resume_project }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      // Converting to JSON
      .then(response => {
        console.log(response.status);
      })
      .catch(err => console.log(err));
  }
}
