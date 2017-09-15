import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	time = new Date();

	color: String= '';
	color1: String= '';
	color2: String= '';
	color3: String= '';

	hello(){
		this.time = new Date();
		this.color = 'yellow';
		this.color1 = '';
		this.color2 = '';
		this.color3 = '';
  	}

	hello1(){
		this.time = new Date();
		this.color = '';
		console.log('i made it');
		this.time.setHours(this.time.getHours() + 1);
		this.color1 = 'yellow';
		this.color2 = '';
		this.color3 = '';

  	}

	hello2(){
		this.time = new Date();		
		this.color = '';
		this.color1 = '';
		this.time.setHours(this.time.getHours() + 2);		
		this.color2 = 'yellow';
		this.color3 = '';
  	}

  	hello3(){
		this.time = new Date();  		
		this.color = '';
		this.color1 = '';
		this.color2 = '';
		this.time.setHours(this.time.getHours() + 3);		
		this.color3 = 'yellow';
  	}
	hello4(){
		this.time = null;		
		this.color = '';
		this.color1 = '';
		this.color2 = '';
		this.color3 = '';
  	}   	

}
