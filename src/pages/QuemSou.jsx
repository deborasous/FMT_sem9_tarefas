import React from "react";
import Avatar from "../components/Avatar";
import Bio from "../components/Bio";
import Usuario from "../components/Usuario";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/company/lab365/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/lab365_/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/FullStack-Itaguacu",
  },
];

export const QuemSou = () => {
  return (
    <>
      <div className="row border-bottom py-2 mb-5">
        <div className="col-1 p-0 ">
          <Avatar
            src="https://github.com/FullStack-Itaguacu.png"
            alt="Lab365 - Full Stack Itaguaçu"
          />
        </div>
        <div className="col">
          <Usuario nome="Debsous" cargo="Estudante" redes={redes} />
        </div>
      </div>
      <div className="row">
        <Bio>
          <p className="fw-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            accusantium tempora consectetur! Dolorum neque ducimus corrupti
            impedit, quibusdam quia vero voluptatem pariatur sint eum at nemo
            ipsum odio rem inventore.
          </p>
          <p className="fw-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            accusantium tempora consectetur! Dolorum neque ducimus corrupti
            impedit, quibusdam quia vero voluptatem pariatur sint eum at nemo
            ipsum odio rem inventore.
          </p>
        </Bio>
      </div>
    </>
  );
};
