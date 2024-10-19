import { Col, Container, Row, Form } from "react-bootstrap";
import BookCard from "../../components/bookCard";
import { useSelector } from "react-redux";
import ClientLayout from "../../components/layouts/clientLayout";
import LibraryCarousel from "../../components/libraryCarousel";
import { useState } from "react";

const HomePage = () => {
  const { books } = useSelector((state) => state.book);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );

  return (
    <ClientLayout>
      <div className="m-2">
        <LibraryCarousel />
      </div>

      <Container>
        <div className="p-4">
          <Form.Control
            type="text"
            placeholder="Search Book By Name"
            onChange={handleSearch}
          />
          <p>Number of Books Found: {filteredBooks.length}</p>
        </div>

        <Row>
          {filteredBooks.map((book) => (
            <Col xs={3} key={book._id} className="my-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </ClientLayout>
  );
};

export default HomePage;
