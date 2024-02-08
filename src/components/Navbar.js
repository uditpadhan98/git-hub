import React from 'react';
import { Link } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    const repositoryUrl = "https://github.com/ashutosh-rath02/git-re";
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-border px-20">
      <Link
        to="/"
        className="text-lg font-black flex flex-row items-center justify-center gap-2 cursor-pointer"
      >
        <FaGithub width="22" height="22" />
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
        <MdLightMode />
      </div>
    </header>
  )
}

export default Navbar;