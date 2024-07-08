import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TundraProductosComponent } from './tundra-productos.component';

describe('TundraProductosComponent', () => {
  let component: TundraProductosComponent;
  let fixture: ComponentFixture<TundraProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TundraProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TundraProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
