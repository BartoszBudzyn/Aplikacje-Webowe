import React, { useState } from "react";

interface User {
    id: number;
    username: string;
    fullName: string;
}

interface CommentProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

const Komentarz: React.FC<CommentProps> = ({
    id,
    body,
    postId,
    likes,
    user,
}) => {
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleLike = () => {
        if (!liked && !disliked) {
            setCurrentLikes(currentLikes + 1);
            setLiked(true);
        } else if (disliked) {
            setCurrentLikes(currentLikes + 2);
            setDisliked(false);
            setLiked(true);
        } else if (liked) {
            setCurrentLikes(currentLikes - 1);
            setLiked(false);
        }
    };

    const handleDislike = () => {
        if (!disliked && !liked) {
            setCurrentLikes(currentLikes - 1);
            setDisliked(true);
        } else if (liked) {
            setCurrentLikes(currentLikes - 2);
            setLiked(false);
            setDisliked(true);
        } else if (disliked) {
            setCurrentLikes(currentLikes + 1);
            setDisliked(false);
        }
    };

    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
            }}
        >
            <h4>
                {user.fullName} (@{user.username})
            </h4>
            <p>{body}</p>
            <small>
                Post ID: {postId} | Comment ID: {id}
            </small>
            <div style={{ marginTop: "10px" }}>
                <button
                    onClick={handleLike}
                    style={{ backgroundColor: liked ? "#3a693d" : "black" }}
                >
                    👍
                </button>
                <button
                    onClick={handleDislike}
                    style={{
                        backgroundColor: disliked ? "#613a3d" : "black",
                    }}
                >
                    👎
                </button>
                <span style={{ marginLeft: "10px" }}>
                    Likes: {currentLikes}
                </span>
            </div>
        </div>
    );
};

export default Komentarz;
