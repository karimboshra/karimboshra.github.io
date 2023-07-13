import React, { Fragment } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { links, SEO, navigation } from '../config/config';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="py-5 px-5 container text-center">
		
          <img className=""  src="resume/profile.png" alt="Logo" />
          <h3 className="mt-3">Python Projects</h3>
          <p className="flex-start">Artificial Intelligence and Automation</p>
		  
		  
		  <h4 className='textleft bottomBorder'>Artifical Intelligence</h4>
		  <p className='textleft'><b>Document Classification:<br></br></b>
		  I ignorantly assumed that rendering spheres in OpenGL would be as easy as calling a function with the sphere&rsquo;s center and desired radius. Apparently, that is not the case if you are not using a library such as GLut. Luckily, I found online resources that describe how a sphere can be split into triangles and the math that generates its vertices, normals, texture coordinates, and indices.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Tic-tac-toe Player:</b><br></br>
		  Since outer space is supposed to be infinitely big and visible from all angles in three-dimensional space, having a static square background would ruin the immersion. A simple solution to this is to wrap the solar system with a sphere that has a space or stars texture on its inside face.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Twitter Scraper:</b><br></br>
		  Almost all the objectives mentioned above relate directly to movement and placement in three-dimensional space. A proper separation and abstraction of the vectors and matrices involved, such as view, project, and model matrices, was very important. All relevant positions and movements relating to the camera and the spheres were put into their own classes.
		  </p>
		  <p className='textleft'></p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

		  
		  <h4 className='textleft bottomBorder'>Automation</h4>
		  <p className='textleft'><b>Facebook Marketplace Advertisement Bot:<br></br></b>
		  I ignorantly assumed that rendering spheres in OpenGL would be as easy as calling a function with the sphere&rsquo;s center and desired radius. Apparently, that is not the case if you are not using a library such as GLut. Luckily, I found online resources that describe how a sphere can be split into triangles and the math that generates its vertices, normals, texture coordinates, and indices.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Inventory Management - Excel sheet analysis:</b><br></br>
		  Since outer space is supposed to be infinitely big and visible from all angles in three-dimensional space, having a static square background would ruin the immersion. A simple solution to this is to wrap the solar system with a sphere that has a space or stars texture on its inside face.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Phone Number to Alpha Characters</b><br></br>
		  Almost all the objectives mentioned above relate directly to movement and placement in three-dimensional space. A proper separation and abstraction of the vectors and matrices involved, such as view, project, and model matrices, was very important. All relevant positions and movements relating to the camera and the spheres were put into their own classes.
		  </p>
		  <p className='textleft'></p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}