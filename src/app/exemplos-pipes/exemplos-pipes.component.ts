import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  
  constructor() { }

  livro: any = {
    titulo: 'Beginning Angular with Typescript (updated to Angular)',
    rating: 4.54321,
    numeroPaginas: 205,
    preco: 86.71,
    dataLancamento: new Date(2020, 4 , 6),
    url:"https://ler.amazon.com.br/kp/embed?asin=B01N9ZUHBA&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_XbG2Fb29QG43B"
  };

  livros: string[] = ['Java', 'Angular 11'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }
   
  
  ngOnInit(){
  }

}
