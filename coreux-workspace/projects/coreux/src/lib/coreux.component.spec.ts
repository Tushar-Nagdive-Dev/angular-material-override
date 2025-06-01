import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreuxComponent } from './coreux.component';

describe('CoreuxComponent', () => {
  let component: CoreuxComponent;
  let fixture: ComponentFixture<CoreuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
