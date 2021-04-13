import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.scss']
})
export class LocadoraComponent implements OnInit {

  public tabela =[];
  public formLocadora: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.formLocadora  = this.fb.group({
      numberMovie: [null, Validators.required],
      titleMovie: [null, Validators.required],
      valor: [null, Validators.required],
      data: [null, Validators.required],
      directors: [null],
      language: [null]
    });
  }

  
  onSubmit() {
    const payload = {
      numberMovie:  this.formLocadora.controls.numberMovie.value,
      titleMovie: this.formLocadora.controls.titleMovie.value,
      valor: this.formLocadora.controls.valor.value,
      data: this.formLocadora.controls.data.value,
    }
  if(payload.numberMovie == null || payload.titleMovie == null || payload.valor == null || payload.data == null){
    this.toastr.error('Erro no cadastro de filme', 'Algun campo não foi cadastrado');
  }else{
    this.tabela.push(payload);
    console.log(this.tabela)
    this.clear();
    this.toastr.success('Filme cadastrado com sucessso', 'Filme aparecerá na lista abaixo');
  }
  }

  PrintRecord(){
    var divToPrint = document.getElementById("tablerecords");  
    let newWin = window.open("");  
    newWin.document.write(divToPrint.outerHTML);  
    newWin.print();  
    newWin.close(); 
  }
  clear(){
      this.formLocadora.reset();
    
  }

}
