import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:any;
   constructor(private service:BackendserviceService){}
   ngOnInit():void{
     this.service.getProducts().subscribe((data)=>{
      this.products=data;
     })
   }
}
