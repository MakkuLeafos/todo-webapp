import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetododialogComponent } from './createtododialog.component';

describe('CreatetododialogComponent', () => {
  let component: CreatetododialogComponent;
  let fixture: ComponentFixture<CreatetododialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatetododialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatetododialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
