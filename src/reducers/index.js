const initialState = {
  user: {},
  users: [],
  currentUser: {},
  posts: [],
  currentPost: {},
  currentPostComments: [],
  search: '',
  sort: '',
  filter: '',
  usersLikedPosts: [],
  usersLikedComments: [],
  individualPostIsFetching: false,
  individualPostCommentsAreFetching: false,
  rooms: [{ room: 'Lambda Staff' }],
  roles: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };

    case 'START_FETCHING_CURRENT_POST':
      return {
        ...state,
        individualPostIsFetching: true,
      };

    case 'SET_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
        individualPostIsFetching: false,
      };

    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    case 'SET_USERS_LIKED_POSTS':
      return {
        ...state,
        usersLikedPosts: action.payload,
      };

    case 'SET_POSTS_COMMENTS':
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [action.payload, ...state.currentPost.comments],
        },
      };

    case 'SET_USERS_LIKED_COMMENTS':
      return {
        ...state,
        usersLikedComments: action.payload,
      };

    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'START_FETCHING_CURRENT_POST_COMMENTS':
      return {
        ...state,
        individualPostCommentsAreFetching: true,
      };

    case 'SET_CURRENT_POST_COMMENTS':
      return {
        ...state,
        currentPostComments: action.payload,
        individualPostCommentsAreFetching: false,
      };

      case 'SET_USERS':
        return {
          ...state,
          users: action.payload.users,
        };
        case 'SET_ROLES':
          return {
              ...state,
              roles: action.payload.roles
          }
      

    default:
      return state;
  }
};
