import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'baz-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.styl']
})
export class WelcomeComponent implements OnInit {
  private wizardFlag: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.wizardFlag = false;
  }

  startWizard(): void {
    this.wizardFlag = !this.wizardFlag;
  }

  doSubmit(): any {
    return this.router.navigate( [ 'category' ] );
  }

}
