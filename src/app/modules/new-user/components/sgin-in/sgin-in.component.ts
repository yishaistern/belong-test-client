import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { logUser } from '../../../../store/actions';
import { UserManageService } from '../../services/user-manage.service';
@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrls: ['./sgin-in.component.scss']
})
export class SginInComponent implements OnInit, OnDestroy {
  dialogSub: Subscription;
  name: string;
  nameneeded: boolean;
  constructor(private router: Router, private store: Store, private userService: UserManageService) { }

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  seeList(): void {
    this.nameneeded = (this.name) ? false : true;
    if (!this.nameneeded) {
      this.userService.logUser(this.name).subscribe((data) => {
        if (data) {
          this.store.dispatch(logUser({newUser: {userName: this.name}}));
          this.router.navigate(['/tower-list']);
        }
      });
    }
  }

}
