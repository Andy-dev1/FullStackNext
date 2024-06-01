import React from "react";

const Index = (props) => {
  return (
    <div>
      <h1>Bem vindo!</h1>
      <div>{props.currentDate}</div>
      {props.repos.map((repo) => {
        return (
          <div key={repo.id}>
            <h3>{repo.full_name}</h3>
            <p>
              Language: {repo.language} / Stars: {repo.stargazers_count}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export async function getServerSideProps(context) {
  const resRepos = await fetch(
    "https://api.github.com/users/Andy-dev1/repos?sort=updated"
  );
  const originalrepos = await resRepos.json();

  const dontShowRepos = ["Andy-dev1/TAV", "Andy-dev1/DioStudy"];

  const isNotFork = (repo) => !repo.fork;
  const dontShowFilter = (repo) => dontShowRepos.indexOf(repo.full_name) === -1;
  const extractData = (repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  });
  const repos = originalrepos.filter(isNotFork).filter(dontShowFilter).map(extractData);

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
    },
  };
}
export default Index;
