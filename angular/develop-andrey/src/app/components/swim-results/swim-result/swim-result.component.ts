import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { ResultsService } from '../../../services/results.service';

@Component({
  selector: 'app-swim-result',
  templateUrl: './swim-result.component.html',
  styleUrls: ['./swim-result.component.css']
})
export class SwimResultComponent implements OnInit {
  // private resultList: Observable<any>;
  public swimmers: any;
  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    this.resultsService.getResultList().subscribe( 
      results => {
        console.log(results);
        this.swimmers = results;
       } , 
      error => console.error(error),
      () => console.log('complete')
    );

    this.resultsService.getPublicApiResults().subscribe(
      results => {
        console.log(results);
       } , 
      error => console.error(error),
      () => console.log('complete')
    );

  }
 

}
