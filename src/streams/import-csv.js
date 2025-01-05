import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'
import fetch from 'node-fetch'

const csvFilePath = path.join(new URL('.', import.meta.url).pathname, 'tasks.csv');

async function importTasks() {
  const parser = fs.createReadStream(csvFilePath)
    .pipe(parse({
      columns: false,  
      skip_empty_lines: true
    }));

  let firstLine = true;

  for await (const record of parser) {
    if (firstLine) {
      firstLine = false;
      continue;  
    }

    const [title, description] = record;

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description
        }),
      });

      if (response.ok) {
        console.log(`Task created: ${title} - Status: ${response.status}`);
      } else {
        console.error(`Error creating task: ${title} - Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error creating task: ${title} - ${error.message}`);
    }
  }
}

importTasks()
  .then(() => console.log('Import completed'))
  .catch(err => console.error('Error in import', err));
