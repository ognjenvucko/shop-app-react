import store from "store";

const COMMENTS_ENTRY = "comment_db";

export const getComments = id => {
  const allComments = store.get(COMMENTS_ENTRY) || [];
  return allComments.filter(({ id: commentId }) => {
    return commentId === id;
  });
};

export const addComment = (id, text) => {
  const allComments = store.get(COMMENTS_ENTRY) || [];
  store.set(COMMENTS_ENTRY, [
    ...allComments,
    {
      id,
      text
    }
  ]);
};
