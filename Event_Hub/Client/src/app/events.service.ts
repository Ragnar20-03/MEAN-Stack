import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  specialEvents_URl = "http://localhost:5100/api/specialEvents"
  events_URl = "http://localhost:5100/api/events"

  constructor(private hobj : HttpClient) { }

  getEvents()
  {
    return this.hobj.get<any>(this.events_URl)
  }
}
