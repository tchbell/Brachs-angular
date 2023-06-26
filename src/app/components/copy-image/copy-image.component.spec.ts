import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyImageComponent } from './copy-image.component';

describe('CopyImageComponent', () => {
  let component: CopyImageComponent;
  let fixture: ComponentFixture<CopyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
