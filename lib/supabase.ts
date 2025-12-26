import { createClient } from '@supabase/supabase-js';
import type { ContentData } from '@/types/content-full';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function getContent(): Promise<ContentData | null> {
  const { data } = await supabase
    .from('content')
    .select('*')
    .single();
  return data;
}

export async function saveContent(content: ContentData): Promise<boolean> {
  const { error } = await supabase
    .from('content')
    .upsert({ id: 1, ...content });
  return !error;
}