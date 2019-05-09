import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddToCartComponent } from './add-to-cart.component';
import { DataServiceService } from '../services/data-service.service';
import { MockDataService } from '../services/mock.service';
import { template } from '@angular/core/src/render3';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartComponent ]

    })
     // SPC har providern DataService från spc.ts, här overridear vi den och använder MockdataService när vi gör våra tester.
     .overrideComponent(AddToCartComponent, { set: { providers: [{ provide: DataServiceService, useClass: MockDataService }]}})
     .compileComponents();
  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a empty cart', () => {
    expect(component.cart.length).toEqual(0);
  });
 
  it('should add one product to cart', () => {
    component.addMovieToCart();
    expect(component.cart.length).toEqual(1);
 
  });
 
  // it('should add one product to cart, but amount should be two', () => {
  //   expect(component.cart.length).toEqual(1);
  // });

});
