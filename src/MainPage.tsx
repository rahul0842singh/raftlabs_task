
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./page/Navbar";

import CardComponent from "./page/Cards";
import Modal from "./page/Modal";
import SideList from "./page/SideList";

interface Person {
  name: string;
  email: string;
  follow: string;
  imageUrl: string;
  lastSeen: string | null;
  lastSeenDateTime?: string;
  followed: boolean;
}
function MainPage() {
  const location = useLocation();
  const [people, setPeople] = useState<Person[]>([
    {
      name: "Ava Brown",
      email: "ava.brown@example.com",
      follow: "Content Creator",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
      followed: false,
    },
    {
      name: "Oliver Martinez",
      email: "oliver.martinez@example.com",
      follow: "Data Scientist",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "30m ago",
      lastSeenDateTime: "2023-01-23T17:30Z",
      followed: false,
    },
    {
      name: "Isabella Garcia",
      email: "isabella.garcia@example.com",
      follow: "HR Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "4h ago",
      lastSeenDateTime: "2023-01-23T13:30Z",
      followed: false,
    },
    {
      name: "Elijah Wilson",
      email: "elijah.wilson@example.com",
      follow: "Operations Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T14:30Z",
      followed: false,
    },
    {
      name: "Mia Taylor",
      email: "mia.taylor@example.com",
      follow: "Financial Analyst",
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "2 days ago",
      lastSeenDateTime: "2023-01-21T20:00Z",
      followed: false,
    },
    {
      name: "James Anderson",
      email: "james.anderson@example.com",
      follow: "DevOps Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "5m ago",
      lastSeenDateTime: "2023-01-23T17:55Z",
      followed: false,
    },
    {
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      follow: "Product Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-fd64e02e6ba6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "2h ago",
      lastSeenDateTime: "2023-01-23T15:00Z",
      followed: false,
    },
    {
      name: "Liam Johnson",
      email: "liam.johnson@example.com",
      follow: "Software Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "1h ago",
      lastSeenDateTime: "2023-01-23T16:00Z",
      followed: false,
    },
    {
      name: "Emma Davis",
      email: "emma.davis@example.com",
      follow: "UI/UX Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1531384698656-7e27c8378b8a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "5h ago",
      lastSeenDateTime: "2023-01-23T12:00Z",
      followed: false,
    },
    {
      name: "Noah Smith",
      email: "noah.smith@example.com",
      follow: "Marketing Specialist",
      imageUrl:
        "https://images.unsplash.com/photo-1502767089025-6572583495a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "1 day ago",
      lastSeenDateTime: "2023-01-22T18:00Z",
      followed: false,
    },
  ]);

  const toggleFollow = (email: string) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.email === email
          ? { ...person, followed: !person.followed }
          : person
      )
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col md:flex-row">
        <div className="w-full  md:w-1/4  p-4">
          <div className="flex   h-screen w-full justify-center">
            <div className="max-w-xs  ">
              <div
               
                className="bg-white overflow-y-auto p-4 shadow-xl rounded-lg py-3"
              >
                <div className="photo-wrapper p-2">
                  <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                    alt="John Doe"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    Joh Doe
                    

                  </h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>Web Developer</p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td className="px-2 py-2">
                          Chatakpur-3, Dhangadhi Kailali
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2">+977 9955221114</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2">john@exmaple.com</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="text-center my-3">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
              <SideList />
            </div>
          </div>
        </div>

        {/* ========middle section============== */}

        <div className="w-full md:w-1/2 bg-gray-100 p-4">
          <div
            style={{ borderRadius: "20px" }}
            className="w-full bg-white  p-4"
          >
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <div>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                          <input
                            style={{ borderRadius: "50px", width: "400px" }}
                            type="text"
                            name="price"
                            id="price"
                            onClick={handleOpenModal}
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="What's on your mind!"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="sm:ml-3">
                  <button
                    onClick={handleOpenModal}
                    type="button"
                    className="inline-flex items-center rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create Post
                  </button>
                </span>
              </div>
            </div>
            <Modal open={isModalOpen} setOpen={handleCloseModal} />
            <div className="flex items-center justify-center divide-x divide-gray-300 bg-white shadow-md">
              {/* Live Video */}
              <div className="flex-1 flex justify-center items-center p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-1 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path d="M17 9.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2.5l4 3v-11l-4 3z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Live video</span>
                </div>
              </div>

              {/* Photo/Video */}
              <div className="flex-1 flex justify-center items-center p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-1 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path d="M21 5h-3.17l-1.24-1.35C16.31 3.24 15.91 3 15.5 3h-7c-.41 0-.81.24-1.09.65L6.17 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm4-6.5l-5 3.5V9l5 3.5z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Photo/video</span>
                </div>
              </div>

              {/* Feeling/Activity */}
              <div className="flex-1 flex justify-center items-center p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z" />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Feeling/activity
                  </span>
                </div>
              </div>
            </div>

            <CardComponent /> {/* // Here each post is called */}
          
          </div>
        </div>

        {/* ==================Right============================== */}
        
        <div className="w-full md:w-1/4 p-4">
        <div
  style={{
    border: "1px solid #d1d5db", // Light gray border
    borderRadius: "8px", // Rounded corners
    padding: "12px",
    backgroundColor: "#f9fafb", // Light background
    maxWidth: "350px", // Restrict width
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  }}
>
  <h3
    style={{
      color: "#6b7280", // Gray color
      fontSize: "14px",
      marginBottom: "8px",
      fontWeight: "500",
    }}
  >
    Birthdays
  </h3>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span
      style={{
        fontSize: "20px",
      }}
    >
      🎁
    </span>
    <p style={{ color: "#111827", fontSize: "14px" }}>
      <strong style={{ fontWeight: "700" }}>Arup Kumar</strong> and{" "}
      <strong style={{ fontWeight: "700" }}>Shreya Jaiswal</strong> have their
      birthdays today.
    </p>
  </div>
</div>

          <ul
            style={{
              position: "sticky",
              top: "0", // Make the div stick to the top
              zIndex: "1000",
              width: "100%", // Ensure full width of the div
              height: "auto", // Adjust height as necessary
            }}
            role="list"
            className="divide-y overflow-y-auto divide-gray-100 p-4"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm/6 text-gray-900">{person.follow}</p>
                  <button
                    onClick={() => toggleFollow(person.email)}
                    className={`mt-1 text-xs/5 px-4 py-1 rounded-full ${
                      person.followed
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {person.followed ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <SideList />
        </div>
      </div>
    </>
  );
}

export default MainPage;
