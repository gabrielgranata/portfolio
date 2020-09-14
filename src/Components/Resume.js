import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        let descr = work.description.map(function (d) {
          return (
            <div>
              <p>{d}</p>
            </div>
          )
        })
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{descr}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = skills.name.toLowerCase();
        return <h3 key={skills.name}><em>{skills.name}</em></h3>
      })
      var languages = this.props.data.languages.map(function (language) {
        return <h3 key={language.name}><em>{language.name}</em></h3>
      })
      var expertise = this.props.data.expertise.map(function (area) {
        return (
          <div>
            <h1>{area.name}</h1>
            <p>{area.description}</p>
          </div>

        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Expertise</span></h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {expertise}
            </ul>
          </div>
        </div>
        <div className="row skill">


          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {languages}
            </ul>
          </div>
        </div>
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Technologies</span></h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
