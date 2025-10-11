export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">
            {data?.date
              ? (() => {
                  const d = new Date(data.date);
                  const day = d.getDate(); // 1-31, no leading zero
                  const month = d.toLocaleString("en-GB", { month: "short" }); // 'Oct'
                  const year = d.getFullYear();
                  return `${day}-${month}-${year}`;
                })()
              : ""}
          </p>
          <p>{data?.explanation}</p>
        </div>

        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
