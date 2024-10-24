import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../model/address';
@Pipe({
  name: 'address',
  standalone: true
})
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {
    return `${address.streetNumber}, ${address.city}, ${address.province}, ${address.postalCode.substring(0,3)} ${address.postalCode.substring(3,)}`;
  }

}
