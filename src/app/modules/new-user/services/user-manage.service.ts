import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ApiGatewayService } from '../../share/services/api-gateway.service';
@Injectable({
  providedIn: 'root'
})
export class UserManageService {

  constructor(private api: ApiGatewayService, private store: Store) { }

  logUser(userName: string): Observable<any> {
    const newUser = {name: userName };
    return this.api.runpostCall('log-in', newUser).pipe(
      map((data) => {
        if (this.api.checkIfSuccsess(data)) {
          sessionStorage.setItem('key', data.data.key);
          return newUser;
        } else {
          return null;
        }
      })
    );
  }
}
