import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MediaService } from '../services/media.service';
import { MediaComponent } from './media.component';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule],
      providers: [MediaService]
    });

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService);
    fixture.detectChanges();
  });

  it('should return mean = 550.6 with the proxy-size array', fakeAsync(() => {
    const mockData = { size: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    
    spyOn(mediaService, 'getProxySize').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.sizes).toEqual(mockData.size);
    expect(component.media(component.sizes)).toEqual(550.6);
  })); 

  it('should return mean = 60.31 with the dev-hours array', fakeAsync(() => {
    const mockData = { hours: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    
    spyOn(mediaService, 'getDevHours').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.hours).toEqual(mockData.hours);
    expect(component.media(component.hours)).toEqual(60.32);
  })); 
});