import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPicComponent } from './intro-pic.component';

describe('IntroPicComponent', () => {
  let component: IntroPicComponent;
  let fixture: ComponentFixture<IntroPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
