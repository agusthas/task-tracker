import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-blue-main flex flex-col justify-center items-center">
      <div className="!loader rounded-full border-t-4 animate-spin border-4 border-gray-200 h-20 w-20"></div>
      <h2 className="mt-6 text-center text-gray-200 text-xl font-semibold">
        Please wait while we setup your task list
      </h2>
    </div>
  );
};

export default Loading;
