import React from "react";
import './TestimonialCardStyles.css';



const TestimonialsCard = ({Name, review}) =>{
    return (
        <div className="card">
            <h2 className="customer-name">{Name}</h2>
            <p className="testimonial-review">{review}</p>
        </div>
    )
};

export default TestimonialsCard;