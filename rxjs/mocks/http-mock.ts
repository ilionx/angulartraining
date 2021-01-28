import {Observable, Subject} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

export class HttpClientMock {
  responseObject: Subject<HttpResponse<any>> = new Subject<HttpResponse<any>>();

  constructor() {

  }

  observeResponse(): Observable<HttpResponse<any>> {
    if (this.responseObject.closed) {
      this.responseObject = new Subject();
    }
    return this.responseObject.asObservable();
  }

  sendResponse(response: HttpResponse<any>): void {
    this.responseObject.next(response);
    this.responseObject.complete();
  }

  sendError(error: any): void {
    this.responseObject.error(error);
  }

  sendResponseWithoutCompleting(response: HttpResponse<any>): void {
    this.responseObject.next(response);
  }

  complete(): void {
    this.responseObject.complete();
  }
}
