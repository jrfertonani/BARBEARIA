import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoEditComponent } from './servico-edit.component';

describe('ServicoEditComponent', () => {
  let component: ServicoEditComponent;
  let fixture: ComponentFixture<ServicoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
