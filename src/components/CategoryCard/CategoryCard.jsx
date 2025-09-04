import React from 'react';
import './CategoryCard.css'; 

const CategoryCard = ({ category, onClick }) => {
    return (
        <div className="category-card" onClick={onClick}>
            <img src={category.image} alt={category.name} className="category-card-image" />
            <h3 className="category-card-title">{category.name}</h3>
        </div>
    );
};

export default CategoryCard;