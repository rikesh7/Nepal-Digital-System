// frontend/src/components/Thread.js
import  { useState } from 'react';

function Thread({ thread, onSubmitReply }) {
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim() === '') return;
    onSubmitReply(thread.id, replyContent);
    setReplyContent('');
  };

  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <ul>
        {thread.replies.map(reply => (
          <li key={reply.id}>{reply.content}</li>
        ))}
      </ul>
      <form onSubmit={handleReplySubmit}>
        <textarea value={replyContent} onChange={(e) => setReplyContent(e.target.value)}></textarea><br />
        <button type="submit">Post Reply</button>
      </form>
    </div>
  );
}

export default Thread;
