import Comment from "./Comment";

const CommentGallery = ({ comments }) => {
  return (
    <section className="comment-gallery">
      {comments ? (
        <>
          {comments.map((comment) => {
            return (
              <Comment key={`comment-${comment.id}`} commentObject={comment} />
            );
          })}
        </>
      ) : null}
    </section>
  );
};
export default CommentGallery;
