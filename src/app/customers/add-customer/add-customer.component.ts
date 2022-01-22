import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  message!: string;

  constructor(
    private formbuilder: FormBuilder,
    private customerservice: CustomerService
  ) {}

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      emailAddress: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      department: [''],
    });
  }

  onSubmit() {
    if (confirm('Are you sure to add customer?')) {
      let userinfo = this.regForm.value;
      this.createuserAccount(userinfo);
      this.regForm.reset();
    }
  }
  createuserAccount(customerInfo: Customer) {
    console.log(customerInfo);

    this.customerservice.createAccount(customerInfo).subscribe(() => {
      this.datasaved = true;
      this.message = 'Customer Created';
      this.regForm.reset();
      console.log(customerInfo);
    });
  }
}
