import { Routes } from '@angular/router';
import { AccounttableComponent } from './components/accounttable/accounttable.component';
import { AccountformComponent } from './components/accountform/accountform.component';
import { CustomertableComponent } from './components/customertable/customertable.component';
import { CustomerformComponent } from './components/customerform/customerform.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { CustomerAccountsComponent } from './components/customer-accounts/customer-accounts.component';

export const routes: Routes = [
    {path: '', component: AccounttableComponent},
    {path:'create-account', component: AccountformComponent},
    {path:'customers', component: CustomertableComponent},
    {path:'customers/create-customer', component: CustomerformComponent},
    {path:'customers/:id', component:CustomerUpdateComponent},
    {path: ':id', component: AccountUpdateComponent},
    {path:'customers/:id/accounts', component: CustomerAccountsComponent}
    ];
