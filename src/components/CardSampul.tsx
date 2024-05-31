import React from 'react';

const Card: React.FC = ({

}) => {
  return (
        <div className="flex flex-wrap rounded-xl m-4 bg-white dark:bg-black text-black dark:text-white shadow-2xl w-48">
           <div className="p-4 w-54 ">
            <a className="block relative h-40 w-40 rounded-full shadow-xl overflow-hidden ">
              <img src="" alt="Category" className="object-cover object-center w-full h-full block" loading="lazy" />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
            </div>
          </div>
        </div>
  );
};

export default Card;
