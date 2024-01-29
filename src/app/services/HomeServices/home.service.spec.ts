import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { Regions } from '../../shared/interfaces';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('HomeService', () => {
    let service: HomeService;
    let http: HttpClient;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HomeService
            ],
        });

        service = TestBed.inject(HomeService);
        http = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get data by region', () => {
        const spy = spyOn(http, 'get').and.callThrough();
        service.getDataByRegion(Regions.africa);
        expect(spy).toHaveBeenCalled()
    });
});
