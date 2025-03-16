function LoadingPg() {
  return (
    <div className=' flex h-screen w-full bg-[url(/images/loader.jpg)] bg-contain bg-no-repeat bg-center  justify-center  items-center'>
      <div className='flex flex-col justify-center items-center bg-white rounded-xl '>
        <span className='loading loading-spinner text-purple-900 '></span>
      </div>
    </div>
  );
}

export default LoadingPg;
