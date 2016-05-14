import {Component, OnInit} 	from 'angular2/core';
import {OffersService} 		from './offers.service';

import {Offering}			from './offering';

@Component({
  selector: 'offers',
  viewProviders: [OffersService],
  templateUrl: 'app/public/offers.html'
})

// gettelni és putolni fog
export class OffersComponent implements OnInit {
  
  constructor(private offersService: OffersService) {

  }
  
  offerings = [];

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers()
    			  .subscribe(offerings => this.offerings = offerings);
  }
  
  borrow(offerid: number) {
    var off = new Offering(offerid,'','iszak','','',0,'',0,'');
    this.offersService.putBorrower(offerid, off)
        		  .subscribe(offerings => this.offerings = offerings);
  }
}