"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface ArticleNavigationProps {
  id: string;
}

export default function ArticleNavigation({ id }: ArticleNavigationProps) {
  function handlePreviousArticle() {
    // Handle next article
  }

  function handleNextArticle() {
    // Handle next article
  }

  return (
    <div className="border-t border-b px-10 py-10 flex justify-between text-[#1e2d7d]">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handlePreviousArticle}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
        Previous article
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleNextArticle}
      >
        Next article
        <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
      </div>
    </div>
  );
}
