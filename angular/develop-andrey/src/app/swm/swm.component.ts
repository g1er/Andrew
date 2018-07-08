import { Component } from '@angular/core';

@Component({
  selector: 'app-swm',
  templateUrl: "./swm.component.html",
  styleUrls: ["./swm.component.css"]
})
export class SwmComponent {

  addText = "";
  addNewText(){
    this.addText = "Let competitions begin!";
  }

  textFieldValue = "";
  onKeyUp(event){
    this.textFieldValue = event.target.value
  }


}
