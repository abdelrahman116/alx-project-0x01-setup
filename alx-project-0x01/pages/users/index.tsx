import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
const Users = ({ posts }: { posts: UserProps[] }) => {
  return (
    <div>
      <h1>Users Index Page</h1>

      <Header />
      {posts.map(
        ({
          id,
          name,
          username,
          email,
          address,
          phone,
          website,
          company,
        }: UserProps) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            username={username}
            email={email}
            address={address}
            phone={phone}
            website={website}
            company={company}
          />
        )
      )}
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
