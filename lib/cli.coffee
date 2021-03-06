commander = require('commander')
Program   = require('./program')

module.exports = ->
    commander
        .version('0.1.0')
        .option('-d, --directory [directory]', 'directory', 'templates')
        .option('-s, --fileSuffix [suffix]', 'file suffix', 'Template')
        .option('-f, --functionSuffix [suffix]', 'function suffix', 'Str')
        .parse(process.argv)

    new Program().run(commander)