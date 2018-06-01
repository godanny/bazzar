import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {
  private today: Date;
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
