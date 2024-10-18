import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeiroCreateComponent } from './barbeiro-create.component';

describe('BarbeiroCreateComponent', () => {
  let component: BarbeiroCreateComponent;
  let fixture: ComponentFixture<BarbeiroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbeiroCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbeiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
