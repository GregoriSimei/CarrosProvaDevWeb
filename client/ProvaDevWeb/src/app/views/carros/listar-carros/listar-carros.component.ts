import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/Carro';
import { CarroControllerService } from '../../../service/carro-controller.service';

@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
  styleUrls: ['./listar-carros.component.css']
})
export class ListarCarrosComponent implements OnInit {

  constructor(private router: Router, private service: CarroControllerService) { }

  dataSource;
  displayedColumns: string[] = ['placa', 'modelo', 'ano', 'criacao'];

  carros: Carro[] = [];

  ngOnInit(): void {
    this.service.list().subscribe(carrosApi => {
      console.log(carrosApi);
      this.carros = carrosApi;
      this.dataSource = new MatTableDataSource(this.carros);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navegarParaCadastro() {
    this.router.navigate(['cadastro']);
  }

}
