import styled from "styled-components";

export const ListContainer = styled.div`
  min-height: 60%;
  display: contents;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px auto;
  color: #000;
  background: #cbe2ff;

  padding: 16px;
  border-radius: 15px;
  width: 90%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  animation: fadeIn linear 0.35s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  .delete-icon,
  .edit-icon {
    margin-right: 5px;
    color: #fff;
  }

  .tick-icon {
    color: #3a0;
  }

  .progress-icon{
    color: #fff;
  }
`;

export const Pagination = styled.div`
  height: 7vh;
  background: #fff;
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media screen and (max-width: 760px) {
    height: 15vh;
    margin: 40px auto 1rem auto;
  }
`;

export const PaginationIconWrapper = styled.div`
  margin: 0 auto;
  .button {
    padding: 12px;
    margin: 10px;
    width: 84px;
    text-align: center;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    background: rgb(0 0 0 / 8%);
    color: #5d5b69;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    @media screen and (max-width: 980px) {
      width: 80px;
    }
  }
`;
