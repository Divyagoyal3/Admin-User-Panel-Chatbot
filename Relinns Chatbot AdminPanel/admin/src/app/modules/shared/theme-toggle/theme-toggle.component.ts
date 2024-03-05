import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: [ './theme-toggle.component.scss' ],
})
export class ThemeToggleComponent {
  isDarkMode: boolean;

  constructor (private router: Router,
    private themeService: ThemeService,
  ) {
    this.isDarkMode = this.themeService.isDarkModeOne();

  }

  toggleTheme () {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }


}
