//  ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

fs.readFile('./a.txt', 'utf-8', function(err,data){
    if(err){
        console.log(err)
    } else {
        let trimmedData = data.trim().split(" ")
        let cleanData = trimmedData.filter((el) => el !== "")

        // writing cleaned data in a.txt
        fs.writeFile('./a.txt', cleanData.join(" "), function(err,data){
            if(err){
                console.log(err)
            } else {
                console.log('cleaned file successfully')
            }
        })

    }
})
