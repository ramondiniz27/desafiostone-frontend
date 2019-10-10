import { TestBed, fakeAsync } from '@angular/core/testing';

import { ProdutoService } from './produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientTestingModule
    ],
    providers: [HttpClient,ProdutoService]
  }));

  it('should be created', () => {
    const service: ProdutoService = TestBed.get(ProdutoService);
    expect(service).toBeTruthy();
  });

});
