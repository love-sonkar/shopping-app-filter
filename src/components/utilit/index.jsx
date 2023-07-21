import { AiFillStar } from "react-icons/ai";

export const SpanFastDelivery = ({ fastdelivery }) => {
  return (
    <h2 className="text-lg">
      Fast Delivery :
      <span className={`${fastdelivery ? "text-green-500" : "text-red-500"}`}>
        {fastdelivery ? " Yes" : " No"}
      </span>
    </h2>
  );
};

export const RatingComponent = ({ rating }) => {
  const RatingList = rating == 0 ? 1 : rating;
  return (
    <h2 className="text-lg flex items-center gap-1">
      Rating :
      {[...Array(RatingList)].map((_, index) => {
        return (
          <span className="text-yellow-600 mt-1" key={index}>
            <AiFillStar />
          </span>
        );
      })}
    </h2>
  );
};

export const Button = ({ title, className }) => {
  return (
    <button
      className={`${className} border-none outline-none py-2 px-3 text-lg text-white rounded-md w-full  bg-yellow-600 `}
    >
      {title}
    </button>
  );
};

// concatination function
export const ConcatinationString = (string, n) => {
  return string.length > n ? string.substr(0, n - 1) + "..." : string;
};
