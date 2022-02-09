import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-map4d-services' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Map4dServices = NativeModules.Map4dServices
  ? NativeModules.Map4dServices
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export type MFLocationComponent = {
  latitude: number,
  longitude: number,
  alias?: string,
}

export type MFViewboxComponent = {
  southwest: MFLocationComponent,
  northeast: MFLocationComponent,
}

export enum MFTravelMode {
  car = 'car',
  bike = 'bike',
  foot = 'foot',
  motorcycle = 'motorcycle',
}

export enum MFRouteWeighting {
  shortest = 'shortest',
  fastest = 'fastest',
  balance = 'balance',
}

export enum MFLanguageResult {
  en = 'en',
  vi = 'vi',
}

export enum MFRouteType {
  motorway = 'motorway',
  trunk = 'trunk',
  ferry = 'ferry',
  bridge = 'bridge',
  tunnel = 'tunnel',
}

export type MFRouteRestriction = {
  location?: MFLocationComponent,
  radius?: number,
  viewbox?: MFViewboxComponent,
  path?: MFLocationComponent[],
  types?: MFRouteType[] | string[]
}

export type MFSuggestionParams = {
  text: string,
  location?: MFLocationComponent,
  acronym?: boolean,
}

export type MFTextSearchParams = {
  text: string,
  types?: string[],
  datetime?: Date,
  location?: MFLocationComponent,
}

export type MFNearbySearchParams = {
  location: MFLocationComponent,
  radius: number,
  text?: string,
  types?: string[],
  tags?: string[],
  datetime?: Date,
}

export type MFViewboxSearchParams = {
  viewbox: MFViewboxComponent,
  text?: string,
  types?: string[],
  tags?: string[],
  datetime?: Date,
}

export type MFGeocodeParams = {
  location?: MFLocationComponent,
  address?: string,
  viewbox?: MFViewboxComponent,
}

export type MFDirectionsParams = {
  origin: MFLocationComponent,
  destination: MFLocationComponent,
  waypoints?: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}

export type MFRouteETAParams = {
  origins: MFLocationComponent[],
  destination: MFLocationComponent,
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}

export type MFDistanceMatrixParams = {
  origins: MFLocationComponent[],
  destinations: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}

export type MFGraphRouteParams = {
  locations: MFLocationComponent[],
  mode?: MFTravelMode | string,
  weighting?: MFRouteWeighting | string,
  language?: MFLanguageResult | string,
  restriction?: MFRouteRestriction,
}

export function fetchSuggestion(params: MFSuggestionParams): Promise<object> {
  return Map4dServices.fetchSuggestion(params);
}

export function fetchPlaceDetail(placeId: string): Promise<object> {
  return Map4dServices.fetchPlaceDetail(placeId);
}

export function fetchTextSearch(params: MFTextSearchParams): Promise<object> {
  return Map4dServices.fetchTextSearch(params);
}

export function fetchNearbySearch(params: MFNearbySearchParams): Promise<object> {
  return Map4dServices.fetchNearbySearch(params);
}

export function fetchViewboxSearch(params: MFViewboxSearchParams): Promise<object> {
  return Map4dServices.fetchViewboxSearch(params);
}

export function fetchGeocode(params: MFGeocodeParams): Promise<object> {
  return Map4dServices.fetchGeocode(params);
}

export function fetchDirections(params: MFDirectionsParams): Promise<object> {
  return Map4dServices.fetchDirections(params);
}

export function fetchRouteETA(params: MFRouteETAParams): Promise<object> {
  return Map4dServices.fetchRouteETA(params);
}

export function fetchDistanceMatrix(params: MFDistanceMatrixParams): Promise<object> {
  return Map4dServices.fetchDistanceMatrix(params);
}

export function fetchGraphRoute(params: MFGraphRouteParams): Promise<object> {
  return Map4dServices.fetchGraphRoute(params);
}