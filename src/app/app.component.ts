import { Component } from '@angular/core';
import { Icustomer } from './share/interface';
import { ServicesgResetApiService } from './servicesg-reset-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrimbaVideo';
getData ;
showDataAarray : any[]
  constructor(private get: ServicesgResetApiService ){}
  ngOnInit(){  
  this.showDataAarray.push(this.getData)
  
 
}
showGetData(){
  let i
  this.get.getPosts().subscribe( (data: any[]) => {
    this.showDataAarray = data;
 for( i=0 ; i <= this.showDataAarray.length ;i++){
    console.log(this.showDataAarray[i].name);
 }

 
  } );
        }
  postData(email)
  {
    console.log(this.getData.name,'tache')
  }




}
