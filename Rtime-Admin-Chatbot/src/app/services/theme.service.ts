import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;
  private isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  presentTheme = localStorage.getItem('theme') || (this.isDarkMode ? 'dark' : 'light');
  currentTheme: BehaviorSubject<string> = new BehaviorSubject(this.presentTheme);

  isDarkModeOne () {
    return this.darkMode;
  }

  setDarkMode (isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
