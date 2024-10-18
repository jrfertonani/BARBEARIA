import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCreatComponent } from './servico-creat.component';

describe('ServicoCreatComponent', () => {
  let component: ServicoCreatComponent;
  let fixture: ComponentFixture<ServicoCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoCreatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
