import { Component, Input, OnInit } from '@angular/core';
import { Tower } from 'src/app/interfaces/model-interface';

@Component({
  selector: 'app-tower-card',
  templateUrl: './tower-card.component.html',
  styleUrls: ['./tower-card.component.scss']
})
export class TowerCardComponent implements OnInit {
  @Input() tower: Tower;
  constructor() { }

  ngOnInit(): void {
  }

}
