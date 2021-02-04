import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import {Project} from '../../models/project';
import {mimeType} from '../../mime-type.validator';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.scss']
})
export class CreateProjectsComponent implements OnInit {

  public articleForm: FormGroup;
  imageFile: {link: string, file: any, name: string};
  public imagePreview: string;
  file: any;
  currentImage;
  urlImageDemo: string;

  constructor(private projectsService: ProjectsService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      titleMain: [null, Validators.required],
      resume: [null, Validators.required],
      image: [null, Validators.required, mimeType]
    });
  }

  onSubmit(): void {

    const project = new Project();
    project.titleProject = this.articleForm.get('titleMain').value;
    project.resumeProject = this.articleForm.get('resume').value;

    console.log('Le contre file ' + project);
    console.log( 'le file ' + this.articleForm.get('image').value);


    const articles = this.projectsService.postProject(project, this.articleForm.get('image').value);
    console.warn(this.articleForm.value);
  }

  onUpload(event): void {
    if (event.target.files && event.target.file) {
      const file = (event.target as HTMLInputElement).files;
      const reader = new FileReader();
      reader.onload = (rdr) => {
        this.currentImage = reader.result;
      };
      reader.readAsDataURL(event.target.file);
      console.log(file);
    }
  }

  imagesPreview(event): Promise<any> {
    return new Promise(resolve => {
      if (event.target.file && event.target.file) {
        const reader = new FileReader();
        reader.onload = (_event: any) => {
          const imageFile = {
            link: _event.target.result,
            file: event.srcElement.file,
            name: event.srcElement.file.name
          };
          resolve(imageFile);
        };
        reader.readAsDataURL(event.target.file);
      }
    });
  }

  /*ok() {
    const articles = this.articlesService.getOneArticle(5);
    articles.then(data => this.urlImageDemo = data.name_image_main);
  }*/

  onImagePick(event: Event): any {
    const file = (event.target as HTMLInputElement).files[0];
    this.articleForm.get('image').patchValue(file);
    this.articleForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.articleForm.get('image').valid) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
    console.log(this.file);
  }

}
