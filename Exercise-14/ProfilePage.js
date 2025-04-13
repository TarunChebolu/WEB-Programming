import ProfileImage from "./ProfileImage.js";
import UserInfo from "./UserInfo.js";
import UserPosts from "./UserPosts.js";

export default function ProfilePage() {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Software Engineer at XYZ Corp.",
        posts: ["First Post", "Another Update", "Final Thoughts"],
    };

    return (
        <div>
            <ProfileImage />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
        </div>
    );
}
