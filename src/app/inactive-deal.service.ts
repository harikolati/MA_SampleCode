import { Injectable } from '@angular/core';

@Injectable()
export class InactiveDealService {

  constructor() { }

  getInactiveDealDetails(){
    return[
        {"BUName":"InactiveBU Name1", "dealType":"InactiveProduct1","dealArch":"InactiveFull Integration1","stage":"Opportunity Evalution1_Inactive"},
        {"BUName":"InactiveBU Name2", "dealType":"InactiveProduct2","dealArch":"InactiveFull Integration2","stage":"Opportunity Evalution2_Inactive"},
        {"BUName":"InactiveBU Name3", "dealType":"InactiveProduct3","dealArch":"InactiveFull Integration3","stage":"Opportunity Evalution3_Inactive"}
        
    ];

  }
}
