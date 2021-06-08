module.exports = {
  get: jest.fn(() => Promise.resolve({ data: { numComic: 1 } })),
};
