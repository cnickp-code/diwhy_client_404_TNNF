import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// y

export default class BrowseItem extends Component {
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