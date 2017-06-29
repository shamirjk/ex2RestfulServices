import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListByIdComponent } from './movies-list-by-id.component';

describe('MoviesListByIdComponent', () => {
  let component: MoviesListByIdComponent;
  let fixture: ComponentFixture<MoviesListByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
