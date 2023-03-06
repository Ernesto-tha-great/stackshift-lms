import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type SubmissionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserSubmissionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSubmissions = {
  readonly id: string;
  readonly video?: string | null;
  readonly text?: string | null;
  readonly github?: string | null;
  readonly users?: (UserSubmissions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubmissions = {
  readonly id: string;
  readonly video?: string | null;
  readonly text?: string | null;
  readonly github?: string | null;
  readonly users: AsyncCollection<UserSubmissions>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Submissions = LazyLoading extends LazyLoadingDisabled ? EagerSubmissions : LazySubmissions

export declare const Submissions: (new (init: ModelInit<Submissions, SubmissionsMetaData>) => Submissions) & {
  copyOf(source: Submissions, mutator: (draft: MutableModel<Submissions, SubmissionsMetaData>) => MutableModel<Submissions, SubmissionsMetaData> | void): Submissions;
}

type EagerUser = {
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly country?: string | null;
  readonly password?: string | null;
  readonly address?: string | null;
  readonly Submissions?: (UserSubmissions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly country?: string | null;
  readonly password?: string | null;
  readonly address?: string | null;
  readonly Submissions: AsyncCollection<UserSubmissions>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerUserSubmissions = {
  readonly id: string;
  readonly submissions: Submissions;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSubmissions = {
  readonly id: string;
  readonly submissions: AsyncItem<Submissions>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSubmissions = LazyLoading extends LazyLoadingDisabled ? EagerUserSubmissions : LazyUserSubmissions

export declare const UserSubmissions: (new (init: ModelInit<UserSubmissions, UserSubmissionsMetaData>) => UserSubmissions) & {
  copyOf(source: UserSubmissions, mutator: (draft: MutableModel<UserSubmissions, UserSubmissionsMetaData>) => MutableModel<UserSubmissions, UserSubmissionsMetaData> | void): UserSubmissions;
}