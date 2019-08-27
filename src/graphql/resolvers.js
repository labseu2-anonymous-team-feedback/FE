import { IS_LOGGED_IN } from './queries';

const resolvers = {
  Query: {
    isLoggedIn: (parent, args, { cache }) => {
      const { isLoggedIn } = cache.readQuery({ query: IS_LOGGED_IN });
      console.log(isLoggedIn);
    },
  },
};

export default resolvers;
