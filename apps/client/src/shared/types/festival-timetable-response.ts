interface FestivalDate {
  festivalDateId: number;
  festivalAt: string;
}

interface FestivalTimetable {
  festivalId: number;
  title: string;
  logoUrl: string;
  festivalDates: FestivalDate[];
}

export interface FestivalTimetableResponse {
  festivals: FestivalTimetable[];
}

//타임 테이블 등록된 시간표
export interface Artist {
  artistId: string;
  artistName: string;
}

export interface FestivalTime {
  festivalTimeId: number;
  startAt: string;
  endAt: string;
  isSelected: boolean;
  artists: Artist[];
}

export interface Stage {
  stageOrder: number;
  stageName: string;
  festivalTimes: FestivalTime[];
}

export interface FestivalTimetableExtended {
  ticketOpenAt: string;
  stageCount: number;
  stages: Stage[];
}

export interface FestivalTimetableResponseExtended {
  ticketOpenAt: string;
  stageCount: number;
  stages: Stage[];
  data: FestivalTimetableExtended;
}
