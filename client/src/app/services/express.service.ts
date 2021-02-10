import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {
  /**
   * Define the backend port
   */
  public domain: string;

  constructor(private http: HttpClient,
              private router: Router) {
    this.domain = '/api'; // with this ; express points to self host and appends /api/  which is then rewrited by proxy rules to the back
  }

  /**
   * get url
   * @return domain
   */
  public getDomain(): string {
    return this.domain;
  }

  /**
   * post request to express and get the response
   * @param target
   * @param contentPost
   */
  postExpress(target, contentPost): Observable<any> {
    return this.http.post(this.domain + '/' + target, contentPost);
  }
}
