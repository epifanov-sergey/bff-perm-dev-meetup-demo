import 'reflect-metadata';
import { create } from './create';
import { printSchema } from 'graphql';
import fs from 'fs';

const generate = async () => {
  const schema = await create();
  const sdl = printSchema(schema);
  await fs.writeFile(__dirname + '/../../schema.graphql', sdl, { flag: 'w+' }, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

generate();
