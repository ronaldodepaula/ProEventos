import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodutosComponent } from './rodutos.component';

describe('RodutosComponent', () => {
  let component: RodutosComponent;
  let fixture: ComponentFixture<RodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
