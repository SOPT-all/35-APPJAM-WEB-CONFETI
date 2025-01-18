import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';
import './dots.css';
import './performance-carousel.css';

interface PerformData {
  performanceId: number;
  type: string;
  title: string;
  subTitle: string;
  performanceAt: string;
  posterUrl: string;
}

interface DataProps {
  performData: PerformData[];
}

const PerformanceCarousel = ({ performData }: DataProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentId, setCurrentId] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current?.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  // 197 262
  const settings = {
    ref: sliderRef,
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '89px',
    slidesToShow: 1,
    sliceToScroll: 1,
    arrows: false,
    speed: 1000,
    cssEase: 'ease-in-out',
    initialSlide: 3,
    beforeChange: (newIndex: number) => {
      setCurrentId(newIndex);
    },

    appendDots: (dots: string) => (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyItems: 'center',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.6rem 0',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  };

  return (
    <>
      <div className="banner-title">
        <p className="title-date">{performData[currentId]?.performanceAt} </p>
        <p className="title-name">{performData[currentId]?.title}</p>
        <p className="title-sub">{performData[currentId]?.subTitle}</p>
      </div>
      <Slider {...settings}>
        {performData.map((item) => (
          <img
            className="card"
            key={item.performanceId}
            src={item.posterUrl}
          ></img>
        ))}
      </Slider>
    </>
  );
};

export default PerformanceCarousel;
