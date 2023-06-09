import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true): setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  },[])

  const currentUser = {
    id:1,
    usernam: "Ivey",
    isSeller:true
  }
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiver</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {
            !currentUser?.isSeller &&           
            <span>Become a Seller</span>
          }
          {
            currentUser && <button>Join</button>
          }
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="https://malibu.sfo3.cdn.digitaloceanspaces.com/20220903-07_sl2_512/file_9976912_512x512.webp" alt="" />
              <span>{currentUser?.usernaame}</span>
              {   open &&
                <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>                    
                  )
                }
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
      </div>
      { active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </> )
      }
    </div>
  );
};

export default Navbar;
