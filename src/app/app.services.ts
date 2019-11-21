import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class DataService {

    constructor(@Inject(HttpClient) private http: HttpClient) {
    }

    searchData(searchData: any): Observable<any> {
        var url: string;
        const  params = new  HttpParams().set('startDate', searchData.startDate).set('endDate', searchData.endDate);
        url = "https://api.myjson.com/bins/6zcva"; //https://api.myjson.com/bins/6zcva
        return this.http.get(url,  {params})
    }

    //   fetch('https://api.myjson.com/bins/15psn9')
  //   .then(result => result.json())
  //   .then(rowData => this.rowData = rowData);
  // }
}