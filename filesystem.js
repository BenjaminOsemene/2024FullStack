// This import the 'fs' module for interacting with the filesystem
const fs = require('fs');

// The define file path 
const filePath = 'example.txt';

// Write data to the file
console.log('Writing to file...');
fs.writeFile(filePath, 'Hello, World!\n', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');

        // Using fs.readFile to read the contents of the file and logging contentsor errors to terminal
        console.log('Reading from file...');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log('File contents:', data);

                // Using fs.readFile to add content to the end of file
                console.log('Appending to file...');
                fs.appendFile(filePath, 'Appending some text.\n', (err) => {
                    if (err) {
                        console.error('Error appending file:', err);
                    } else {
                        console.log('File appended successfully.');

                        // This verifies that content is successfully added
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
