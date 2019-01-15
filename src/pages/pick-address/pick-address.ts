import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Alexandre Toledo da Silva",
        numero: "123",
        complemento: null,
        bairro: "Centro",
        cep: "85656536",
        cidade: {
          id: "3",
          nome: "São Paulo",
          estado: {
            id: "2",
            nome: "São Paulo"
          }
        }
      },
      {
        id: "1",
        logradouro: "Rua das flores",
        numero: "434",
        complemento: null,
        bairro: "Jardim",
        cep: "78451213",
        cidade: {
          id: "4",
          nome: "Teste",
          estado: {
            id: "8",
            nome: "testee"
          }
        }
      }
    ]
  }

}
