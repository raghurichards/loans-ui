import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customerId: any;
  customerDetails: any;
  userId: any;
  firstName: any;
  lastName: any;
  phoneNumber: any;
  emailAddress: any;
  dob: any;
  department: any;
  regForm!: FormGroup;
  datasaved = false;
  message!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setFormState();
    this.getCustomerList();
  }

  getCustomerList() {
    this.activatedRoute.params.subscribe((data: any) => {
      this.customerId = data.id;
    });

    this.customerService
      .viewCustomer(this.customerId)
      .subscribe((data: any) => {
        this.customerDetails = data['results'];
        this.userId = this.customerDetails._id;
        this.firstName = this.customerDetails.firstName;
        this.lastName = this.customerDetails.lastName;
        this.phoneNumber = this.customerDetails.phoneNumber;
        this.emailAddress = this.customerDetails.emailAddress;
        this.dob = this.customerDetails.dob;
        this.department = this.customerDetails.department;
      });
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
    if (confirm('Are you sure to update?')) {
      let userinfo = this.regForm.value;
      this.editUserAccount(userinfo);
      //this.regForm.reset();
    }
  }
  editUserAccount(customerInfo: Customer) {
    //console.log(this.customerId);

    this.customerService
      .editCustomer(this.customerId, customerInfo)
      .subscribe((data) => {
        this.datasaved = true;
        this.message = 'User Updated';
        this.regForm.reset();
        this.router.navigate(['/customers/view', this.customerId]);
        //console.log(this.userId, customerInfo);
        console.log(this.router.navigate(['/customers/view', this.customerId]));
      });
  }
}
