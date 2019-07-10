import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-working-home',
  templateUrl: './working-home.component.html',
  styleUrls: ['./working-home.component.css']
})
export class WorkingHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
