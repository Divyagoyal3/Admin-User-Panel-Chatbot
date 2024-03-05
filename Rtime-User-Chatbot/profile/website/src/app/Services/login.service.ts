import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {



  login (): void {



    const token = 'random_token';
    localStorage.setItem('token', token);
  }


}
