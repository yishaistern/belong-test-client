import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerCardComponent } from './tower-card.component';

describe('TowerCardComponent', () => {
  let component: TowerCardComponent;
  let fixture: ComponentFixture<TowerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
