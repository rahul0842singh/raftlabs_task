import { useState } from "react";

const FollowButton: React.FC<{
  currentUserId: string;
  targetUserId: string;
  onFollowToggle: (
    currentUserId: string,
    targetUserId: string,
    isFollowing: boolean
  ) => Promise<void>;
}> = ({ currentUserId, targetUserId, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = async () => {
    try {
      await onFollowToggle(currentUserId, targetUserId, isFollowing);
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("Error toggling follow status:", error);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={toggleFollow}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
