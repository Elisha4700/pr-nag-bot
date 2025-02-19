import { BitBucketResponseBase  } from "./bitbucket-response-base.type.ts";


type BitBucketRepository = {
  type: string;
  full_name: string;
  links: {
    self: { href: string; };
    html: { href: string; };
    avatar: { href: string; };
    pullrequests: { href: string; };
    commits: { href: string; };
    forks: { href: string; };
    watchers: { href: string; };
    branches: { href: string; };
    tags: { href: string; };
    downloads: { href: string; };
    source: { href: string; };
    clone: {
      name: string;
      href: string;
    }[];
    hooks: { href: string; };
  };
  name: string;
  slug: string;
  description: string | null;
  scm: string;
  website: string | null;
  owner: {
    display_name: string;
    links: {
      self: { href: string; };
      avatar: { href: string; };
      html: { href: string; };
    };
    type: string;
    uuid: string;
    username: string;
  };
  workspace: {
    type: string;
    uuid: string;
    name: string;
    slug: string;
    links: {
      avatar: { href: string; };
      html: { href: string; };
      self: { href: string; };
    };
  };
  is_private: boolean;
  project: {
    type: string;
    key: string;
    uuid: string;
    name: string;
    links: {
      self: { href: string; };
      html: { href: string; };
      avatar: { href: string; };
    };
  };
  fork_policy: string;
  created_on: string;
  updated_on: string;
  size: number;
  language: string | null;
  uuid: string;
  mainbranch: {
    name: string;
    type: string;
  };
  override_settings: {
    default_merge_strategy: boolean;
    branching_model: boolean;
  };
  parent: string | null;
  has_issues: boolean;
  has_wiki: boolean;
};


export type BitBucketRepositoryResponse = BitBucketResponseBase & {
  values: BitBucketRepository[]
};


export type Repository = {
  name: string;
  mainbranch: string;
  workspaceName: string;
  url: string;
};
