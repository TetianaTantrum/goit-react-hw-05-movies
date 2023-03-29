import { useState, useEffect } from 'react';
import { NavLink, Link, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'components/API';
import {
  Form,
  Input,
  Button,
  Gallery,
  Item,
  Image,
  Title,
  Text,
} from './Movies.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  // const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return setSearchParams({});
    }

    async function getMovie() {
      try {
        const searchedMovies = await getMoviesByQuery(query);
        setMovies(searchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    setSearchParams({ query });
    getMovie();
  }, [query, setSearchParams]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.input.value });
    e.target.reset();
  };

  return (
    <div>
      <NavLink
        to="/"
        style={{
          textDecoration: 'none',
          padding: '7px 20px',
          maxWidth: '100px',
          textAlign: 'center',
          borderRadius: '5px',
          border: '0px',
          color: 'rgb(239, 239, 239)',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
          fontSize: '14px',
          opacity: '0.6',
          transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
          cursor: 'pointer',
          display: 'block',
          marginTop: '20px',
          marginBottom: '20px',
          backgroundColor: '#051805',
        }}
      >
        <HiOutlineArrowNarrowLeft
          style={{
            marginRight: '10px',
          }}
        />
        Back
      </NavLink>
      <Form onSubmit={onFormSubmit}>
        <Input type="text" name="input" />
        <Button>
          <BsSearch
            style={{
              marginRight: '10px',
            }}
          />
          Search
        </Button>
      </Form>
      <Gallery>
        {movies.map(
          ({ id, poster_path, title, vote_average, release_date }) => {
            const rating = vote_average?.toFixed(1);
            return (
              <Item key={id}>
                <Link to={`/movies/${id}`}>
                  <Image
                    src={
                      poster_path
                        ? 'https://image.tmdb.org/t/p/w500' + poster_path
                        : 'https://lands-tube.it.landsd.gov.hk/AVideo/view/img/notfound_portrait.jpg'
                    }
                    alt={title}
                  />
                  <Title>
                    {title} | {release_date?.toString().slice(0, 4)}
                  </Title>
                  <Text>
                    <b>Average: </b>
                    {rating}
                  </Text>
                </Link>
              </Item>
            );
          }
        )}
      </Gallery>
    </div>
  );
};
export default MovieSearch;
