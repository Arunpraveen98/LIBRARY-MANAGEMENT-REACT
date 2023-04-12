import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApiData.css";

const ApiData = (LibraryBooksData) => {
  // console.log(LibraryBooksData);
  return (
    <div className="selected-Book mt-4 mb-5">
      <div class="book">
        <div className="card-info">
          <div className="key-title">BOOk NAME:</div>
          <></>
          <div className="key-body">
            {LibraryBooksData.LibraryBooksData.title}
          </div>

          <div>
            <div className="key-title">AUTHOR:</div>
            <></>
            <div className="key-body">
              {LibraryBooksData.LibraryBooksData.author_name[0]}
            </div>
          </div>
          <div>
            <div className="key-title">FIRST PUBLISHED YEAR:</div>
            <></>
            <div className="key-body">
              {LibraryBooksData.LibraryBooksData.first_publish_year}
            </div>
          </div>
          <div>
            <div className="key-title">PUBLISHER:</div>
            <></>
            <div className="key-body">
              {LibraryBooksData.LibraryBooksData.publisher[0]}
            </div>
          </div>
          <div>
            <div className="key-title">ISBN:</div>
            <></>
            <div className="key-body">
              {LibraryBooksData.LibraryBooksData.isbn[1]}
            </div>
          </div>
          <div>
            <div className="key-title">LANGUAGES:</div>
            <></>
            <div className="key-body">
              {LibraryBooksData.LibraryBooksData.language[0]}{" "}
              {LibraryBooksData.LibraryBooksData.language[1]}
            </div>
          </div>
        </div>

        {/* <div class="cover">
          <img
            className="card-image"
            src={BookImageUrl}
            alt={`Sorry, Image Not Found ${LibraryBooksData.LibraryBooksData.title}`}
            // alt="https://cs.unissula.ac.id/wp-content/uploads/2018/07/no_image.jpg"
          ></img>
        </div> */}
      </div>
      {/* -------------------------------------------------------- */}

      {/* -------------------------------------------------------- */}
    </div>
  );
};

export default ApiData;
