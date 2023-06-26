import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBleedComponent } from './full-bleed.component';

describe('FullBleedComponent', () => {
  let component: FullBleedComponent;
  let fixture: ComponentFixture<FullBleedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBleedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBleedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
