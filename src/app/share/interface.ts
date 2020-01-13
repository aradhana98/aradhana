export interface   Icustomer {

  id:number;
  name : string;
  city:string;
  orderTotal ?:number;
  customerSince:any

  }
  export interface   Iorder{
    customerId:number;
 OrderItems: Iorder[];



  }
  export interface   IorderItem{
 id:number;
 productName : string;
 itemCost : number
 


  }


