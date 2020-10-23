import React from 'react';
import React, { useContext } from 'react';
import ProductContext from "./../contexts/ProductContext";



// Components
import Product from './Product';

const Products = props => {
		const Products = () => {

			const { products, addItem } = useContext(ProductContext);
		
		return (
			<div className="products-container">
				{props.products.map(product => (
					<Product
						key={product.id}
						product={product}
						addItem={props.addItem}
						addItem={addItem}
					/>
				))}
			</div>
		);
	};
}
export default Products;
