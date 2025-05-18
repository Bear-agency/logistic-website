import React, { useState } from 'react';
import * as styles from './styles';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      onClick={() => goToPage(page)}
      style={currentPage === page ? styles.activePageButtonStyle : styles.pageButtonStyle}
    >
      {page}
    </button>
  );

  const renderEllipsis = (key) => (
    <span key={key} style={styles.ellipsisStyle}>...</span>
  );

  const renderPageButtons = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      if (currentPage <= 3) {
        pages.push(renderPageButton(1));
        pages.push(renderPageButton(2));
        pages.push(renderPageButton(3));
        pages.push(renderEllipsis('e1'));
        pages.push(renderPageButton(totalPages - 1));
        pages.push(renderPageButton(totalPages));
      } else if (currentPage >= totalPages - 2) {
        pages.push(renderPageButton(1));
        pages.push(renderPageButton(2));
        pages.push(renderEllipsis('e2'));
        pages.push(renderPageButton(totalPages - 2));
        pages.push(renderPageButton(totalPages - 1));
        pages.push(renderPageButton(totalPages));
      } else {
        pages.push(renderPageButton(1));
        pages.push(renderEllipsis('e3'));
        pages.push(renderPageButton(currentPage - 1));
        pages.push(renderPageButton(currentPage));
        pages.push(renderPageButton(currentPage + 1));
        pages.push(renderEllipsis('e4'));
        pages.push(renderPageButton(totalPages));
      }
    }

    return pages;
  };

  return (
    <div style={styles.containerStyle}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        style={currentPage === 1 ? styles.navButtonDisabledStyle : styles.navButtonStyle}
        disabled={currentPage === 1}
      >
        ← Назад
      </button>

      <div style={styles.pagesWrapperStyle}>
        {renderPageButtons()}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        style={currentPage === totalPages ? styles.navButtonDisabledStyle : styles.navButtonStyle}
        disabled={currentPage === totalPages}
      >
        Дальше →
      </button>
    </div>
  );
};

export default Pagination;
