import { Component, OnDestroy, OnInit } from '@angular/core';


import { Recipe } from "../../models/recipe.model";
import { RecipesService } from "../../services/recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;
  dataSubscription: Subscription;
  errorMessage: string = '';

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute, private router: Router,
              private dataService: DataService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipeFreshList.subscribe(p => this.recipes = p);
    this.dataService.errorMessage.subscribe(result => {
      console.log(result);
      this.errorMessage = result;
    });
  }

  newRecipe() {
    // console.log(this.activeRoute.url);
    // console.log(this.router.url);
    // let urlString = this.router.url;
    // if (urlString.includes('recipes')) {
    //   console.log('Ima recipes');
    // }
    // else {
    //   console.log('Nema recipes');
    // }
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  cancelError() {
    this.dataService.errorMessage.next('');
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }
}
