import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { Regions } from '../../shared/interfaces';

describe('HomeService', () => {
    let service: HomeService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HomeService],
        });

        service = TestBed.inject(HomeService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get data by region', () => {
        const mockRegion: Regions = Regions.africa;
        const mockData = { /* your mock data here */ };

        service.getDataByRegion(mockRegion).subscribe((data: any) => {
            console.log(data);

            expect(data).toEqual(mockData);
        });

        const req = httpMock.expectOne(`${service['apiUrl']}region/${mockRegion}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockData);
    });

    it('should get data by name', () => {
        const mockName = 'Germany';
        const mockData = { /* your mock data here */ };

        service.getDataByName(mockName).subscribe((data: any) => {
            expect(data).toEqual(mockData);
        });

        const req = httpMock.expectOne(`${service['apiUrl']}name/${mockName}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockData);
    });
});
