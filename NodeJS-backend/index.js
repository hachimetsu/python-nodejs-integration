// app.js

const { spawn } = require('child_process');


function myFunction(callback) {
    // Do some work here
    // Create Python process
    const pythonProcess = spawn('pm2', ['start', 'mymodule.py', '--interpreter=python']);

    // Send command to Python process
    const command = {
        type: 'add_numbers',
        a: 2,
        b: 3
    };

    pythonProcess.stdin.write(JSON.stringify(command) + '\n');

    // Receive result from Python process
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Received result: ${data}`);
    });

    pythonProcess.on('exit', (code, signal) => {
        console.log(`Python process exited with code ${code} and signal ${signal}`);
    });
    // Add a delay of 2 seconds before invoking the callback
    setTimeout(() => {
        callback();
    }, 2000);
}

// Usage
myFunction(() => {
    console.log('Callback invoked after 2 seconds');
});
