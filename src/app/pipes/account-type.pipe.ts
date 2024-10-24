import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../model/account';

@Pipe({
  name: 'accountType',
  standalone: true
})
export class AccountTypePipe implements PipeTransform {

  transform(account: Account): string {
    if ('interestRate' in account){
      return 'Savings'
    } else {
      return 'Checking'
    }
  }

}
