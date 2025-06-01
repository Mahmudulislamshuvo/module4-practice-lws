export const fetchComments = async (postId) => {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return result.json();
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    return [];
  }
};
