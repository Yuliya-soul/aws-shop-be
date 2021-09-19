export default {
  type: "object",
  properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      price: { type: 'number' },
      count: { type: 'number' },
      year:{type:'string'},
      author:{type:'string'},
      picture: {type:'string'},
  },
} as const;
