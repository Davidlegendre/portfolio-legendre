import './css/Carousel.class.css'
export const renderCenterLeftControls = ({
    previousDisabled,
    previousSlide,
  }:any) => (
    <button className={previousDisabled?"btn-carousel btn-carousel-disable": "btn-carousel"}
      disabled={previousDisabled}
      onClick={previousSlide}
      aria-label="Go to previous slide"
    >
      <span className="icon">&#xE00E;</span>
    </button>
  );
  
  export const renderCenterRightControls = ({ nextDisabled, nextSlide }:any) => (
    <button className={nextDisabled?"btn-carousel btn-carousel-disable": "btn-carousel"}
      disabled={nextDisabled}
      onClick={nextSlide}
      aria-label="Go to next slide"
    >
      <span className="icon">&#xE00F;</span>
    </button>
  );