import React from "react";
import MoryItem from "../component/MoryItem";

import dataMory from "../assets/fake-data/data-mory";
import dataTogether from "../assets/fake-data/data-together";

const Memory = () => {
  return (
    <div>
      <div className="memoryTitle">Ngay lang thang</div>
      <div className="memory">
        {dataMory.map((item, index) => (
          <MoryItem
            key={index}
            img={item.img}
            type={item.type}
            title={item.title}
            discription={item.discription}
            author={item.author}
            views={item.views}
            comments={item.comments}
            day={item.day}
          />
        ))}
      </div>
      <div className="memoryTitle">Togother</div>
      <div className="memory">
        {dataTogether.map((item, index) => (
          <MoryItem
            key={index}
            img={item.img}
            type={item.type}
            title={item.title}
            discription={item.discription}
            author={item.author}
            views={item.views}
            comments={item.comments}
            day={item.day}
          />
        ))}
      </div>
      <div className="memoryTitle">Video</div>
      <div className="memory">
         {dataMory.map((item,index)=>(
           <div className="memory__video" key={index}><video controls width="570">
             <source src={item.video} />
             </video></div>
         ))}
      </div>
    </div>
  );
};

export default Memory;
