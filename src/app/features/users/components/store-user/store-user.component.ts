import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalService } from 'src/app/features/shared/services/swal.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.sass']
})
export class StoreUserComponent implements OnInit {

  forma: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<StoreUserComponent>,
    private fb: FormBuilder,
    private _swal: SwalService,
    private _user: UsersService
  ) { }

  ngOnInit(): void {
    this.makeForm()
    if (this.data) {
      this.forma.patchValue({ ...this.data })
    }
  }

  makeForm() {
    this.forma = this.fb.group({
      id: '',
      name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      cardId: ['', [Validators.required,]],
    })
  }

  close() {
    this.forma.reset()
    this.dialogRef.close()
  }

  save() {
    this._swal.show({
      icon: 'question',
      title: '¿Está seguro?',
      text: `Se dispone a actualizar el usuario`,
      showCancel: true
    }).then(r => {
      if (r.isConfirmed) {
        const body = this.forma.value
        this._user.putUser(body.id, body).subscribe(res => {
          this._swal.show({
            icon: 'success',
            title: 'Felicidades',
            text: `Se ha guardado con éxito el usuario`,
            showCancel: false
          })
          this.dialogRef.close(true)

        })

      }
    })

  }
}
