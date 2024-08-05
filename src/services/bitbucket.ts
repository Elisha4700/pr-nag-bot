import axios, { AxiosInstance } from "npm:axios@1.4.0";
import { Repository, BitBucketRepositoryResponse } from "../types/repo.type.ts"


const BIT_BUCKET_API_KEY = Deno.env.get("BIT_BUCKET_API_KEY");


class BitBucketAdapter {
  apiClient: AxiosInstance;
  pageSize: number = 50;

  constructor(bitBucketApiKey: string | null = null) {
    // this.pageSize = 50;

    this.apiClient = axios.create({
      baseURL: 'https://api.bitbucket.org/2.0',
      headers: {
        'Authorization': `Bearer ${bitBucketApiKey || BIT_BUCKET_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
    })
  }

  extractRepoData(data: BitBucketRepositoryResponse): Repository[] {
    const repos: Repository[] = [];

    for (const item of data.values) {
      const { slug, mainbranch, workspace, links } = item;
      repos.push({
        name: slug,
        mainbranch: mainbranch.name,
        workspaceName: workspace.slug,
        url: links.html.href,
      });
    }

    return repos;
  }

  async getAllReposForWorkspace(workspace: string) {
    try {
      // TODO: send 1 request to probe - how many repos do we have:
      const probeRequest = await this.apiClient.get(`/repositories/${workspace}?pagelen=${this.pageSize}`);
      const { data } = probeRequest;

      // TODO: remove //////////////////////////////////////////
      console.log('---------------------------------------------------------------------------------------------------------------');
      console.log(this.extractRepoData(data));
      console.log('---------------------------------------------------------------------------------------------------------------');
     // ///////////////////////////////////////////////////////

      // TODO: generate a bunch or requests to fetch data about all the available repos in a given workspace.
    } catch (err) {
      console.log('Error while fetching for available repos in a workspace', err);
    }
  }

  async getPullReuqests(workspace: string, repository: string) {
    try {
      // TODO: send 1 request to probe - how many repos do we have:
      const probeRequest = await this.apiClient.get(`/repositories/${workspace}/${repository}/pullrequests?pagelen=${this.pageSize}`);
      const { data } = probeRequest;

      // TODO: remove //////////////////////////////////////////
      console.log('---------------------------------------------------------------------------------------------------------------');
      console.log(data);
      console.log('---------------------------------------------------------------------------------------------------------------');
      // ///////////////////////////////////////////////////////

      // TODO: generate a bunch or requests to fetch data about all the available repos in a given workspace.
    } catch (err) {
      console.log('Error while fetching for available repos in a workspace', err);
    }
  }

}

export default BitBucketAdapter;
