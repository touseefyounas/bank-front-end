import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerCreateDTO } from '../model/customerCreateDTO';
import { CustomerUpdateDTO } from '../model/customerUpdateDTO';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseURL = 'http://localhost:8080/api/v1/customers'

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseURL);
  }

  createCustomer(newCustomer: CustomerCreateDTO): Observable<CustomerCreateDTO>{
    return this.http.post<CustomerCreateDTO>(this.baseURL, newCustomer)
  }

  deleteCustomer(customerId: number): Observable<Object>{
   return this.http.delete(this.baseURL + '/' + customerId);
  }
  
  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.baseURL + '/' + id)
  }
  
  updateCustomerById(updatedCustomer: CustomerUpdateDTO, id:number): Observable<Customer>{
    return this.http.patch<Customer>(this.baseURL + '/' + id, updatedCustomer);
  }
}
