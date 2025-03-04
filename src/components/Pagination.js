import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Button, Pagination } from "react-bootstrap";

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
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
    <div className="d-flex justify-content-between mt-3 mb-3">
    <Button variant="dark" className='ms-4' style={{ background: "#243445" }}>&laquo; NEXT PREV</Button>
    <Pagination>
      <Pagination.Item active style={{ background:'#243445'  }}>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
    </Pagination>
    <Button variant="dark" className='me-4' style={{ background: "#243445" }}>NEXT PAGE &raquo;</Button>
  </div>
  );
}
