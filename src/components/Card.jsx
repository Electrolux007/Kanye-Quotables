import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../Services/api";
import Button from "./Button";

const Card = () => {
    const [isActive, setIsActive] = useState(false);
    const [quotes, setQuotes] = useState("Loading Kanye wisdom...");

    const fetchQuote = () => {
        api.get("/")
        .then((res) => {
            const data = res.data.quote;
            setQuotes(data);
        })
        .catch((error) => {
            console.error("Failed to load quotes", error);
        });
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <StyledWrapper>
            <div
                className={`card ${isActive ? "active" : ""}`}
                onClick={() => setIsActive(!isActive)}
            >
                <div className="border" />
                <div className="content">
                    <div className="logo">
                        <div className="logo1">
                            <span className="music-emoji">🎵</span>
                        </div>
                        <div className="logo2">
                            <svg viewBox="0 0 170 45" xmlns="http://www.w3.org/2000/svg" id="logo-second">
                                <text x="2" y="30" fill="#e5b84b" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="800" letterSpacing="1.5">KANYE WEST</text>
                            </svg>
                        </div>
                        <span className="trail" />
                    </div>
                    <span  className="logo-bottom-text">{quotes}</span>
                </div>
                <span className="bottom-text">Tap or Hover for Quote</span>
            </div>
            <Button onClick={fetchQuote} />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  background: #0f0f14;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px; /* Space between card and button */
  overflow-x: hidden;

  .card {
    width: 85vw;
    max-width: 750px;
    min-height: 320px;
    max-height: 500px;
    background: #1a1a22;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .music-emoji {
    font-size: 32px;
    line-height: 45px;
    display: block;
    margin-bottom: 100px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  #logo-second {
    height: 100%;
  }

  .border {
    position: absolute;
    inset: 0px;
    border: 2px solid #e5b84b;
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    font-size: 8px;
    text-transform: uppercase;
    padding: 0px 8px;
    color: #e5b84b;
    background: #1a1a22;
    opacity: 1;
    letter-spacing: 4px;
    transition: all 0.5s ease-in-out;
    margin-top:50px;
  }

  .content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .content .logo {
    height: 45px;
    position: relative;
    width: 42px;
    overflow: hidden;
    margin: 0 auto;
    transition: all 1s ease-in-out;
  }

  .content .logo .logo1 {
    height: 45px;
    position: absolute;
    left: 0;
  }

  .content .logo .logo2 {
    height: 45px;
    position: absolute;
    left: 42px;
  }

  .content .logo .trail {
    position: absolute;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  .content .logo-bottom-text {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    margin-top: 60px;
    color: #e5b84b;
    padding-left: 8px;
    font-size: 17px;
    opacity: 0;
    letter-spacing: normal;
    transition: all 0.5s ease-in-out 0.5s;
    text-align: center;
    width: 85%;
    line-height: 1.5;
    font-weight: 500;
  }

  .card:hover,
  .card.active {
    border-radius: 4px;
    transform: scale(1.03);
  }

  .card:hover .logo,
  .card.active .logo {
    width: 210px;
    animation: opacity 1s ease-in-out;
  }

  .card:hover .border,
  .card.active .border {
    inset: 18px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text,
  .card.active .bottom-text {
    letter-spacing: 6px;
    transform: translateX(-50%);
    opacity: 0.7;
  }

  .card:hover .content .logo-bottom-text,
  .card.active .content .logo-bottom-text {
    opacity: 1;
    letter-spacing: 0.5px;
  }

  .card:hover .trail,
  .card.active .trail {
    animation: trail 1s ease-in-out;
  }

  .logo-bottom-text{
    margin-top:80px;
    margin-bottom:50px;
    max-height: 80px;
  }

  @keyframes opacity {
    0% { border-right: 1px solid transparent; }
    10% { border-right: 1px solid #e5b84b; }
    80% { border-right: 1px solid #e5b84b; }
    100% { border-right: 1px solid transparent; }
  }

  @keyframes trail {
    0% {
      background: linear-gradient(90deg, rgba(229, 184, 75, 0) 90%, rgb(229, 184, 75) 100%);
      opacity: 0;
    }
    30% {
      background: linear-gradient(90deg, rgba(229, 184, 75, 0) 70%, rgb(229, 184, 75) 100%);
      opacity: 1;
    }
    70% {
      background: linear-gradient(90deg, rgba(229, 184, 75, 0) 70%, rgb(229, 184, 75) 100%);
      opacity: 1;
    }
    95% {
      background: linear-gradient(90deg, rgba(229, 184, 75, 0) 90%, rgb(229, 184, 75) 100%);
      opacity: 0;
    }
  }
`;

export default Card;