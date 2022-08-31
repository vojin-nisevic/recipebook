import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Beef', 3),
  new Ingredient('Potato', 10)
]
  constructor() { }

  ngOnInit(): void {
  }

}
