import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faBrain,
  faCubes,
  faCodeBranch,
  faPooStorm,
  faCodeCommit,
  faSatellite,
} from "@fortawesome/free-solid-svg-icons";

export default function SkillsSection() {
  return (
    <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8">
      <h2 className="text-3xl text-teal-500 mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCode}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Frontend</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>HTML5</li>
            <li>CSS3, Less, Boostrap & Tailwind Css</li>
            <li>JavaScript, JQuery & TypeScript</li>
            <li>React.js & Next.js</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faServer}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Backend</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>Pascal</li>
            <li>C# (.net)</li>
            <li>Php</li>
            <li>Ruby</li>
            <li>Node.js & Express</li>
            <li>Python & Flask</li>
          </ul>
        </div>

        {/* Data Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faBrain}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Data</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>Pandas & Numpy</li>
            <li>Jupyter & Notebook</li>
            <li>Google Colab</li>
            <li>PoweBI</li>
          </ul>
        </div>

        {/* Database Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faDatabase}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Database</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>MySQL</li>
            <li>SQL Server</li>
            <li>PostgreSQL</li>
            <li>PL/pgSQL</li>
            <li>Oracle (SQL*Plus)</li>
            <li>Dbeaver</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* ORM Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">
              Object Related Mapping (ORM)
            </h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>CakePhp</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
        {/* AI Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCubes}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Artificial Intelligence</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>OpenAI API</li>
          </ul>
        </div>

        {/* Blockchain Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Blockchain</h3>
          </div>
          <ul className="list-disc list-inside text-white">
            <li>Smart Contracts</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faSatellite}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            <h3 className="text-xl text-teal-400">Other Skills</h3>
          </div>
          <ul className="list-disc list-inside text-white">
          <li>Git</li>
          <li>Collaboratives envoirements: Github, Gitlab & Gitbucket</li>
          <li>Agile Methodologies: Scrum, Kanban, EOL, Pulse</li>
          <li>Deployment: Vercel, Netlify, GithubPages</li>
          <li>Project Managment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
