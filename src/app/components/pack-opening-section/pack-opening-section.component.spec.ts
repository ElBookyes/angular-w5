import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackOpeningSectionComponent } from './pack-opening-section.component';

describe('PackOpeningSectionComponent', () => {
  let component: PackOpeningSectionComponent;
  let fixture: ComponentFixture<PackOpeningSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackOpeningSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackOpeningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
