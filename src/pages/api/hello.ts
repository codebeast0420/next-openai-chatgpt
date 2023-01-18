import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  // apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('aaa');
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: req.body.text,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256,
  });
  res.status(200).json({ result: completion.data });
}