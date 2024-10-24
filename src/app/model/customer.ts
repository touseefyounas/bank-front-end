import { Account } from "./account";
import { Address } from "./address";

export interface Customer {

    customerId: number;
    name: string;
    address: Address;
    accounts: Account[];
    customerType: string;  
    
}