import { Component } from "@angular/core";

@Component({
	selector: "navBar",
	template: `

		<div style="text-align: right;margin-right: 10px;">
			<a href="/" style="padding:5px;">Home</a>
			<a href="register" style="padding:5px;">Register</a>
			<a href="login" style="padding:5px;">Login</a>
		</div>
	`
})

export class NavComponent{

}
/*<div style="text-align: left;">
	<a href="/dashboard" style="padding:5px;">Dashboard</a>
</div>*/
