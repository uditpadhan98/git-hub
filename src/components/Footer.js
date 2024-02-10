import React from 'react';
import { RxGithubLogo,RxLinkedinLogo } from "react-icons/rx";
import { PiTwitterLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const icons = [
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/udit-padhan/",
          icon: <RxLinkedinLogo height="20" width="20" />,
        },
        {
          title: "Github",
          href: "https://github.com/uditpadhan98",
          icon: <RxGithubLogo height="20" width="20" />,
        },
        {
          title: "Twitter",
          href: "https://twitter.com/youdit98",
          icon: <PiTwitterLogoFill height="20" width="20" />,
        },
      ];
  return (
    <footer className="mx-auto w-full cursor-default items-center justify-center backdrop-blur-sm py-4 text-center shadow-xl md:px-0">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-y-4 shadow-xl md:flex-row md:gap-y-0">
        <Link to="/">
          <span className="text-lg font-black flex flex-row items-center justify-center gap-2">
            <RxGithubLogo width="22" height="22" />
            git-hub
          </span>
        </Link>

        <p className="text-xs font-light">
          &copy; {currentYear} Made with 😇 by Udit Padhan
        </p>

        <div className="flex gap-4">
          {icons.map((icon, index) => (
            <Link href={icon.href} target="_blank" key={index}>
              {icon.icon}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer