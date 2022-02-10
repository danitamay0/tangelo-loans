import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoansService } from 'src/app/features/loans/services/loans.service';
import { SwalService } from 'src/app/features/shared/services/swal.service';
import { User } from 'src/app/features/users/interfaces/UserInteface';
import { UsersService } from 'src/app/features/users/services/users.service';
import { messages } from '../../helpers/message';

@Component({
  selector: 'app-form-apply',
  templateUrl: './form-apply.component.html',
  styleUrls: ['./form-apply.component.sass']
})
export class FormApplyComponent implements OnInit {
  @Input('minQuota') minQuota :number
  @Input('maxQuota') maxQuota :number

  loanForm: FormGroup
  userForm: FormGroup
  fetchingUser = 'iddle';

  constructor(
    private fb: FormBuilder,
    private _user: UsersService,
    private _loan: LoansService,
    private _snackBar: MatSnackBar,
    private _swal: SwalService
  ) { }

  ngOnInit(): void {
    this.makeForm()
  }

  getUser() {
    const cardId = this.userForm.get('cardId')?.value
    if (cardId) {
      this.fetchingUser = 'pending';
      this._user.getUsers({ cardId }).subscribe((r: any) => {
        this.fetchingUser = 'succeded';
        if (r.body.length) {
          this.userForm.patchValue(r.body[0])
          this.disableFields()
          this.openSnackBar('Felicidades! ya estas registrado previamente', 'Cerrar')
          return
        }
        this.openSnackBar('¡Bienvenido! por favor completa tus datos para registrarte y continuar', 'Cerrar')
        this.enableFields()
      })
      console.log(this.userForm.value,this.loanForm.value);
      
    }
  }

  makeForm() {
    this.loanForm = this.fb.group({
      userId: [''],
      value: [this.minQuota, [Validators.required, Validators.max(this.maxQuota), Validators.min(this.minQuota),]],
      datePay: [''],
      status: [''],
    })
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cardId: ['', Validators.required]
    })
  }

  disableFields() {
    this.userForm.get('name')?.disable()
    this.userForm.get('email')?.disable()
  }

  enableFields() {
    this.userForm.get('name')?.enable()
    this.userForm.get('email')?.enable()
    this.userForm.patchValue({ name: '', email: '', id: '' })
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async save() {
    const res = await this._swal.show({
      icon: 'question',
      title: '¿Está seguro?',
      text: `A continuación se evaluará el préstamo`,
      showCancel: true
    })

    if (res.isConfirmed) {
      const user: User = this.userForm.value

      if (!user.id) {
        await this.createUser(user)
      }
      this.createLoan()
    }
  }

  async createUser(user: User) {
    await this._user.postUser(user).toPromise().then((resp: any) => {
      user.id = resp.id
      this.userForm.patchValue({ id: resp.id })
     
    })
  }

  createLoan() {
    
    let isApproved = this.validateLoan()
    const { icon, title, text } = messages.loan(isApproved)
    this.loanForm.patchValue({ userId: this.userForm.value.id})
    
    this._loan.postUser(this.loanForm.value).subscribe((resp: any) => {
      this._swal.show({ icon, title, text, showCancel: false })
      this.userForm.reset()
      this.loanForm.reset()
      this.fetchingUser = 'iddle'
    })
  }

  validateLoan(): boolean {
    const isApproved = Math.random() >= 0.5 // %50 probability of get "true"
    let status = isApproved ? 'approved' : 'rejected'
    this.loanForm.patchValue({ status })
    return isApproved
  }
}
