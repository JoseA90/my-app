import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatvarComponent } from './natvar.component';

describe('NatvarComponent', () => {
  let component: NatvarComponent;
  let fixture: ComponentFixture<NatvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
