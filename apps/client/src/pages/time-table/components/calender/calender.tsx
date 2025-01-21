import { cn } from '@confeti/design-system/utils';
import {
  useFormattedYear,
  useFormattedWeek,
  useDayNumSelection,
  createFestivalDateMap,
  checkFestivalDateStatus,
} from '@pages/time-table/hooks/use-data-formatted';
import * as styles from './calender.css';

interface CalenderProps {
  festivalDates: { festivalDateId: number; festivalAt: string }[];
}

const Calender = ({ festivalDates }: CalenderProps) => {
  const firstDate = festivalDates?.[0]?.festivalAt || '';
  const { weekDays } = useFormattedWeek(firstDate);
  const festivalDateMap = createFestivalDateMap(festivalDates || []);
  const { selectedDayNumId, handleDayNumClick } = useDayNumSelection(
    festivalDates || [],
  );
  const formattedYear = useFormattedYear(firstDate);

  if (!festivalDates || festivalDates.length === 0) {
    return (
      <section className={styles.noDataContainer}>
        <div className={styles.yearSection}>
          <p>{formattedYear}</p>
        </div>
        <div className={styles.dateSection}></div>
      </section>
    );
  }

  const dateDetails = weekDays.map((day, id) => ({
    ...day,
    ...checkFestivalDateStatus(festivalDateMap, id, selectedDayNumId),
  }));

  return (
    <section className={styles.container}>
      <div className={styles.yearSection}>
        <p>{formattedYear}</p>
      </div>
      <div className={styles.dateSection}>
        {dateDetails.map(
          ({ date, dayKo, festivalDateId, isSelected, hasFestivalDate }) => (
            <div className={styles.dateItems} key={date}>
              <p
                className={cn(styles.dayNum({ isSelected, hasFestivalDate }))}
                onClick={() =>
                  festivalDateId && handleDayNumClick(festivalDateId)
                }
              >
                {date}
              </p>
              <p
                className={cn(styles.dayKo({ hasFestivalDate }))}
                onClick={() =>
                  festivalDateId && handleDayNumClick(festivalDateId)
                }
              >
                {dayKo}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Calender;
