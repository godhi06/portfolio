import React, { Component } from 'react';
export default class Certificate extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="certificate" class="container">
      <div className="row">


             <div className="three columns header-col">
               <h1><span>Certificate</span></h1>
            </div>


          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.Certificate && resumeData.Certificate.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      
  </section>
        );
  }
}