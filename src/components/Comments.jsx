import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchcomments";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("Fetching...");

    //fetch comments
    // fetchComments();
    //we can await here. karon rkhane buffer ashtee await sara data dekhabena. kinto useeffect asyncronus hole useeffect e await kora jabena. er jonno amra akta asyncronus function likhe nimu.
    let ignore = false;

    async function startFetching() {
      const json = await fetchComments(postId);
      if (!ignore) {
        console.log("Setting data...");
        setComments(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  //ekhane kaj korse. into ekhane kisu somossha ace
  //ekhane post id niye ashlam. sathe postId dependency diye dilam
  //ekhon ekhane dev option e 2bar call hobe eta akta somossha
  // setCommets e jeno data 2bar set na hoy. karon eta amar business logic ke change korse. ekhane somossha hocchena karon aki data abar reset kore dicche kinto jodi erokom hoto data plus korse ba ditiobar kisu chnage kore dibe. tahole kinto second render e chnage hoye jabe kisu. ajonno etake thekate hobe.
  //

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
};

export default Comments;
