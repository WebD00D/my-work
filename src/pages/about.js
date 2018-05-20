import React from 'react'
import Link from 'gatsby-link'
import Work from '../components/Work.js'

const About = () => (
  <div>
    <div className="w-100   mb-60  relative ">
      <div className="mx-1400 w-100 mlra pa-30 ht-100p">
        <div className="fx fx-sb">
          <Link to="/" className="fc-black td-none"><div className="t-serif--basic fw-bold  ">C &mdash; B</div></Link>
          <div className="t-serif--basic fw-light f-12">
            Frontend Developer in Sunny LA
          </div>
        </div>
        <div id="about" className="">
          <div className="mx-900 w-100 mlra pa-30 ht-100p">
            <div className="mb-200">
              <div className="t-serif--basic ls-2">
                Me, Me, Me. This page is all about yours truly.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                <div>Front End Skills:</div>
                <ul>
                  <li>HTML / CSS</li>
                  <li>Vanilla JS</li>
                  <li>React</li>
                  <li>Some React Native</li>
                </ul>
                <div>Back End Skills:</div>
                <ul>
                  <li>PHP</li>
                  <li>Node</li>
                  <li>VB.NET</li>
                </ul>
                <div>Database Skills:</div>
                <ul>
                  <li>MSSQL</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                </ul>
                <div>Design Skills:</div>
                <ul>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Sketch</li>
                </ul>
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                <b>Okay, take a deep breath:</b>
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                Hello, my name is Christian Bryant. Thanks for stopping by my little
                corner of the internet. I’ve been making my living as developer for
                seven years now, and got into this crazy world of pushing pixels
                around unintentionally.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                At one point in time, I had a landscaping company with a friend of
                mine. The business was small, but we ran it at scale. Efficiency was
                everything to us. From the fastest routes we could take in-between
                jobs, how we packed the truck up, even down to the cutting patterns
                we took when mowing lawns. Within our first year, we were servicing
                nearly 50 clients weekly. It was just the two of us pulling 14 hour
                days (we were in the best shape of lives, btw). However, this was
                breaking our rules of efficiency. We needed to work smarter if we
                were to grow our little landscaping empire.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                Figuring we could contract the labor work out, we thought it would
                be the best use of our time to just focus on selling jobs. Of course
                if we were to do that, it’d have to be as streamlined as we could
                make it. After inquiring with a software company to build us an
                estimation tool, we were taken aback by the price tag. It was
                something we couldn’t afford. This killed me. I wanted this tool so
                bad. However I wasn’t going to let this wall get in the way for
                long. For the next four months after each long day pulling weeds and
                laying mulch, I’d stay up till 2 am most nights learning how to
                write code.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                Voila! The late nights I pulled paid off. We finally had our
                estimation tool. Now I’d be able to return to my usual nightly
                activities working on marketing plans, sales packages, landscape
                designs, etc. However, I found my afterwork hours being mostly spent
                elsewhere. I became obsessed with learning about software
                development, and loved tinkering with code. I got to a point where I
                thought I was pretty decent, and had the ego to go with it after
                building a tool from scratch. So, I decided for shit and giggles to
                apply for an entry level job - just to see how good I actually was.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                A few short weeks later, after nearly forgetting I even applied, I
                got a call to come in for an interview and coding test. A few short
                weeks later after that, I was sitting behind the desk writing code
                for an inventory management software company. The rest is history,
                although I feel like now I’m just getting started.
              </div>
              <div className="t-serif--basic fw-light f-14 mt-20">
                <a href="mailto:rva.christian91@gmail.com">
                  Wanna build something kickass together?
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div className="fx fx-c fx-ac mb-100">
      <a className="t-serif--basic ls-2 f-12 fc-black" href="mailto:rva.christian91@gmail.com">Let's talk.</a>
    </div>

  </div>
)

export default About
