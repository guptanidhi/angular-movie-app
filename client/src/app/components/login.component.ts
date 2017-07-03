import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
    <div style="text-align: center;border-style: groove;padding: 5px;">
      <img src={{loginLogo}} alt="LOGIN LOGO" height="100px" width="100px" />
      <h2>Login</h2>
      <form (submit)="login(username.value, password.value)">
        <label>Username</label>
        <input type="text" #username required/><br/><br/>
        <label>Password</label>
        <input type="password" #password required/><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
    `
})

export class LoginComponent{
  loginLogo = "./app/images/login.png";

  login(username, value){
    console.log(username);
    console.log(value);
  }
}
