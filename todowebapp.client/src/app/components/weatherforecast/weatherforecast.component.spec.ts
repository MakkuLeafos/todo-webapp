import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherforcastComponent } from './weatherforecast.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherforcastComponent', () => {
  let component: WeatherforcastComponent;
  let fixture: ComponentFixture<WeatherforcastComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherforcastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherforcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve weather forecasts from the server', () => {
    const mockForecasts = [
      { date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild' },
      { date: '2021-10-02', temperatureC: 25, temperatureF: 77, summary: 'Warm' }
    ];

    const req = httpMock.expectOne('/weatherforecast');
    expect(req.request.method).toEqual('GET');
    req.flush(mockForecasts);

    expect(component.forecasts).toEqual(mockForecasts);
  });

});
