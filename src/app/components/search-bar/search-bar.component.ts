import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredValue:string="";

  @Output()searchValueChange:EventEmitter<string>=new EventEmitter<string>();

  onSearchValchange(){
     this.searchValueChange.emit(this.enteredValue);
  }



}
