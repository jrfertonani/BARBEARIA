import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaFormComponent } from './comanda-form.component';

describe('ComandaFormComponent', () => {
  let component: ComandaFormComponent;
  let fixture: ComponentFixture<ComandaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
