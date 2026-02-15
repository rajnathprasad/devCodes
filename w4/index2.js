const fs = require("fs");
const {Command} = require("commander")
const program = new Command();

program
    .name("Counter")
    .description("CLI to do file based tasks")
    .version("0.8.0");

program.command("countLines")
    .description("Count the number of lines in a file")
    .argument("<file>","file to count lines")
    .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const lines = data.split("\n").length;
                console.log(`There are ${lines} lines in ${file}`)
            }
        })
    })

program.command("countWords")
    .description("Count the number of words in a file")
    .argument("<file>","file to count words")
    .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const words = data.trim().split(/\s+/);
                console.log(words)
                console.log(`There are ${words.length} words in ${file}`);
            }
        })
    })

program.parse()