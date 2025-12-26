import { MongoClient } from 'mongodb';
import type { ContentData } from '@/types/content-full';

const client = new MongoClient(process.env.MONGODB_URI!);

export async function getContent(): Promise<ContentData | null> {
  await client.connect();
  const db = client.db('benderrobots');
  const content = await db.collection<ContentData>('content').findOne({});
  return content;
}

export async function saveContent(data: ContentData): Promise<void> {
  await client.connect();
  const db = client.db('benderrobots');
  await db.collection<ContentData>('content').updateOne(
    {}, 
    { $set: data }, 
    { upsert: true }
  );
}