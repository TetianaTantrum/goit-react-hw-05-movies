import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieById } from 'components/API';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Section, Image, Title, Text, Button } from './MovieDetails.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from && '/');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        const newMovie = await getMovieById(movieId);
        setMovie(newMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  const {
    id,
    poster_path,
    genres,
    title,
    vote_average,
    overview,
    production_companies,
    release_date,
  } = movie;

  const rating = vote_average?.toFixed(1);
  const genresList = genres?.map(genre => genre.name).join(',  ');
  const year = release_date?.toString().slice(0, 4);
  const companies = production_companies
    ?.map(company => company.name)
    .join(',  ');

  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <Button type="button">
          <HiOutlineArrowNarrowLeft
            style={{
              marginRight: '10px',
            }}
          />
          Back
        </Button>
      </Link>
      {isLoading && <p>Loading... {isLoading}</p>}
      <Section key={id}>
        <Image
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://lands-tube.it.landsd.gov.hk/AVideo/view/img/notfound_portrait.jpg'
          }
          alt={title}
        />
        <div>
          <Title>{title}</Title>
          <Text>
            <b>Rating:</b> {rating}
          </Text>
          <Text>
            <b>Genres: </b> {genresList}
          </Text>
          <Text>
            Produced in <b>{year}</b> by {companies}
          </Text>
          <Text>{overview}</Text>
          <Link to={`cast`}>
            <Button type="button">Cast</Button>
          </Link>
          <Link to={`reviews`}>
            <Button type="button">Reviews</Button>
          </Link>
        </div>
      </Section>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
// Image;
// Title;
// Text;
// Button;
