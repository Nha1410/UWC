import { useCallback, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button2({ content, onClick, active, disabled }) {
    return (
        <button
            className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? 'bg-[#605CFF] text-white' : 'text-[#605CFF] bg-white'}
      `}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

function PaginationNav1({ gotoPage, canPreviousPage, canNextPage, pageCount, pageIndex }) {
    const renderPageLinks = useCallback(() => {
        if (pageCount === 0) return null;
        const visiblePageButtonCount = 3;
        let numberOfButtons = pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
        const pageIndices = [pageIndex];
        numberOfButtons--;
        [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
            const pageNumberBefore = pageIndices[0] - 1;
            const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
            if (pageNumberBefore >= 0 && (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)) {
                pageIndices.unshift(pageNumberBefore);
            } else {
                pageIndices.push(pageNumberAfter);
            }
        });
        return pageIndices.map((pageIndexToMap) => (
            <li key={pageIndexToMap}>
                <Button2
                    content={pageIndexToMap + 1}
                    onClick={() => gotoPage(pageIndexToMap)}
                    active={pageIndex === pageIndexToMap}
                />
            </li>
        ));
    }, [pageCount, pageIndex]);
    return (
        <ul className="flex gap-2">
            <li>
                <Button2
                    content={
                        <div className="flex ml-1">
                            <div className="flex ml-1">
                                <FontAwesomeIcon icon={faChevronLeft} className="ml-[5px]" />
                                <FontAwesomeIcon icon={faChevronLeft} className="mr-[5px] -translate-x-1/2" />
                            </div>
                        </div>
                    }
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                />
            </li>
            {renderPageLinks()}
            <li>
                <Button2
                    content={
                        <div className="flex ml-1">
                            <FontAwesomeIcon icon={faChevronRight} className="ml-[5px]" />
                            <FontAwesomeIcon icon={faChevronRight} className="mr-[5px] -translate-x-1/2" />
                        </div>
                    }
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                />
            </li>
        </ul>
    );
}

export { PaginationNav1 };
