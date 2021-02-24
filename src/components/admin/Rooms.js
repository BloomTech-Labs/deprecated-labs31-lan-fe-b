import React, { useState } from 'react';
import styled from 'styled-components';

const RoomsContainer = styled.div`
  .rooms-card {
    padding: 16px;
    margin: 16px auto;
    background-color: #2c2f33;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    width: 52%;
  }

  .left {
    height: 10px;
    img {
      margin-right: 12px;
      height: 32px;
      width: 32px;
      /* border-radius: 50%; */
      transition: 0.25s;

      :hover {
        opacity: 0.5;
      }
    }
  }
  .right {
    /* padding-left: 10px; */
    padding-top: 5px;
    .display-name-and-timestamp {
      margin-bottom: 4px;
      display: flex;
      align-items: center;

      .display-name {
        margin-right: 8px;
        padding-bottom: 18px;
        font-size: 0.875rem;
        font-weight: 500;
        color: #ffffff;
        transition: 0.25s;

        :hover {
          opacity: 0.5;
        }
      }

      .timestamp {
        font-size: 0.625rem;
        font-weight: 500;
        color: #ffffff;
        padding-bottom: 16px;
      }
    }

    .labels {
      margin-bottom: 4px;
      display: flex;
    }

    .description {
      margin-bottom: 4px;
      padding-bottom: 10px;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 75%;
    }
    button {
      padding: 10px 24px;
      margin-top: 16px;
      margin-left: 5px;
      background: linear-gradient(to right, #0084ff, #0099ff);
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.5;
      }
    }
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    width: 52%;
  }

  input {
    width: 373px;
    height: 50px;
    padding: 10px;
    background-color: #313536;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;

    ::placeholder {
      color: dimgray;
    }
  }
  textarea {
    min-height: 44px;
    width: 373px;
    min-width: 373px;
    max-width: 373px;
    height: 140px;
    padding: 10px;
    background-color: #313536;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
  }
`;
export const Rooms = (props) => {
  const [updateForm, setUpdateForm] = useState(false);
  return (
    <>
      <RoomsContainer>
        <div className="rooms-card">
          <div className="left">
            <img src={props.item.icon} />
          </div>
          <div className="right">
            <div className="display-name-and-timestamp">
              <p className="display-name">{props.item.room}</p>
              <p className="timestamp">{props.item.timestamp}</p>
            </div>
            <p className="description">{props.item.description}</p>
            <button
              onClick={() => {
                setUpdateForm(!updateForm);
              }}
            >
              Edit
            </button>
            {updateForm && (
              <form>
                <label>
                  Update Room
                  <input value={props.item.room} />
                </label>
                <label>
                  Update Description
                  <textarea value={props.item.description} />
                </label>
                <button>Update</button>
              </form>
            )}
            <button>Delete</button>
          </div>
        </div>
      </RoomsContainer>
    </>
  );
};
