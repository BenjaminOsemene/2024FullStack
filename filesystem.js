//The filesystem (fs) object provides features or methods for interacting with the file system
// It can be used to read the contents of a file
 //It can also be used to write data to files 
 //As well as appending and deleting files   

// This import the 'fs' module for interacting with the filesystem
const fs = require('fs');

// Then defining the file path 
const filePath = 'example.txt';

// This Writes data to the file using fs.writeFile
console.log('Writing to file...');
fs.writeFile(filePath, 'Hello, World!\n', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');

        // Using fs.readFile to read the contents of the file and logging contents or errors to terminal
        console.log('Reading from file...');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log('File contents:', data);

                // Using fs.appendFile to add content to the end of file
                console.log('Appending to file...');
                fs.appendFile(filePath, 'Appending some text.\n', (err) => {
                    if (err) {
                        console.error('Error appending file:', err);
                    } else {
                        console.log('File appended successfully.');

                        // So after appending content to the file,this verifies that the content is successfully added
                        console.log('Reading appended file...');
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) {
                                console.error('Error reading file:', err);
                            } else {
                                console.log('Appended file contents:', data);

                                // Deleting  the file using fs.unlink and logging success or error  
                                console.log('Deleting file...');
                                fs.unlink(filePath, (err) => {
                                    if (err) {
                                        console.error('Error deleting file:', err);
                                    } else {
                                        console.log('File deleted successfully.');
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
