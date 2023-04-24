import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  userEmail = "me@my-house.com";
  //on contruit le routage
  constructor(private router: Router) { };
  //on appelle l'objet routeur pour lui attruibuer une url
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
  }
}
