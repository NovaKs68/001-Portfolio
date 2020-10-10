import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyMenuComponent } from './biography-menu.component';

describe('BiographyMenuComponent', () => {
  let component: BiographyMenuComponent;
  let fixture: ComponentFixture<BiographyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
