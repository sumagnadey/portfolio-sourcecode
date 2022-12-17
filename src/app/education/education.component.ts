import { Component, Input } from '@angular/core';
import { faLocationDot, faTimeline } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() darkTheme: boolean = true;
  locationIcon = faLocationDot;
  timelineIcon = faTimeline;
}
