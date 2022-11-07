import type { NextPage } from 'next'
import Head from 'next/head'
import { GridCards } from './components/main/GridCards';




export default function Home(){
  return (
   <>
      
        <Head>
          <title>pinterest  clone</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <GridCards />
 </>
  );

};
