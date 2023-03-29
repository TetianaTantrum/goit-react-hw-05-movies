import { useState, useEffect } from 'react';
import { getReviewsById } from '../../components/API';
import { MainTitle } from '../../components/Trends.styled';
import { Title, Text } from '../Movies/Movies.styled';
import { List, Container, Item, Image } from './Reviews.styled';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const newReviews = await getReviewsById(movieId);
        setReviews([...newReviews]);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <section>
      <MainTitle>Review</MainTitle>
      <List>
        {reviews.map(({ id, author, avatar_path, content }) => {
          return (
            <Item key={id}>
              <Container>
                <Image
                  src={
                    avatar_path
                      ? 'https://image.tmdb.org/t' + avatar_path
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhmA5lk66rH2bXOz9r3otg3lvKh71xXA_cQ&usqp=CAU'
                  }
                  alt={author}
                />
                <Title>{author}</Title>
              </Container>
              <Text>
                <b>Review:</b> {content}
              </Text>
            </Item>
          );
        })}
      </List>
    </section>
  );
};
export default Reviews;
