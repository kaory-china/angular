import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Strogonoff','carne com molho tomate e creme de leite','https://live.staticflickr.com/7009/6811493373_7dd5997b1d_z.jpg'),
    new Recipe('Strogonoff','carne com molho tomate e creme de leite','https://live.staticflickr.com/7009/6811493373_7dd5997b1d_z.jpg')
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
