import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaListComponent } from './comanda-list.component';

describe('ComandaListComponent', () => {
  let component: ComandaListComponent;
  let fixture: ComponentFixture<ComandaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
