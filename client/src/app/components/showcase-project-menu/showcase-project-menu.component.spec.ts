import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseProjectMenuComponent } from './showcase-project-menu.component';

describe('ShowcaseProjectMenuComponent', () => {
  let component: ShowcaseProjectMenuComponent;
  let fixture: ComponentFixture<ShowcaseProjectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseProjectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseProjectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
