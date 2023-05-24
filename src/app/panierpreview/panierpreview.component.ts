import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panierpreview',
  templateUrl: './panierpreview.component.html',
  styleUrls: ['./panierpreview.component.css']
})
export class PanierpreviewComponent implements OnInit {
  gamescart:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.getgames()
  }
  getgames(){
    if ("cart" in localStorage){
      this.gamescart=JSON.parse(localStorage.getItem("cart")!)
    }
  }
}
