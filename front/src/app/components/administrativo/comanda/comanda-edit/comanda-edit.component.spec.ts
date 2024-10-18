import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaEditComponent } from './comanda-edit.component';

describe('ComandaEditComponent', () => {
  let component: ComandaEditComponent;
  let fixture: ComponentFixture<ComandaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
