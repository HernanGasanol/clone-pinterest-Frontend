import React from 'react'
import fakeData from '../../../fakeData'
import Card from './Card'

export const GridCards = () => {
  return (
    <div className=" columns-2  sm:columns-2  md:columns-3  lg:columns-4   sm:px-14 mx-auto ">
      {fakeData && fakeData.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
}
