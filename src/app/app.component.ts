import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectloading } from './store/main-reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader: boolean;
  constructor(private store: Store) {
    this.store.select(selectloading).subscribe(data => {
      setTimeout(() => {
        this.showLoader = data;
      }, 0);
    });
  }
}
