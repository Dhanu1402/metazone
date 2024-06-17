function ProfileRow({ profile }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="logo512.png"
              alt="Profile"
            />
          </div>

          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {profile.name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{profile.code}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{profile.email}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{profile.mobile}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span
            className={`h-3 w-3 rounded-full mr-2 ${
              profile.status === 'Online' ? 'bg-green-500' : 'bg-gray-200'
            }`}
          />

          <span className="text-sm font-medium text-gray-900">
            {profile.status}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
          />
        </div>
      </td>
    </tr>
  );
}

export default ProfileRow;
