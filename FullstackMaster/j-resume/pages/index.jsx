import React from "react";
import getUser from "../utils/getUser";

const Index = (props) => {
  return (
    <div>
      <h1 className="text-5xl">Olá, eu sou o Andre</h1>
      <div>{props.currentDate}</div>
      {props.repos.map((repo) => {
        return (
          <div key={repo.id} className="rounded bg-gray-200">
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
  const { repos, user } = await getUser("Andy-dev1");
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
    },
  };
}
export default Index;
