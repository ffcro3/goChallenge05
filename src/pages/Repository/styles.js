import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #7159c1;
        color: #fff;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    display: flex;
    flex-direction: row;
    background: #7159c1;
    color: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
    border-radius: 2px;
    margin-right: 10px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    outline: 0;
    border: 0;

    &:hover {
      background: #483780;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  button {
    outline: 0;
    border: 0;
    background: #7159c1;
    padding: 7px 7px;
    text-align: center;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background: #483780;
    }
  }

  span {
    font-size: 11px;
    color: #666;
  }
`;
