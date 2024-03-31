import PostCard from "./PostCard";

import { Container, Row, Col } from "react-bootstrap";

const Posts = () => {
  const fakePosts = [
    {
        "title": "10 Must-Read Books for Sci-Fi Lovers",
        "summary": "Explore the vast universe of science fiction with these captivating reads that will transport you to distant worlds, alternate realities, and mind-bending futures.",
        "image": "https://example.com/sci-fi-books.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "Top 5 Healthy Breakfast Recipes to Kickstart Your Day",
        "summary": "Start your mornings right with these delicious and nutritious breakfast recipes that will fuel your body and mind for the day ahead.",
        "image": "https://example.com/healthy-breakfast-recipes.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "10 Tips for Mastering Productivity and Getting Things Done",
        "summary": "Boost your productivity and achieve your goals with these effective tips and techniques for managing your time and tasks efficiently.",
        "image": "https://example.com/productivity-tips.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "The Ultimate Guide to Sustainable Living: Simple Steps to Make a Difference",
        "summary": "Discover practical ways to embrace sustainability in your daily life and contribute to a healthier planet for future generations.",
        "image": "https://example.com/sustainable-living-guide.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "7 Mindfulness Exercises for Reducing Stress and Finding Inner Peace",
        "summary": "Learn how to cultivate mindfulness through simple yet powerful exercises that can help you manage stress, improve focus, and enhance overall well-being.",
        "image": "https://example.com/mindfulness-exercises.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "Travel Destinations: Exploring the Hidden Gems of Southeast Asia",
        "summary": "Embark on a journey through Southeast Asia and uncover hidden gems, from pristine beaches to vibrant cultures, that will inspire your next adventure.",
        "image": "https://example.com/southeast-asia-destinations.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "The Art of Photography: Tips and Techniques for Capturing Stunning Images",
        "summary": "Unlock the secrets of photography with expert tips and techniques that will help you capture breathtaking images and unleash your creativity.",
        "image": "https://example.com/photography-tips.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "Healthy Habits: Simple Changes for a Healthier Lifestyle",
        "summary": "Transform your health with these easy-to-follow habits that promote well-being and vitality, allowing you to live your best life.",
        "image": "https://example.com/healthy-habits.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "Tech Trends: Exploring the Future of Artificial Intelligence",
        "summary": "Dive into the fascinating world of artificial intelligence and discover how it's shaping the future of technology, from AI-powered innovations to ethical considerations.",
        "image": "https://example.com/ai-tech-trends.jpg",
        "link": "/blogdetail"
    },
    {
        "title": "10 Inspiring TED Talks That Will Change Your Perspective",
        "summary": "Expand your mind and gain new insights with these thought-provoking TED Talks covering a range of topics, from creativity and innovation to personal growth and motivation.",
        "image": "https://example.com/inspiring-ted-talks.jpg",
        "link": "/blogdetail"
    }
]

  return (
    <Container>
      <Row className="justify-content-between">
        {fakePosts.map((item, index) => {
          return (
            <Col key={index} md={4} className=" mt-4">
              <PostCard image={item.image} title={item.title} summary={item.summary} link={item.link}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Posts;
