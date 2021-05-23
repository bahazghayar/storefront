import React from 'react'; 
import { connect } from 'react-redux';
import { active } from '../store/categories-reducer';
import { Typography } from '@material-ui/core';

const Categories = (props) => {
  return (
    <>
      <h2>Browse our Categories</h2>
      {props.activeList.categories.map((category) => {
        return (
          <Typography variant="h6" key={category.name} onClick={() => props.active(category.name)}>
            {category.displayName}
          </Typography>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activeList: state.categories
  }
  
};

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);