import React, { useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./Question.css";

function Question({ show }) {
  return (
    <div className="question">
      <div className="question__user">
        <MdAccountCircle style={{ fontSize: 58 }} className="MdAccountCircle" />
        <span>{show?.user_name}</span>
      </div>
      <div>
        <p>
          {show?.question_description ||
            show?.answer ||
            "['the question/answer goes here]'?"}
        </p>
      </div>
    </div>
  );
}

export default Question;
