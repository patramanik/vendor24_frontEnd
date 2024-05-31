import React from 'react'
import HomeLayout from '../../layout/HomeLayout';
import PostsItem from '../../components/CardItems/PostsItem';
import Card from '../../components/CardItems/Card';
import SearchComponent from '../../components/SerchBer/SearchComponent';
import Carousel from '../../components/Carousel/Carousel';
import CarouselItemCard from '../../components/CardItems/CarouselItemCard';
import CarouselHed from '../../components/Carousel/CarouselHed';
// import Popup from '../../components/Popup/Popup';


const items = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Carousel image 1',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Carousel image 2',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Carousel image 3',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/11580455/pexels-photo-11580455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Carousel image 4',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/448877/pexels-photo-448877.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    alt: 'Carousel image 5',
  },
];

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <SearchComponent />
      
      {/* <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2> */}
      <CarouselHed items={items} />
      <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2>

      <div className="grid  grid-cols-2 gap-2 md:grid-cols-4 md:gap-2 xl:grid-cols-6 2xl:gap-2 ">
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>
        <Card title='Tuter' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg'></Card>

      </div>
      {/* grid-cols-2 gap-2 md:grid-cols-4 md:gap-2 xl:grid-cols-6 2xl:gap-2 */}
      <h2 className="text-md my-8 font-bold text-gray-800 dark:text-white">Categorys</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
        <PostsItem UserName='Manik Patra' image='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' Avatar='https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg' ServiceName='Web dev' location='Belda' phone='895458415' ></PostsItem>
      </div>
        {/* <Carousel>
        <CarouselItemCard image='https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></CarouselItemCard>
        <CarouselItemCard image='https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></CarouselItemCard>
        <CarouselItemCard image='https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></CarouselItemCard>
        </Carousel> */}
      {/* <PopupMenu></PopupMenu> */}
    </HomeLayout>
  )
}

export default Home