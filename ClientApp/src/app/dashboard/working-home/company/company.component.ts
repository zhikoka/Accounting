import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  newCompanyForm: FormGroup;
  panelOpenState = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newCompanyForm = this.fb.group({
      compnyNumber: [, [Validators.required, Validators.min(3), Validators.max(100)]],
      companyShortname: ['', [Validators.required, Validators.minLength(3)]],
      turOperator: [false],
      compnyName: ['', [Validators.required]],
      compnyAdress: ['', [Validators.required]],
      compnyAdressNumber: ['', [Validators.required]],
      companyCity: ['', [Validators.required]],
      companyPlace: ['', [Validators.required]],
      compnyCode: ['', [Validators.required]],
      compnyCityCode: ['', [Validators.required]],
      ddvObvrznik: ['', [Validators.maxLength(2)]],
      compnyPhoneNumber: ['', [Validators.maxLength(2)]],
      companyEmail: ['', [Validators.email]],
      compnyWatNumber: ['', [Validators.maxLength(15)]],
      companyUniqueNumber: ['', [Validators.maxLength(15)]],
      compnyStatys: ['', [Validators.maxLength(15)]]
      
    });
  }
  save() {
    console.log(this.newCompanyForm);
    console.log('Saved: ' + JSON.stringify(this.newCompanyForm.value));
  }
}

