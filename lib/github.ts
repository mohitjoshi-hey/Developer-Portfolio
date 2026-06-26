const USERNAME = "mohitjoshi-hey";

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string |null;
  stargazers_count: number;
  updated_at: string;
}

export async function getGitHubData(): Promise<{
  profile: GitHubProfile;
  repos: GitHubRepo[];
}> {

  const [profileRes, repoRes] = await Promise.all([

    fetch(`https://api.github.com/users/${USERNAME}`,{
      next:{revalidate:3600},
    }),

    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=3`,{
      next:{revalidate:3600},
    })

  ]);

  if(!profileRes.ok || !repoRes.ok){
    throw new Error("Failed to fetch GitHub data");
  }

  return{
    profile:await profileRes.json(),
    repos:await repoRes.json(),
  };

}