import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  portionSize = 15,
  currentPage,
  onPageChanged,
}) => {
  let pageCount = Math.ceil(totalItemsCount / portionSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(totalItemsCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionSize * portionNumber;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          left
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((page) => {
          return (
            <span
              onClick={(e) => {
                onPageChanged(page);
              }}
              className={currentPage === page ? s.selectedPage : s.pages}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          right
        </button>
      )}
    </div>
  );
};

export default Paginator;
