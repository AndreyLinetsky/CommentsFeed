export function getUserLastActivityTime(comments, email) {
    const lastUserComment = comments
      .filter(t => t.email === email)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  
    return lastUserComment.createdAt;
  }
  