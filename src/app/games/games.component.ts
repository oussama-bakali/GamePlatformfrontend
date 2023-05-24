import { Component, Input, OnInit, Output, Pipe,EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { APIResponse, Game, Gaming, jeu,Model } from '../model';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit {
public index:number | undefined;
public result:Array<Game> | undefined
public result2:Array<Gaming>|undefined
@Input() data:any={}
@Output()item=new EventEmitter()
products:any=[]
term: any;
search:any;

  constructor(private game:GameService,private route:ActivatedRoute) {


    
   }

  ngOnInit(): void {
   
   
    this.game.getgames().subscribe((data:APIResponse<Game>)=>{
      
      this.result=data.results
      console.log(this.result)
      
    })
    
    this.game.getgames2().subscribe((data:APIResponse<Gaming>)=>{
      
      this.result2=data.results
      
      
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
addproduct($event:any):void{

  if ("cart" in localStorage){
    this.products=JSON.parse(localStorage.getItem("cart")!)
this.products.push($event)
localStorage.setItem("cart",JSON.stringify(this.products))
  }
  else{
    this.products.push($event)
    localStorage.setItem("cart",JSON.stringify(this.products))
  }
 
  
console.log($event)
}
}
