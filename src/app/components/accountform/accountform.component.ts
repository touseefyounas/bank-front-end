import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-accountform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './accountform.component.html',
  styleUrl: './accountform.component.css'
})
export class AccountformComponent {
  
  accountTypeStatus = false;

  customers: Customer[] =[]

  successAlert: boolean = false;

  constructor(private accountService: AccountService, private customerService: CustomerService, private router: Router){
    this.customerService.getAllCustomers().subscribe((response)=> this.customers = response)
  }
  accountTypeChange(event: any): boolean {
    let selectedValue = event.target.value;

    if (selectedValue == 'checking'){
     return this.accountTypeStatus = true
    } else {
      return this.accountTypeStatus = false
    }
  }

  createAccount(newAccount: Account){
    this.accountService.createAccount(newAccount).subscribe(response=> console.log(response))
    this.successAlert = true
      
    setTimeout(() => {
      this.successAlert = false
      this.router.navigate(['/'])
    }, 2000)
  }

}
