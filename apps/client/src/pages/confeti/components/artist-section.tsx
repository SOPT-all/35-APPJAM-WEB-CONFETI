import { useState } from 'react';
import { ConcertArtist } from '../types/concert';
import { FestivalDate } from '../types/festival';
import ArtistGrid from './artist-grid';
import ExpandedSection from './expanded-section';
import * as styles from './artist-section.css';

const CONCERT_DEFAULT_ID = -1;
const MAX_VISIBLE_ARTISTS = 4;

interface ConcertArtistData {
  isOpen: boolean;
  concertArtists: ConcertArtist[];
}

interface FestivalArtistData {
  festivalDates: FestivalDate[];
}

interface ArtistListProps {
  type: 'concert' | 'festival';
  artistData: ConcertArtistData | FestivalArtistData;
}

const ArtistSection = ({ type, artistData }: ArtistListProps) => {
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({});

  const toggleExpand = (dayId: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayId]: !prev[dayId],
    }));
  };

  if (type === 'concert') {
    const { isOpen, concertArtists } = artistData as ConcertArtistData;
    const isExpanded = expandedDays[CONCERT_DEFAULT_ID] || false;

    return (
      <section className={styles.artistSection}>
        <div className={styles.daySection}>
          <ArtistGrid
            artists={concertArtists.slice(0, MAX_VISIBLE_ARTISTS)}
            dayId={CONCERT_DEFAULT_ID}
            type="visible"
          />
        </div>
        <ExpandedSection
          isOpen={isOpen}
          isExpanded={isExpanded}
          artists={concertArtists}
          dayId={CONCERT_DEFAULT_ID}
          toggleExpand={toggleExpand}
        />
      </section>
    );
  }

  const { festivalDates } = artistData as FestivalArtistData;

  return (
    <div className={styles.dayGroups}>
      {festivalDates.map((day) => {
        const isExpanded = expandedDays[day.festivalDateId] || false;

        return (
          <div key={day.festivalDateId} className={styles.dayGroup}>
            <div className={styles.daySection}>
              <h3 className={styles.dayTitle}>{day.festivalAt}</h3>
              <ArtistGrid
                artists={day.artists.slice(0, MAX_VISIBLE_ARTISTS)}
                dayId={day.festivalDateId}
                type="visible"
              />
            </div>
            <ExpandedSection
              isOpen={day.isOpen}
              isExpanded={isExpanded}
              artists={day.artists}
              dayId={day.festivalDateId}
              toggleExpand={toggleExpand}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArtistSection;
