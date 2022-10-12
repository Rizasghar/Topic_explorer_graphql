import React from "react";

const TopicCard = ({ topicObj }) => {
  return (
    <div
      href="#"
      className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-3"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {topicObj.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <s style={{textDecoration: "none"}}>Stargazers Count: {topicObj.stargazerCount}</s>
      </p>
    </div>
  );
};

export default TopicCard;
