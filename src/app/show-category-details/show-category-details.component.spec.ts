import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoryDetailsComponent } from './show-category-details.component';

describe('ShowCategoryDetailsComponent', () => {
  let component: ShowCategoryDetailsComponent;
  let fixture: ComponentFixture<ShowCategoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCategoryDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
