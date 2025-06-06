import React from 'react';

function VSpliter({ children }) {
  let childrenArray = React.Children.toArray(children);
  let firstChild = childrenArray[0] || null;
  let secondChild = childrenArray[1] || null;

  return (
    <div className='flex w-full flex-col border-opacity-50   '>
      <div
        key='first'
        className='card   rounded-box grid flex-auto h-full place-items-start'>
        {firstChild}
      </div>
      <div
        key='divider'
        className='divider divider-warning'></div>
      <div
        key='second'
        className='card   rounded-box grid flex-auto h-full place-items-start min-w-fit'>
        {secondChild}
      </div>
    </div>
  );
}

export default VSpliter;
