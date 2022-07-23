import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { FormBuilder } from '@angular/forms';
import { Address } from '../model/address.model';
import { consultarCep } from 'correios-brasil';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  private client: Client = new Client();
  private addreess: Address = new Address();

  constructor(private formBuilder: FormBuilder) {
  }

  clientForm = this.formBuilder.group({
    'name': '',
    'phone': '',
    'phone2': '',
    'cpf': '',
    'street': '',
    'city': '',
    'number': 0,
    'district': '',
    'postalCode': ''
  });

  ngOnInit(): void {
  }

  buscaCEP() {
    let cep: string = this.clientForm.controls['postalCode'].value || "";
    if (cep.length == 8) {
      consultarCep(cep).then((response: any) => {
          this.clientForm.controls['street'].setValue(response['logradouro']);
          this.clientForm.controls['district'].setValue(response['bairro']);
          this.clientForm.controls['city'].setValue(response['localidade']);
      });
    }
  }

  onSubmit() {
    this.formToClass();
  }

  formToClass() {
    this.addreess.setStreet(this.clientForm.controls['street'].value || "");
    this.addreess.setNumber(this.clientForm.controls['number'].value || 0);
    this.addreess.setDistrict(this.clientForm.controls['district'].value || "");
    this.addreess.setCity(this.clientForm.controls['city'].value || "");
    this.addreess.setPostalCode(this.clientForm.controls['postalCode'].value || "");
    this.client.setAddress(this.addreess);
    this.client.setName(this.clientForm.controls['name'].value || "");
    this.client.setPhone(this.clientForm.controls['phone'].value || "");
    this.client.setPhone2(this.clientForm.controls['phone2'].value || "");
    this.client.setCpf(this.clientForm.controls['cpf'].value || "");
  }




}
