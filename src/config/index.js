const getSlackLimits = () => ({
  chars: 30_000,
  blocks: 50,
});
const getTeamsBytesLimit = () => 27_000;
const getGithubApiUrl = () => process.env.HPE_GITHUB_API_URL || 'https://api.github.com';
const getGithubServerUrl = () => process.env.HPE_GITHUB_SERVER_URL || 'https://github.com';

module.exports = {
  getSlackLimits,
  getTeamsBytesLimit,
  getGithubApiUrl,
  getGithubServerUrl,
};
