import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  model?: Ingredient;
  submitted: boolean = false;
  edit: boolean = false;
  index: number;
  @ViewChild('f', {static: true}) localForm: NgForm;
  clear: boolean = false;

  constructor(private shopService: ShoppingListService) {
    this.model = new Ingredient(null, null);
  }

  ngOnInit(): void {

    this.shopService.itemToEdit.subscribe(i =>{
      if (i !== null){
        const item = this.shopService.getSingleIngredient(i);
        this.model.name = item.name;
        this.model.amount = item.amount;
        this.index = i;
        this.edit = true;
      }
    })
  }

  ngOnDestroy() {
    // console.log('On destroy: ' + this.model.name);
    this.shopService.itemToEdit.next(null);
  }

  onSubmit(form: NgForm){
    console.log('HERE WE GO');
    if (!this.clear){
      if (!this.edit) {
        console.log(this.model);
        this.shopService.addIngredient(this.model);
      }
      else {
        this.shopService.updateAmount(this.model.name, this.model.amount, this.index);
        this.index = null;
      }
    }
    this.model = new Ingredient('', null);
    form.resetForm();
    this.edit = false;
  }

  onClear() {
    console.log('WHICH GOES FIRST');
    // this.clear = true;
    this.localForm.resetForm();
    this.edit = false;
    this.model = new Ingredient(null, null);
  }

  onDelete(name: string){
    console.log('AND WHERE THIS GOES');
    this.shopService.deleteIngredient(name);
    this.onClear();
  }
}
