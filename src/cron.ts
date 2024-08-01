import { Cron } from "https://deno.land/x/croner@8.1.0/dist/croner.js";

const cronExpression = Deno.env.get("CRON_EXPRESSION") || "*/1 * * * *";


async function task() {
  console.log(`--------->  Cron Task executed at ${new Date().toLocaleString()}`);
}

const job = new Cron(cronExpression, task);



// crontab().add(cronExpression, task).start();
