import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCssComponent } from './grid-css.component';

describe('GridCssComponent', () => {
  let component: GridCssComponent;
  let fixture: ComponentFixture<GridCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
