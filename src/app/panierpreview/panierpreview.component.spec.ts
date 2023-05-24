import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierpreviewComponent } from './panierpreview.component';

describe('PanierpreviewComponent', () => {
  let component: PanierpreviewComponent;
  let fixture: ComponentFixture<PanierpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierpreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
