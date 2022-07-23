import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private subMenuRegister = [
    { name: 'Cliente', icon: '', link:'/client-register'},
    { name: 'Produto', icon: '', link: '' },
  ];

  private subMenuOrder = [
    { name: 'Pedido', icon: '', link: '' },
    { name: 'Carrinho', icon: '', link: '' },
  ];

  public menu = [
    { name: 'Página Inicial', icon: 'home', link: '', subMenu: null, subMenuShow: false },
    { name: 'Cadastros', icon: 'book', link: null, subMenu: this.subMenuRegister, subMenuShow: false },
    { name: 'Pedidos', icon: 'add_shopping_cart', link: null, subMenu:this.subMenuOrder, subMenuShow: false },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
