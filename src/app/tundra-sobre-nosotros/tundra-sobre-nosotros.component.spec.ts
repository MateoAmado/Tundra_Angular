import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TundraSobreNosotrosComponent } from './tundra-sobre-nosotros.component';

describe('TundraSobreNosotrosComponent', () => {
  let component: TundraSobreNosotrosComponent;
  let fixture: ComponentFixture<TundraSobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TundraSobreNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TundraSobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
