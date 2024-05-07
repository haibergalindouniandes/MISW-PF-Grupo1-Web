import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Service } from '../../models/services/service';
import { Notification } from '../../models/services/notification';

@Injectable({
  providedIn: 'root'
})
export class ListDetailSharedService {

  private dataService = new Subject<Service>();
  private dataNotification = new Subject<Notification>();


  constructor() { }

  getDataService(): Observable<Service> {
    return this.dataService.asObservable();
  }

  setDataService(dataService: Service) {
    this.dataService.next(dataService);
  }

  getDataNotification(): Observable<Notification> {
    return this.dataNotification.asObservable();
  }

  setDataNotification(dataNotification: Notification) {
    this.dataNotification.next(dataNotification);
  }

}
