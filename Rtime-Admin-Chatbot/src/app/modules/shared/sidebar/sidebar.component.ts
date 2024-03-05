import { Component } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { ProfileService } from 'src/app/services/profile.service';
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
  profileData: any = {};
  public userdata:any = {
    profilePic: '',
    name: '',
    email:'',
  };
  fetchProfileData () {
    this.profile.getProfileData().subscribe((data: any) => {
      this.profileData = data;
      this.userdata = this.profileData.result;
      console.log('ghfgjmhj,j', this.userdata.name);
    });
  }
  toggleSidebarFn () {
    this.toggleSidebar = !this.toggleSidebar;
    console.log(this.toggleSidebar);
  }

  constructor (private themeService: ThemeService,
    private profile: ProfileService,
    private log :LogoutService,
    private route: Router) {
    this.isDarkMode = this.themeService.isDarkModeOne();
    this.themeService.currentTheme.subscribe((theme) => {
      console.log(theme);
      if(theme === 'dark') {
        this.isDarkMode = true;
        this.themeService.setDarkMode(true);
      }
    });
    this.fetchProfileData();
  }

  toggleTheme () {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
    this.themeService.currentTheme.next(this.isDarkMode ? 'dark' : 'light');
  }


  logout (): void {
    this.log.logout().subscribe(
      (response) => {

        console.log('Logged out successfully');
        localStorage.removeItem('token');

        // this.router.navigate("http://192.168.1.17:4200/login");
        window.location.href = 'http://192.168.1.35:4200/login';

      },
      (error) => {

        console.error('Logout failed', error);
      },
    );
  }
}
