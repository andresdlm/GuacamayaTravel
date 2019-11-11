import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryInterface } from '../models/category';
import { CityInterface } from '../models/city';
import { DestinationInterface } from '../models/destination';
import { HotelInterface } from '../models/hotel';
import { OrderInterface } from '../models/order';
import { StateInterface } from '../models/state';
import { RoomInterface } from '../models/room';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = afs.collection<CategoryInterface>('categorias');
    this.categories = this.categoriesCollection.valueChanges();
    this.citiesCollection = afs.collection<CityInterface>('ciudades');
    this.cities = this.citiesCollection.valueChanges();
    this.destinationsCollection = afs.collection<DestinationInterface>('destinos');
    this.destinations = this.destinationsCollection.valueChanges();
    this.hotelsCollection = afs.collection<HotelInterface>('hoteles');
    this.hotels = this.hotelsCollection.valueChanges();
    this.ordersCollection = afs.collection<OrderInterface>('ordenes');
    this.orders = this.ordersCollection.valueChanges();
    this.statesCollection = afs.collection<StateInterface>('estados');
    this.states = this.statesCollection.valueChanges();
    this.roomsCollection = afs.collection<RoomInterface>('habitaciones');
    this.rooms = this.roomsCollection.valueChanges();
  }

  private categoriesCollection: AngularFirestoreCollection<CategoryInterface>;
  private categories: Observable<CategoryInterface[]>;
  private citiesCollection: AngularFirestoreCollection<CityInterface>;
  private cities: Observable<CityInterface[]>;
  private destinationsCollection: AngularFirestoreCollection<DestinationInterface>;
  private destinations: Observable<DestinationInterface[]>;
  private hotelsCollection: AngularFirestoreCollection<HotelInterface>;
  private hotels: Observable<HotelInterface[]>;
  private ordersCollection: AngularFirestoreCollection<OrderInterface>;
  private orders: Observable<OrderInterface[]>;
  private statesCollection: AngularFirestoreCollection<StateInterface>;
  private states: Observable<StateInterface[]>;
  private roomsCollection: AngularFirestoreCollection<RoomInterface>;
  private rooms: Observable<RoomInterface[]>;

  private hotelDoc: AngularFirestoreDocument<HotelInterface>;
  private hotel: Observable<HotelInterface>;
  private destinationDoc: AngularFirestoreDocument<DestinationInterface>;
  private destination: Observable<DestinationInterface>;
  private categoryDoc: AngularFirestoreDocument<CategoryInterface>;
  private category: Observable<CategoryInterface>;
  private stateDoc: AngularFirestoreDocument<StateInterface>;
  private state: Observable<StateInterface>;
  private cityDoc: AngularFirestoreDocument<CityInterface>;
  private city: Observable<CityInterface>;
  private orderDoc: AngularFirestoreDocument<OrderInterface>;
  private order: Observable<OrderInterface>;
  private roomDoc: AngularFirestoreDocument<RoomInterface>;
  private room: Observable<RoomInterface>;

  public selectedCategory: CategoryInterface = {
    id: null
  };
  public selectedHotel: HotelInterface = {
    id: null
  };
  public selectedState: StateInterface = {
    id: null
  };
  public selectedCity: CityInterface = {
    id: null
  };
  public selectedOrder: OrderInterface = {
    id: null
  };
  public selectedDestination: DestinationInterface = {
    id: null
  };
  public selectedRoom: RoomInterface = {
    id: null
  };

  // CRUD Hoteles

  createHotels(hotel: HotelInterface): void {
    this.hotelsCollection.add(hotel);
  }

  readAllHotels() {
    return this.hotels = this.hotelsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as HotelInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  readOneHotel(idHotel: string) {
    this.hotelDoc = this.afs.doc<HotelInterface>(`hotel/${idHotel}`);
    return this.hotel = this.hotelDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as HotelInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  updateHotels(hotel: HotelInterface): void {
    const idHotel = hotel.id;
    this.hotelDoc = this.afs.doc<HotelInterface>(`hotel/${idHotel}`);
    this.hotelDoc.update(hotel);
  }

  deleteHotels(idHotel: string): void {
    this.hotelDoc = this.afs.doc<HotelInterface>(`hotel/${idHotel}`);
    this.hotelDoc.delete();
  }

  // CRUD Destinos Turisticos

  createDestination(destination: DestinationInterface): void {
    this.destinationsCollection.add(destination);
  }

  readAllDestination() {
    return this.destinations = this.destinationsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DestinationInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  readOneDestination(idDestination: string) {
    this.destinationDoc = this.afs.doc<DestinationInterface>(`destinos/${idDestination}`);
    return this.destination = this.destinationDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as DestinationInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  updateDestination(destination: DestinationInterface): void {
    const idDestination = destination.id;
    this.destinationDoc = this.afs.doc<DestinationInterface>(`destinos/${idDestination}`);
    this.destinationDoc.update(destination);
  }

  deleteDestination(idDestination: string): void {
    this.destinationDoc = this.afs.doc<DestinationInterface>(`destinos/${idDestination}`);
    this.destinationDoc.delete();
  }

  // CRUD Categorias

  createCategory(category: CategoryInterface): void {
    this.categoriesCollection.add(category);
  }

  readAllCategory() {
    return this.categories = this.categoriesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DestinationInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  updateCategory(category: CategoryInterface): void {
    const idCategory = category.id;
    this.categoryDoc = this.afs.doc<CategoryInterface>(`categorias/${idCategory}`);
    this.categoryDoc.update(category);
  }

  deleteCategory(idCategory: string): void {
    this.categoryDoc = this.afs.doc<CategoryInterface>(`categorias/${idCategory}`);
    this.categoryDoc.delete();
  }

  // CRUD Estados

  createState(state: StateInterface): void {
    this.statesCollection.add(state);
  }

  readAllState() {
    return this.states = this.statesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as StateInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  updateState(state: StateInterface): void {
    const idState = state.id;
    this.stateDoc = this.afs.doc<StateInterface>(`estados/${idState}`);
    this.stateDoc.update(state);
  }

  deleteState(idState: string): void {
    this.stateDoc = this.afs.doc<StateInterface>(`estados/${idState}`);
    this.stateDoc.delete();
  }

  // CRUD Ciudades

  createCity(city: CityInterface): void {
    this.citiesCollection.add(city);
  }

  readAllCity() {
    return this.cities = this.citiesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CityInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  updateCity(city: CityInterface): void {
    const idCity = city.id;
    this.cityDoc = this.afs.doc<CityInterface>(`ciudades/${idCity}`);
    this.cityDoc.update(city);
  }

  deleteCity(idCity): void {
    this.cityDoc = this.afs.doc<CityInterface>(`ciudades/${idCity}`);
    this.cityDoc.delete();
  }

  // CRUD Ordenes

  createOrder(order: OrderInterface): void {
    this.ordersCollection.add(order);
  }

  readAllOrder() {
    return this.orders = this.ordersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OrderInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  updateOrder(order: OrderInterface): void {
    const idOrder = order.id;
    this.orderDoc = this.afs.doc<OrderInterface>(`ordenes/${idOrder}`);
    this.orderDoc.update(order);
  }

  deleteOrder(idOrder): void {
    this.orderDoc = this.afs.doc<OrderInterface>(`ordenes/${idOrder}`);
    this.orderDoc.delete();
  }

  // CRUD Habitaciones

  createRoom(room: RoomInterface): void {
    this.roomsCollection.add(room);
  }

  readAllRoom() {
    return this.rooms = this.roomsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as RoomInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  updateRoom(room: RoomInterface): void {
    const idRoom = room.id;
    this.roomDoc = this.afs.doc<RoomInterface>(`room/${idRoom}`);
    this.roomDoc.update(room);
  }

  deleteRoom(idRoom): void {
    this.roomDoc = this.afs.doc<RoomInterface>(`room/${idRoom}`);
    this.roomDoc.delete();
  }

}
