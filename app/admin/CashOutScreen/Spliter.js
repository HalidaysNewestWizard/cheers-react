import React from 'react';
function Spliter({ children, title, title2 }) {
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const secondChild = childrenArray[1];

  return (
    <div className='flex  h-full w-full justify-center items-center overflow-y-auto '>
      <div className='card lg:card-side  rounded-box grid h-full  flex-grow place-items-center  '>
        <h1 className='text-xl font-extrabold text-orange-500'>{title}</h1>
        {firstChild}
      </div>
      {secondChild && (
        <>
          <div className='divider divider-horizontal '></div>

          <div className='card lg:card-side bg-opacity-0 rounded-box grid h-full w-full   p-5 '>
            <h1 className='text-xl font-extrabold text-orange-500'>{title2}</h1>
            {secondChild}
          </div>
        </>
      )}
    </div>
  );
}

export default Spliter;
