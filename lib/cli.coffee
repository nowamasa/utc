commander = require('commander')
Program   = require('./program')

module.exports = ->
    commander
        .version('0.1.0')
        .option('-o, --folder [folder]', 'Specify the template folder', 'templates')
        .option('-s, --fileSuffix [suffix]', 'Specify the file suffix', 'Template')
        .option('-f, --functionSuffix [suffix]', 'Specify the function suffix', 'Str')
        .parse(process.argv)

    new Program().run(commander)