import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeiroListComponent } from './barbeiro-list.component';

describe('BarbeiroListComponent', () => {
  let component: BarbeiroListComponent;
  let fixture: ComponentFixture<BarbeiroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbeiroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbeiroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
