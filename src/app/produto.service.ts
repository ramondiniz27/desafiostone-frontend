import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  public produtoUrl = '/api/v1/merchant/1/products'
  public produtos:Produto[] 
  constructor (private http: HttpClient) {
  let prod1 =  new Produto

    prod1.title  = "blusa teste"
    prod1.price = 7990
    prod1.zipcode = "78993-000"
    prod1.seller = "João da Silva"
    prod1.thumbnailHd ="teste"
    prod1.date ="26/11/2015"
    this.produtos = []  
    this.produtos.push(prod1)
   }


  listarCatalogoProduto(){
    
    return this.produtos;
    this.http.get<Produto[]>(this.produtoUrl)
      .subscribe((result)=>{
        console.log(result)
      })

  }
}
