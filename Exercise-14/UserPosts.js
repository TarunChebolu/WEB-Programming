export default function UserPosts({ posts }) {
    return (
        <div>
            <h3>User Posts</h3>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
}
