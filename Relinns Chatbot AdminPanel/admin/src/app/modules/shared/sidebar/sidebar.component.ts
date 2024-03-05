import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ],
})
export class SidebarComponent {
  isDarkMode: boolean;
  public check:boolean = true;
  toggleSidebar = false;

  toggleSidebarFn () {
    this.toggleSidebar = !this.toggleSidebar;
    console.log(this.toggleSidebar);
  }

  constructor (private themeService: ThemeService,
    private route: Router) {
    this.isDarkMode = this.themeService.isDarkModeOne();
    this.themeService.currentTheme.subscribe((theme) => {
      console.log(theme);
      if(theme === 'dark') {
        this.isDarkMode = true;
        this.themeService.setDarkMode(true);
      }
    });
  }
  dashboard () {
    this.route.navigate([ '/dashboard' ]);
  }
  usermanagent () {
    this.route.navigate([ '/user-management' ]);
  }
  timesheet () {
    this.route.navigate([ '/timesheet' ]);
  }
  toggleTheme () {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
    this.themeService.currentTheme.next(this.isDarkMode ? 'dark' : 'light');
  }

  onrouteClick (route: string) {
    switch (route) {
    case 'usermanagement':
      this.route.navigate([ '/user-management' ]);
      break;
    case 'timesheet':
      this.route.navigate([ '/timesheet' ]);
      break;
    default:
      break;
    }
  }
}
