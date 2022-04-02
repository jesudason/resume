import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.scss";

class Projects extends React.Component {
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
    const range = "Projects!A2:D";

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`,
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
        <div data-testid="show-project-data" className="Projects">
          <Grid fluid>
            <Row>
              {items.map((item, i) => (
                <Col xs={12} md={6} lg={4} key={i}>
                  <Card
                    sx={{
                      //   maxWidth: 345,
                      flexDirection: { xs: "row", md: "column" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={item[2]}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item[0]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item[1]}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

export default Projects;
