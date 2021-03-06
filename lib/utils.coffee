fs = require('fs')

module.exports =
    endsWith: (str, suffix)->
        str.indexOf(suffix, str.length - suffix.length) isnt -1

    writeToFile: (filePath, content)->
        fs.writeFile(filePath, content, (error)->
            console.log("#{if error then 'ERROR (write to file)' else 'OK'} : '#{filePath}'")
            process.exit(1) if error
        )