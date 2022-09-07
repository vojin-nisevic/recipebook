import {Component, OnInit} from '@angular/core';


import {Recipe} from "../../models/recipe.model";
import {RecipesService} from "../../services/recipes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  newRecipe(){
    // console.log(this.activeRoute.url);
    // console.log(this.router.url);
    // let urlString = this.router.url;
    // if (urlString.includes('recipes')) {
    //   console.log('Ima recipes');
    // }
    // else {
    //   console.log('Nema recipes');
    // }
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }

}
