import { Component, OnInit } from '@angular/core';
import { IPillar } from './pillar';

@Component({
  selector: 'app-pillar-list',
  templateUrl: './pillar-list.component.html',
  styleUrls: ['./pillar-list.component.css']
})
export class PillarListComponent implements OnInit {

  pageTitle: string = 'Pillar List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPillars = this.listFilter ? this.performFilter(this.listFilter) : this.pillars;
  }

  filteredPillars: IPillar[];
  pillars: IPillar[]=[
    {
      "imageUrl": "https://vignette.wikia.nocookie.net/kimetsu-no-yaiba/images/c/cc/KyoujurouP.png/revision/latest/scale-to-width-down/130?cb=20181211180848",
      "pillarTitle": "The Flame Pillar",
      "name": "Kyoujurou Rengoku",
      "gender": "Male",
      "status": "Deceased",
      "rating": 4.2
  },
  {
      "imageUrl": "https://vignette.wikia.nocookie.net/kimetsu-no-yaiba/images/3/37/TengenP.png/revision/latest/scale-to-width-down/130?cb=20181211180940",
      "pillarTitle": "The Sound Pillar",
      "name": "Tengen Uzui",
      "gender": "Male",
      "status": "Retired",
      "rating": 4.4
  }
  ];



  constructor() { 
    this.filteredPillars = this.pillars;
    this.listFilter = '';
   }

  performFilter(filterBy: string): IPillar[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.pillars.filter((product: IPillar) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

}
