/* eslint-disable react/prop-types */
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import img from "../assets/play1.png"
const SongItem = ({ name, image, desc, id }) => {
  const { playWithId,track} = useContext(PlayerContext);
  const isPlaying= id===track.id
  return (
    <div
      onClick={() => playWithId(id)}
      className={`group min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] ${isPlaying?"bg-[#ffffff26]":""}`}
    >
      <div className="relative">
        <img className="rounded w-full" src={image} alt="song" />
        <img
          src={img}
          alt="play"
          className="absolute w-12 h-12 bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
