import React, { ReactNode } from 'react';

interface PostsItem {
  UserName: string;
  Avatar: string;
  image: string;
  ServiceName?: string;
  location?: string;
  phone?: string;
  children?: ReactNode;
}

const PostsItem: React.FC<PostsItem> = ({
  UserName,
  Avatar,
  ServiceName,
  image,
  location,
  phone,
  children,
  
}) => {
  return (
 <div className="max-w-sm w-full mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col items-center dark:bg-black dark:text-white" >
    <img src={image} alt="Card Image" className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-4 w-full">
        <div className=" flex flex-col items-center mb-4">
            <img src={Avatar} alt="Avatar" className="w-12 h-12 rounded-full object-cover mb-2" loading="lazy" />
            <h2 className="text-lg font-medium text-gray-900 text-center">{UserName}</h2>
        </div>
        <div className="mb-4 text-center">
            <h4 className="text-md font-semibold text-gray-800">Service: {ServiceName}</h4>
            <p className="text-gray-700"></p>
        </div>
        <div className="text-center">
            <h4 className="text-md font-semibold text-gray-800">Location: {" "+location}</h4>
        </div>
        <div className="text-center">
            <h4 className="text-md font-semibold text-gray-800">Phone: {" "+phone}</h4>
        </div>
    </div>
    {children}
</div> 


  );
};

export default PostsItem;



