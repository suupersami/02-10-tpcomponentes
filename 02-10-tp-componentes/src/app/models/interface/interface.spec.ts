import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Interface } from './interface';

describe('Interface', () => {
  let component: Interface;
  let fixture: ComponentFixture<Interface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interface],
    }).compileComponents();

    fixture = TestBed.createComponent(Interface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
