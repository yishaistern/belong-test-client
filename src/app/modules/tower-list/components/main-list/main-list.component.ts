import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectuserName } from '../../../../store/main-reducer';
import { Observable, Subscription } from 'rxjs';
import { TowerService } from '../../services/tower.service';
import { selectTowersIds, selectTowersEnteties, selectedTower } from '../../../../store/tower-reducer';
import { Tower } from 'src/app/interfaces/model-interface';
@Component({
  selector: 'app-main-game',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit, OnDestroy {
  pickedId: string;
  pickedTower: Tower;
  username: Observable<string>;
  ids: Observable<string[]>;
  users: object;
  subsrip: Subscription;
  towers: object;
  constructor(private router: Router, private store: Store, private towerService: TowerService) { }
  ngOnDestroy(): void {
  }
  assginPickedTower(): void{
    if (this.pickedId && this.towers) {
      this.pickedTower = this.towers[this.pickedId];
    }
  }
  ngOnInit(): void {
    this.username = this.store.select(selectuserName);
    this.subsrip = this.store.select(selectedTower).subscribe(data => {
      this.pickedId = data;
      this.assginPickedTower();
    });
    this.towerService.getlist();
    this.ids = this.store.select(selectTowersIds);
    this.store.select(selectTowersEnteties).subscribe(data => {
      this.towers = data;
      this.assginPickedTower();
    });
  }

  goto(): void {
    this.router.navigate(['/newUser']);
  }

  pickTower(tower: Tower): void {
    this.towerService.pickTower(tower);
  }


}
