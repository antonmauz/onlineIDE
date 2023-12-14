import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiCdStatusComponent } from './ci-cd-status.component';

describe('CiCdStatusComponent', () => {
  let component: CiCdStatusComponent;
  let fixture: ComponentFixture<CiCdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiCdStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiCdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
