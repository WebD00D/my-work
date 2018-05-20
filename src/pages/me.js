import React from 'react'
import Link from 'gatsby-link'
import Work from '../components/Work.js'

const Me = () => (
  <div>
    <div className="w-100 ht-700 relative ">
      <div className="mx-1400 w-100 mlra pa-30 ht-100p">
        <div className="ht-100p fx fx-col fx-sb">
          <div>
            <div className="t-serif fc-black fw-bold mb-60 f-22">
              C &mdash; B
            </div>
            <div className="t-serif fc-black f-14 fw-light">
              Frontend Developer
            </div>
            <div className="t-serif fc-black f-14 fw-light">
              Los Angeles, CA
            </div>
          </div>
          <div>
            <div className="t-serif fc-white f-14 fw-light ">
              <Link className="td-none fc-black" to="/me"><span className="mr-4 hover-o"><span className="nowrap">Who is CB? /</span> </span></Link>
              <Link className="td-none fc-black" to="/hire"><span className="mr-4 hover-o"><span className="nowrap">Hire Me /</span> </span></Link>
              <Link className="td-none fc-black" to="/mentorship"><span className="mr-4 hover-o"><span className="nowrap">Mentorship /</span> </span></Link>
              <Link className="td-none fc-black" to="/no-bs-frontend"><span className="mr-4 hover-o"><span className="nowrap">No BS Frontend /</span> </span></Link>
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:rva.christian91@gmail.com" className=" absolute t-30 fx fx-ac td-none r-30 fc-black f-22" >
        <span className="t-serif fc-black f-14 fw-light mr-4">Let's talk</span><i className="fa fa-long-arrow-right fc-black f-22" />
      </a>
    </div>


  </div>
)

export default Me
