import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CalServiceService } from '../cal-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public selectedId: any;
  productslist=[
  {"id":1,"name":"Laptop"},
  {"id":2,"name":"Mobiles"},
  {"id":3,"name":"Tabs"},
  {"id":4,"name":"AcerLaptop"},
  {"id":5,"name":"LenovoLaptop"}
  
  ];
  sum1:number;
  constructor(private router:Router,private route:ActivatedRoute,calservice:CalServiceService) {
   this.sum1=calservice.add(10,20);
   }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id = parseInt(params.get('id'));
       this.selectedId=id;
     });
  }
onselect(pro: { id: any; }){
  this.router.navigate([pro.id],{relativeTo: this.route});
}
isSelected(pro: { id: any; }){
  return pro.id===this.selectedId;
}

}
