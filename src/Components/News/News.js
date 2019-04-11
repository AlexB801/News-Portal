import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3d946ee7677544b78f8021a94647a627';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
  }

  renderItems() {
    return this.props.items.map((item) => (
      <NewSingle key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }
}

export default News;
