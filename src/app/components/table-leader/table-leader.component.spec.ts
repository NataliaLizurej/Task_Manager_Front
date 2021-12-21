import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeaderComponent } from './table-leader.component';

describe('TableLeaderComponent', () => {
  let component: TableLeaderComponent;
  let fixture: ComponentFixture<TableLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
