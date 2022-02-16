import { Component, OnInit } from '@angular/core';
import { ButtonColor, ButtonShape, ButtonSize, ButtonStyle } from '../components';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public ButtonColor = ButtonColor;
  public ButtonSize = ButtonSize;
  public ButtonStyle = ButtonStyle;
  public ButtonShape = ButtonShape;
  
  constructor() { }

  ngOnInit(): void {
  }

}
