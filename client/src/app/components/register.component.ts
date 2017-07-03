import { Component } from '@angular/core';

@Component({
  selector: 'register',
  template: `
  <div style="text-align: center;border-style: groove;padding: 5px;">
    <img src={{registerLogo}} alt="REGISTER LOGO" height="100px" width="200px" />
    <h2>Register</h2>
    <form (submit)="register(firstname.value, lastname.value, email.value, password.value)">
      <label>First Name</label>
      <input type="text" #firstname required/><br/><br/>
      <label>Last Name</label>
      <input type="text" #lastname required/><br/><br/>
      <label>Email ID</label>
      <input type="text" #email required/><br/><br/>
      <label>Password</label>
      <input type="password" #password required/><br/><br/>
      <button type="submit">Submit</button>
    </form>
  </div>`
})

export class RegisterComponent{
  registerLogo = "./app/images/register.jpg";

  register(fName, lName, email, password){
    console.log(fName);
    console.log(lName);
    console.log(email);
    console.log(password);
  }
}
