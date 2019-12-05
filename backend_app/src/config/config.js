
// process config
// check if there are variables set in the container / machine session
// if they exist use the machine variables, otherwise, those of the file

var localConfig = require(__dirname + '/config.json')

finalConfig = {}
for (env in localConfig){
  confEnv = {}
  for (element in localConfig[env]) {
    confEnv[element] = process.env[element] || localConfig[env][element]
  }
  finalConfig[env] = confEnv
}

module.exports = finalConfig
