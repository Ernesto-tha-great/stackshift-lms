// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Submissions, User, UserSubmissions } = initSchema(schema);

export {
  Submissions,
  User,
  UserSubmissions
};