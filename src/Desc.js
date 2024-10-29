import IconF from "./assests/icon1.svg";
import IconS from "./assests/Icon2.svg";
import IconT from "./assests/Icon3.svg";
import IconFo from "./assests/Icon4.svg";

import "./Desc.css";

export const Desc = () => {
  const DescItems = [
    {
      img: IconF,
      name: "большой рабочий опыт ",
      desc: "SVОпыт реализации проектов, с выполнением изысканий, проектирования, строительно- монтажных и пусконаладочных работGDefsElement ",
    },
    {
      img: IconS,
      name: "положительная деловая репутация",
      desc: "Положительная деловая репутация, отсутствие судебных споров и разбирательств",
    },
    {
      img: IconT,
      name: "квалифицированный кадровый состав",
      desc: "Квалифицированные кадры, отсутствие текучек персонала, отсутствие задержек по оплате труда, официальное трудоустройство",
    },
    {
      img: IconFo,
      name: "сжатые срокипо ставок оборудования ",
      desc: "Сотрудничаем с ведущими поставщиками электрооборудования и материалов",
    },
  ];
  return (
    <>
      <div className="Desc">
        {" "}
        <div className="Desc-Title">Преимущества нашей фирмы</div>
        <div className="Descs">
          {DescItems.map((element) => (
            <div className="Desc-block" key={element.id}>
              <div className="Desc-img">
                <img src={element.img} />
              </div>
              <div className="Desc-Name">{element.name}</div>
              <div className="desc">{element.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
