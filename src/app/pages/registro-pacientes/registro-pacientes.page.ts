import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.page.html',
  styleUrls: ['./registro-pacientes.page.scss'],
})
export class RegistroPacientesPage implements OnInit {

  constructor(private alertcontroller: AlertController,
              private router:Router) { }

  ngOnInit() {
  }

  async registrar(){
    const alert = await this.alertcontroller.create({
      header: 'Paciente Registrado!',
      //para que ambas alertas se vean como en iOS
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El paciente se ha registrado')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
      ],
    });

    await alert.present();
  }
  
}
