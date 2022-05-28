import { Component, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ModalPlacaComponent } from './modal_placa/modal-placa.component';

import { SearchComponentService } from './search-component.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})


export class SearchComponentComponent implements OnInit {
  
  public data_logs: any[] = [
    {id: 1, camera: 1, dataHora: '2021/03/01', frota: "01", situacao: "OK", placa: "FIX81SS", actions: ""},
    {id: 2, camera: 2, dataHora: '2021/03/02', frota: "02", situacao: "OK", placa: "FIX82SS", actions: ""},
    {id: 3, camera: 3, dataHora: '2021/03/03', frota: "03", situacao: "OK", placa: "FIX83SS", actions: ""},
    {id: 4, camera: 4, dataHora: '2021/03/04', frota: "04", situacao: "OK", placa: "FIX84SS", actions: ""},
  ];
  displayedColumns = ["camera", "dataHora", "frota", "situacao", "placa", "actions"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource();
  public formSearch: FormGroup;
  public situacoes = [{id: 0, value: 'Placa Validada'}, {id: 1, value: 'Sem Placa'}, {id: 2, value: 'Placa sem Validação'}, {id: 3, value: 'Falha no Totvs'}];

  constructor(
    private fb: FormBuilder,
    private _searchService: SearchComponentService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createForm();
    this.dataSource = new MatTableDataSource([]);
  }

  createForm(): void {
    this.formSearch = this.fb.group({
      id: new FormControl(''),
      camera: new FormControl(''),
      frota: new FormControl(''),
      situacao: new FormControl(''),
      placa: new FormControl(''),
      dataHoraMaior: new FormControl(''),
      dataHoraMenor: new FormControl(''),
    })
  }

  openDialog(value) {
    this.dialog.open(ModalPlacaComponent, {
      width: '760px',
      autoFocus: false,
      disableClose: true,
      data: {value}
    });
  }

  filter() {
    this._searchService.getLogs(this.formSearch.value).subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.log);
      this.dataSource.paginator = this.paginator;
    });
  }

  clear() {
    this.formSearch.reset();
    this.ngOnInit();
  }

}