import { Component, HostListener } from '@angular/core';
import { faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// @HostListener("window:scroll", [])
// @HostListener('window:scroll', ['$event'])
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'portfolio';
	scrollIcon = faChevronUp;
	hackerrankIcon = faHackerrank;
	instagramIcon =  faInstagram;

	darkTheme = true;

	images = [
		{
			imageSrc: 'assets/IITInternship.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/GoogleCloud.png',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/AzureFundamental.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/Bengalathon.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/Udacity.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/AIForMed.jpeg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/MLStanford.jpeg',
			imageAlt: ''
		},
	];

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}
}