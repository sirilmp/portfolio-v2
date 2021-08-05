import React, { useEffect, useState } from "react";
import firebase from "../firebase/Firebase";

function Work() {
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dataS = firebase
      .database()
      .ref(`productDetails`)
      .on("value", (snapshot) => {
        let allPuppiesData = [];
        snapshot.forEach((snap) => {
          var key = snap.key;
          // console.log(key);
          var items = snap.val();
          console.log(items);
          allPuppiesData.push({
            key: key,
            brand_name: items.brand_name,
            product_name: items.product_name,
            quantity: items.quantity,
            offer_price: items.offer_price,
            actual_price: items.actual_price,
            type: items.type,
            description: items.description,
            url: items.url,
          });
          // console.log('loading',1+1,allPuppiesData);

          console.log(allPuppiesData);
        });
        //console.log(allPuppiesData);
        setDisplayData(allPuppiesData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl main-font-900 main-text-color border-t-2 border-l-2 border-dashed border-green-200 p-1 pl-5 pt-5 w-full md:w-56">
        <span className="text-green-200">P</span>rojects
      </h1>

      <div className="flex justify-center items-center show-icon">
        <img className="w-600 rounded-md" src="../images/a.avif" alt="" />

        <div className="absolute hide-icon">
          <p>hello</p>
        </div>
      </div>
      <div className="main-bg-color main-font-400 main-text-color rounded-md transform -translate-y-8 max-w-xl mx-auto p-2 shadow-md -mb-7">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eveniet unde, ex sapiente labore impedit animi natus perferendis saepe
          deleniti id nihil nisi excepturi, molestias, accusamus officia
          nesciunt atque pariatur.
        </p>
      </div>

      <div className="flex justify-end">
        <h1 className="text-3xl text-right main-font-900 text-transparent border-b-2 border-r-2 border-dashed border-green-200 px-5 pb-5 w-full md:w-56 select-none cursor-default">
          Projects
        </h1>
      </div>

      <div></div>
    </div>
  );
}

export default Work;
