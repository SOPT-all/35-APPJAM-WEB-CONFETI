export interface Performance {
  performanceId: number;
  type: 'concert' | 'festival';
  title: string;
  posterUrl: string;
}

export interface Performances {
  performances: Performance[];
}
