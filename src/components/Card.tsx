import React, { ReactNode } from 'react';

interface Card {
    title: string;
    location?: string;
    phone?: string;
    children: ReactNode;
}

const Card: React.FC<Card> = ({
    title,
    location,
    phone,
    children,
}) => {
    return (
 <div className=" flex-auto rounded-sm border  border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
  <div className="flex-none w-56 relative">
    {children}
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto font-medium text-slate-900">
        {title}
      </h1>
      <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
        {location}
      </div>
    </div>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
        {phone}
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
  </form>
</div>
    );
};

export default Card;
