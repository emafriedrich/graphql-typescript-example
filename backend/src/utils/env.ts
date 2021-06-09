import * as fs from 'fs';
import path from 'path';

const envFilePath = path.resolve().concat('/.env');

export function config() {
  if (fs.existsSync(envFilePath)) {
    const fileContent = fs.readFileSync(envFilePath, 'utf8');
    const arrEnv = fileContent.split('\n');
    const parsed = arrEnv.map((envVar) => envVar.split('='));
    for (const env of parsed) {
      process.env[env[0]] = env[1];
    }
  }
}
