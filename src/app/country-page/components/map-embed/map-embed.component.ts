import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import { MapComponent } from 'ng-leaflet-universal';
import { Location, Marker } from 'ng-leaflet-universal/lib/models/marker.interface';
import { ILocation } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map-embed',
  templateUrl: './map-embed.component.html',
  styleUrls: ['./map-embed.component.scss']
})
export class MapEmbedComponent implements AfterViewInit {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  @Input() location?: ILocation;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.mapComponent && this.location) {
      const marker: Marker = {
        id: "country-location",
        location: this.location
      };
      this.mapComponent.updateMarkers([marker]);
    }
  }
}
