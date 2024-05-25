import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplodeAnimationComponent } from './explode-animation.component';

describe('ExplodeAnimationComponent', () => {
  let component: ExplodeAnimationComponent;
  let fixture: ComponentFixture<ExplodeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplodeAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplodeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
