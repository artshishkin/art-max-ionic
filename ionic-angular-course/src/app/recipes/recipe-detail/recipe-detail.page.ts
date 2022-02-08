import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RecipesService} from '../recipes.service';
import {map} from "rxjs/operators";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('recipeId')),
        map(recipeId => this.recipesService.getRecipe(recipeId))
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

}
