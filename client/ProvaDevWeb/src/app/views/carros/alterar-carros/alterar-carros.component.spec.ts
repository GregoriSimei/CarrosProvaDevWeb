import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCarrosComponent } from './alterar-carros.component';

describe('AlterarCarrosComponent', () => {
  let component: AlterarCarrosComponent;
  let fixture: ComponentFixture<AlterarCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
