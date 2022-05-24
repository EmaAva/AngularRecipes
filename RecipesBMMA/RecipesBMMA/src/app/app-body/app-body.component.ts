import { Component, OnInit, Input } from '@angular/core';
import { InsertServiceService } from '../insert-service.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
  ingredientList:string="";
  recipes: any;
  recipeSheet: any;
  titolo:string="";
  difficolta:string="";
  porzioni:string="";
  procedimento:string="";
  cottura:string="";
  recipeIndex:Number=0;
  req = {};
  ingredienti=[];
  pippo: string = 'ciao';
  constructor(
    private InsService: InsertServiceService
  ) {}

  ngOnInit(): void {}

  populateSheet(id: any) {
    console.log('ID: ' + id);
    this.recipeIndex = id;
    this.ViewRecipe(id);
  }
  InsertDocument(_title:string,_diff:string,_ings:string,_cott:string,_porz:string,_proc:string) {
    this.req = {title : _title,
      diff : _diff, 
      ings : _ings, 
      cott: _cott, 
      porz: _porz, 
      proc: _proc};
    this.InsService.sendPostReq('/InsertRecipe', this.req).subscribe(
      (data : any) => { console.log(data);}
    );
  }
  UpdateDocument(_title:string,_diff:string,_ings:string,_cott:string,_porz:string,_proc:string) {
    this.req = { titleBefore: this.titolo,
      title : _title,
      diff : _diff, 
      ings : _ings, 
      cott: _cott, 
      porz: _porz, 
      proc: _proc};
    this.InsService.sendPostReq('/UpdateRecipe', this.req).subscribe(
      (data : any) => { console.log(data);}
    );
  }
  ViewRecipes() {
    this.InsService.sendGetReq('/ViewRecipes').subscribe((data: any) => {
      this.recipes = data;
    });
  }
  ViewRecipe(ID: any) {
    this.InsService.sendGetReq('/ViewRecipes').subscribe((data: any) => {
      this.recipeSheet = data[ID];
      this.procedimento = this.recipeSheet.procedimento; 
      this.titolo = this.recipeSheet.titolo; 
      this.porzioni = this.recipeSheet.porzioni; 
      this.difficolta = this.recipeSheet.difficolta;
      this.ingredienti = this.recipeSheet.ingredienti;
      this.ingredientList = this.recipeSheet.ingstring;
      this.cottura = this.recipeSheet.cottura;
    });
  }
  deleteDocument() {
    this.InsService.sendPostReq('/delete', {'titolo' : this.titolo}).subscribe((data: any) => {
      console.log(data);
      if(data.acknowledged){
      this.recipeSheet = "Ricetta rimossa con successo!";
      this.procedimento = "Ricetta rimossa con successo!"; 
      this.titolo = "Ricetta rimossa con successo!"; 
      this.porzioni = "Ricetta rimossa con successo!"; 
      this.difficolta = "Ricetta rimossa con successo!";
      this.ingredienti = [];
      }
    });
  }
}
