import Slider from "react-slick";
import { productProps } from "@/store/collection-store";
import Cards from "../cards";

type sliderProps = {
  title: string;
  subtitle: string;
  posterData: productProps[];
};

const PosterSlider = (props: sliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3 className="text-2xl font-bold ">{props.title}</h3>
        <p className="text-sm ">{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.posterData.map((each, index) => (
          <Cards {...each} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
