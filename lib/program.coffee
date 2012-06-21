glob        = require("glob")
nodePromise = require("node-promise")
requirejs   = require('requirejs')
underscore  = require('underscore')
fs          = require('fs')

requirejs.config(
    nodeRequire: require
)

class Program
    run: (commander)->
        filesPromise = new nodePromise.Promise()
        @_getFiles(filesPromise, commander.folder, commander.fileSuffix)
        filesPromise.then( (files)=> @_processFile(file, commander.functionSuffix) for file in files )

    _getFiles: (promise, folder, fileSuffix)->
        glob( "#{folder}/**/*#{fileSuffix}.js", (er, files)-> promise.resolve(files) )

    _processFile: (filePath, functionSuffix)->
        requirejs([filePath], (file)=>
            promise = new nodePromise.Promise()
            compiledTemplates = []
            for funcName in @_getFileFunctions(file, functionSuffix)
                compiledTemplates.push(
                    functionName    : funcName
                    functionContent : underscore.template(file[funcName]())
                )
            newFileContent = @_getNewFileContent(compiledTemplates)
            @_writeToFile(promise, filePath, newFileContent)
            promise.then( (code)=>
                console.log("#{if code is 1 then 'ERROR' else 'OK'} : #{filePath}");
                process.exit( code = 1 ) if code is 1
            )
        )

    _getFileFunctions: (file, functionSuffix)->
        func for func of file when @_endsWith("#{func}", functionSuffix)

    _endsWith: (str, suffix)->
        str.indexOf(suffix, str.length - suffix.length) isnt -1

    _getNewFileContent: (compiledTemplates)->
        funcSections = []
        for funcSection in compiledTemplates
            funcSections.push("#{funcSection.functionName} : #{funcSection.functionContent.source}")
        @_getNewFileContentHeader() + funcSections.join(',\n') + @_getNewFileContentFooter()

    _writeToFile: (promise, filePath, content)->
        fs.writeFile(filePath, content, (error)->
            promise.resolve(if error then 1 else 0)
        )

    _getNewFileContentHeader: ->
        """
        (function() {
            define(function() {
                return {\n
        """

    _getNewFileContentFooter: ->
        """
                \n};
            });
        }).call(this);
        """


module.exports = Program