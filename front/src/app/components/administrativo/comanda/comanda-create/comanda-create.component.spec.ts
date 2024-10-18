import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaCreateComponent } from './comanda-create.component';

describe('ComandaCreateComponent', () => {
  let component: ComandaCreateComponent;
  let fixture: ComponentFixture<ComandaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
