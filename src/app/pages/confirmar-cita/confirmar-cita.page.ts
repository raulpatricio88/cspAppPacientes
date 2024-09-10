import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-cita',
  templateUrl: './confirmar-cita.page.html',
  styleUrls: ['./confirmar-cita.page.scss'],
})
export class ConfirmarCitaPage implements OnInit {

  constructor(private alertcontroller: AlertController,
              private router:Router) { }

  ngOnInit() {
  }

  async cancelar(){
    const alert = await this.alertcontroller.create({
      header: '¿Está seguro?',
      //para que ambas alertas se vean como en iOS
      mode:'ios',
      buttons: [
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            console.log('El paciente ha cancelado la cita')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('El paciente está cancelando la cita')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
      ],
    });

    await alert.present();   
  }
}
