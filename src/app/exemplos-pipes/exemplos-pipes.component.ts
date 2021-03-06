import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
   
  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    } 
     
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
        return false;
    });
  }

  valorAsync = new Promise((resolve, reject) =>{
      setTimeout(() => resolve('Valor assíncrono'), 2000)
  });  

  valorAsync2 = interval(2000)
     .pipe(
       map(valor => 'Valor assíncrono 2')
     );


  ngOnInit(){
  }

}
