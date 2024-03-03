import { Component } from '@angular/core';
import { IProduct } from './productModel';
import { ProductsService } from './products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products:any;

  filter : string ='';
  //private cartServ : CartService = Inject(CartService) the same constructor (private cartServ : CartService)
  constructor( private cartServ : CartService, private productServ : ProductsService
    ,private router :Router, private route : ActivatedRoute){
  
  }

  ngOnInit() {
    this.productServ.getProducts().subscribe(products => {
      this.products = products;
    });
   this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '' ;
    })

   // this.filter = this.route.snapshot.params['filter'];
  }
  
    
    getImageUrl(product:IProduct){
      if(!product) return '';
      return '/assets/assets/images/robot-parts/'+product.imageName;
    }

    getFilteredProducts() {
      return this.filter ===''
      ? this.products
      : this.products.filter((product:any) => product.category ===this.filter);
    }

    
    addToCart(product:IProduct){
     this.cartServ.saveCart(product);
     this.router.navigate(['/cart'])
    }
}


