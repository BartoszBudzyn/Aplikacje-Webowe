import React, { useEffect, useState } from 'react';
import Komentarz from './Komentarz';

interface CommentData {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
  likes: number;
}

const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(response => response.json())
      .then(data => setComments(data.comments));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Komentarze</h2>
      {comments.map(comment => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          likes={comment.likes}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default Komentarze;