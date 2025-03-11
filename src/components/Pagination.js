import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { Button, Pagination } from "react-bootstrap";

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="d-flex justify-content-between mt-3 mb-3">
      <Button variant="dark" className='ms-4' style={{ background: "#243445", height:"45px" }} onClick={handlePrev} disabled={currentPage === 1}>
        &laquo; NEXT PREV
      </Button>
      <Pagination>
        <Pagination.Item active={currentPage === 1} style={currentPage === 1 ? { background:'#243445' } : {}} onClick={() => handlePageClick(1)}>{1}</Pagination.Item>
        <Pagination.Item active={currentPage === 2} onClick={() => handlePageClick(2)}>{2}</Pagination.Item>
        <Pagination.Item active={currentPage === 3} onClick={() => handlePageClick(3)}>{3}</Pagination.Item>
        <Pagination.Item active={currentPage === 4} onClick={() => handlePageClick(4)}>{4}</Pagination.Item>
        <Pagination.Item active={currentPage === 5} onClick={() => handlePageClick(5)}>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item active={currentPage === 10} onClick={() => handlePageClick(10)}>{10}</Pagination.Item>
      </Pagination>
      <Button variant="dark" className='me-4' style={{ background: "#243445", height:"45px" }} onClick={handleNext} disabled={currentPage === totalPages}>
        NEXT PAGE &raquo;
      </Button>
    </div>
  );
}



// <nav className='d-flex justify-content-evenly'>
    //   <List>
    //     {items.map(({ page, type, selected, ...item }, index) => {
    //       let children = null;

    //       if (type === 'start-ellipsis' || type === 'end-ellipsis') {
    //         children = '…';
    //       } else if (type === 'page') {
    //         children = (
    //           <button
    //             type="button"
    //             style={{
    //               fontWeight: selected ? 'bold' : undefined,
    //             }}
    //             {...item}
    //           >
    //             {page}
    //           </button>
    //         );
    //       } else {
    //         children = (
    //           <button type="button" {...item}>
    //             {type}
    //           </button>
    //         );
    //       }

    //       return <li key={index}>{children}</li>;
    //     })}
    //   </List>
    // </nav>