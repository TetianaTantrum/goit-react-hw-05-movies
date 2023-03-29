import { useState, useEffect } from 'react';
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from 'react-icons/hi';
import { getTrending } from './API';
import { Link, useLocation } from 'react-router-dom';
import { Footer, MainTitle } from './Trends.styled';
import {
  Gallery,
  Image,
  Item,
  Title,
  Text,
  Button,
} from '../pages/Movies/Movies.styled';

const Trends = ({ onNextClick, onPreviousClick, page }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function Trend() {
      try {
        setIsLoading(true);
        const movies = await getTrending(page);
        setMovies([...movies]);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    Trend();
  }, [page]);
  return (
    <div>
      <MainTitle>Actual trends:</MainTitle>
      {isLoading && <p>Loading... {isLoading}</p>}
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
                    <b>Rating: </b>
                    {rating}
                  </Text>
                </Link>
              </Item>
            );
          }
        )}
      </Gallery>
      <Footer>
        <Button onClick={onPreviousClick}>
          <HiOutlineArrowNarrowLeft />
          Previous page
        </Button>
        <Button onClick={onNextClick}>
          Next page
          <HiOutlineArrowNarrowRight />
        </Button>
      </Footer>
    </div>
  );
};
export default Trends;
