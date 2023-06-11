import React from "react";

const LoadMore = ({ filteredItems, displayCount, setDisplayCount }) => {
  const handleLoadMore = () => {
    setDisplayCount((prevCount) => {
      if (prevCount + 6 >= filteredItems.length) {
        return filteredItems.length;
      } else {
        return prevCount + 6;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10 xl:pt-10">
      <p className="xl:text-[22px]">
        SHOWING: {filteredItems.slice(0, displayCount).length} OF{" "}
        {filteredItems.length} RESULTS
      </p>
      {displayCount < filteredItems.length && (
        <button
          className="load-more-button flex items-center text-sm font-semibold hover:text-LightRed xl:text-[15px]"
          onClick={handleLoadMore}
        >
          <div className="load-more-icon" />
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
