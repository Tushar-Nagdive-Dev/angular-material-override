import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themes = ['theme-zen', 'theme-glass', 'theme-neu'];
  private themeSubject = new BehaviorSubject<string>('theme-zen');

  setTheme(themeClass: string): void {
    this.themes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(themeClass);
    this.themeSubject.next(themeClass);
  }

  get currentTheme$(): Observable<string> {
    return this.themeSubject.asObservable();
  }
}
