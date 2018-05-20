import React from 'react'
import Link from 'gatsby-link'
import Work from '../components/Work.js'

const IndexPage = () => (
  <div>
    <div className="w-100 ht-700 ht-400-m mb-60  relative ">
      <div className="mx-1400 w-100 mlra pa-30 ht-100p">
        <div className="fx fx-sb">
          <Link to="/" className="fc-black td-none">
            <div className="t-serif--basic fw-bold  ">C &mdash; B</div>
          </Link>
          <div className="t-serif--basic fw-light f-12">
            <Link className="fc-black td-none" to="/about">Frontend Developer in Sunny LA</Link>
          </div>
        </div>

        <div className="ht-100p fx fx-col fx-c">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <a href="#stab" className="section-link">
              STAB MAG/
            </a>
            <a href="#thinkful" className="section-link">
              THINKFUL/
            </a>
            <a href="#mobelux" className="section-link">
              MOBELUX/
            </a>
            <a href="#known" className="section-link">
              KNOWN/
            </a>
            <a href="#irc" className="section-link">
              IRC/
            </a>
            <a href="#qc" className="section-link">
              QUIET CORNER/
            </a>
            <a href="#surfclub" className="section-link">
              SURF CLUB/
            </a>
            <a href="#maya" className="section-link">
              MAYA/
            </a>
            <a href="#boardgrab" className="section-link">
              BOARDGRAB/
            </a>
            <a href="#yf" className="section-link">
              YOUNG FRANKK/
            </a>
            <a href="#dalrae" className="section-link">
              DAL RAE/
            </a>
          </div>
        </div>
      </div>
      <i className="fa fa-long-arrow-down absolute l-30"></i>
    </div>

    <div id="about" className="">
      <div className="mx-900 w-100 mlra pa-30 ht-100p">
        <div className="mb-200">
          <div className="t-serif--basic ls-2">
            Allow myself, to introduce myself
          </div>
          <div className="t-serif--basic fw-light f-14 mt-20">

            <div className="mb-12">
              My name is Christian, and I love pushing pixels around computer
              screens. I've been making my living as a developer for about 7
              years now. I'm proficient with HTML/CSS, Vanilla JavaScript, and
              React. I've also done a bit of backend development and design too. When I'm
              not writing code, you can find me surfing, travelling and exploring with my wife,
              or pretending I'm a Top-Chef in my small, and under-equipped kitchen.
            </div>

            <div className="mb-12">
              Now, if you've got the time, go make a cup of coffee and{' '}
              <Link className="fc-blue" to="/about">
                read more about me.
              </Link>
            </div>
          </div>
        </div>

        <Work
          id="stab"
          project="Stab Mag"
          timeline="October 2017 - Present"
          projectType="Surf Magazine"
          siteLink="https://stabmag.com/"
          siteLinkTitle="Stabmag.com"
          paragraphOne="Stab Magazine is an online / annual print publication dedicated to the world of surf. With around 2 million visitors per month, this is the highest trafficked site I’ve worked on. As the Dev Lead, I handle all site-maintenance, design updates, and page build-outs. Working with Stab has taught me to be more tactical in the roll-out of site updates and releases, given the high-volume of our visitors."
          paragraphTwo=""
          role="Lead Developer"
        />
        <Work
          id="thinkful"
          project="Thinkful"
          timeline="April 2018 - Present"
          projectType="Online Code School"
          siteLink="https://thinkful.com/"
          siteLinkTitle="Thinkful.com"
          paragraphOne="Thinkful is an online coding school helping folks land a job as a software developer. They offer an array of programs from data science to engineering immersion, front end basics, and full stack flex, for which I am a mentor in. "
          paragraphTwo="I dedicate a few of my weekend hours working with up to 4 students, guiding them through their coursework and making sure they understand the concepts. My specialty is React, and as much as I enjoy learning about and working with, I share an equal passion for teaching it. Seeing the lightbulbs go off in students is quite a rewarding experience, and I’m grateful Thinkful has created such an amazing space where I able able to share my knowledge. "
          role="Mentor"
        />
        <Work
          id="mobelux"
          project="Mobelux"
          timeline="October 2016 - December 2018"
          projectType="Agency"
          siteLink="https://mobelux.com/"
          siteLinkTitle="Mobelux.com"
          paragraphOne="Mobelux designs, builds, and brands, award-winning apps and web applications. Whether it was working on a multi-million dollar funded startups site, or a pro-bono site for a small local business I was always pushed to learn and experiment with new technologies. "
          paragraphTwo="During my time at Mobelux, I was really able to level up on my React skills. Prior to joining their web team, out of 10, my React skills were a 4. After, well… I teach it now. "
          role="Web Developer"
        />
        <Work
          id="known"
          project="KNOWN"
          timeline="September 2015 - October 2016"
          projectType="Agency"
          siteLink="https://knownagency.com/"
          siteLinkTitle="Knownagency.com"
          paragraphOne="Known is a digital agency located in Richmond, Virginia. My time spent at Known consisted of building out custom Wordpress sites for organizations of all sizes. Some of the more notable ones I worked on being The Internet Society’s Journal website, and Virginia League of Conservational Voters. "
          paragraphTwo=""
          role="Web Developer"
        />
        <Work
          id="irc"
          project="International Roll-Call"
          timeline="Nov 2012- Sept 2015"
          projectType="Freelance Project"
          siteLink="http://www.roll-call.com/"
          siteLinkTitle="Learn More"
          paragraphOne="Before I say anything about my time at International Roll-Call, please note I did not design or build their website. Pheww, now that we got that out of the way, IRC provides complete Legislative Management systems to all levels of government. During my time there, I travelled to learn about the specific needs of various Legislatures, and would customize our applications to fit their needs. "
          paragraphTwo="Specifically, I worked with customizations for Ohio House of Representatives, New Mexico Senate, Florida House, Alabama House and Senate, Texas House of Representatives, and Oregon House of Representatives. I also completely designed and built out a room scheduling app for New Hampshire House of Representatives."
          role="Web Developer"
        />
        <Work
          id="qc"
          project="Quiet Corner"
          timeline="March 2018"
          projectType="Freelance Project"
          siteLink="http://www.quietcorner.co/"
          siteLinkTitle="Quietcorner.co"
          paragraphOne="This was a project in which I had one month to build out a micro-payment software that a publisher could embed on their site in a few lines of code. The software as a whole consisted of three separate web apps: a publishers dashboard, a readers dashboard, and the embeddable app that would live on the publishers site."
          paragraphTwo="The front end of each component was built using React, and I wrote the app’s API with Node. This project also has a Stripe integration, and uses Firebase for data storage and user management. You can see it active on stabmag.com"
          role="Lead Developer"
        />
        <Work
          id="surfclub"
          project="Surf Club"
          timeline="April 2018"
          projectType="Freelance Project"
          siteLink="http://joinsurfclub.com/"
          siteLinkTitle="joinsurfclub.com"
          paragraphOne="Surf Club was a project I built recently over a weekend to further pursue my love affair with surfing. It’s an online catalog that showcases the best of the best in surfboards and surf inspired product. I built Surf Club with React and Redux, and used the Contentful API for data storage. "
          paragraphTwo=""
          role="Developer / Designer"
        />
        <Work
          id="maya"
          project="MAYA"
          timeline="March 2016 - March 2018"
          projectType="Freelance Project"
          siteLink=""
          siteLinkTitle=""
          paragraphOne="Maya is a tool designed to help caregivers manage and understand their patients with autism. People with autism can’t always express how they are feeling. Maya was built to help bridge that gap. The software is fed data like food eaten, bathroom visits, seizure episodes, behaviors, etc. and will run summaries and a multitude of analytical reports to help identify patterns in patients. For example, say you’ve got a patient who is experiencing frequent bouts of a symptom. If a caregiver had a hunch it was due to a certain type of food, they could run a query of the symptom agains recent foods eaten. The report might then show that before every bout, the patient had ingested bananas. This would let them and future caretakers know that this patient should not ingest this type of food."
          paragraphTwo="Maya was built with React, Redux and Gatsby, and uses Firebase for data and user management. It is currently being tested in private Beta, set to release Summer 2018."
          role="Developer"
        />
        <Work
          id="boardgrab"
          project="Boardgrab"
          timeline="January 2018 - March 2018"
          projectType="Freelance Project"
          siteLink="https://www.boardgrab.com"
          siteLinkTitle="Boardgrab.com"
          paragraphOne="Yet another way to celebrate my love of surfing, a few friends and I decided to built a peer to peer marketplace to buy and sell surfboards. Users can buy and sell boards all on site, with payment securely handled with Stripe."
          paragraphTwo="Boardgrab was built using React, Redux, Gatsby, Node, and Firebase for user and data storage. "
          role="Developer / Designer"
        />
        <Work
          id="yf"
          project="Young Frankk"
          timeline="May 2018"
          projectType="Freelance Project"
          siteLink="https://www.youngfrankk.com/"
          siteLinkTitle="youngfrankk.com"
          paragraphOne="Young Frankk is a popular jewelry brand out of Los Angles, California. I am currently redesigning their site on Shopify. Due to launch early Summer 2018."
          paragraphTwo=""
          role="Developer / Designer"
        />
        <Work
          id="dalrae"
          project="Dal Rae"
          timeline="May 2018"
          projectType="Freelance Project"
          siteLink=""
          siteLinkTitle="Launching June 2018"
          paragraphOne="Dal Rae is an upcoming clothing brand out of LA. I am currently redesigning their site on Shopify. Due to launch Summer 2018"
          paragraphTwo=""
          role="Developer / Designer"
        />
      </div>
    </div>


    <div className="fx fx-c fx-ac mb-100">
      <a className="t-serif--basic ls-2 f-12 fc-black" href="mailto:rva.christian91@gmail.com">Let's talk.</a>
    </div>

  </div>
)

export default IndexPage
