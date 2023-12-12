const MOCK_DATA = [
  {
    posterName: "John Doe",
    dateTime: new Date().toISOString(),
    content: "This is a sample post content.",
  },
  {
    posterName: "Jane Doe",
    dateTime: new Date().toISOString(),
    content: "This is another sample post content.",
  },
  {
    posterName: "John Smith",
    dateTime: new Date().toISOString(),
    content: "This is a sample post content.",
  },
  {
    posterName: "Jane Smith",
    dateTime: new Date().toISOString(),
    content: "This is another sample post content.",
  },
];

const resolvers = {
  Query: {
    post: (_, { posterName }) => {
      return MOCK_DATA.find(
        (post) => post.posterName.toLowerCase() === posterName
      );
    },
  },
};

module.exports = resolvers;
