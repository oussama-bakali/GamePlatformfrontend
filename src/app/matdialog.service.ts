import { Injectable } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConnectComponent } from './connect/connect.component';
import { PanierComponent } from './panier/panier.component';
import { PanierpreviewComponent } from './panierpreview/panierpreview.component';
@Injectable({
  providedIn: 'root'
})
export class MatdialogService {

  constructor(private matdialog:MatDialog) { }
  openconnection(){
    this.matdialog.open(ConnectComponent,{width:'700px',height:'200px'
  }
     
    )
  }
  openpanier(){
    this.matdialog.open(PanierpreviewComponent)
  }
}
