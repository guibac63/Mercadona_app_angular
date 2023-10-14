import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadonaProductComponent } from './mercadona-product.component';

describe('MercadonaProductComponent', () => {
  let component: MercadonaProductComponent;
  let fixture: ComponentFixture<MercadonaProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadonaProductComponent]
    });
    fixture = TestBed.createComponent(MercadonaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
