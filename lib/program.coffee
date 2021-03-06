glob        = require("glob")
requirejs   = require('requirejs')
underscore  = require('underscore')
utils       = require("./utils")

requirejs.config(
    nodeRequire : require
)

class Program
    run: (commander)->
        glob( "#{commander.directory}/**/*#{commander.fileSuffix}.js", (er, filePaths)=>
            console.log("No matching files found in '#{commander.directory}'") unless filePaths.length
            @_processFile(filePath, commander.functionSuffix) for filePath in filePaths
        )

    _processFile: (filePath, functionSuffix)->
        try
            requirejs([filePath], (file)=>
                compiledTemplates = []
                compiledTemplates.push(
                    name    : funcName
                    content : underscore.template(file[funcName]())
                ) for funcName in @_getFileFunctions(file, functionSuffix)
                if compiledTemplates.length
                    utils.writeToFile(filePath, @_getFileContent(compiledTemplates))
                else console.log("Nothing to compile in file '#{filePath}'")
            )
        catch error
            console.log("ERROR (requirejs) in file '#{filePath}', Probably this file has been already compiled!")

    _getFileFunctions: (file, functionSuffix)->
        func for func of file when utils.endsWith("#{func}", functionSuffix)

    _getFileContent: (compiledTemplates)->
        """(function(){define(function(){return{""" + [
            "#{section.name} : #{section.content.source}" for section in compiledTemplates
        ].join(',') + """};});}).call(this);"""

module.exports = Program