import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookForm = new FormGroup({title: new FormControl('',[Validators.required,Validators.minLength(5)]),
                          author: new FormControl('',[Validators.required]),
                          price: new FormControl('',[Validators.required]),
                          genre: new FormControl('',[Validators.required])})

}
