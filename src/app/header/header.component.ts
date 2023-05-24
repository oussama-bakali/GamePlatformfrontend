import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MatdialogService } from '../matdialog.service';
import { APIResponse, Game } from '../model';
import { GameService } from '../game.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {

  public result:Array<Game> | undefined
  search: any;
  constructor(private router:Router,private matservice:MatdialogService,private game:GameService) { }

  ngOnInit(): void {

    this.game.getgames().subscribe((data:APIResponse<Game>)=>{
      
      this.result=data.results
     
      
    })
   

  }

searchnow(){
  if(this.search ==""){
this.ngOnInit();
  }
  else{
    this.result=this.result?.filter(res=>{
      return res.slug.match(this.search)
    })
  }
}
openconnection():void{
  this.matservice.openconnection()
  
}
openpanier():void{
  this.matservice.openpanier()
}
}
