import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRouteStub } from '../testing/activatedRouteStub';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from '../services/mock.service';
import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute } from '@angular/router';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let stub = new ActivatedRouteStub({ id: 76 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports:[ RouterTestingModule, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: stub },
        { provide: DataServiceService, useClass: MockDataService }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the id 76', () => {
    expect(component.singleMovie.id).toEqual(76);
  });
});
