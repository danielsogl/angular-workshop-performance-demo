import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferPageComponent } from './defer-page.component';

describe('DeferPageComponent', () => {
  let component: DeferPageComponent;
  let fixture: ComponentFixture<DeferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
