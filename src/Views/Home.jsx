import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import TopicCard from "../Components/TopicCard";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState("");
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",

    headers: {
      Authorization: "Bearer [gitHub-token]",
    },
    cache: new InMemoryCache(),
  });

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (topicName) => {
    console.log("topicNameInHandleSearch", topicName, "type", typeof topicName);
    const topic = topicName === "" ? "react" : topicName;

    client
      .query({
        query: gql`
          query{
            topic(name: "${topic}") {
              name
              relatedTopics(first: 10) {
                name
                stargazerCount
              }
            }
          }
        `,
      })

      .then((data) => setTopics(data.data.topic.relatedTopics));
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div className="flex flex-wrap justify-center items-center m-2">
          <div className="w-2/6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search topics"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap h-full justify-center items-center">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => {
                handleSearch(topic.name);
                setSearch(topic.name);
              }}
            >
              <TopicCard topicObj={topic} />
            </div>
          ))}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default Home;
