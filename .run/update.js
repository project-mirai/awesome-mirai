const https = require('https');
const fs = require('fs');

const data = JSON.stringify({
    "pid": parseInt(process.env.PID.replace("PLACEHOLDER-", "").trim()),
    "content": "**来自github**\n[awesome-mirai](https://github.com/project-mirai/awesome-mirai)\n" + fs.readFileSync('README.md', 'utf8')
});

const options = {
    hostname: 'mirai.mamoe.net',
    port: 443,
    path: process.env.API_ADDR.trim(),
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + process.env.USER_TOKEN.trim()
    }
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    if (res.statusCode != 200) {
        res.on('data', d => {
            process.stdout.write(d)
        })
    }
});

req.on('error', error => {
    console.error(error)
});

req.write(data);
req.end();
