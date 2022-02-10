import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  show({ title = '', text = '', icon, showCancel = true }: { showCancel: boolean, icon: any, title: any, text: any }) {

    let swal: SweetAlertOptions = {
      title,
      text,
      icon,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: showCancel,
      confirmButtonText: showCancel ? '¡Si, Confirmar!' : 'Ok',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',

    };
    return Swal.fire(swal)
  }
}

