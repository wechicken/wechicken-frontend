import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme, { flexCenter } from "../../Styles/Theme";
import Card from "../../Components/Card/Card";
import { useAxios } from "../../hooks/useAxios";

const Liked = () => {
  const [selectedMenu, setSelectedMenu] = useState("bookmarks");
  const [posts, setPosts] = useState([]);

  const { runAxios: getBookmarkOrLikePosts } = useAxios({
    method: "GET",
    endpoint: `/posts/${selectedMenu}`,
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("USER"))?.token,
    },
  });

  const _getBookmarkOrLikePosts = async () => {
    const res = await getBookmarkOrLikePosts();
    setPosts(res.posts);
  };

  useEffect(() => {
    _getBookmarkOrLikePosts();
  }, [selectedMenu]);

  const handleRemoveCard = (inputId, type) => {
    if (type === selectedMenu) {
      setPosts(posts.filter((post) => post.id !== inputId));
    }
  };

  return (
    <Container>
      <ActiveTab>
        <div className="tabWrap">
          <li
            onClick={() => {
              setSelectedMenu("bookmarks");
            }}
            className={selectedMenu === "bookmarks" ? "focused" : ""}
          >
            북마크한 포스트
          </li>
          <li
            onClick={() => {
              setSelectedMenu("likes");
            }}
            className={selectedMenu === "likes" ? "focused" : ""}
          >
            좋아한 포스트
          </li>
          <UnderBar selectedMenu={selectedMenu} />
        </div>
      </ActiveTab>
      <Contents>
        {posts?.map((post) => {
          return (
            <Card
              post={post}
              width={288}
              space={20}
              key={post.id}
              handleRemoveCard={handleRemoveCard}
            />
          );
        })}
      </Contents>
    </Container>
  );
};

export default React.memo(Liked);

const Container = styled.div`
  padding-top: 111px;
  padding: 111px 10vw 0px;
`;

const ActiveTab = styled.div`
  padding: 0 20px;
  position: fixed;
  background-color: white;
  z-index: 8;
  width: 100%;

  .tabWrap {
    position: relative;
    display: flex;
    width: 288px;

    li {
      ${flexCenter}
      color: ${theme.deepGrey};
      width: 140px;
      height: 48px;
      padding-bottom: 3px;
      font-size: 18px;
      line-height: 29px;
      cursor: pointer;
    }

    .focused {
      color: rgb(52, 58, 64);
      font-weight: 900;
    }
  }
`;

const UnderBar = styled.div`
  position: absolute;
  width: 48%;
  height: 2px;
  display: block;
  bottom: 3px;
  background: ${theme.orange};
  transform: ${({ selectedMenu }) =>
    selectedMenu === "likes" ? "translateX(140px)" : "translateX(0)"};
  transition: all 0.5s ease-in-out;
`;

const Contents = styled.div`
  padding-left: 40px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px !important;
  margin: 52px auto 0 auto;
`;
