import ContentLoader from "react-content-loader";
import cardStyles from "./Card.module.scss";

function Skeleton() {
  const skeletonCard = (
    <div className={cardStyles.card}>
      <ContentLoader
        speed={2}
        width={210}
        height={260}
        viewBox="0 0 210 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="116" rx="10" ry="10" width="150" height="15" />
        <rect x="0" y="145" rx="10" ry="10" width="100" height="15" />
        <rect x="0" y="179" rx="10" ry="10" width="80" height="25" />
        <rect x="117" y="173" rx="10" ry="10" width="32" height="32" />
        <rect x="0" y="12" rx="10" ry="10" width="150" height="90" />
      </ContentLoader>
    </div>
  );

  const skeletonCards = [
    skeletonCard,
    skeletonCard,
    skeletonCard,
    skeletonCard,
    skeletonCard,
    skeletonCard,
    skeletonCard,
    skeletonCard,
  ];
  return skeletonCards;
}

export default Skeleton;
