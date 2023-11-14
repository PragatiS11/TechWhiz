import React, { useState } from "react";
import laptop from "../assests/laptop-solid.svg";

function Interview() {
  const [currentindex, setCurrentindex] = useState(0);
  const [tab, settab] = useState(false);
  const control = [
    {
      name: "All",
      active: "true",
    },
    {
      name: "In Progress",
      active: "none",
    },
    {
      name: "Completed",
      active: "none",
    },
  ];
  return (
    <div className="p-5">
      <div
        style={{
          background:
            "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
        }}
        className="top-section rounded-[26px] p-5"
      >
        <div className="box-1 mb-3">
          <p className="text-white">Hello,</p>
          <p className="text-white">Here is an overview of your preparation</p>
        </div>

        <div className="box-2  grid grid-cols-1 lg:grid-cols-4 gap-[10px]">
          <div className="box-2child flex items-center gap-2 bg-[#272332] text-[white] rounded-[12px] p-[10px]">
            <div className="border border-[tomato] p-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width="24"
                height="24"
              >
                <path
                  d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                  fill="tomato"
                />
              </svg>
            </div>
            <div>
              <p>Pending Interviews</p>
              <strong>3</strong>
            </div>
          </div>

          <div className="box-2child flex items-center gap-2 bg-[#272332] text-[white] rounded-[12px] p-[10px]">
            <div className="border border-[blue] p-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width="24"
                height="24"
              >
                <path
                  d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                  fill="blue"
                />
              </svg>
            </div>
            <div>
              <p>Pending Interviews</p>
              <strong>3</strong>
            </div>
          </div>

          <div className="box-2child flex items-center gap-2 bg-[#272332] text-[white] rounded-[12px] p-[10px]">
            <div className="border border-[green] p-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width="24"
                height="24"
              >
                <path
                  d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                  fill="green"
                />
              </svg>
            </div>
            <div>
              <p>Pending Interviews</p>
              <strong>3</strong>
            </div>
          </div>

          <div className="box-2child flex items-center gap-2 bg-[#272332] text-[white] rounded-[12px] p-[10px]">
            <div className="border border-[green] p-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width="24"
                height="24"
              >
                <path
                  d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                  fill="green"
                />
              </svg>
            </div>
            <div>
              <p>Pending Interviews</p>
              <strong>3</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="bot-child-1 flex justify-between items-center p-3">
          <h1 className="text-[white]">My Interviews</h1>
          <input
            className="p-2 rounded-lg w-[300px] bg-[#333950]"
            type="text"
            placeholder="Search by name"
          />
        </div>

        <div className="single-bottom mt-5">
          <div className="title flex border-b border-gray-600 p-2 gap-5">
            {control.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentindex(index);
                }}
                className= {`cursor-pointer ${currentindex==index ? "tabactive": ""}`}
              >
                <span className= {`font-semibold text-white`}>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="content py-5">
            {currentindex === 0 ? (
              <div className="all grid grid-cols-1 lg:grid-cols-3 gap-5">
              
                <div className="bg-[#333950] rounded-[16px] grid gap-4 p-5">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-[50%] p-3">
                    <img className="h-[30px] w-[30px]" src={laptop} alt="" />
                  </div>
                  <div>
                    <h3 className="text-white">FT&PT_DUBX_2</h3>
                    <p className="text-[grey]">General</p>
                  </div>
                </div>

                <div className="flex gap-5 items-center  text-green-900">
                  <span className="text-[white] flex gap-2 items-center text-xs border border-[gray] px-2 py-1 rounded-lg">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.625C0 5.10547 0.0664062 4.60742 0.199219 4.13086C0.332031 3.65039 0.519531 3.20117 0.761719 2.7832C1.00781 2.36523 1.30078 1.98633 1.64062 1.64648C1.98438 1.30273 2.36523 1.00977 2.7832 0.767578C3.20117 0.521484 3.64844 0.332031 4.125 0.199219C4.60547 0.0664062 5.10547 0 5.625 0C6.14062 0 6.63672 0.0683594 7.11328 0.205078C7.59375 0.337891 8.04297 0.527344 8.46094 0.773438C8.87891 1.01562 9.25781 1.30859 9.59766 1.65234C9.94141 1.99219 10.2344 2.37109 10.4766 2.78906C10.7227 3.20703 10.9121 3.65625 11.0449 4.13672C11.1816 4.61328 11.25 5.10938 11.25 5.625C11.25 6.14453 11.1816 6.64453 11.0449 7.125C10.9121 7.60156 10.7227 8.04883 10.4766 8.4668C10.2344 8.88086 9.94141 9.25977 9.59766 9.60352C9.25781 9.94336 8.87891 10.2363 8.46094 10.4824C8.04688 10.7246 7.59961 10.9141 7.11914 11.0508C6.63867 11.1836 6.14062 11.25 5.625 11.25C5.10547 11.25 4.60547 11.1836 4.125 11.0508C3.64453 10.918 3.19531 10.7305 2.77734 10.4883C2.36328 10.2422 1.98438 9.94922 1.64062 9.60938C1.30078 9.26562 1.00781 8.88672 0.761719 8.47266C0.519531 8.05469 0.332031 7.60547 0.199219 7.125C0.0664062 6.64453 0 6.14453 0 5.625ZM10.5 5.625C10.5 5.17578 10.4414 4.74414 10.3242 4.33008C10.2109 3.91211 10.0469 3.52344 9.83203 3.16406C9.62109 2.80078 9.36719 2.47266 9.07031 2.17969C8.77734 1.88281 8.44922 1.62891 8.08594 1.41797C7.72656 1.20312 7.33789 1.03906 6.91992 0.925781C6.50586 0.808594 6.07422 0.75 5.625 0.75C5.17578 0.75 4.74219 0.808594 4.32422 0.925781C3.91016 1.03906 3.52148 1.20312 3.1582 1.41797C2.79883 1.62891 2.4707 1.88281 2.17383 2.17969C1.88086 2.47266 1.62695 2.80078 1.41211 3.16406C1.20117 3.52344 1.03711 3.91211 0.919922 4.33008C0.806641 4.74414 0.75 5.17578 0.75 5.625C0.75 6.07422 0.806641 6.50781 0.919922 6.92578C1.03711 7.33984 1.20117 7.72852 1.41211 8.0918C1.62305 8.45117 1.87695 8.7793 2.17383 9.07617C2.4707 9.37305 2.79883 9.62695 3.1582 9.83789C3.52148 10.0488 3.91016 10.2129 4.32422 10.3301C4.74219 10.4434 5.17578 10.5 5.625 10.5C6.07422 10.5 6.50586 10.4434 6.91992 10.3301C7.33789 10.2129 7.72656 10.0488 8.08594 9.83789C8.44922 9.62695 8.7793 9.37305 9.07617 9.07617C9.37305 8.7793 9.62695 8.45117 9.83789 8.0918C10.0488 7.72852 10.2109 7.33984 10.3242 6.92578C10.4414 6.50781 10.5 6.07422 10.5 5.625ZM5.625 6C5.52344 6 5.43555 5.96289 5.36133 5.88867C5.28711 5.81445 5.25 5.72656 5.25 5.625V2.625C5.25 2.52344 5.28711 2.43555 5.36133 2.36133C5.43555 2.28711 5.52344 2.25 5.625 2.25C5.72656 2.25 5.81445 2.28711 5.88867 2.36133C5.96289 2.43555 6 2.52344 6 2.625V5.25H7.875C7.97656 5.25 8.06445 5.28711 8.13867 5.36133C8.21289 5.43555 8.25 5.52344 8.25 5.625C8.25 5.72656 8.21289 5.81445 8.13867 5.88867C8.06445 5.96289 7.97656 6 7.875 6H5.625Z"
                        fill="white"
                      />
                    </svg>{" "}
                    30 MINS
                  </span>
                  <span className="text-xs p-1 bg-slate-800 text-lime-400 rounded-lg px-2 py-1">
                    Completed
                  </span>
                </div>
                <div>
                  <button className="bg-[#6e55b7] cursor-pointer p-2 rounded-[4px] text-white w-[40%]">
                    View Report
                  </button>
                </div>
                </div>
                <div className="bg-[#333950] rounded-[16px] grid gap-4 p-5">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-[50%] p-3">
                    <img className="h-[30px] w-[30px]" src={laptop} alt="" />
                  </div>
                  <div>
                    <h3 className="text-white">FT&PT_DUBX_2</h3>
                    <p className="text-[grey]">General</p>
                  </div>
                </div>

                <div className="flex gap-5 items-center  text-green-900">
                  <span className="text-[white] flex gap-2 items-center text-xs border border-[gray] px-2 py-1 rounded-lg">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.625C0 5.10547 0.0664062 4.60742 0.199219 4.13086C0.332031 3.65039 0.519531 3.20117 0.761719 2.7832C1.00781 2.36523 1.30078 1.98633 1.64062 1.64648C1.98438 1.30273 2.36523 1.00977 2.7832 0.767578C3.20117 0.521484 3.64844 0.332031 4.125 0.199219C4.60547 0.0664062 5.10547 0 5.625 0C6.14062 0 6.63672 0.0683594 7.11328 0.205078C7.59375 0.337891 8.04297 0.527344 8.46094 0.773438C8.87891 1.01562 9.25781 1.30859 9.59766 1.65234C9.94141 1.99219 10.2344 2.37109 10.4766 2.78906C10.7227 3.20703 10.9121 3.65625 11.0449 4.13672C11.1816 4.61328 11.25 5.10938 11.25 5.625C11.25 6.14453 11.1816 6.64453 11.0449 7.125C10.9121 7.60156 10.7227 8.04883 10.4766 8.4668C10.2344 8.88086 9.94141 9.25977 9.59766 9.60352C9.25781 9.94336 8.87891 10.2363 8.46094 10.4824C8.04688 10.7246 7.59961 10.9141 7.11914 11.0508C6.63867 11.1836 6.14062 11.25 5.625 11.25C5.10547 11.25 4.60547 11.1836 4.125 11.0508C3.64453 10.918 3.19531 10.7305 2.77734 10.4883C2.36328 10.2422 1.98438 9.94922 1.64062 9.60938C1.30078 9.26562 1.00781 8.88672 0.761719 8.47266C0.519531 8.05469 0.332031 7.60547 0.199219 7.125C0.0664062 6.64453 0 6.14453 0 5.625ZM10.5 5.625C10.5 5.17578 10.4414 4.74414 10.3242 4.33008C10.2109 3.91211 10.0469 3.52344 9.83203 3.16406C9.62109 2.80078 9.36719 2.47266 9.07031 2.17969C8.77734 1.88281 8.44922 1.62891 8.08594 1.41797C7.72656 1.20312 7.33789 1.03906 6.91992 0.925781C6.50586 0.808594 6.07422 0.75 5.625 0.75C5.17578 0.75 4.74219 0.808594 4.32422 0.925781C3.91016 1.03906 3.52148 1.20312 3.1582 1.41797C2.79883 1.62891 2.4707 1.88281 2.17383 2.17969C1.88086 2.47266 1.62695 2.80078 1.41211 3.16406C1.20117 3.52344 1.03711 3.91211 0.919922 4.33008C0.806641 4.74414 0.75 5.17578 0.75 5.625C0.75 6.07422 0.806641 6.50781 0.919922 6.92578C1.03711 7.33984 1.20117 7.72852 1.41211 8.0918C1.62305 8.45117 1.87695 8.7793 2.17383 9.07617C2.4707 9.37305 2.79883 9.62695 3.1582 9.83789C3.52148 10.0488 3.91016 10.2129 4.32422 10.3301C4.74219 10.4434 5.17578 10.5 5.625 10.5C6.07422 10.5 6.50586 10.4434 6.91992 10.3301C7.33789 10.2129 7.72656 10.0488 8.08594 9.83789C8.44922 9.62695 8.7793 9.37305 9.07617 9.07617C9.37305 8.7793 9.62695 8.45117 9.83789 8.0918C10.0488 7.72852 10.2109 7.33984 10.3242 6.92578C10.4414 6.50781 10.5 6.07422 10.5 5.625ZM5.625 6C5.52344 6 5.43555 5.96289 5.36133 5.88867C5.28711 5.81445 5.25 5.72656 5.25 5.625V2.625C5.25 2.52344 5.28711 2.43555 5.36133 2.36133C5.43555 2.28711 5.52344 2.25 5.625 2.25C5.72656 2.25 5.81445 2.28711 5.88867 2.36133C5.96289 2.43555 6 2.52344 6 2.625V5.25H7.875C7.97656 5.25 8.06445 5.28711 8.13867 5.36133C8.21289 5.43555 8.25 5.52344 8.25 5.625C8.25 5.72656 8.21289 5.81445 8.13867 5.88867C8.06445 5.96289 7.97656 6 7.875 6H5.625Z"
                        fill="white"
                      />
                    </svg>{" "}
                    30 MINS
                  </span>
                  <span className="text-xs p-1 bg-slate-800 text-lime-400 rounded-lg px-2 py-1">
                    Completed
                  </span>
                </div>
                <div>
                  <button className="bg-[#6e55b7] cursor-pointer p-2 rounded-[4px] text-white w-[40%]">
                    View Report
                  </button>
                </div>
                </div>
                <div className="bg-[#333950] rounded-[16px] grid gap-4 p-5">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-[50%] p-3">
                    <img className="h-[30px] w-[30px]" src={laptop} alt="" />
                  </div>
                  <div>
                    <h3 className="text-white">FT&PT_DUBX_2</h3>
                    <p className="text-[grey]">General</p>
                  </div>
                </div>

                <div className="flex gap-5 items-center  text-green-900">
                  <span className="text-[white] flex gap-2 items-center text-xs border border-[gray] px-2 py-1 rounded-lg">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.625C0 5.10547 0.0664062 4.60742 0.199219 4.13086C0.332031 3.65039 0.519531 3.20117 0.761719 2.7832C1.00781 2.36523 1.30078 1.98633 1.64062 1.64648C1.98438 1.30273 2.36523 1.00977 2.7832 0.767578C3.20117 0.521484 3.64844 0.332031 4.125 0.199219C4.60547 0.0664062 5.10547 0 5.625 0C6.14062 0 6.63672 0.0683594 7.11328 0.205078C7.59375 0.337891 8.04297 0.527344 8.46094 0.773438C8.87891 1.01562 9.25781 1.30859 9.59766 1.65234C9.94141 1.99219 10.2344 2.37109 10.4766 2.78906C10.7227 3.20703 10.9121 3.65625 11.0449 4.13672C11.1816 4.61328 11.25 5.10938 11.25 5.625C11.25 6.14453 11.1816 6.64453 11.0449 7.125C10.9121 7.60156 10.7227 8.04883 10.4766 8.4668C10.2344 8.88086 9.94141 9.25977 9.59766 9.60352C9.25781 9.94336 8.87891 10.2363 8.46094 10.4824C8.04688 10.7246 7.59961 10.9141 7.11914 11.0508C6.63867 11.1836 6.14062 11.25 5.625 11.25C5.10547 11.25 4.60547 11.1836 4.125 11.0508C3.64453 10.918 3.19531 10.7305 2.77734 10.4883C2.36328 10.2422 1.98438 9.94922 1.64062 9.60938C1.30078 9.26562 1.00781 8.88672 0.761719 8.47266C0.519531 8.05469 0.332031 7.60547 0.199219 7.125C0.0664062 6.64453 0 6.14453 0 5.625ZM10.5 5.625C10.5 5.17578 10.4414 4.74414 10.3242 4.33008C10.2109 3.91211 10.0469 3.52344 9.83203 3.16406C9.62109 2.80078 9.36719 2.47266 9.07031 2.17969C8.77734 1.88281 8.44922 1.62891 8.08594 1.41797C7.72656 1.20312 7.33789 1.03906 6.91992 0.925781C6.50586 0.808594 6.07422 0.75 5.625 0.75C5.17578 0.75 4.74219 0.808594 4.32422 0.925781C3.91016 1.03906 3.52148 1.20312 3.1582 1.41797C2.79883 1.62891 2.4707 1.88281 2.17383 2.17969C1.88086 2.47266 1.62695 2.80078 1.41211 3.16406C1.20117 3.52344 1.03711 3.91211 0.919922 4.33008C0.806641 4.74414 0.75 5.17578 0.75 5.625C0.75 6.07422 0.806641 6.50781 0.919922 6.92578C1.03711 7.33984 1.20117 7.72852 1.41211 8.0918C1.62305 8.45117 1.87695 8.7793 2.17383 9.07617C2.4707 9.37305 2.79883 9.62695 3.1582 9.83789C3.52148 10.0488 3.91016 10.2129 4.32422 10.3301C4.74219 10.4434 5.17578 10.5 5.625 10.5C6.07422 10.5 6.50586 10.4434 6.91992 10.3301C7.33789 10.2129 7.72656 10.0488 8.08594 9.83789C8.44922 9.62695 8.7793 9.37305 9.07617 9.07617C9.37305 8.7793 9.62695 8.45117 9.83789 8.0918C10.0488 7.72852 10.2109 7.33984 10.3242 6.92578C10.4414 6.50781 10.5 6.07422 10.5 5.625ZM5.625 6C5.52344 6 5.43555 5.96289 5.36133 5.88867C5.28711 5.81445 5.25 5.72656 5.25 5.625V2.625C5.25 2.52344 5.28711 2.43555 5.36133 2.36133C5.43555 2.28711 5.52344 2.25 5.625 2.25C5.72656 2.25 5.81445 2.28711 5.88867 2.36133C5.96289 2.43555 6 2.52344 6 2.625V5.25H7.875C7.97656 5.25 8.06445 5.28711 8.13867 5.36133C8.21289 5.43555 8.25 5.52344 8.25 5.625C8.25 5.72656 8.21289 5.81445 8.13867 5.88867C8.06445 5.96289 7.97656 6 7.875 6H5.625Z"
                        fill="white"
                      />
                    </svg>{" "}
                    30 MINS
                  </span>
                  <span className="text-xs p-1 bg-slate-800 text-lime-400 rounded-lg px-2 py-1">
                    Completed
                  </span>
                </div>
                <div>
                  <button className="bg-[#6e55b7] cursor-pointer p-2 rounded-[4px] text-white w-[40%]">
                    View Report
                  </button>
                </div>
                </div>
                <div className="bg-[#333950] rounded-[16px] grid gap-4 p-5">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-[50%] p-3">
                    <img className="h-[30px] w-[30px]" src={laptop} alt="" />
                  </div>
                  <div>
                    <h3 className="text-white">FT&PT_DUBX_2</h3>
                    <p className="text-[grey]">General</p>
                  </div>
                </div>

                <div className="flex gap-5 items-center  text-green-900">
                  <span className="text-[white] flex gap-2 items-center text-xs border border-[gray] px-2 py-1 rounded-lg">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.625C0 5.10547 0.0664062 4.60742 0.199219 4.13086C0.332031 3.65039 0.519531 3.20117 0.761719 2.7832C1.00781 2.36523 1.30078 1.98633 1.64062 1.64648C1.98438 1.30273 2.36523 1.00977 2.7832 0.767578C3.20117 0.521484 3.64844 0.332031 4.125 0.199219C4.60547 0.0664062 5.10547 0 5.625 0C6.14062 0 6.63672 0.0683594 7.11328 0.205078C7.59375 0.337891 8.04297 0.527344 8.46094 0.773438C8.87891 1.01562 9.25781 1.30859 9.59766 1.65234C9.94141 1.99219 10.2344 2.37109 10.4766 2.78906C10.7227 3.20703 10.9121 3.65625 11.0449 4.13672C11.1816 4.61328 11.25 5.10938 11.25 5.625C11.25 6.14453 11.1816 6.64453 11.0449 7.125C10.9121 7.60156 10.7227 8.04883 10.4766 8.4668C10.2344 8.88086 9.94141 9.25977 9.59766 9.60352C9.25781 9.94336 8.87891 10.2363 8.46094 10.4824C8.04688 10.7246 7.59961 10.9141 7.11914 11.0508C6.63867 11.1836 6.14062 11.25 5.625 11.25C5.10547 11.25 4.60547 11.1836 4.125 11.0508C3.64453 10.918 3.19531 10.7305 2.77734 10.4883C2.36328 10.2422 1.98438 9.94922 1.64062 9.60938C1.30078 9.26562 1.00781 8.88672 0.761719 8.47266C0.519531 8.05469 0.332031 7.60547 0.199219 7.125C0.0664062 6.64453 0 6.14453 0 5.625ZM10.5 5.625C10.5 5.17578 10.4414 4.74414 10.3242 4.33008C10.2109 3.91211 10.0469 3.52344 9.83203 3.16406C9.62109 2.80078 9.36719 2.47266 9.07031 2.17969C8.77734 1.88281 8.44922 1.62891 8.08594 1.41797C7.72656 1.20312 7.33789 1.03906 6.91992 0.925781C6.50586 0.808594 6.07422 0.75 5.625 0.75C5.17578 0.75 4.74219 0.808594 4.32422 0.925781C3.91016 1.03906 3.52148 1.20312 3.1582 1.41797C2.79883 1.62891 2.4707 1.88281 2.17383 2.17969C1.88086 2.47266 1.62695 2.80078 1.41211 3.16406C1.20117 3.52344 1.03711 3.91211 0.919922 4.33008C0.806641 4.74414 0.75 5.17578 0.75 5.625C0.75 6.07422 0.806641 6.50781 0.919922 6.92578C1.03711 7.33984 1.20117 7.72852 1.41211 8.0918C1.62305 8.45117 1.87695 8.7793 2.17383 9.07617C2.4707 9.37305 2.79883 9.62695 3.1582 9.83789C3.52148 10.0488 3.91016 10.2129 4.32422 10.3301C4.74219 10.4434 5.17578 10.5 5.625 10.5C6.07422 10.5 6.50586 10.4434 6.91992 10.3301C7.33789 10.2129 7.72656 10.0488 8.08594 9.83789C8.44922 9.62695 8.7793 9.37305 9.07617 9.07617C9.37305 8.7793 9.62695 8.45117 9.83789 8.0918C10.0488 7.72852 10.2109 7.33984 10.3242 6.92578C10.4414 6.50781 10.5 6.07422 10.5 5.625ZM5.625 6C5.52344 6 5.43555 5.96289 5.36133 5.88867C5.28711 5.81445 5.25 5.72656 5.25 5.625V2.625C5.25 2.52344 5.28711 2.43555 5.36133 2.36133C5.43555 2.28711 5.52344 2.25 5.625 2.25C5.72656 2.25 5.81445 2.28711 5.88867 2.36133C5.96289 2.43555 6 2.52344 6 2.625V5.25H7.875C7.97656 5.25 8.06445 5.28711 8.13867 5.36133C8.21289 5.43555 8.25 5.52344 8.25 5.625C8.25 5.72656 8.21289 5.81445 8.13867 5.88867C8.06445 5.96289 7.97656 6 7.875 6H5.625Z"
                        fill="white"
                      />
                    </svg>{" "}
                    30 MINS
                  </span>
                  <span className="text-xs p-1 bg-slate-800 text-lime-400 rounded-lg px-2 py-1">
                    Completed
                  </span>
                </div>
                <div>
                  <button className="bg-[#6e55b7] cursor-pointer p-2 rounded-[4px] text-white w-[40%]">
                    View Report
                  </button>
                </div>
                </div>

            

             

         
               
              </div>
            ) : currentindex === 1 ? (
              <h1>div--2</h1>
            ) : (
              <div className="Completed"></div>
            )}
          </div>
        </div>

        <div className="bot-child-1"></div>
      </div>
    </div>
  );
}

export default Interview;