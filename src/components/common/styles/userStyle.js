import styled from 'styled-components';

const UserContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 64px;

    .user {
        width: 256.78px;
        margin: 0 auto;
        margin-bottom: 32px;
        display: flex;

        img {
            margin-right: 16px;
            height: 64px;
            width: 64px;
            border-radius: 50%;
        }

        .information {
            display: flex;
            flex-direction: column;

            .left-section {
                .display-name-and-track {
                    margin-bottom: 4px;
                    display: flex;
                    align-items: center;
    
                    .display-name {
                        margin-right: 8px;
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #ffffff;
                    }
    
                    .track {
                        padding: 1px 2px;
                        margin-right: 4px;
                        background-color: #1da1f2;
                        border: none;
                        border-radius: 3px;
                        font-family: 'Nunito', sans-serif;
                        font-size: 0.75rem;
                        font-weight: 700;
                        color: #ffffff;
                        cursor: pointer;
                    }
                }

                .statistics {
                    margin-bottom: 4px;
                    display: flex;

                    p {
                        margin-right: 16px;
                        margin-bottom: 8px;
                        font-size: 1rem;
                        font-weight: 500;
                        color: #ffffff;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        line-height: 1.125rem;

                        :last-child {
                            margin-right: 0;
                        }
                    }
                }
            }

            button {
                padding: 8px 16px;
                background-color: #1da1f2;
                border: none;
                border-radius: 3px;
                font-family: 'Nunito', sans-serif;
                font-size: 0.875rem;
                color: #ffffff;
                cursor: pointer;
                transition: 0.25s;
    
                :hover {
                    opacity: 0.5;
                }
            }
        }
    }

    .activity {
        .tabs {
            max-width: 393.3px;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;

            p {
                width: 100%;
                padding: 12px 0;
                font-size: 1rem;
                font-weight: 500;
                color: #ffffff;
                text-align: center;
                cursor: pointer;

                :hover {
                    border-bottom: 3px solid dimgray;
                }
            }
        }
    }

    @media (min-width: 768px) {
        width: 95%;

        .user {
            width: 729.6px;

            .information {
                width: 649.6px;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;

                .left-section {
                    .statistics {
                        p {
                            flex-direction: row;

                            b {
                                margin-right: 4px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        width: 972.8px;
    }
`;

export default UserContainer;