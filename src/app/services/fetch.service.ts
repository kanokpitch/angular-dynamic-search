import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  apiDatas(apiUrl = '') {
    const headers = new HttpHeaders();

    return new Promise(resolve => {
      this.http
        .get(apiUrl, { headers: headers })
        .toPromise()
        .then(resp => {
          if (resp) {
            resolve({ statusCode: 200, data: resp });
          }
        })
        .catch((HttpErrorResponse) => {
          const errResp: any = HttpErrorResponse;
          const errStatus: any = errResp.status;
          resolve({ statusCode: errStatus, data: null });
        });
    });
  }
}
