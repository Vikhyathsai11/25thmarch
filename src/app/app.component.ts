import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calci';
  value:any
  currentValue=''
  writeToInput(num:any){
    this.currentValue=this.currentValue+num
    console.log(this.currentValue);
    this.value=this.currentValue;


  }
  back(){
    this.currentValue =this.currentValue.slice(0,-1);
    this.value=this.currentValue
    if(this.value == '')
    this.value='0'
    this.currentValue=this.value

  }

  clearInput(){
      this.value=''
      this.currentValue=this.value

  }
  evaluateExp(){
    this.value=eval(this.currentValue)
    this.currentValue=this.value
  }
}
