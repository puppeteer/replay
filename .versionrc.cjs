module.exports = {
  releaseCommitMessageFormat: 'chore(release): mark v{{currentTag}}',
  skip: {
    tag: true,
  },
  scripts: {
    postbump: 'npm run doc && git add --update',
  },
};
