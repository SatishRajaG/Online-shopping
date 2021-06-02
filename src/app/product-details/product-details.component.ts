import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public productId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
       let id=parseInt(params.get('id'));
       this.productId=id;
    });
  }
  goPrevious() {
    let previousId = this.productId - 1;
    this.router.navigate(['/products', previousId]);
  }
  goNext() {
    let nextId = this.productId + 1;
    this.router.navigate(['/products', nextId]);
  }
  gotoproducts() {
    let selectedId = this.productId ? this.productId : null;
    this.router.navigate(['/products', {id: selectedId}]);   
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
  showrating(){
    this.router.navigate(['rating'], { relativeTo: this.route });
  }
}
