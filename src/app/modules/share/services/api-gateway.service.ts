import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectuserName } from 'src/app/store/main-reducer';
import { logUser, runCall } from 'src/app/store/actions';
@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  currentUser: string;
  constructor(private http: HttpClient, private router: Router,  private store: Store) {
    this.store.select(selectuserName).subscribe(data => {
      this.currentUser = data;
    });
  }

  runpostCall(suffix: string, payload: any): Observable<any> {
    this.store.dispatch(runCall({isAlive: true}));
    let headers: HttpHeaders = new HttpHeaders();
    const key = window.sessionStorage.getItem('key');
    if (key) {
      headers = headers.set('bearer', key);
    }
    return this.http.post(environment.prefix + suffix, payload, { headers }).pipe(
      map((data) => {
        this.store.dispatch(runCall({isAlive: false}));
        this.dispachUser(data);
        this.logOutIfThereIsNoUser(data);
        return data;
      }),
      catchError((error) => {
        this.store.dispatch(runCall({isAlive: false}));
        return error;
      })
    );
  }

  dispachUser(payload): void {
    if (!this.currentUser && payload.user) {
      this.store.dispatch(logUser({newUser: {userName: payload.user}}));
    }
  }
  logOutIfThereIsNoUser(data): void {
    if (data && data.error && data.error.code === 10 ) {
      this.router.navigate(['']);
    }
  }

  checkIfSuccsess(data): boolean {
    if (data && data.error && data.error.code === 0 ) {
      return true;
    } else {
      return false;
    }
  }
}
