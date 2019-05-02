import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpresentationComponent } from './productpresentation.component';

describe('ProductpresentationComponent', () => {
  let component: ProductpresentationComponent;
  let fixture: ComponentFixture<ProductpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
