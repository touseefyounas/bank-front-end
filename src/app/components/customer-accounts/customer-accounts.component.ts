import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountTypePipe } from '../../pipes/account-type.pipe';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from '../../model/customer';
import { Address } from '../../model/address';
import { PercentagePipe } from '../../pipes/percentage.pipe';
@Component({
  selector: 'app-customer-accounts',
  standalone: true,
  imports: [CommonModule, AccountTypePipe, RouterLink, PercentagePipe],
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent {

  accounts: Account[] = [];
  customerId: number = 0;
  address: Address = {
    addressId: 0,
    streetNumber: '',
    postalCode: '',
    city: '',
    province: '',
  }

  customer: Customer = {
    customerId: 0,
    name: '',
    address: this.address,
    accounts: this.accounts,
    customerType: ''
  }

  constructor(private customerService: CustomerService, private accountService:AccountService, private route: ActivatedRoute){
    this.route.params.subscribe((params) => {
      this.customerId = params['id']
      this.customerService.getCustomerById(this.customerId).subscribe(response => {
        this.accounts = response.accounts
        this.customer = response
      })
    })
  }

  deleteAccount(accountId: number): void{
    this.accountService.deleteAccount(accountId).subscribe((response)=> {
      alert('Account Deleted!')
      this.accountService.getAllAccounts().subscribe((response)=> this.accounts = response)
    })
  }
}
