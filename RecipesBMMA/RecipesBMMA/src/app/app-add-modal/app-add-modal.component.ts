import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InsertServiceService } from '../insert-service.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './app-add-modal.component.html',
  styleUrls: ['./app-add-modal.component.css']
})
export class AppAddModalComponent implements OnInit {
  req = {};
  constructor(private InsService:InsertServiceService) {}
  ngOnInit() {
  }
  
  InsertRecipe(_title:string,_diff:string,_ings:string,_cott:string,_porz:string,_proc:string) {
    this.req = {title : _title,
                   diff : _diff, 
                   ings : _ings, 
                   cott: _cott, 
                   porz: _porz, 
                   proc: _proc};
    this.InsService.sendPostReq('/InsertRecipe', this.req).subscribe(
      (data) => {}
    );
  }
}
