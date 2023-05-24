import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }
gamescart:any[]=[]
  ngOnInit(): void {
    this.getgames()
  }
getgames(){
  if ("cart" in localStorage){
    this.gamescart=JSON.parse(localStorage.getItem("cart")!)
  }
}
}
