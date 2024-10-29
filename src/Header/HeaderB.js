import "./Headerb.css";

export const HBottom = () => {
  return (
    <>
      <div className="Bottom-Header">
        <div className="Bottom-Desc">
          <div className="Bottom-Title">
            <div className="Title">LOGOTYPE</div>
            <div className="Name">ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ</div>
          </div>
          <ul className="Bottom-Menu-items">
            <li className="Bottom-Menu-item">О компании</li>
            <li className="Bottom-Menu-item">Каталог</li>
            <li className="Bottom-Menu-item">Новости</li>
          </ul>
        </div>
        <button className="Bottom-Button">
          <div className="Button-desc">Обратный звонок</div>
        </button>
      </div>
    </>
  );
};
