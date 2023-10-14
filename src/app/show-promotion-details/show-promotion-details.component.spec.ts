import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPromotionDetailsComponent } from './show-promotion-details.component';

describe('ShowPromotionDetailsComponent', () => {
  let component: ShowPromotionDetailsComponent;
  let fixture: ComponentFixture<ShowPromotionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPromotionDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowPromotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
