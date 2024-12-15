import { supabase } from './supabaseClient';
import { useState } from 'react';

const CreatePost: React.FC<{ userId: string }> = ({ userId }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

 
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <textarea
        placeholder="What's on your mind?"
        className="w-full border p-2 mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Post
      </button>
    </div>
  );
};

export default CreatePost;
