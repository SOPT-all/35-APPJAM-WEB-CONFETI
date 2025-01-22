import { ArtistCard } from '@confeti/design-system';
import { useMyArtist } from '@pages/my/hooks/use-my-artist';
import * as styles from './artist-section.css';

const ArtistSection = () => {
  const { data: artistData } = useMyArtist();
  return (
    <div className={styles.container}>
      {artistData?.artists.map((artist) => (
        <ArtistCard
          key={artist.artistId}
          artistId={artist.artistId}
          title={artist.name}
          imageSrc={artist.profileUrl}
          size="lg"
        />
      ))}
    </div>
  );
};

export default ArtistSection;
