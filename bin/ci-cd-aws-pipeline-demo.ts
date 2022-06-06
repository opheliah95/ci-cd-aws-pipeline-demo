import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPipelineDemoStack } from '../lib/ci-cd-aws-pipeline-demo-stack';
require('dotenv').config();

const app = new cdk.App();
new CiCdAwsPipelineDemoStack(app, 'CiCdAwsPipelineDemoStack', {
  env: {
    account: process.env.ACCOUNT_ID,
    region: process.env.REGION,
  }
});

app.synth();

console.log(process.env.ACCOUNT_ID)