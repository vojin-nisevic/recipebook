import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  model?: Ingredient;

  constructor(private shopService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const ing = new Ingredient(ingName, ingAmount);
    // this.shopService.addIngredient(ing);
  }
}
