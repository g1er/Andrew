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
    // this.resultsService.getResultList().subscribe( 
    //   results => {
    //     console.log(results);
    //     this.swimmers = results;
    //    } , 
    //   error => console.error(error),
    //   () => console.log('complete')
    // );

    // this.resultsService.getPublicApiResults().subscribe(
    //   results => {
    //     console.log(results);
    //    } , 
    //   error => console.error(error),
    //   () => console.log('complete')
    // );
    // вот здесь выдает сообщение что не удается найти имя Rx
    //console.log(Observable); 
  }
}

// RxJS practice block
var stream$ = Observable.create(function(observer){
  observer.next('One');

  setTimeout(function(){
    observer.next('After 5 sec.')
  }, 7000);

  setTimeout(function(){
    observer.error("What's happen?!")
  }, 4000);

  setTimeout(function(){
    observer.next('After 3 sec.')
  }, 3000);  

  setTimeout(function(){
    observer.complete()
  }, 5500);

  observer.next('Two');
});

stream$
  .subscribe(
    function(data){
      console.log('Subscribe:', data);
    },
    function(error){
      console.log('Error:', error);
    },
    function(){
      console.log('Completed!');
    }
)