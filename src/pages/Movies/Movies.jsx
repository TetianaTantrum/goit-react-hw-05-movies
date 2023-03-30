import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
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
import { BsSearch } from 'react-icons/bs';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

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
                <Link to={`/movies/${id}`} state={{ from: location }}>
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
