import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToolBarComponent } from './component-tool-bar.component';

describe('ComponentToolBarComponent', () => {
  let component: ComponentToolBarComponent;
  let fixture: ComponentFixture<ComponentToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToolBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
