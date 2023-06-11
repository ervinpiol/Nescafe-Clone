import React, { useEffect, useState } from "react";
import NavLocation from "../layouts/NavLocation";
import { SiteMapItems } from "../data/SiteMapItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const SiteMap = () => {
  const [showLists, setShowLists] = useState([]);

  const handleShowList = (index) => {
    setShowLists((prevShowLists) => {
      const updatedShowLists = [...prevShowLists];
      updatedShowLists[index] = !updatedShowLists[index];
      return updatedShowLists;
    });
  };

  useEffect(() => {
    setShowLists(Array(SiteMapItems.length).fill(true));
  }, []);

  return (
    <div>
      <NavLocation navLocation="Site Map" />
      <div className="mx-auto w-full px-5 pt-3 xl:w-[1460px] xl:px-28">
        <h1 className="custom-h1 text-left">Site Map</h1>
        <div className="py-10 xl:px-16 xl:py-24">
          <ul>
            {SiteMapItems.map((item, i) => (
              <li key={i} className="flex flex-col gap-5 border-t p-6">
                <span
                  className="flex items-center gap-5 font-GothamRoundedMedium"
                  onClick={() => handleShowList(i)}
                >
                  {i >= 1 && (
                    <FontAwesomeIcon
                      icon={showLists[i] ? faMinus : faPlus}
                      className="text-3xl"
                    />
                  )}
                  {item.title}
                </span>
                {Array.isArray(item.list) && item.list.length > 0 && (
                  <ul
                    className={`flex flex-col gap-2 pl-16 ${
                      showLists[i] ? "block" : "hidden"
                    }`}
                  >
                    {item.list.map((listItem, j) => (
                      <li key={j}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
