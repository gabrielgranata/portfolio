import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Gabriel Granata Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2></h2>

            <p>{bio}</p>
            <p>Download my resume, or send me an email if you'd like to work together!</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>My Info</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button email"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
                  <p>
                     <a href="mailto:gabriel@granata.tech" className="email button"><i className="fa fa-inbox"></i>Send me an email</a>
                  </p>
               </div>
               <div className="columns download">
                  
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
