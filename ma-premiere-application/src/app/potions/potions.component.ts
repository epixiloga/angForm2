import { Component, OnInit, OnDestroy } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit, OnDestroy {
  potionList: Potion[];
  potionDetail: Potion = new Potion('','');

  constructor() { }

  ngOnInit() {
    this.potionList = potions;

  }

  ngOnDestroy(): void {
  }

  onClick(potion:Potion){
      this.potionDetail = potion
  }

}

