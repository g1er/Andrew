import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent {

  partName: string = "";
  partSwStyle: string = "";
  partDistance: any = "";
  maxPart: boolean = false;

  participants: {name: string, swStyle: string, distance: number}[] = [{
    name: "Tom Long",
    swStyle: "freestyle",
    distance: 200
  },
  {
    name: "Tim Short",
    swStyle: "butterfly",
    distance: 100
  },
  {
    name: "Nora Doe",
    swStyle: "individual medley",
    distance: 400
  }]

  register(){
    this.participants.push({
      name: this.partName,
      swStyle: this.partSwStyle,
      distance: this.partDistance
    })

    this.partName = "";
    this.partSwStyle = "";
    this.partDistance = "";
    if (this.participants.length == 12) this.maxPart = true;
    console.log(this.participants.length);
  }

}
