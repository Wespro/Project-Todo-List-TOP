export default (function () {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sideBar");
    const openCloseSidebarBtn = document.querySelector(".openCloseSidebarBtn");

    openCloseSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("closeSidebar");
    });
  };
  const sidebarBtnsCloseSidebar = () => {
    const sidebar = document.querySelector(".sideBar");

    sidebar.classList.toggle("closeSidebar");
  };
  return {
    closeSidebar,
    sidebarBtnsCloseSidebar,
  };
})();
