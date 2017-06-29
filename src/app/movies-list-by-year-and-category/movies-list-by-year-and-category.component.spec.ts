import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListByYearAndCategoryComponent } from './movies-list-by-year-and-category.component';

describe('MoviesListByYearAndCategoryComponent', () => {
  let component: MoviesListByYearAndCategoryComponent;
  let fixture: ComponentFixture<MoviesListByYearAndCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListByYearAndCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListByYearAndCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
