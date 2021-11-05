import React, { useEffect, useState } from "react";

interface Iprops {
  name: string;
  handleClick?: (e: React.MouseEvent<HTMLElement>, category: string) => void;
  gender?: string;
  birth_year?: string;
}

const PeopleItem = ({ name, handleClick, gender, birth_year }: Iprops) => {
  const [gradient, setGradient] = useState(0);
  const colors = [
    "linear-gradient(135deg, #fcdf8a 0%,#f38381 100%)",
    "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
    "linear-gradient(135deg, #f65599 0%,#4d0316 100%)",
    "linear-gradient(135deg, #f65599 0%,#4d0316 100%)",
    "linear-gradient(135deg, #fcdf8a 0%,#f38381 100%)",
    "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
    "linear-gradient(135deg, #fcdf8a 0%,#f38381 100%)",
    "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
    "linear-gradient(135deg, #f65599 0%,#4d0316 100%)",
    "linear-gradient(135deg, #f65599 0%,#4d0316 100%)",
    "linear-gradient(135deg, #fcdf8a 0%,#f38381 100%)",
    "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
  ];

  const style = {
    root: {
      width: "20%",
      minHeight: "100px",
      // background: 'rgb(216,181,255)',
      // background:'background:linear-gradient(135deg, #f65599 0%,#4d0316 100%)',
      background: colors[gradient],
      padding: "0.5em 0.5em",
      marginTop: "1.5em",
      borderRadius: "5px",
      // filter: 'blur(4px)'
    },
    heading: {
      color: "white",
    },
  };

  useEffect(() => {
    const num = Math.floor(Math.random() * 9);
    setGradient(num);
  }, []);

  return (
    <div
      onClick={(e) => console.log("clicked")}
      style={style.root}
      className="cat-item-root"
    >
      <h4 style={style.heading}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
      <h4 style={style.heading}>
        {gender && gender?.charAt(0).toUpperCase() + gender.slice(1)}
      </h4>
      <h4 style={style.heading}>
        {birth_year &&
          birth_year?.charAt(0).toUpperCase() + birth_year.slice(1)}
      </h4>
    </div>
  );
};

export default PeopleItem;
