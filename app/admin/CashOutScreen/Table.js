'use client';

/***
 **  Table Component used to display item data fetched from Firestore DB
 **/

import React from 'react';

//*** Table Function ***//
function Table({
  tableTitles,
  tableData,
  setModData,
  selectedRow,
  setSelectedRow,
  type,
}) {
  function handleSelect(e, index) {
    const row = e.target.closest('tr');
    const rowData = Array.from(row.children)
      .slice(1)
      .map((cell) => cell.innerText);
    console.log({ rowData });
    setModData(rowData);
    setSelectedRow(index);

    // Unselect after 10 seconds
    setTimeout(() => {
      setSelectedRow(null);
    }, 10000);
  }

  // Return message if no data is available
  if (!Array.isArray(tableData) || tableData.length === 0) {
    return <div>No data to display</div>;
  }

  if (type === 1) {
    return (
      <div className='flex flex-col gap-8  h-full w-full min-w-96 rounded-lg  overflow-x-auto  items-center flex-wrap '>
        <div>
          {/* Table */}
          <table className='table table-xs table-pin-rows table-pin-cols  bg-zinc-500 bg-opacity-65 w-full'>
            {/* head */}
            <thead>
              <tr>
                {tableTitles.map((title, index) => (
                  <th
                    key={index}
                    className='text-center bg-zinc-700  text-orange-400 font-semibold sm:text-xs lg:text-lg'>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row Data */}
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`hover:bg-orange-600 hover:bg-opacity-55  ${
                    selectedRow === index
                      ? 'bg-orange-400 bg-opacity-75 text-orange-600'
                      : ''
                  }`}>
                  <td>
                    <input
                      type='checkbox'
                      className='checkbox hover:border-white hover:border-2'
                      checked={selectedRow === index}
                      onChange={(e) => handleSelect(e, index)}
                    />
                  </td>
                  {data.map((item, colIndex) => (
                    <td
                      onClick={(e) => handleSelect(e, index)}
                      key={colIndex}
                      className='text-white  text-center'>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-8  h-full w-full min-w-96 rounded-lg  overflow-x-auto  items-center flex-wrap '>
        <div>
          {/* Table */}
          <table className='table table-xs table-pin-rows table-pin-cols  bg-zinc-500 bg-opacity-65 w-full'>
            {/* head */}
            <thead>
              <tr>
                {tableTitles.map((title, index) => (
                  <th
                    key={index}
                    className='text-center bg-zinc-700 bg-opacity-65 text-orange-400 sm:text-xs lg:text-lg'>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row Data */}
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`hover:bg-orange-600 hover:bg-opacity-55  ${
                    selectedRow === index
                      ? 'bg-orange-600 text-orange-600  '
                      : ''
                  }`}>
                  {data.map((item, colIndex) => (
                    <td
                      onClick={(e) => handleSelect(e, index)}
                      key={colIndex}
                      className='text-white  text-center'>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
