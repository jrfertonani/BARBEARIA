import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeiroEditComponent } from './barbeiro-edit.component';

describe('BarbeiroEditComponent', () => {
  let component: BarbeiroEditComponent;
  let fixture: ComponentFixture<BarbeiroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbeiroEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbeiroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
