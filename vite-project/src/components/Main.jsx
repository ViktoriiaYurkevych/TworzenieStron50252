import Items from "./Items";
import Categories from "./Categories";
import ShowFullItem from "./ShowFullItem";
import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props)
        this.onChooseCategory=props.onChooseCategory;
        this.onShowItem=props.onShowItem;
        this.onAdd=props.onAdd;
    }
  render() {
    return (
        <div>
        <Categories chooseCategory={this.onChooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.props.state.currentItems} onAdd={this.onAdd} />
        {this.props.state.showFullItem && <ShowFullItem onAdd={this.onAdd} onShowItem={this.onShowItem} item={this.props.state.fullItem} />}
    </div>
    )
  }
}

export default Main
