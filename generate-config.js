const fs = require('fs');
const path = require('path');

const endpoint = process.env.ENDPOINT;

if (!endpoint) {
  console.error('Environment variable ENDPOINT is undefined');
  process.exit(1);
}

const config = JSON.stringify({ endpoint });

const configPath = path.resolve(__dirname, 'src', 'config.json');

fs.writeFileSync(configPath, config);

console.log('config generated successfully');
