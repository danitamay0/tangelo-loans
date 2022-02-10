import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerApplyComponent } from './banner-apply.component';

describe('BannerApplyComponent', () => {
  let component: BannerApplyComponent;
  let fixture: ComponentFixture<BannerApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
