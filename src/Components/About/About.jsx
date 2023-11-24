import React from "react";
import logo from "../../assets/images/logo6.png";

const About = () => {
  return (
    <div className="row container mx-auto m-top p-5">
      <div className="col-12 col-md-8">
        <h2>About</h2>
        <p>
          {" "}
          Distinctio in provident ut dolor vel officiis, aperiam rem nihil
          temporibus cum delectus ad laboriosam corporis eaque quae laudantium
          neque, repellendus commodi? Omnis placeat quae possimus voluptatem
          iusto dolorem quia facere, ipsum eligendi commodi incidunt sunt est
          libero dolores, eum consequuntur aliquid deserunt, molestiae
          architecto hic! Facere voluptatibus tempora nostrum consectetur, nemo
          atque aliquid vel iusto ratione laudantium vero. Suscipit
          reprehenderit exercitationem aut dicta totam nihil nam placeat
          temporibus cupiditate officiis. Asperiores totam, soluta aspernatur
          obcaecati hic consequatur labore porro non illo a dolorem eaque culpa
          minima veritatis doloribus consectetur! Aliquid, soluta?
        </p>
      </div>
      <div className="col-12 col-md-4">
        <img src={logo} alt="logo" />
        <p>
          Your home your fashion source. Rdolor sit amet consectetur adipisicing
          elit. Dolore sapiente beatae amet error autem, inventore doloribus
          placeat ipsum molestiae perferendis.
        </p>
      </div>
    </div>
  );
};

export default About;
