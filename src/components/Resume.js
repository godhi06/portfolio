import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">


         <div className="row skill" >

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>
          <div>
   				<div className="row">
           <div class="column">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <em>{item.skillexpert}</em>
                      </li>
                    )
                  })
                }
   					</ul>
            </div>

            <div class="column">

   				   <ul className="skills">
                {
                  resumeData.skillscoding && resumeData.skillscoding.map((item) => {
                    return(
                      <li>
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
   					</ul>
            </div>

            <div class="column">
   				   <ul className="skills">
                {
                  resumeData.softskills && resumeData.softskills.map((item) => {
                    return(
                      <li>
                      <em>{item.softskill}</em>
                      </li>
                    )
                  })
                }
   					</ul>
            </div>
            </div>
   				</div>

   			</div>

         </div>

      </section>
    );
  }
}