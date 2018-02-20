import { Component, OnInit } from '@angular/core';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css']
})
export class AllDealsComponent implements OnInit {
  activeDealsUrl:string ='http://localhost:3000/deals/dealRole/active?userName=Hiranmayi%20Thacker';
  followedDealsUrl:string ='http://localhost:3000/deals/dealRole/followed?userName=Hiranmayi%20Thacker';
  inactiveDealsUrl:string ='http://localhost:3000/deals/dealRole/inActive?userName=Hiranmayi%20Thacker';

  public activeDeals;
  public followedDeals;
  public InactiveDeals;
  public allDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;

  constructor(private _dealService: DealService) { }

 async  ngOnInit() {

    //To get Active deal info
    this.activeDeals =  this._dealService.getDealDetails(this.activeDealsUrl);
    //To get Followed deal info
    this.followedDeals =  this._dealService.getDealDetails(this.followedDealsUrl)
    
    //To get InActive deal info
    this.InactiveDeals =  this._dealService.getDealDetails(this.inactiveDealsUrl);
    //To get all deals count
    this.allDealsCount = this.activeDeals.length;
  }

}
