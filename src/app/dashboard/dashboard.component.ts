import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  customerResult: any;
  customer: any;
  customerList: any;
  customerCount: any;
  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe((data: any) => {
      //console.log(data);
      this.customerResult = data;
      this.customerList = this.customerResult.results;
      this.customerCount = this.customerResult.recordCount;
    });
  }
}
