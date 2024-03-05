import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // open | collapsed
  sideBarStatus: BehaviorSubject<string> = new BehaviorSubject('open');

  activeMenu: BehaviorSubject<string> = new BehaviorSubject('dashboard');

  // eslint-disable-next-line
  public emailRegex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // eslint-disable-next-line no-useless-escape
  public passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{6,})/gm;
  // eslint-disable-next-line no-useless-escape
  public urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;


  checkInput (event: any, type?: string, limit?: number): boolean {
    const isNumericKey = (keyCode: number) =>
      (keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105);

    const isAlphabeticKey = (keyCode: number) =>
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 96 && keyCode <= 105);

    switch (type) {
    case 'number':
      return (
        (event.keyCode >= 35 && event.keyCode <= 40) ||
          [ 46, 13, 8, 9, 27, 110, 190 ].includes(event.keyCode) ||
          (event.target.value.length !== limit && isNumericKey(event.keyCode))
      );
    case 'text':
      return (
        (event.keyCode >= 65 && event.keyCode <= 90) ||
          [ 32, 8, 9, 13, 35, 36, 37, 39, 46 ].includes(event.keyCode) ||
          isAlphabeticKey(event.keyCode)
      );
    case 'password':
      return event.target.value.length !== limit;
    case 'name':
      return (
        (event.keyCode >= 65 && event.keyCode <= 90) ||
          [ 32, 8, 9, 13, 35, 36, 37, 39, 46 ].includes(event.keyCode)
      );
    default:
      return false;
    }
  }

  // async getAllCountries () {
  //   try {
  //     const response = await fetch(`${ environment.cdnUrl }assets/statics/countries.json`);
  //     const staticText = await response.json();
  //     return staticText;
  //   } catch (error) {
  //     console.error('Error fetching static text:', error);
  //     throw error;
  //   }
  // }


  // fetchCountryCodes () {
  //   fetch(environment.ipDetailsUrl)
  //     .then((res: any) => res.json())
  //     .then((res: any) => {
  //       localStorage.setItem('location', JSON.stringify(res));
  //     })
  //     .catch(console.log);

  // }
}
