import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLearnComponent } from './component-learn.component';

describe('ComponentLearnComponent', () => {
  let component: ComponentLearnComponent;
  let fixture: ComponentFixture<ComponentLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
