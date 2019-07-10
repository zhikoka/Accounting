import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-nav',
  templateUrl: './working-nav.component.html',
  styleUrls: ['./working-nav.component.css']
})
export class WorkingNavComponent implements OnInit {

  isExpanded = false;


  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
