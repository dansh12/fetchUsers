import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLayoutComponent } from './table-layout.component';

describe('LayoutComponent', () => {
  let component: TableLayoutComponent;
  let fixture: ComponentFixture<TableLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
