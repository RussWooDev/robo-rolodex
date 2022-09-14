import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, email, name } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}/?set=set1&size=300x300`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

// class component WebAssembly

// import { Component } from "react";
// import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { id, email, name } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}/?set=set1&size=300x300`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// export default Card;
