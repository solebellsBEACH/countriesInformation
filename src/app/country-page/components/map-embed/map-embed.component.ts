import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MapComponent } from 'ng-leaflet-universal';
import { Marker } from 'ng-leaflet-universal/lib/models/marker.interface';

@Component({
  selector: 'app-map-embed',
  templateUrl: './map-embed.component.html',
  styleUrls: ['./map-embed.component.scss']
})
export class MapEmbedComponent implements AfterViewInit {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  markers: Marker[];

  constructor() {
    this.markers = [];
  }

  ngAfterViewInit(): void {
    this.mapComponent.updateMarkers(this.markers);
  }
}