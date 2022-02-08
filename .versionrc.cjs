module.exports = {
  releaseCommitMessageFormat: 'chore(release): v{{currentTag}}',
  skip: {
    tag: true,
  },
  scripts: {
    postbump: 'npm run docs && git add --update',
  },
};
