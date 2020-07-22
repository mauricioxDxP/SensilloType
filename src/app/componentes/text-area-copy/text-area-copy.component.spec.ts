import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaCopyComponent } from './text-area-copy.component';

describe('TextAreaCopyComponent', () => {
  let component: TextAreaCopyComponent;
  let fixture: ComponentFixture<TextAreaCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
