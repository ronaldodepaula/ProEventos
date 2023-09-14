import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit {

  public data: any; // Nome da variável corrigido
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTabela();
  }

  public getTabela(): void {
    this.http.get('http://192.168.95.252:8080/EndpoinMsl/rms/public/api/v1/sugestao/14605/19,27,43,94,%20221,%20248/2002').subscribe(
      response => this.data = response, // Nome da variável corrigido
      error => console.log(error)
    );
  }

}
