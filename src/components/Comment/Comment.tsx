import { FC } from "react";
import { IComment } from "../CommentList/CommentList";
import styles from "./comment.module.css";

interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
  const nestedComment = (comment.children || []).map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });
  return (
    <div className={styles.container}>
      <h4>id: {comment.id}</h4>
      <h4>text: {comment.text}</h4>
      <div className={styles.nestedComment}>{nestedComment}</div>
    </div>
  );
};

export default Comment;
