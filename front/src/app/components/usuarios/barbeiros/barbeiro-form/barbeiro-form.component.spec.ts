import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeiroFormComponent } from './barbeiro-form.component';

describe('BarbeiroFormComponent', () => {
  let component: BarbeiroFormComponent;
  let fixture: ComponentFixture<BarbeiroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbeiroFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbeiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
