import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor() {  }

  getProjects(): any {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/project/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }

  getOneProject(idProject: number): any {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/project/' + idProject, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }

  postProject(titleProject: string, pictureProject: HTMLImageElement, resumeProject: string): any {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/project/', {
        method: 'POST',
        body: JSON.stringify({titleProject, pictureProject, resumeProject}),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
        // Converting to JSON
        .then(response => {
          console.log(response.status);
          resolve(response.status);
        })
        .catch(
          err => {
            console.log(err);
            reject(err);
          });
    });
  }
}
