export const FORMFIELDS = [
  {
    id: 1,
    name: 'firstName',
    rules: {
      required: {
        value: true,
        message: 'This is a required field',
      },
    },
    placeholder: 'First Name',
  },
  {
    id: 2,
    name: 'email',
    rules: {
      required: {
        value: true,
        message: 'This is a required field',
      },
      pattern: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]/gm,
    },
    placeholder: 'Email',
  },
  {
    id: 3,
    name: 'password',
    rules: {
      required: {
        value: true,
        message: 'This is a required field',
      },
      minLength: {
        value: 6,
        message: 'Password should be of min 6 length!',
      },
    },
    placeholder: 'Password',
  },
];

export const homedata = [
  {
    name: 'feeling',
    content: 'How are you feeling today?',
    placeholder: 'Enter your reply',
  },
  {
    name: 'priority',
    content: 'Priority to do list',
    placeholder: null,
  },
  {
    name: 'affirmation',
    content: "Today's Affirmation",
  },
  {
    name: 'affirmation',
    content: "Today's Affirmation",
  },
  {
    name: 'grateful',
    content: "Today I'm Grateful for?",
  },
  {
    name: 'thoughts',
    content: "Today's Thoughts",
    placeholder: 'Enter your reply',
  },
  {
    name: 'awareness',
    content: "Today's Self Awareness",
    subcontent: 'Q. How can I show up more for myself?',
    placeholder: 'Enter your reply',
  },
  {
    name: 'prompt',
    content: "Today's Healing Prompt Question",
    placeholder: 'Enter your reply',
  },
  {
    name: 'notes',
    content: 'Notes',
    placeholder: 'Enter your reply',
  },
  {
    name: 'thankYou',
  },
];

export const backgroundColor = [
  '#FFFFFF',
  '#F3EDD7',
  '#E2F8DE',
  '#FFFFFF',
  '#E3EFFF',
  '#F3EDD7',
  '#E2F8DE',
  '#E3EFFF',
  '#F3EDD7',
  '#F1F0FE',
];
