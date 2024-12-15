import { useState } from "react";

const FollowButton: React.FC<{ currentUserId: string; targetUserId: string }> = ({
    currentUserId,
    targetUserId,
  }) => {
    const [isFollowing, setIsFollowing] = useState(false);
  
    const toggleFollow = async () => {
      if (isFollowing) {
        await supabase
          .from('follows')
          .delete()
          .eq('followerId', currentUserId)
          .eq('followingId', targetUserId);
      } else {
        await supabase.from('follows').insert([{ followerId: currentUserId, followingId: targetUserId }]);
      }
      setIsFollowing(!isFollowing);
    };
  
    return (
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    );
  };
  
  export default FollowButton;
  
