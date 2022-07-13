import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameComponent } from '../name/name.component';

const route: Routes = [
  {path: 'name', component: NameComponent}
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
