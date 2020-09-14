import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { postMessage } from '../components/messages/messages.actions';
import Message from '../components/messages/message';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class StoredService {
  protected constructor(
    protected store: Store,
    protected http: HttpClient
  ) { }

  protected serverErrorHandler() {
    return catchError((error: HttpErrorResponse) => {
      console.error(error.message);

      this.store.dispatch(postMessage({
        message: new Message('Something bad happens!')
      }));

      return of(null);
    })
  }
}
