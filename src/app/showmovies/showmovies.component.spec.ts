import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoviesComponent } from './showmovies.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from '../services/data-service.service';
import { MockDataService } from '../services/mock.service';


describe('ShowmoviesComponent', () => {
  let component: ShowmoviesComponent;
  let fixture: ComponentFixture<ShowmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmoviesComponent ],
      imports: [HttpClientModule]
    })
    .overrideComponent(ShowmoviesComponent, { set: { providers: [{ provide: DataServiceService, useClass: MockDataService }]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`movie array should contain three elemnts`, () => {
    expect(component.moviesArray.length).toEqual(3);
  });
});
