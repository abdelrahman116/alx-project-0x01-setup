import { UserProps } from "@/interfaces";
const UserCard: React.FC<UserProps> = ({
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
        <span>City: {address.city}</span>
        <span>lat: {address.geo.lat}</span>
        <span>lng: {address.geo.lng}</span>

        <span>Street: {address.street}</span>
        <span>Suite: {address.suite}</span>
        <span>Zipcode: {address.zipcode}</span>
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
        <span>Company Name: {company.name}</span>
        <span>Catch Phrase: {company.catchPhrase}</span>
        <span>BS: {company.bs}</span>
      </div>
    </div>
  );
};
export default UserCard;
