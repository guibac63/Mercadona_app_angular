import { ComponentFixture, TestBed } from '@angular/core/testing';


import { PromotionAdminFormComponent } from './promotion-admin-form.component';

describe('PromotionAdminFormComponent', () => {
  let component: PromotionAdminFormComponent;
  let fixture: ComponentFixture<PromotionAdminFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionAdminFormComponent]
    });
    fixture = TestBed.createComponent(PromotionAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
