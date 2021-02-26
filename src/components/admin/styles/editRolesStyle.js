import styled from 'styled-components';

const EditRolesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  /* padding-left: 10%; */

  h2 {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #2c2f33;
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
  }

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
  }

  /* * {
    border: 1px solid blue;
  } */
  .roles {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .role-body {
    display: flex;
    margin-bottom: 3rem;
  }

  .edit-active-button {
    padding: 10px 24px;
    margin-left: 8px;
    background: linear-gradient(to right, #0084ff, #0099ff);
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: 0.25s;

    i {
      margin-right: 4px;
      font-size: 0.75rem;
    }

    :hover {
      opacity: 0.5;
    }
  }
  .create-role-button {
    padding: 10px 24px;
    margin-top: 0.4rem;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #0084ff, #0099ff);
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: 0.25s;

    i {
      margin-right: 4px;
      font-size: 0.75rem;
    }

    :hover {
      opacity: 0.7;
    }
  }
  .toggled {
    opacity: 0.5;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 600px;

    .role-name-input {
      width: 92%;
    }
    .checkboxes {
      display: flex;

      .checkbox-container {
        margin-top: 1rem;
      }

      input[type='checkbox'] {
        /* transform: scale(1); */
        margin-right: 0.4rem;
        /* margin-top: 1rem; */
        /* vertical-align: baseline; */
        /* vertical-align: middle; */
        border: 1px solid white;
      }

      label {
        /* font-size: 1.1rem; */
        /* vertical-align: baseline; */

        position: relative;
        top: -1px;
        /* border: 1px solid white; */
      }

      .check-col {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
      }
    }

    .error {
      margin-top: 4px;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ea4335;
      animation: fadeOut ease 5s;
    }

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .success-message {
      color: #14e069;
      margin-bottom: 1rem;
      animation: fadeOut ease 5s;
    }

    label {
      margin: 16px 0 4px;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff;
    }

    input {
      padding: 10px;
      background-color: #2c2f33;
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
      min-width: 100%;
      max-width: 100%;
      height: 288px;
      padding: 10px;
      background-color: #2c2f33;
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
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 1rem;

      .edit-role {
        padding: 10px 24px;
        margin-top: 2rem;
        background-color: #2c2f33;
        border: none;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-family: 'Nunito', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        transition: 0.25s;
        cursor: pointer;
        float: right;
        margin-left: 1rem;

        i {
          margin-right: 4px;
          font-size: 0.625rem;
        }

        :disabled {
          color: gray;
        }

        :hover {
          opacity: 0.5;
        }
      }
      .success {
        background-color: #14e069;
        color: #2c2f33;
      }
    }
    .ok-button {
      padding: 10px 24px;
      margin-bottom: 16px;
      background-color: #2c2f33;
      border: none;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      transition: 0.25s;
      cursor: pointer;
      margin-left: 9rem;
    }
  }

  .create-role {
    padding: 5% 0;
    border-bottom: 1px solid #2c2f34;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 972.8px;
  }
`;

export default EditRolesContainer;
