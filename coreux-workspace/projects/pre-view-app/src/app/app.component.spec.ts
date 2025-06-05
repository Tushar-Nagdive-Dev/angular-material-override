import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoreUxInputComponent, ThemeService } from 'coreux';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CoreUxInputComponent],
      providers: [ThemeService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
