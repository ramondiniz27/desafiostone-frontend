import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';
 public  produtos: Produto[];
  constructor(private servicoProdutos: ProdutoService){

  }

ngOnInit()
{
  this.produtos = this.servicoProdutos.listarCatalogoProduto();
  console.log(this.produtos)
}
}
