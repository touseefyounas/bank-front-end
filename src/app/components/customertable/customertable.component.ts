import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { AddressPipe } from '../../pipes/address.pipe';

@Component({
  selector: 'app-customertable',
  standalone: true,
  imports: [RouterLink, CommonModule, AddressPipe],
  templateUrl: './customertable.component.html',
  styleUrl: './customertable.component.css'
})
export class CustomertableComponent {
  customers: Customer[] =[]

  constructor(private customerService:CustomerService, private router: Router){
    this.customerService.getAllCustomers().subscribe((response)=> this.customers = response)
  }

  deleteCustomer(customerId:number){
    this.customerService.deleteCustomer(customerId).subscribe((response)=> {
      alert('Customer Deleted!')
      this.customerService.getAllCustomers().subscribe((response)=> this.customers = response)
    })
  }
}
