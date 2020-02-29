import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-view-giftcard',
  templateUrl: './view-giftcard.component.html',
  styleUrls: ['./view-giftcard.component.css']
})
export class ViewGiftcardComponent implements OnInit {
 public orders:any;
  constructor(private service:OrderService) { }
  
  
  ngOnInit(): void {
    this.service.getOrders().subscribe( x => this.orders = x.data)
  
  }


}
