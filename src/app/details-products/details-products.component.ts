import { Component, EventEmitter, Input ,Output } from '@angular/core';
import { IProduct } from '../catalog/productModel';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent {
@Input() product !: IProduct
@Output() buy = new EventEmitter()

getImageUrl(product:IProduct): string{
  if(!product) return '';
  return '/assets/assets/images/robot-parts/'+product.imageName;
}
getDiscounted(product:IProduct){

  if (product.discount> 0) 
    return ['stickthrought bold'];
  else 
  return [];
}

buyButtonClick (product:IProduct){
  
  this.buy.emit();
}

}



