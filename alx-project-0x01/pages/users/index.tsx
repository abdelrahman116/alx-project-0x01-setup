import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
const Users = () => {
  return (
    <div>
      <h1>Users Index Page</h1>
      <Header />
      <UserCard
        id={undefined}
        name={undefined}
        username={undefined}
        email={undefined}
        address={undefined}
        phone={undefined}
        website={undefined}
        company={undefined}
      />
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
