import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounttableComponent } from './accounttable.component';

describe('AccounttableComponent', () => {
  let component: AccounttableComponent;
  let fixture: ComponentFixture<AccounttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccounttableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
