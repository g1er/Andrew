import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent {

  bdayName: string = 'Bob';
  
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

  addParticipant(participant: {name: string, swStyle: string, distance: number}){
    this.participants.push(participant);
  }
}
