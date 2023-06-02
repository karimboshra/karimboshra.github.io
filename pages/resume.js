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
		
          <img className="" width="150" height="150" src="resume/profile.png" alt="KB Logo" />
          <h3 className="mt-3">Resume</h3>
		  
		  <h4 className='textleft bottomBorder'>PDF</h4>
		  <object data="resume/resume.pdf" type="application/pdf" width="100%" height="600px">
		  <p>Unable to display PDF file. <a href="resume/resume.pdf">Download</a> instead.</p>
		  </object>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}