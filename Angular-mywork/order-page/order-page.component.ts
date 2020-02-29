import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/components/model/gift.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  public order=new Order('','',null,null,'','','','','',null);

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(data){
    console.log(data);
   
  if(localStorage.order==undefined){
    var orderItems=[];
    orderItems.push(data);
    localStorage.order=JSON.stringify(orderItems);
  }
  else{
    var newOrder=JSON.parse(localStorage.order)
    newOrder.push(data);
    localStorage.order=JSON.stringify(newOrder);
  }
}
}
