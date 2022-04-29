import GalleryView from './GalleryView'
import React from 'react'

const PHOTOS = [
  {
    image: "./photos/20th.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 23mm f/1.4",
    date: "3/11/2022",
    location: "Ballard, Seattle, WA",
  },
  {
    image: "./photos/apartment.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Kalimar FD 135mm f/2.8",
    date: "3/11/2022",
    location: "Ballard, Seattle, WA",
  },
  {
    image: "./photos/bar.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 35mm f/1.4",
    date: "3/11/2022",
    location: "Ballard, Seattle, WA",
  },
  {
    image: "./photos/cherry.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 35mm f/1.4",
    date: "3/11/2022",
    location: "Queen Anne, Seattle, WA",
  },
  {
    image: "./photos/clouds.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Kalimar FD 135mm f/2.8",
    date: "3/11/2022",
    location: "Fremont, Seattle, WA",
  },
  {
    image: "./photos/rachel.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 35mm f/1.4",
    date: "3/11/2022",
    location: "Ballard, Seattle, WA",
  },
  {
    image: "./photos/kerry.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 35mm f/1.4",
    date: "3/11/2022",
    location: "Queen Anne, Seattle, WA",
  },
  {
    image: "./photos/sign.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Fujifilm 35mm f/1.4",
    date: "3/11/2022",
    location: "Frelard, Seattle, WA",
  },
  {
    image: "./photos/DSCF6786.jpg",
    camera: "Fujifilm X-Pro2",
    lens: "Kalimar FD 135mm f/2.8",
    date: "3/11/2022",
    location: "Fremont, Seattle, WA",
  },
  {
    image: "./photos/yosemite.jpg",
    camera: "Sony A7 III",
    lens: "Sigma Art 35mm f/1.4",
    date: "3/20/2021",
    location: "Fremont, Seattle, WA",
  },
];

const Gallery = () => {
  return (
    <GalleryView view={PHOTOS}/>
  )
}

export default Gallery;


