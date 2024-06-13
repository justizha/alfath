async function getGithubUser() {
  const response = await fetch("https://api.github.com/users/justizha");
  return response.json();
}
async function getContributions() {
  const response = await fetch(
    "https://github-contributions-api.deno.dev/justizha.json?flat=true",
  );
  const svg = await response.json();
  return svg;
}
export const dynamic = "force-dynamic";

export default async function GithubStat() {
  const user = await getGithubUser();
  const contribute = await getContributions();

  return (
    <>
      <section>
        <div className="rounded-md px-4 py-6 shadow">
          <div className="flex  justify-end gap-2">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-14 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold">
              Total Contributions:
            </h1>
            <h1 className="text-center text-2xl font-bold">
              {contribute.totalContributions}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
