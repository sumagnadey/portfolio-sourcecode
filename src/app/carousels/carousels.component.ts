import { Component, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselsComponent {
  showCarousel = true;

}
