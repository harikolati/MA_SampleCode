import { Injectable } from '@angular/core';

@Injectable()
export class FollowedDealService {

  constructor() { }

  getFollowedDealDetails(){
    return[
        {"BUName":"FollowBU Name1", "dealType":"FollowProduct1","dealArch":"FollowFull Integration1","stage":"Opportunity Evalution1_Followed"},
        {"BUName":"FollowBU Name2", "dealType":"FollowProduct2","dealArch":"FollowFull Integration2","stage":"Opportunity Evalution2_Followed"},
        {"BUName":"FollowBU Name3", "dealType":"FollowProduct2","dealArch":"FollowFull Integration2","stage":"Opportunity Evalution2_Followed"},
        {"BUName":"FollowBU Name4", "dealType":"FollowProduct2","dealArch":"FollowFull Integration2","stage":"Opportunity Evalution2_Followed"}
        
    ];

  }
}
