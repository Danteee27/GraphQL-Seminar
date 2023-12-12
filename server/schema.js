// schema.js
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    post(posterName: String): Post
  }

  type Post {
    posterName: String
    dateTime: String
    content: String
  }
`;

module.exports = typeDefs;
