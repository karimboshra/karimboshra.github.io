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
		  
          <h4 className='textleft bottomBorder'>Artificial Intelligence</h4>
		  <p className='textleft'>This project is a real-time renderer using OpenGL. It is a simulation of a solar system (not
up to scale nor based on any real-life solar system). A solar system is composed of a set of
planets (spheres) that orbit around an object in the center (a sun or a planet). The
simulation runs in real-time, showing the movement of the planets around an orbit.

This OpenGL project lays the foundations for basic shading and general movement of
objects and the camera. The functions from this project may be used for the creation of a
simple computer game in the future.</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Artificial Intelligence</h4>
		  <p className='textleft'>This project is a real-time renderer using OpenGL. It is a simulation of a solar system (not
up to scale nor based on any real-life solar system). A solar system is composed of a set of
planets (spheres) that orbit around an object in the center (a sun or a planet). The
simulation runs in real-time, showing the movement of the planets around an orbit.

This OpenGL project lays the foundations for basic shading and general movement of
objects and the camera. The functions from this project may be used for the creation of a
simple computer game in the future.</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  
		  <h4 className='textleft bottomBorder'>Difficulties and Tricks</h4>
		  <p className='textleft'><b>Sphere rendering:<br></br></b>
		  I ignorantly assumed that rendering spheres in OpenGL would be as easy as calling a function with the sphere&rsquo;s center and desired radius. Apparently, that is not the case if you are not using a library such as GLut. Luckily, I found online resources that describe how a sphere can be split into triangles and the math that generates its vertices, normals, texture coordinates, and indices.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Background:</b><br></br>
		  Since outer space is supposed to be infinitely big and visible from all angles in three-dimensional space, having a static square background would ruin the immersion. A simple solution to this is to wrap the solar system with a sphere that has a space or stars texture on its inside face.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Matrices, vectors, and 3D space:</b><br></br>
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