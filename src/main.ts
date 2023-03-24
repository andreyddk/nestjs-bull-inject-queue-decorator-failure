/** @format */

import { NestFactory } from '@nestjs/core';
import { PlaygroundModule } from './playground/playground.module';

const main = async () => {
  const app = await NestFactory.create(PlaygroundModule);

  await app.listen(2000);

  console.log('App started at: http://localhost:2000');
};

main();
