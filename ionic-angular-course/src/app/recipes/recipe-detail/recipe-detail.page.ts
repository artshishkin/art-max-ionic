import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) {
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

  onDeleteRecipe() {
    this.alertCtrl
      .create(
        {
          header: 'Delete recipe',
          message: 'Are you sure to delete recipe?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Delete',
              handler: () => {
                this.recipesService.deleteRecipe(this.recipe.id);
                this.router.navigate(['./']).then();
              }
            }
          ]
        }
      )
      .then(alertEl => alertEl.present());
  }

}
