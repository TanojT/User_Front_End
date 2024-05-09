import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerComponent } from './cleaner.component';

describe('CleanerComponent', () => {
  let component: CleanerComponent;
  let fixture: ComponentFixture<CleanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
