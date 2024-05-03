import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDetailSharedService {

  private data = new Subject<any>();

  constructor() { }

  getData(): Observable<any> {
    return this.data.asObservable();
  }

  setData(newData: any) {
    this.data.next(newData);
  }

}
