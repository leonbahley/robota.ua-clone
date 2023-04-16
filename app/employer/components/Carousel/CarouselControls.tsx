import { MdOutlineNavigateNext } from "react-icons/md";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div
      className="hidden lg:flex container mx-auto justify-between -mt-[307px] 
    mb-[237px] "
    >
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className="  rotate-180"
      >
        <MdOutlineNavigateNext color="#ff5252" size={40} />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
      >
        <MdOutlineNavigateNext color="#ff5252" size={40} />
      </button>
    </div>
  );
};
export default CarouselControls;
