import { Component, OnInit } from '@angular/core';
import { InsertServiceService } from '../insert-service.service';
import { AppRecipesSheetComponent } from '../app-recipes-sheet/app-recipes-sheet.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
})
export class AppSidebarComponent implements OnInit {
  recipes: any;
  constructor(
    private InsService: InsertServiceService,
    private sheetComponent: AppRecipesSheetComponent
  ) {}

  ngOnInit(): void {}

  populateSheet(id: any) {
    this.sheetComponent.ViewRecipe(this.recipes[id].titolo, this.recipes[id].difficolta, this.recipes[id].ingredienti, this.recipes[id].cottura, this.recipes[id].porzioni, this.recipes[id].procedimento);
  }
  
  ViewRecipes() {
    this.InsService.sendGetReq('/ViewRecipes').subscribe((data: any) => {
      this.recipes = data;
    });
  }
  
}
