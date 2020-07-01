import React, {Component} from 'react';
import {arrayOf, string} from 'prop-types';

export default class GenreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: `All genres`,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(evt) {
    evt.preventDefault();
    const target = evt.target;
    this.setState({active: target.textContent});
  }

  render() {
    const {genres} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          const {active} = this.state;
          const activeClass = genre === active ? `catalog__genres-item--active` : ``;
          return (
            <li
              key={genre}
              className={`catalog__genres-item ${activeClass}`}>
              <a
                href="#"
                className="catalog__genres-link"
                onClick={this.handleListItemClick}>
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

GenreList.propTypes = {
  genres: arrayOf(string.isRequired).isRequired,
};
