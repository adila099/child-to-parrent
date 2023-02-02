import React from "react";

const List = (props) => {
  //   const list = props.listData;
  return (
    <div>
      {props.listData.length > 0 &&
        props.listData.map((list, ind) => {
          return (
            <>
              {props?.typedSearch === "users" ? (
                <div key={ind}>
                  {list.id}
                  <div>
                    {list.name}
                    <div>{list.username}</div>
                    <div>{list.email}</div>
                  </div>
                </div>
              ) : (
                <div key={ind}>
                  <div>{list.title}</div>
                  <div>Completed: {list.completed ? "True" : "false"}</div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};

export default List;
