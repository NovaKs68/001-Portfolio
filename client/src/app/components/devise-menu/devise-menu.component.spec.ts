import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseMenuComponent } from './devise-menu.component';

describe('DeviseMenuComponent', () => {
  let component: DeviseMenuComponent;
  let fixture: ComponentFixture<DeviseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviseMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
