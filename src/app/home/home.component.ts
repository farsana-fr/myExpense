import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private fb:FormBuilder,private ds:DataService){
  }
  bookName:any="";
  data:any=this.ds.one
  // date:any
  addNewBook(){
    let books:any={};
    books.name=this.bookName
    let ddate=formatDate(new Date(), 'yyyy/MM/dd', 'en');
    books.date= ddate
    books.index=this.ds.ind;
    books.total=0;
    books.transaction=[]
    this.ds.ind++;
  
    this.ds.one.push(books)
    console.log("AGAIN ONE",this.ds.one)
    this.bookName=""
  }
  
}
