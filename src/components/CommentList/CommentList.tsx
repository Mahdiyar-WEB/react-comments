import { useState } from "react";
import Comment from "../Comment/Comment";

const initialValue = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      text: "Example comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text.",
              author: "user4",
              children: [],
            },
          ],
          
        },
        {
            id: 5,
            text: "Another example comment text.",
            author: "user3",
            children: [
              {
                id: 3,
                text: "Another example comment text.",
                author: "user4",
                children: [],
              },
            ],
        }
      ],
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "user5",
      children: [],
    },
  ],
};

export interface IComment {
  id: number;
  text: string;
  author: string;
  children?: IComment[];
}

const CommentList = () => {
  const [comments, setComments] = useState<IComment[]>(initialValue.comments);
  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
