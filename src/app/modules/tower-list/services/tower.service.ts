import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { runCall, getTwoers, pickTwoer, updateTwoer } from '../../../store/actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectTowersEnteties } from 'src/app/store/tower-reducer';
import { Tower } from '../../../interfaces/model-interface';
import { ApiGatewayService } from '../../share/services/api-gateway.service';
@Injectable({
  providedIn: 'root'
})
export class TowerService {
  private towers: object;
  constructor(private store: Store, private api: ApiGatewayService) {
    this.store.select(selectTowersEnteties).subscribe(data => {
      this.towers = data;
    });
  }

  getlist(): void {
    const payload = {};
    this.runpostCall('tower-list', payload).subscribe((response) => {
      if (this.api.checkIfSuccsess(response)) {
        this.store.dispatch(getTwoers({towers: response.data.towers}));
        this.store.dispatch(updateTwoer({ tower: { id: response.data.firstTower.id, changes: response.data.firstTower} }));
      }
    });
  }


  runpostCall(suffix: string, payload: any): Observable<any> {
    this.store.dispatch(runCall({done: false}));
    return this.api.runpostCall(suffix, payload).pipe(
      map((data) => {
        console.log(data);
        this.store.dispatch(runCall({done: true}));
        return data;
      })
    );
  }


  pickTower(tower: Tower): void {
    const tempTower: Tower = this.towers[tower.id];
    if (!tempTower.wasUpdated) {
      this.runpostCall('get-tower', {towerId: tower.id}).subscribe((response) => {
        if (this.api.checkIfSuccsess(response)) {
          const responseTower: Tower = response.data.tower;
          responseTower.wasUpdated = true;
          // updateTwoer
          this.store.dispatch(updateTwoer({tower: { changes: response.data.tower, id: tower.id}}));
        }
      });
    } else {
      this.store.dispatch(pickTwoer({towerId: tower.id}));
    }
  }
}
