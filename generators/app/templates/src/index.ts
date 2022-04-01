import { config } from 'dotenv';

config();
config({ path: `.${process.env.MODE}.env` });

async function main() {

}

(async () => {
  try {
      await main();
  } catch (error) {
      console.error('=== ERROR ===');
      console.error(error);
      console.error('=============');
  }
})();
