import { UserCardProps } from "@/interfaces";
const UserCard = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">{username}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {email}</span>
        <span>Post ID: {id}</span>
        <span>Address: {address}</span>
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
        <span>Company: {company}</span>
      </div>
    </div>
  );
};
export default UserCard;
