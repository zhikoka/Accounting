import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  newCompanyForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newCompanyForm = this.fb.group({
      compnyNumber: ['', [Validators.required, Validators.minLength(3)]],
      
      companyShortname: ['name', [Validators.required, Validators.minLength(3)]]

    });
  }
  save() {
    console.log(this.newCompanyForm);
    console.log('Saved: ' + JSON.stringify(this.newCompanyForm.value));
  }
}
