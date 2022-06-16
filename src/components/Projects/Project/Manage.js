import ProjectItem from "../ProjectItem";
import { ManageMockUp } from "../../../assets/Images/index";
import { ManageGitHubURL, ManageURL } from "../../../utils/constants/index";

const Manage = () => {
  return (
    <ProjectItem
      imageSrc={ManageMockUp}
      date="mar 2022"
      title="Manage — responsive landing page"
      githubURL={ManageGitHubURL}
      websiteURL={ManageURL}
      builtWith="HTML, SASS and JavaScript"
    />
  );
};

export default Manage;
