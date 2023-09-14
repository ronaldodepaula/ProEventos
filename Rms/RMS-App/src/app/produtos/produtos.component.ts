import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public prod: any; // Nome da variável corrigido
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos(): void {
    this.http.get('http://192.168.95.252:8080/EndpoinMsl/rms/public/api/v1/consulta').subscribe(
      response => this.prod = response, // Nome da variável corrigido
      error => console.log(error)
    );
  }

}
