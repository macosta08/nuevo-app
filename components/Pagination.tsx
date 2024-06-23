import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
// import { Button } from '@components/StyledComponents';

interface PaginationInterface {
  itemsPerPage?: number;
  itemsCount: number;
  setData: any;
  GQL_QUERY: any;
  data: any;
  setLoading: any;
  whereInput?: object;
  orderByInput: any;
  byInput?: any;
}

function Pagination({
  itemsPerPage = 10,
  itemsCount,
  setData,
  GQL_QUERY,
  data,
  setLoading,
  whereInput = {},
  orderByInput = null,
  byInput = [],
}: PaginationInterface) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [skipValue, setSkipValue] = useState(null);

  const [getQuotations, { data: quotationData, loading: loadingPage }] =
    useLazyQuery(GQL_QUERY, {
      variables: {
        by: byInput,
        where: whereInput,
        orderBy: orderByInput,
        take: itemsPerPage,
        skip: skipValue,
      },
      fetchPolicy: 'cache-and-network',
    });

  useEffect(() => {
    setLoading(loadingPage);
  }, [loadingPage]);

  useEffect(() => {
    if (quotationData) {
      setData(quotationData);
    } else {
      setData(data);
    }
  }, [quotationData]);

  useEffect(() => {
    const pg = [];

    const totalPages = Math.ceil(itemsCount / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
    if (totalPages > 50) {
      const pages = totalPages > 50 ? currentPage + 50 : totalPages;
      const start = currentPage > 50 ? currentPage - 50 : 1;
      for (let i = start; i <= pages; i += 1) {
        pg.push(i);
      }
    } else {
      for (let i = 1; i <= totalPages; i += 1) {
        pg.push(i);
      }
    }

    setPageNumbers(pg);
  }, [itemsCount, itemsPerPage, currentPage]);

  const handlePaginate = (number) => {
    setCurrentPage(number);
  };

  const handleNextPage = () => {
    if (currentPage === pageNumbers[pageNumbers.length - 1]) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleBeforePage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setSkipValue(itemsPerPage * (currentPage - 1));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (skipValue) {
      getQuotations();
    }
  }, [skipValue]);

  return (
    <div className='mx-auto flex w-full items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6'>
      {/* <div className='flex flex-1 justify-between  sm:hidden'>
        <Button
          type='button'
          onClick={handleBeforePage}
          extraClassName='relative inline-flex items-center px-4 py-2'
          priority='primary'
          size='small'
        >
          Anterior
        </Button>
        <Button
          type='button'
          onClick={handleNextPage}
          extraClassName='ml-3 relative inline-flex items-center px-4 py-2'
          priority='primary'
          size='small'
        >
          Siguiente
        </Button>
      </div> */}
      <div className='flex flex-1 flex-row items-center justify-center '>
        <nav
          className='flex w-1/2 flex-row items-center justify-center rounded-md shadow-sm'
          aria-label='Pagination'
        >
          <button
            type='button'
            onClick={handleBeforePage}
            className='relative inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black-300  hover:bg-purple-3000 hover:text-white'
          >
            <span className='sr-only'>Previous</span>
            <i className='fas fa-chevron-left' />
          </button>
          <div className='max-w-xl overflow-hidden'>
            <div className=' flex  flex-row overflow-x-auto'>
              {pageNumbers.map((number) => (
                <button
                  type='button'
                  onClick={() => handlePaginate(number)}
                  key={number}
                  className={`${
                    currentPage === number
                      ? ' bg-purple-3000'
                      : ' bg-white text-black-300'
                  }  relative inline-flex   items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-black-300 hover:bg-gray-50 hover:text-black-300 focus:outline-none `}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
          <button
            type='button'
            onClick={handleNextPage}
            className='relative inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black-300  hover:bg-purple-3000 hover:text-white'
          >
            <span className='sr-only'>Next</span>
            <i className='fas fa-chevron-right' />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
