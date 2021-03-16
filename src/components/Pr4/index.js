import React from "react";
import "./styles.css";

class Menu extends React.Component {
  ingredients = [
    { name: "Главная", id: 0 },
    { name: "Контакты", id: 1 },
    { name: "Доставка", id: 2 },
    { name: "Оплата", id: 3 },
  ];

  state = {
    list: false,
  };

  onToggle = () => {
    this.setState({ list: !this.state.list });
  };

  render() {
    return (
      <div>
        <button onClick={this.onToggle}>
          Меню {this.state.list ? "🔺" : "🔻"}
        </button>
        {this.state.list && (
          <div>
            {this.ingredients.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
