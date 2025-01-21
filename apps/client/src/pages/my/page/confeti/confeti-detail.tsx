import { FestivalCard, Header } from '@confeti/design-system';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PERFORMANCE_QUERY_OPTIONS } from '@shared/apis/my-confeti';
import { PERFORMANCE_DATA } from '@shared/mocks/performance-data';
import * as styles from './confeti-detail.css';

const ConfetiMore = () => {
  const { data } = useSuspenseQuery(PERFORMANCE_QUERY_OPTIONS.ALL());

  const allPerformances = [
    ...data.performances,
    ...PERFORMANCE_DATA.data.performances.slice(3),
  ];

  return (
    <>
      <Header variant="detail" title="My Confeti" />
      <div className={styles.container}>
        {allPerformances.map((performance) => (
          <FestivalCard
            key={performance.performanceId}
            id={performance.performanceId}
            type={performance.type}
            title={performance.title}
            imageSrc={performance.posterUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ConfetiMore;
