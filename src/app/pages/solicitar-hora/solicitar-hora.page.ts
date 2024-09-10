import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-hora',
  templateUrl: './solicitar-hora.page.html',
  styleUrls: ['./solicitar-hora.page.scss'],
})
export class SolicitarHoraPage implements OnInit {

  opcion="";

  constructor(private alertcontroller: AlertController,
              private router:Router) { }

  ngOnInit() {
  }


  async consultar(){
    const alert = await this.alertcontroller.create({
      header: 'Mostrando horas disponibles por favor espere...',
      //para que ambas alertas se vean como en iOS
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El paciente esta consultando horas disponibles')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
      ],
    });

    await alert.present();
  }
}
