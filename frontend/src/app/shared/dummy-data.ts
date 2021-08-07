import { Property } from './interface/property';
import { PropertyType } from './enums/property';

export const properties: Property[] = [
  {
    id: '01',
    address: 'Some place free',
    description: 'And this is nice',
    name: 'Property A',
    type: PropertyType.residential,
    position: {
      lat: 8.948677279926585,
      lng: 125.5470567303216
    }
  },
  {
    id: '02',
    address: 'Some place free',
    description: 'And this is nice',
    name: 'Property B',
    type: PropertyType.commercial,
    position: {
      lat: 8.948603092201049,
      lng: 125.54424652989282
    }
  },
  {
    id: '03',
    address: 'Some place free',
    description: 'And this is nice',
    name: 'Property C',
    type: PropertyType.industrial,
    position: {
      lat: 8.947998991587234,
      lng: 125.5430559487951
    }
  },
  {
    id: '04',
    address: 'Some place free',
    description: 'And this is nice',
    name: 'Property D',
    type: PropertyType.industrial,
    position: {
      lat: 8.947055744763734,
      lng: 125.5442679818045
    }
  },
  {
    id: '05',
    address: 'Some place free',
    description: 'And this is nice',
    name: 'Green Planes 45 E',
    type: PropertyType.land,
    position: {
      lat: 8.946536428053331,
      lng: 125.54334554960266
    }
  }
];
