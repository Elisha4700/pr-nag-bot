import { delay } from "https://deno.land/std@0.140.0/async/delay.ts";

async function task() {
  console.log(`Task executed at ${new Date().toLocaleString()}`);
}

async function startCron() {
  while (true) {
    await task();
    await delay(12 * 60 * 1000); // 12 minutes in milliseconds
  }
}

startCron();
