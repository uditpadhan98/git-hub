import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import "../App.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState("");
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  return (
    <main className="flex flex-col items-center justify-center p-4 lg:p-24">
      <div className="relative flex flex-col w-full max-w-4xl gap-8 place-items-center">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-500 to-blue-900">
              git-hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Inspect your&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">
              GitHub
            </span>
            &nbsp;with a&nbsp;
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">
              dynamic
            </span>
            &nbsp;view effortlessly.
          </p>
        </div>
        <div className="flex w-full md:max-w-sm items-center space-x-4 md:space-x-8">
          <form className="flex w-full space-x-3" >
            <Input
              type="text"
              placeholder="Enter your GitHub username"
              className="h-12 flex-grow"
              value={username}
              onChange={handleUsernameChange}
            />
            <Button
              colorScheme='blue'
              // onClick={handleSubmit}
              type="submit"
              disabled={ username.trim() === ""}
              opacity={username.trim()==="" ? 0.5 : 1 }
              className="h-12 px-6 flex items-center justify-center"
            >
              <Link to="/profile" state={username}>
                Generate
                {/* {isLoading ? <div className="loader1"></div> : "Generate"} */}
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Home