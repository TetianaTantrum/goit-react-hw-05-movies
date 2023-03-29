import { useState, useEffect } from 'react';
import { getCastById } from '../../components/API';
import { Section, MainTitle } from '../../components/Trends.styled';
import { Gallery, Image, Item, Title, Text } from '../Movies/Movies.styled';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const newCast = await getCastById(movieId);
        setCast([...newCast]);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <section>
      <MainTitle>Cast</MainTitle>
      <Gallery>
        {cast.map(({ id, profile_path, name, character, popularity }) => {
          return (
            <Item key={id}>
              <Image
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhmA5lk66rH2bXOz9r3otg3lvKh71xXA_cQ&usqp=CAU'
                }
                alt={name}
              />
              <Title>Name: {name}</Title>
              <Text>
                <b>Character:</b> {character}
              </Text>
              <Text>
                <b> Rating: </b> {popularity}
              </Text>
            </Item>
          );
        })}
      </Gallery>
    </section>
  );
};
export default Cast;
