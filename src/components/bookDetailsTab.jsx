/* eslint-disable react/prop-types */
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const BookDetailsTab = (props) => {
  const { description, reviews } = props;

  const activeReviews = reviews.filter((review) => review.status === "active");

  return (
    <Tabs defaultActiveKey="description" id="book-details-tab" className="mb-3">
      <Tab eventKey="description" title="Description">
        {description}
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
        {activeReviews.length ? (
          <ul>
            {activeReviews.map((review, index) => (
              <li key={index}>
                <strong>{review.user_name}:</strong> {review.message} <br />
                Rating: {review.rating}/5
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </Tab>
    </Tabs>
  );
};

export default BookDetailsTab;
