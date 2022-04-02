import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.scss";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const API_KEY = "AIzaSyAMA3O3jW8CYQ2RpDLbZLcWLLBKPz4MRbw";
    const spreadsheetId = "1y6k7P6o2rLA6KkgLXaJZtsr9c72YaBUU4XY5NYgx7eQ";
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A2:F?key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      // .then((res) => console.log(res.values));
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.values,
            active: null,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleHover(i) {
    this.setState({ active: i });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div data-testid="loading">Loading...</div>;
    } else {
      return (
        <div data-testid="show-data" className="Resume">
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>Resume page</h1>
                <div className="resume__wrapper">
                  <div className="vl"></div>
                  <ul>
                    {items.map((item, i) => (
                      <Job
                        key={i}
                        id={i}
                        props={item}
                        year={item[1]}
                        role={item[2]}
                        site={item[3]}
                        description={item[4]}
                      />
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

const Job = ({ id, year, role, description, site }) => {
  function getColor() {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  }

  const border = `5px solid ${getColor()}`;
  return (
    <li className="resume__wrapper--item" style={{ border: border }}>
      <span className="dot" style={{ border: border }}></span>
      <input type="checkbox" name="panel" id={id} />
      <label htmlFor={id} style={{ borderBottom: border }}>
        <span className="year">{year}</span>
        {site}
      </label>
      <div className="accordion__content">
        <h2 className="accordion__header">{role}</h2>
        <p className="accordion__body">{description}</p>
      </div>
    </li>
  );
};

const Content = ({ description }) => {
  return (
    <div className="Resume__item--description">
      <p>{description}</p>
    </div>
  );
};

export default Resume;
