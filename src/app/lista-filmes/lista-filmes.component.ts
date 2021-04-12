import { Component, OnInit } from '@angular/core';
import * as data from '../filmes.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})

export class ListaFilmesComponent implements OnInit {

  public titleModal = '';
  public url = '';

  constructor(private modalService: NgbModal){
  }

  openModal(content: any, tituloFilme: string, urlModal: string) {     
    this.titleModal = tituloFilme;
    this.url = urlModal;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg" });   
  }

  ngOnInit(): void {
    this.filmes = data;
    console.log(data)
  }
  title = 'filmes';
  public filmes: any;
  
}

