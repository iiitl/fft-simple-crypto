import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { CoinService } from './coin.service';

describe('CoinService', () => {
	let service: CoinService;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
		});

		service = TestBed.inject(CoinService);
	});

	afterEach(() => {
		httpController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
