import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BrowseItem extends Component {


  //pass in props from browsepage, based on passed props and active tab, render list of threads


  render() {
    const { category } = this.props;
    console.log(category)
    return (
      <div className='Browse_List_Item_Container'>
        <Link to={`/categories/${category.id}`} className='Browse_Category_Item'>
          <h3 className='Browse_Category_Item_Heading' id='header'>
            {category.name}
          </h3>
        </Link>
      </div>
    );
  };
};