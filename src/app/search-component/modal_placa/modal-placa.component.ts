import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'dialog-modal-placa',
    templateUrl: 'modal-placa.component.html',
  })
  export class ModalPlacaComponent {
    constructor (
        @Inject(MAT_DIALOG_DATA
    ) public data: any) {}

  ngOnInit() {
    console.log('data ', this.data);
  }
    
  }