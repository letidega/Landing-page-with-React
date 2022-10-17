import React from "react";
import { NavTop } from "./nav/nav.js";
import { Heading } from "./heading/heading.js";
import { Card } from "./card/card.js";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <NavTop></NavTop>
      <div className="Container">
        <Heading></Heading>
        <div className="ContainerCard d-flex flex-wrap p-1">
          <Card
            title="Hanako-kun: El Fantasma del Lavabo"
            description="Nene Yashiro es una estudiante de la Academia Kamome, famosa por sus sucesos paranormales y por albergar a los siete míticos misterios. El séptimo misterio no es otro que Hanako, un chico que habita los lavabos del tercer piso de la academia y que concede deseos. Cuando Nene decide invocarlo para pedir un deseo, cae sobre ella una maldición que hace que tenga que trabajar para él como su asistenta. Poco a poco se va desgranando el pasado de Hanako mientras se descubren los secretos que se esconden entre los siete misterios."
            img="https://m.media-amazon.com/images/I/71waGFgEEgL.jpg"
          />
          <Card
            title="Atelier of Witch Hat"
            description="Coco, que vive en una pequeña aldea, siempre ha anhelado ser maga. Sin embargo, solo pueden llegar a serlo aquellos que nacen con el don de la magia. Por ello, Coco había renunciado a su sueño hasta que, un buen día, visita el taller de su madre el mago Qifrey. Entonces se las apaña para espiarlo cuando se dispone a realizar un encantamiento y... ¡El desespero se torna esperanza en este cuento sobre una niña que soñaba con convertirse en hechicera!"
            img="http://cdn.shopify.com/s/files/1/1263/7089/products/Atelier_of_Witch_Hat_01_1024x1024.png?v=1630666217"
          ></Card>
          <Card
            title="SPY x FAMILY"
            description="Narra las aventuras del agente secreto Twilight —quien bajo su identidad civil de Loid Forger— debe «formar una familia» para cumplir una misión y mantener la paz entre los países ficticios de Ostania y Westalis. Sin embargo, Twilight desconoce que la niña que adoptó como hija (Anya Forger) posee poderes de telepatía, mientras que la mujer con la que aceptó casarse (Yor Briar) es en realidad, una asesina profesional al servicio de Ostania."
            img="https://m.media-amazon.com/images/I/71vMGRog+iL.jpg"
          ></Card>
          <Card
            title="Haikyuu"
            description="La historia da comienzo cuando Shōyō Hinata ve un partido de voleibol por la televisión, en el cual jugaba un chico apodado 'El Pequeño Gigante'. Desde entonces, pretende convertirse en alguien como él (debido a que ambos son bajos de estatura), y comienza a aficionarse por este deporte."
            img="https://i1.whakoom.com/large/08/38/f2bd174646f14e9d947f756a6060f3a3.jpg"
          ></Card>
        </div>
      </div>
    </>
  );
};

export default Home;
