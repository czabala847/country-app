import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit {
  query: string = '';

  @Input() placeholder: string = '';
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  deboucer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.deboucer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  keyPressed() {
    this.deboucer.next(this.query);
  }
}
