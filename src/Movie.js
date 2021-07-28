import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summary, poster }) {
    return <p>{title}</p>;
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;