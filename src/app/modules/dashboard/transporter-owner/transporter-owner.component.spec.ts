import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterOwnerComponent } from './transporter-owner.component';

describe('TransporterOwnerComponent', () => {
  let component: TransporterOwnerComponent;
  let fixture: ComponentFixture<TransporterOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransporterOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransporterOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
