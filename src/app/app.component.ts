import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ValidateListNumbers';
  formData: FormGroup = new FormGroup({
    inputNumbers: new FormControl("", [Validators.required]) //Validators.pattern("[0-9]")
  });

  sortedList: Number[] = [];

  constructor() { }

  ngOnInit() {
  }

  sortNumbers() {
    let listNumbers = (this.formData.get('inputNumbers')?.value as string).split(",").map(e => Number(e.trim()));
    this.sortedList = listNumbers.sort();
  }

}
