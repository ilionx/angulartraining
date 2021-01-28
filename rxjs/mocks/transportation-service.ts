import {forkJoin, interval, Observable, of} from 'rxjs';
import {map, switchMap, take, takeWhile} from 'rxjs/operators';

export class TransportationService {
  trainOptions = [
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '08:50', arrivalTime: '09:20'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:30', arrivalTime: '10:00'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '10:00', arrivalTime: '10:30'},
    // {departureLocation: 'Amsterdam', arrivalLocation: 'Rotterdam', departureTime: '08:55', arrivalTime: '09:40'},
    // {departureLocation: 'Amsterdam', arrivalLocation: 'Rotterdam', departureTime: '09:22', arrivalTime: '10:07'},
  ];

  busOptions = [
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:00', arrivalTime: '09:50'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:30', arrivalTime: '10:20'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '10:10', arrivalTime: '11:00'}
  ];

  metroOptions = [
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:10', arrivalTime: '09:45'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:55', arrivalTime: '10:30'},
    {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '10:30', arrivalTime: '11:05'}
  ];

  firstTrainAfter(time: string): Observable<any> {
    return of(this.trainOptions.find(option => option.departureTime > time));
  }

  firstBusAfter(time: string): Observable<any> {
    return of(this.busOptions.find(option => option.departureTime > time));
  }

  firstMetroAfter(time: string): Observable<any> {
    return of(this.metroOptions.find(option => option.departureTime > time));
  }
}
