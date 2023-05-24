export interface Model {
  
        count:number,
        next:string,
       previous:string,
  results1:Array<Game>
        
        
        
            

}
export interface APIResponse<T>{
     results:Array<T>;
}
export interface Game{
     games:Array<Gaming>,
     games_count:number,
     id:number,
    
     image:string,
     image_background:string,
     name:string,
     slug:string,
     year_start:number,
     year_end:number,
     

}
export interface jeu{
id:number,
slug:string,
name:string,
added:number
}
export interface Gaming{
  games:Array<jeu>   
}