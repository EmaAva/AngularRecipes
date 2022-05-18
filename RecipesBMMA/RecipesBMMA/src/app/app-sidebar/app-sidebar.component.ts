import { Component, OnInit } from '@angular/core';
import { InsertServiceService } from '../insert-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
})
export class AppSidebarComponent implements OnInit {
  recipes: any;
  constructor(private InsService: InsertServiceService) {}

  ngOnInit(): void {}

  ViewRecipes() {
    this.InsService.sendGetReq('/ViewRecipes').subscribe((data: any) => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }
}
