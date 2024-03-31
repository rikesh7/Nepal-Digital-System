import { Card } from "react-bootstrap";

const PostCard = ({image,title,summary,link}) => {
 

  return (
    <Card style={{
        minHeight:"35rem"
    }}>
      <Card.Img variant="top" src={image} width={20} height={250} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Text>
{summary}
        </Card.Text>
        <a href={link} className="btn btn-primary btn-sm">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
