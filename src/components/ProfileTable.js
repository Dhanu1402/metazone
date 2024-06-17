import ProfileRow from './ProfileRow';

const profiles = [
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Online',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Online',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Online',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10201',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
  {
    name: 'Raghav Pratap Singh',
    code: '#10202',
    email: 'Harry.1928@gmail.com',
    mobile: '84647665658',
    status: 'Offline',
  },
];

function ProfileTable() {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-screen">
      <div className="max-h-full overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile Number
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {profiles.map((profile, index) => (
              <ProfileRow key={index} profile={profile} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileTable;
