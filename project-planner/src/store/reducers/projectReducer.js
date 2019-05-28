const initState = {
  projects: [
    {
      id: '1',
      title: 'Project Title 1',
      content: 'blah blah blah',
      author: 'Mandour',
      publishDate: '01/01/1990 10:00 PM'
    },
    {
      id: '2',
      title: 'Project Title 2',
      content: 'blah blah blah',
      author: 'Mandour',
      publishDate: '01/01/1990 10:00 PM'
    },
    {
      id: '3',
      title: 'Project Title 3',
      content: 'blah blah blah',
      author: 'Mandour',
      publishDate: '01/01/1990 10:00 PM'
    },
    {
      id: '4',
      title: 'Project Title 4',
      content: 'blah blah blah',
      author: 'Mandour',
      publishDate: '01/01/1990 10:00 PM'
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('project Created!', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('project faild to be created!', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
