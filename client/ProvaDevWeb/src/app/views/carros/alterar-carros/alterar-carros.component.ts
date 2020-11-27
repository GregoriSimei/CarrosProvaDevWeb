import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/Carro';
import { CarroControllerService } from 'src/app/service/carro-controller.service';

@Component({
  selector: 'app-alterar-carros',
  templateUrl: './alterar-carros.component.html',
  styleUrls: ['./alterar-carros.component.css']
})
export class AlterarCarrosComponent implements OnInit {

  carro: Carro = {
    ano: 0,
    modelo: "",
    placa: ""
  };

  messagemErro = "";

  constructor(private router: Router, private service: CarroControllerService) { }

  ngOnInit() {
  }

  retornar() {
    this.router.navigate(['']);
  }

  cadastrar() {
    console.log(this.carro);
    this.service.cadastrar(this.carro).subscribe(
      resposta => {
        this.retornar();
      },
      error => {
        this.messagemErro = "Placa de carro ja existe";
      });
  }

}
