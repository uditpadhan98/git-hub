import React from 'react';
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { IoMdGitNetwork } from "react-icons/io";

const Navbar = () => {
    const repositoryUrl = "https://github.com/uditpadhan98/git-hub";
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-border px-20">
      <Link
        to="/"
        className="text-lg font-black flex flex-row items-center justify-center gap-2 cursor-pointer text-decoration-none"
      > 
      <FiGithub/> 
        git-hub
      </Link>
      <div className="flex items-center gap-4">
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-primary cursor-pointer flex items-center gap-1"
        >
          <IoMdGitNetwork size={22} />
          Fork
        </a>
      </div>
    </header>
  )
}

export default Navbar;