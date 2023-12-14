import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Onas from "./components/Onas";
import Main from "./components/Main"
import Kontakty from "./components/Contacts"
import Kabinet from "./components/Cabinet"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Szare krzesło',
          img: 'kszeslo.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'

        },
        {
          id: 2,
          title: 'Biurko',
          img: 'biurko.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price:'149.00'
          
        },
        {
          id: 3,
          title: 'Lampa',
          img: 'lampa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 4,
          title: 'Białe krzesło',
          img:'ksz.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49,99'
        },
        {
          id: 5,
          title:'Sofa',
          img:'sofa.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price:'549.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Routes>
                  <Route exact path="/" element={
                    <Main state={this.state} 
                      onChooseCategory={this.chooseCategory}
                      onShowItem={this.onShowItem}
                      onAdd={this.addToOrder}/>}
                  />
                  <Route path="/onas" element={<Onas/>} />
                  <Route path="/contacts" element={<Kontakty/>} />
                  <Route path="/cabinet" element={<Kabinet/>} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
     
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(categoty) {
    if(categoty === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === categoty)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
 
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id == item.id)
      isInArray = true
    })
    if(!isInArray)
       this.setState({orders: [...this.state.orders, item] })
    }

  }


export default App;

