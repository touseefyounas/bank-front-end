import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { CustomerUpdateDTO } from '../../model/customerUpdateDTO';
import { Customer } from '../../model/customer';
import { Address } from '../../model/address';
import { Account } from '../../model/account';
@Component({
  selector: 'app-customer-update',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './customer-update.component.html',
  styleUrl: './customer-update.component.css'
})
export class CustomerUpdateComponent {

  successAlert: boolean = false;

  address: Address = {
    addressId: 0,
    streetNumber: '',
    postalCode: '',
    city: '',
    province: '',
  }
  account: Account[] =[]

  customer: Customer = {
    customerId: 0,
    name: '',
    address: this.address,
    accounts: this.account,
    customerType: ''
  }
  id: number= 0;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.customer.customerId = params['id']
      this.customerService.getCustomerById(this.customer.customerId).subscribe(response => {
        this.customer = response
      })
    })
  }

  updateCustomer(updatedCustomer: CustomerUpdateDTO){
    
     this.customerService.updateCustomerById(updatedCustomer, this.customer.customerId).subscribe(response=> {
      this.successAlert = true
      
      setTimeout(() => {
        this.successAlert = false
        this.router.navigate(['/customers'])
    }, 2000)

     })
  }
}
