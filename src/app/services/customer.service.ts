import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { CustomersComponent } from '../customers/customers.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  viewCustomer(id: any) {
    let url =
      environment.CUSTOMER_BASE_URL +
      environment.CUSTOMER.GET_CUSTOMER +
      '?userID=' +
      id;
    return this.httpClient.get(url);
  }

  editCustomer(id: any, customerObj: any) {
    let url =
      environment.CUSTOMER_BASE_URL +
      environment.CUSTOMER.UPDATE_CUSTOMER +
      '?userID=' +
      id;
    return this.httpClient.put(url, customerObj);
  }

  deleteCustomer(id: any) {
    let url = 
    environment.CUSTOMER_BASE_URL +
      environment.CUSTOMER.DELETE_CUSTOMER +
      '?userID=' +
      id;
    return this.httpClient.get(url);
  }

  searchCustomer(keyword: any) {}

  // createAccount(_customerObj: any) {
  //   let url =
  //     environment.CUSTOMER_BASE_URL + environment.CUSTOMER.POST_CUSTOMER;
  //   return this.httpClient.get(url);
  // }

  createAccount(customerObj: Customer): Observable<Customer> {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMER.POST_CUSTOMER;
    return this.httpClient.post<Customer>(url, customerObj);
  }
}
