import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let fixture;
	let component: AppComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [],
			declarations: [AppComponent],
			providers: [],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
