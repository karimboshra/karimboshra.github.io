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
		
          <img className="" width="150" height="150" src="exodus/logo.png" alt="Game Logo" />
          <h3 className="mt-3">Exodus</h3>
          <p className="flex-start">A 2.5D randomly generated Dungeon Crawler made in Unity</p>
		  
          <h4 className='textleft bottomBorder'>Description</h4>
		  <p className='textleft'>Exodus is a game that I developed in a team of three for a university course.
		  It is a 2.5D fast-paced dungeon crawler made in Unity with C#. It encompasses all of the programming elements that make up a full game.
		  This project is still a work in progress. The main aspects of the game that I am working on currently are:<br></br>
		  - Switching to 3D characters<br></br>
		  - Procedural dungeon generation<br></br>
		  - Complex enemy formations and behaviors<br></br>
		  - Looting system<br></br>
		  - Major envrionment overhaul</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Download</h4>
		  <a href="https://drive.google.com/file/d/1FwnKVxsVJezBOQOXXfN9t4_TLQEqXy9h/view?usp=sharing" className='textleft'>
			<img src="download.png" width="100" height="100" alt="Dpwnload"/>
		  </a>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Contribution</h4>
		  <p className='textleft'>As part of a team of three, my contribution towards the project consisted of developing most of the scripts in C# and around half of the unity elements. Mainly the following elements:<br></br>
		  - Combat (Weapons, Enemies, Collisions)<br></br>
		  - Movement (Player, NPCs, Navigation Mesh)<br></br>
		  - UI (HUD, menus)<br></br>
		  - Saving & Loading<br></br>
		  - Setting up the environment</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Full Demonstration</h4>
		  <iframe width="960" height="540"
			src="https://www.youtube.com/embed/-N7TYo_wr88">
		  </iframe>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

		  <h4 className='textleft bottomBorder'>Game Design Document</h4>
		  <object data="exodus/design.pdf" type="application/pdf" width="100%" height="600px">
		  <p>Unable to display PDF file. <a href="exodus/design.pdf">Download</a> instead.</p>
		  </object>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}