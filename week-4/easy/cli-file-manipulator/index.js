const { program } = require('commander');
const fs = require('fs')

program
    .name('file-manipulator')
    .description('this program can manipulate the file and many more, for help use -h')


program.command('read-file')
    .description('read the file')
    .argument('<filepath>', 'Enter the file path')
    .action(function(filepath){
        fs.readFile(filepath, 'utf-8', function(err,data){
            if(err){
                console.log(err)
                return;
            }

            console.log(data)
        })
    })

program.command('write-file')
    .description('write in file if it exists otherwise creates a new file')
    .argument('<filepath>', 'Enter the file path')
    .argument('<data>', "Enter the data you want to write in the file")
    .action(function(filepath, data){
        fs.writeFile(filepath, data, function(err){
            if(err){
                console.log(err)
                return
            }

            console.log("Written in file successfully")
        })
    })

program.command('modify-file')
    .description('modify the file')
    .argument('<filepath>', 'Enter the file path')
    .argument('<where>', "Enter whether you want to append or prepend in the file: ARG = append or prepend")
    .argument('<newData>', "Enter the data you want to append/prepend in the file")
    .action(function(filepath, where, newData){
        fs.readFile(filepath, 'utf-8', function(err, data){
            if(err){
                console.log(err)
                return
            }

            if(where === 'append'){
                fs.writeFile(filepath, data + " " + newData , function(err){
                    if(err){
                        console.log(err)
                        return
                    }

                    console.log("File modified successfully")
                })
            } else if(where === 'prepend'){
                fs.writeFile(filepath, newData + " " + data , function(err){
                    if(err){
                        console.log(err)
                        return
                    }
                    
                    console.log("File modified successfully")
                })
            } else {
                throw new Error("Invalid Operation, Use -h for help!")
            }

        })
    })

program.command('delete-file')
    .description('delete the file')
    .argument('<filepath>', "Enter the file path")
    .action(function(filepath){
        fs.unlink(filepath, function(err){
            if(err){
                console.log(err)
                return
            }

            console.log("File deleted successfully")
        })
    })

program.command('count-words')
    .description('count the number of words in file')
    .argument("<filepath>", "Enter the file path")
    .action(function(filepath){
        fs.readFile(filepath, "utf-8", function(err,data){
            if(err){
                console.log(err)
                return
            }

            console.log("Your file has/have " + data.split(" ").length + " words");
        })
    })

program.command('count-sentences')
    .description('count the number of sentences in file')
    .argument("<filepath>", "Enter the file path")
    .action(function(filepath){
        fs.readFile(filepath, "utf-8", function(err,data){
            if(err){
                console.log(err)
                return
            }

            console.log("Your file has/have " +  data.split("\n").length + " sentences");
        })
    })

program.parse();