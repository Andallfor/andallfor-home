import { createRoot } from 'react-dom/client'
import '/index.css'
import React from 'react'
import BlogHome from './home';
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';
import PostEntry from './post';

const root = createRoot(document.getElementById('root')!);
root.render(
    <>
        <Navigation />
        <BlogHome />
        <div className='h-16 md:h-48'/>
        <PostEntry data={{
            abstract: "",
            title: "I Want to Die but I Want to Eat Tteokbokki",
            type: "book",
            image: "/blog/tteokbokki.jpg",
            redirect: "/blog/tteokbokki/"
        }}/>
        <Footer />
    </>
);