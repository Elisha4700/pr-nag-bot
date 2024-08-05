import { Cron } from "https://deno.land/x/croner@8.1.0/dist/croner.js";
import BitBucketAdapter from './services/bitbucket.ts';

const cronExpression = Deno.env.get("CRON_EXPRESSION") || "*/1 * * * *";
const BIT_BUCKET_API_KEY = Deno.env.get("BIT_BUCKET_API_KEY");
const BIT_BUCKET_WORKSPACE = Deno.env.get("BIT_BUCKET_WORKSPACE");

async function task() {
  console.log(`--------->  Cron Task executed at ${new Date().toLocaleString()}`);

  if (!BIT_BUCKET_WORKSPACE) {
    console.warn('There were not `BIT_BUCKET_WORKSPACE` provided to the envieronment variables');
    return;
  }

  const bitAdapter = new BitBucketAdapter(BIT_BUCKET_API_KEY);
  bitAdapter.getAllReposForWorkspace(BIT_BUCKET_WORKSPACE);
}

const job = new Cron(cronExpression, task);
