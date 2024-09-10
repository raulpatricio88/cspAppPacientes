import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // para llamar al menu del componente app
  constructor(private menucontroller: MenuController,
              private router:Router) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menucontroller.open('first'); /*permite abrir el menu diseñado en el componente app pero en la page inicio desde el icono*/
  }

}
