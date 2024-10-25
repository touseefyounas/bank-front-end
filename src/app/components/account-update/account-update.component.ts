import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../../model/customer';
import { AccountService } from '../../service/account.service';
import { CustomerService } from '../../service/customer.service';
import { Account } from '../../model/account';
import { AccountTypePipe } from '../../pipes/account-type.pipe';

@Component({
  selector: 'app-account-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AccountTypePipe],
  templateUrl: './account-update.component.html',
  styleUrl: './account-update.component.css'
})
export class AccountUpdateComponent {

  accountType: string ='';

  successAlert: boolean = false;

  accountTypeStatus = false;

  customers: Customer[] =[]

  account: Account = {
    accountId: 0,
    balance: 0,
    customer: this.customers[0],
    interestRate:0,
    nextCheckNumber: 0
  }


  constructor(private accountService: AccountService, private customerService: CustomerService, private router: Router, private route: ActivatedRoute){
    this.customerService.getAllCustomers().subscribe((response)=> this.customers = response)
    this.route.params.subscribe((params) => {
      this.account.accountId = params['id']
      this.accountService.getAccountById(this.account.accountId).subscribe(response => {
        this.account = response
        this.setAccountType()

      })
    })
  }


  private setAccountType(){
    const accountTypePipe = new AccountTypePipe()
    this.accountType = accountTypePipe.transform(this.account).toLowerCase()
    if (this.accountType === 'checking'){
      this.accountTypeStatus = true
    }
  }

  accountTypeChange(event: any): boolean {
    let selectedValue = event.target.value;

    if (selectedValue == 'checking'){
     return this.accountTypeStatus = true
    } else {
      return this.accountTypeStatus = false
    }
  }

  updateAccountById(updatedAccount: Account){
    this.account.balance = updatedAccount.balance
    this.account.interestRate = updatedAccount.interestRate
    
    this.accountService.updateAccountById(this.account.accountId, updatedAccount).subscribe(response => {
      this.successAlert = true
      
      setTimeout(() => {
        this.successAlert = false
        this.router.navigate(['/'])
    }, 2000)
    })
  }
  
}
