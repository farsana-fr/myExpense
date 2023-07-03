import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  bName:any;
  amount:any;
  total:any;
  arr:any=[];
  constructor(private ar:ActivatedRoute,private ds:DataService,private router:Router)
  {
  }
  ngOnInit():void
  {
    this.ar.params.subscribe((data:any)=>{
      this.bName=data["name"]
    })
    console.log(this.bName);
  }
  deleteBook()
  {
    for(let i=0;i<this.ds.one.length;i++)
    {
      console.log(this.ds.one[i].name)
      if(this.ds.one[i].name==this.bName)
      {
        this.ds.one.splice(i)
        alert("Deleted Book\n"+this.bName.toUpperCase())
        this.router.navigateByUrl("")
      }
    }
  }
  addTo()
  {
    for(let i=0;i<this.ds.one.length;i++)
    {
      console.log("NAME",this.ds.one[i].name)
      if(this.ds.one[i].name==this.bName)
      {
       
        this.ds.one[i].total+=parseInt(this.amount)
        this.ds.one[i].transaction.push(+this.amount)
        this.arr.push(+this.amount)
        console.log(this.ds.one[i].total);
        this.total=this.ds.one[i].total
        this.amount=""
      }
    }
  }
  takeFrom()
  {
    for(let i=0;i<this.ds.one.length;i++)
    {
      console.log(this.ds.one[i].name)
      if(this.ds.one[i].name==this.bName)
      {

        
        this.ds.one[i].total-=parseInt(this.amount)
        this.ds.one[i].transaction.push(-this.amount)
        this.arr.push(-this.amount)
        console.log(this.ds.one[i].transaction);
        this.total=this.ds.one[i].total
        this.amount=""
      }
    }
  }
}
