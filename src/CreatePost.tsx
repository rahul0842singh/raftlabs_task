
import { useState } from 'react';

const CreatePost: React.FC<{ userId: string }> = () => {

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <textarea
        placeholder="What's on your mind?"
        className="w-full border p-2 mb-2"

      />
      <input type="file" />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" >
        Post
      </button>
    </div>
  );
};

export default CreatePost;

