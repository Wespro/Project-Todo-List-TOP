import "./css/styles.css";
//components
import createProjectUI from "./components/projectMakerUI";
import sidebarTabMobileControls from "./components/sidebar-tab-Mobile-controls";

(function toDoList() {
  createProjectUI();
  sidebarTabMobileControls.closeSidebar();
})();
