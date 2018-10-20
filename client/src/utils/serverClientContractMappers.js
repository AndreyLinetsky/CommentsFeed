export function mapComment(comment) {
    const { message, email, createdAt } = comment;
    return {
      message,
      email,
      createdAt
    };
  }  