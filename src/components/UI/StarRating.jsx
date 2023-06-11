import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating({ stars, count }) {
  const fullStars = Array(stars)
    .fill()
    .map((_, index) => (
      <FontAwesomeIcon
        key={`full-star-${index}`}
        icon={faStar}
        className="text-Gold text-sm"
      />
    ));
  const emptyStars = Array(5 - stars)
    .fill()
    .map((_, index) => (
      <FontAwesomeIcon
        key={`empty-star-${index}`}
        icon={faStar}
        className="text-Gold text-sm opacity-50"
      />
    ));

  return (
    <div className="flex items-center xxs:gap-5 xl:gap-2">
      <div className="flex gap-1">
        {fullStars}
        {emptyStars}
      </div>
      <span className="text-[13px] opacity-80">({count})</span>
    </div>
  );
}

export default StarRating;
