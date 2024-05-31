import React from 'react'
import HomeLayout from '../../layout/HomeLayout';
import PostsItem from '../../components/CardItems/PostsItem';
import Card from '../../components/CardItems/Card';
import SearchComponent from '../../components/SerchBer/SearchComponent';



const Home: React.FC = () => {
  return (
    <HomeLayout>
      <SearchComponent/>
      <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
      <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
      </div>
      <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
      </div>
      <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
      </div>
    </HomeLayout>
  )
}

export default Home