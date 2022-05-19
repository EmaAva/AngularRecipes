import { Injectable, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { InsertServiceService } from '../insert-service.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-recipes-sheet',
  templateUrl: './app-recipes-sheet.component.html',
  styleUrls: ['./app-recipes-sheet.component.css'],
})
export class AppRecipesSheetComponent implements OnInit {
  temp: any;
  ing: any;
  pippo: string = 'ciao';
  constructor(private InsService: InsertServiceService) {}

  ngOnInit(): void {}

  ViewRecipe(title:String, diff:Number, Ing:any, cott:String, porz:Number, proc:String) {
    this.InsService.sendGetReq('/ViewRecipes').subscribe((data: any) => {
      this.temp = data;
      this.pippo = this.temp.procedimento;
    });
  }
  
}
