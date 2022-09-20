import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { RecipesService } from "../../services/recipes.service";
import { logMessages } from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipesService, private router: Router) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (p => {
        this.id = +p.get('id');
        this.editMode = p.get('id') !== null;
        this.initForm();
      })
    );
  }

  onSubmit() {
    console.log('On submit');
    // if (!this.id !== undefined && this.id !== null) {
    if (!this.editMode) {
      this.recipeService.addRecipe(this.recipeForm.getRawValue());
      console.log('If in recipe edit');
      // console.log(this.recipeForm.getRawValue());
    } else {
      this.recipeService.editRecipe(this.id, this.recipeForm.getRawValue());
      console.log('Else in recipe edit');
    }
    this.router.navigate(['/recipes']);
    // this.recipeService.addRecipe(this.recipeForm.getRawValue());
  }

  get name() {
    return this.recipeForm.get('name');
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.min(1),
          // Validators.pattern(/^[1-9]+[0-9]*$/),
        ])
      })
    )
  }

  onDeleteIngredient(index: number) {
    this.getControls().splice(index, 1);
  }

  onCancel() {
    console.log(this.recipeForm.dirty + ' Dirty');
    console.log(this.recipeForm.pristine + ' Pristine');
    // this.recipeForm.reset();
    // this.router.navigate(['/recipes']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getSingleRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredients of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredients.name, Validators.required),
              'amount': new FormControl(ingredients.amount, [
                Validators.required,
                Validators.min(1),
                // Validators.pattern(/^[1-9]+[0-9]*$/),
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup<any>({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    })
  }
}
