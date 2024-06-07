import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittododialogComponent } from './edittododialog.component';

describe('EdittododialogComponent', () => {
  let component: EdittododialogComponent;
  let fixture: ComponentFixture<EdittododialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdittododialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdittododialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
