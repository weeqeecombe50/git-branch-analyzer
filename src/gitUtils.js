const { execSync } = require('child_process');

function getBranches() {
  const branches = execSync('git branch').toString().split('\n');
  return branches.filter(branch => branch).map(branch => branch.trim());
}

module.exports = { getBranches };