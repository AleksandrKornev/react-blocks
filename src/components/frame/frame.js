import React from 'react';
import './frame.scss';

class Frame extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      items: [
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false }
      ]
    }
  }

  changeActive(index) {
    let items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (i === index) items[i].isActive = true;
      else items[i].isActive = false;
    }
    this.setState({ items: items });
  }

  closeBlock(index, e) {
    e.stopPropagation();
    let items = this.state.items;
    items[index].isActive = false;
    this.setState({ items: items });
  }

  loopItems() {
    let blocks = this.state.items.map((block, index) => 
      {
        const active = this.state.items[index].isActive ? "active" : "inactive";
        return <div 
          className={ "frame__items__item " + active }
          onClick={(e) => this.changeActive(index, e)}
          key={index}
        >
          <div 
            className="frame__items__item__close"
            onClick={(e) => this.closeBlock(index, e)}
          />
        </div>
      }
    )

    return blocks;
  }

  checkActive() {
    for (let i = 0; i < this.state.items.length; i++) {
      if (!!this.state.items[i].isActive) return true;
    }
    return false;
  }

  render() {
    return (
      <div className="frame__wrapper">
        <div className="frame__items__wrapper">
          <div className={`frame__items ${this.checkActive() ? "active" : " "}`}>
            { this.loopItems() }
          </div>
        </div>
        <div className="frame__circle"></div>
      </div>
    )
  }
}

export default Frame;