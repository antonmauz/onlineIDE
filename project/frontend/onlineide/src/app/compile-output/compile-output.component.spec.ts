import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompileOutputComponent } from './compile-output.component';

describe('CompileOutputComponent', () => {
  let component: CompileOutputComponent;
  let fixture: ComponentFixture<CompileOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompileOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompileOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
