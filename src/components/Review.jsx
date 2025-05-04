import { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    function handlePrev() {
        if (index === 0) {
            setIndex(people.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNext() {
        if (index === people.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handleRandom() {
        const randIndex = Math.floor(Math.random() * people.length);
        if (randIndex === index) {
            handleRandom();
        } else {
            setIndex(randIndex); 
        }
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={handleRandom}>surprise me</button>
        </article>
    )
}

export default Review;