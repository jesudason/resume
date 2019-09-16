import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Timeline.css';


class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1y6k7P6o2rLA6KkgLXaJZtsr9c72YaBUU4XY5NYgx7eQ/values/A2:F",     
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ya29.GluFB0lK6bC74dAhFpLFtkMiNnpNVkre9rDnibqYmEybjlxtmDHMlrA1Uk7jx7_1kzA-RV92UDnSpBQiQqAPsSx50ktp7E_cj1suc8YVy5-7dXP1u5pxT61HM16N" 
    }
    }).then(res => res.json())
      // .then((res) => console.log(res.values));
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.values,
            active: null
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleHover(i) {
    this.setState({active: i});
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="timeline">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <ul>
                {items.map((item, i) => (
                  <Job key={item[0]} props={item} year={item[1]} role={item[2]} site={item[3]} description={item[4]} isHovered={item[5]} handleHover={this.handleHover.bind(this, i)} />
                ))}
              </ul>  
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8">
              <div className="timeline--item--description">
                {items.map(item => ( 
                  (item[0] == this.state.active)
                    ? <Description description={item[4]} />
                    : ''
                ))}
              </div> 
            </div>      
          </div>
        </div>
      );
    }
  }
}

const Job = ({ props, year, role, site, handleHover, state}) => {
  return (
      <li className="timeline--item" id={props[0]} onMouseEnter={handleHover}>
        <div className="timeline__item--summary">
          <span>{year} {site}</span>
          <h5>{role}</h5>
        </div>
      </li>
    )
}

const Description = ({ description }) => {
  return (
      <div className="timeline__item--description">
        <p>{description}</p>
      </div>
    )
}

export default Timeline