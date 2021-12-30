import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProgrammerComponent } from './table-programmer.component';

describe('TableProgrammerComponent', () => {
  let component: TableProgrammerComponent;
  let fixture: ComponentFixture<TableProgrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProgrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
