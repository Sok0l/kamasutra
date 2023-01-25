import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => {
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
    </div>
  );
};

export default Paginator;
