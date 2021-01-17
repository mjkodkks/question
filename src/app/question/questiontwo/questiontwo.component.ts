import { PublicApiService } from './../../services/public-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questiontwo',
  templateUrl: './questiontwo.component.html',
  styleUrls: ['./questiontwo.component.scss']
})
export class QuestiontwoComponent implements OnInit {

  constructor(private publicApiService: PublicApiService) { }

  categories: any = []
  cloneCategories: any = []
  test = false;

  ngOnInit(): void {
    this.callApi();
  }

  callApi(): void {
    this.publicApiService.getCategories().subscribe(res => {
      this.categories = res;
      this.cloneCategories = [...this.categories]
    }, err => {
      console.error(err);
    })
  }

  search(e) {
    const input = e.target.value.toLowerCase();
    this.categories = this.cloneCategories.filter(f => f.toLowerCase().includes(input))
  }
}
