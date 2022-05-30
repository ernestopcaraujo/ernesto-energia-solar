import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'projeto-esl';


  // data = {
  //   password:'',
  //   email:'',
  //   botao:false
  // };  

  ngOnInit (){
 
  }
  
  // enviaLogin(email:string,password:string){
  //   console.log(email, password);
  //   this.data.botao = true;
  // }
}
