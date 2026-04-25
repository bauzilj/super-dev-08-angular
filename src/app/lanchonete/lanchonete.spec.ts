import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lanchonete } from './lanchonete';

describe('Lanchonete', () => {
  let component: Lanchonete;
  let fixture: ComponentFixture<Lanchonete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lanchonete],
    }).compileComponents();

    fixture = TestBed.createComponent(Lanchonete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
