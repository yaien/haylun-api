const yargs = require("yargs")
const path = require("path")
yargs
    .commandDir(path.resolve(__dirname, "./commands"))
    .demandCommand()
    .help().argv
