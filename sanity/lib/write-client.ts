import "server-only";

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  token,
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

if(!writeClient.config().token) {
  throw new Error('Missing token');
}



