import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export async function getContent() {
  await client.connect();
  const db = client.db('bendderrobots');
  const content = await db.collection('content').findOne({});
  return content;
}

export async function saveContent(data: any) {
  await client.connect();
  const db = client.db('benderrobots');
  await db.collection('content').updateOne({}, { $set: data }, { upsert: true });
}