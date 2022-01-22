import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  customerId: any;
  customerDetails: any;
  firstName: any;
  lastName: any;
  phoneNumber: any;
  emailAddress: any;
  regForm!: FormGroup;

  userId: any;

  message!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.activatedRoute.params.subscribe((data: any) => {
      this.customerId = data.id;
    });

    if (this.customerId) {
      this.customerService
        .viewCustomer(this.customerId)
        .subscribe((data: any) => {
          this.customerDetails = data['results'];
          this.firstName = this.customerDetails.firstName;
          this.lastName = this.customerDetails.lastName;
          this.phoneNumber = this.customerDetails.phoneNumber;
          this.emailAddress = this.customerDetails.emailAddress;
        });
    }
  }
  onDelete() {
    if (confirm('Are you sure to delete?')) {
      this.activatedRoute.params.subscribe((data: any) => {
        this.customerId = data.id;
        this.deleteCustomer();
        //console.log(this.customerId);
      });
    }
  }
  deleteCustomer() {
    //console.log(this.customerId);

    this.customerService.deleteCustomer(this.customerId).subscribe(() => {
      this.router.navigate(['/customers']);
      // console.log(this.router.navigate(['/customers']));
    });
  }
}

//   ngOnInit() {
//     this.activatedRoute.params.subscribe((data: any) => {
//       this.customerId = data.id;
//       console.log(this.customerId);
//     });
//     this.customerService.viewCustomer(this.customerId).subscribe((data) => {
//       this.customerDetails = data;
//       console.log(this.customerDetails);
//     });
//   }
// }
