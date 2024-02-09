import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyLazyLoadingPageComponent } from './dependency-lazy-loading-page.component';

describe('DependencyLazyLoadingPageComponent', () => {
  let component: DependencyLazyLoadingPageComponent;
  let fixture: ComponentFixture<DependencyLazyLoadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyLazyLoadingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependencyLazyLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
