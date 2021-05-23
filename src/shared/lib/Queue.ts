import Queue from 'bull';

// configs
import redisConfig from '../../config/redis';

// jobs
import * as jobs from '../jobs/index';

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, { redis: redisConfig }),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

function add(name: string, data: any): Promise<Queue.Job<any>> | void {
  const queue = queues.find((queue) => queue.name === name);
  return queue?.bull.add(data, queue.options);
}

function process(): void {
  return queues.forEach((queue) => {
    queue.bull.process(queue.handle);

    queue.bull.on('failed', (job, err) => {
      console.log('Job failed', queue.name, job.data);
      console.error(err);
    });
  });
}

export { queues, add, process };
